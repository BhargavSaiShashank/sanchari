import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Paperclip,
  Smile,
  Mic,
  Phone,
  Video,
  MoreVertical,
  Search,
  ChevronLeft,
  Image as ImageIcon,
  File,
  MapPin,
  Calendar,
  Clock,
  Check,
  CheckCheck,
  Users,
  DollarSign,
  Heart,
  ThumbsUp,
  Star,
  Share2,
  BookOpen,
  Camera,
  Globe,
  Sun,
  Coffee,
  Utensils,
  Mountain
} from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! I\'m Sarah, your dedicated mountain adventure expert. 🏔️ How can I help you plan your perfect alpine getaway?',
      sender: 'agent',
      time: '10:30 AM',
      status: 'read',
      reactions: ['❤️'],
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3'
    },
    {
      id: 2,
      text: 'Hi Sarah! I\'m excited to plan my trip to the Swiss Alps! ⛰️',
      sender: 'user',
      time: '10:31 AM',
      status: 'read',
      reactions: ['👋']
    },
    {
      id: 3,
      text: 'Wonderful choice! The Swiss Alps are absolutely breathtaking. I\'ve curated some exclusive experiences just for you:',
      sender: 'agent',
      time: '10:32 AM',
      status: 'read',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
      attachments: [
        {
          type: 'suggestion',
          items: [
            {
              title: 'Luxury Mountain Lodges',
              image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3',
              price: '₹35,000/night'
            },
            {
              title: 'Alpine Hiking Tours',
              image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3',
              price: '₹8,000/tour'
            },
            {
              title: 'Winter Sports Package',
              image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3',
              price: '₹12,000/person'
            }
          ]
        }
      ]
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages([...messages, message]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      setIsTyping(false);
      const response = {
        id: messages.length + 2,
        text: 'I\'d love to help you create the perfect Swiss Alps itinerary! Here are some popular activities:',
        sender: 'agent',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'read',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
        attachments: [
          {
            type: 'activities',
            items: [
              { icon: <Mountain className="w-5 h-5" />, name: 'Alpine Hiking', price: '₹5,000' },
              { icon: <Coffee className="w-5 h-5" />, name: 'Mountain Chalet', price: '₹4,500' },
              { icon: <Camera className="w-5 h-5" />, name: 'Photo Tour', price: '₹6,000' }
            ]
          }
        ]
      };
      setMessages(prev => [...prev, response]);
    }, 2000);
  };

  const quickReplies = [
    { text: 'Tell me about mountain lodges', icon: <Star className="w-4 h-4" /> },
    { text: 'Show popular hiking trails', icon: <Mountain className="w-4 h-4" /> },
    { text: 'Best time for skiing?', icon: <Calendar className="w-4 h-4" /> },
    { text: 'Local Swiss cuisine', icon: <Utensils className="w-4 h-4" /> }
  ];

  const handleReaction = (messageId, reaction) => {
    setMessages(messages.map(msg => 
      msg.id === messageId 
        ? { ...msg, reactions: [...(msg.reactions || []), reaction] }
        : msg
    ));
  };

  return (
    <div className="flex h-screen bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3')] bg-cover bg-fixed bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-teal-800/50 before:via-teal-700/40 before:to-emerald-900/60 before:z-0 relative">
      {/* Sidebar */}
      <div className="w-80 bg-white/80 backdrop-blur-md border-r border-gray-200/50 flex flex-col z-10">
        <div className="p-4 border-b border-gray-200/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
                  alt="Agent"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="ml-3">
                <h2 className="text-base font-semibold text-gray-900">Sarah Johnson</h2>
                <div className="flex items-center">
                  <span className="text-xs text-green-500 font-medium">Online</span>
                  <span className="mx-1 text-gray-300">•</span>
                  <span className="text-xs text-gray-500">Travel Expert</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
              >
                <Phone className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
              >
                <Video className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200/50">
          {['chat', 'trip', 'files'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-3 text-sm font-medium ${
                activeTab === tab
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === 'trip' && (
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-4 text-white shadow-lg"
              >
                <h3 className="text-sm font-medium">Current Trip</h3>
                <p className="text-lg font-semibold mt-1">Swiss Alps Adventure</p>
                <div className="flex items-center mt-2 text-xs opacity-90">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Mar 15 - Mar 22, 2024</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2].map((i) => (
                      <motion.img
                        key={i}
                        whileHover={{ scale: 1.1, zIndex: 10 }}
                        src={`https://randomuser.me/api/portraits/${i === 1 ? 'women' : 'men'}/${i}.jpg`}
                        alt={`Traveler ${i}`}
                        className="w-8 h-8 rounded-full border-2 border-white relative"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">2 Travelers</span>
                </div>
              </motion.div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-gray-200/50">
                <h3 className="text-sm font-medium text-gray-900">Trip Details</h3>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="ml-3 text-gray-600">Swiss Alps, Switzerland</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="ml-3 text-gray-600">2 Adults</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <span className="ml-3 text-gray-600">₹2,50,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-gray-200/50">
                <h3 className="text-sm font-medium text-gray-900">Upcoming Activities</h3>
                <div className="mt-3 space-y-3">
                  {[
                    { icon: <Camera />, name: 'Scenic Photoshoot', time: 'Mar 16, 9:00 AM' },
                    { icon: <Coffee />, name: 'Mountain Lodge Brunch', time: 'Mar 17, 10:30 AM' },
                    { icon: <Utensils />, name: 'Swiss Chocolate Making', time: 'Mar 18, 2:00 PM' }
                  ].map((activity, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center text-sm"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                        {activity.icon}
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 font-medium">{activity.name}</p>
                        <p className="text-gray-500 text-xs">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white/60 backdrop-blur-md z-10">
        {/* Chat Header */}
        <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button className="md:hidden p-2 mr-2">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Swiss Alps Adventure Planning
                </h2>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Trip ID: #TRP-2024-001</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Created 2 days ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
              >
                <BookOpen className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-end max-w-[70%] space-x-2">
                  {message.sender === 'agent' && (
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={message.avatar}
                      alt="Agent"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`rounded-2xl px-4 py-2 shadow-sm ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white'
                          : 'bg-white/90 backdrop-blur-sm text-gray-900 border border-gray-200/50'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      {message.attachments?.map((attachment, index) => (
                        <div key={index} className="mt-3">
                          {attachment.type === 'suggestion' && (
                            <div className="flex space-x-2 overflow-x-auto pb-2">
                              {attachment.items.map((item, i) => (
                                <motion.div
                                  key={i}
                                  whileHover={{ scale: 1.05, y: -5 }}
                                  className="flex-shrink-0 w-48 rounded-lg overflow-hidden bg-gray-50/90 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all"
                                >
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-24 object-cover"
                                  />
                                  <div className="p-2">
                                    <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                                    <p className="text-xs text-gray-500 mt-1">{item.price}</p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          )}
                          {attachment.type === 'activities' && (
                            <div className="flex space-x-2 mt-2">
                              {attachment.items.map((item, i) => (
                                <motion.button
                                  key={i}
                                  whileHover={{ scale: 1.05, y: -5 }}
                                  className="flex items-center space-x-2 px-3 py-2 bg-gray-50/90 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:shadow-md transition-all"
                                >
                                  {item.icon}
                                  <div className="text-left">
                                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.price}</p>
                                  </div>
                                </motion.button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      <div className="flex items-center justify-end mt-1 space-x-1">
                        <span className="text-xs opacity-70">{message.time}</span>
                        {message.sender === 'user' && (
                          <span className="text-xs">
                            {message.status === 'sent' ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <CheckCheck className="w-3 h-3" />
                            )}
                          </span>
                        )}
                      </div>
                    </motion.div>
                    {message.reactions && message.reactions.length > 0 && (
                      <div className="flex justify-end mt-1">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm border border-gray-200/50"
                        >
                          {message.reactions.map((reaction, index) => (
                            <motion.span 
                              key={index} 
                              className="text-xs"
                              whileHover={{ scale: 1.2 }}
                            >
                              {reaction}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-end space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
                    alt="Agent"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-sm border border-gray-200/50">
                    <div className="flex space-x-1">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-2 h-2 bg-teal-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.1 }}
                        className="w-2 h-2 bg-teal-500 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                        className="w-2 h-2 bg-teal-600 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className="px-4 py-2 bg-white/80 backdrop-blur-md border-t border-gray-200/50">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {quickReplies.map((reply, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-emerald-50 text-gray-700 rounded-full text-sm whitespace-nowrap hover:shadow-md transition-all border border-teal-100/50"
                onClick={() => setNewMessage(reply.text)}
              >
                {reply.icon}
                <span>{reply.text}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white/80 backdrop-blur-md border-t border-gray-200/50 p-4">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
            >
              <Paperclip className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
            >
              <ImageIcon className="w-5 h-5" />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="flex-1 relative"
            >
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-4 py-3 bg-gray-50/90 backdrop-blur-sm border border-gray-200/50 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <Smile className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
            >
              <Mic className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="p-3 text-white bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full hover:from-teal-700 hover:to-emerald-700 shadow-lg"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat; 