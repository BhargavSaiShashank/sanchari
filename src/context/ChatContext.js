import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { useAuth } from './AuthContext';

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUser) return;

    // Fetch user's chats
    const unsubscribe = db.collection('chats')
      .where('participants', 'array-contains', currentUser.uid)
      .onSnapshot(snapshot => {
        const chatList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setChats(chatList);
      });

    return () => unsubscribe();
  }, [currentUser]);

  useEffect(() => {
    if (!activeChat) return;

    // Fetch messages for active chat
    const unsubscribe = db.collection('messages')
      .where('chatId', '==', activeChat.id)
      .orderBy('createdAt', 'asc')
      .onSnapshot(snapshot => {
        const messageList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessages(messageList);
      });

    return () => unsubscribe();
  }, [activeChat]);

  const startChat = async (participantId) => {
    try {
      setLoading(true);
      
      // Check if chat already exists
      const existingChat = chats.find(chat => 
        chat.participants.includes(participantId) && 
        chat.participants.includes(currentUser.uid)
      );

      if (existingChat) {
        setActiveChat(existingChat);
        return existingChat;
      }

      // Create new chat
      const chatRef = await db.collection('chats').add({
        participants: [currentUser.uid, participantId],
        createdAt: new Date(),
        lastMessage: null,
        lastMessageAt: null
      });

      const newChat = {
        id: chatRef.id,
        participants: [currentUser.uid, participantId],
        createdAt: new Date()
      };

      setChats(prev => [...prev, newChat]);
      setActiveChat(newChat);
      return newChat;
    } catch (error) {
      console.error('Error starting chat:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (text) => {
    if (!activeChat || !text.trim()) return;

    try {
      const message = {
        chatId: activeChat.id,
        senderId: currentUser.uid,
        text: text.trim(),
        createdAt: new Date()
      };

      // Add message to Firestore
      await db.collection('messages').add(message);

      // Update chat's last message
      await db.collection('chats').doc(activeChat.id).update({
        lastMessage: text.trim(),
        lastMessageAt: new Date()
      });
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  };

  const value = {
    messages,
    chats,
    activeChat,
    loading,
    startChat,
    sendMessage,
    setActiveChat
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}; 