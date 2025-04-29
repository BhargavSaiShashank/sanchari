import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';
import { getMessaging } from '@firebase/messaging';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDyour-api-key-here",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);
export const storage = getStorage(app);

// Firestore collections
export const collections = {
  users: 'users',
  agents: 'agents',
  trips: 'trips',
  messages: 'messages',
  reviews: 'reviews',
  notifications: 'notifications',
  photographers: 'photographers'
};

// Helper functions
export const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = db.collection(collections.users).doc(user.uid);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        displayName,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user document:', error);
    }
  }

  return userRef;
};

export const updateUserDocument = async (userId, data) => {
  try {
    await db.collection(collections.users).doc(userId).update(data);
  } catch (error) {
    console.error('Error updating user document:', error);
  }
};

export const getAgentById = async (agentId) => {
  try {
    const agentRef = db.collection(collections.agents).doc(agentId);
    const doc = await agentRef.get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  } catch (error) {
    console.error('Error getting agent:', error);
    return null;
  }
};

export const getMessages = async (chatId) => {
  try {
    const messagesRef = db.collection(collections.messages)
      .where('chatId', '==', chatId)
      .orderBy('createdAt', 'asc');
    
    const snapshot = await messagesRef.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting messages:', error);
    return [];
  }
};

export const sendMessage = async (chatId, message) => {
  try {
    await db.collection(collections.messages).add({
      chatId,
      ...message,
      createdAt: new Date()
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }
}; 