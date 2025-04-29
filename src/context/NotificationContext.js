import React, { createContext, useContext, useState, useEffect } from 'react';
import { messaging, db, collections } from '../services/firebase';
import { getToken, onMessage } from '@firebase/messaging';
import { useAuth } from './AuthContext';

const NotificationContext = createContext();

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [notification, setNotification] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!currentUser) return;

    // Subscribe to user's notifications
    const unsubscribe = db.collection(collections.notifications)
      .where('userId', '==', currentUser.uid)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const notificationList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setNotifications(notificationList);
      });

    return unsubscribe;
  }, [currentUser]);

  useEffect(() => {
    // Request permission and get FCM token
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          const currentToken = await getToken(messaging, {
            vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY
          });
          if (currentToken) {
            setToken(currentToken);
            // Save token to user's document in Firestore
            // This should be done when the user logs in
          }
        }
      } catch (error) {
        console.error('Error getting FCM token:', error);
      }
    };

    requestPermission();

    // Handle incoming messages
    const unsubscribe = onMessage(messaging, (payload) => {
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
        data: payload.data
      });
    });

    return () => unsubscribe();
  }, []);

  const showNotification = (title, body, data = {}) => {
    setNotification({ title, body, data });
  };

  const clearNotification = () => {
    setNotification(null);
  };

  const createNotification = async (userId, title, body, type) => {
    try {
      await db.collection(collections.notifications).add({
        userId,
        title,
        body,
        type,
        read: false,
        createdAt: new Date()
      });
    } catch (error) {
      console.error('Error creating notification:', error);
    }
  };

  const markAsRead = async (notificationId) => {
    try {
      await db.collection(collections.notifications)
        .doc(notificationId)
        .update({ read: true });
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const value = {
    notifications,
    notification,
    token,
    showNotification,
    clearNotification,
    createNotification,
    markAsRead
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}; 