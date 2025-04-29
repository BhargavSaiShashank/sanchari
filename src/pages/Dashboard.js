import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import '../styles/Dashboard.css';
import {
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Clock,
  ChevronRight,
  Star,
  MessageSquare,
  Video,
  Phone,
  Plus,
  Search,
  Bell,
  Settings,
  LogOut,
  TrendingUp,
  TrendingDown,
  Mountain,
  Plane,
  Utensils,
  Camera,
  Activity,
  X,
  Check,
  Package,
  Sun,
  Moon,
  Compass,
  Cloud,
  ChevronUp
} from 'lucide-react';

// Enhanced Status Tracker with 3D effects and animations
const StatusTracker = ({ currentStatus }) => {
  const statuses = [
    { id: 1, label: 'Booking Confirmed', icon: <Check className="w-4 h-4" />, complete: true },
    { id: 2, label: 'Processing', icon: <Package className="w-4 h-4" />, complete: currentStatus >= 2 },
    { id: 3, label: 'Guide Assigned', icon: <Users className="w-4 h-4" />, complete: currentStatus >= 3 },
    { id: 4, label: 'Trip Started', icon: <Plane className="w-4 h-4" />, complete: currentStatus >= 4 },
    { id: 5, label: 'Completed', icon: <Check className="w-4 h-4" />, complete: currentStatus === 5 }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
        <Mountain className="w-5 h-5 mr-2 text-teal-600" />
        Mountain Trek Status
      </h3>
      
      <div className="relative">
        {/* Enhanced Progress Line */}
        <div className="absolute top-5 left-0 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(currentStatus - 1) * 25}%` }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full"
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-shimmer animate-shimmer" />
          </motion.div>
        </div>

        {/* Enhanced Status Points */}
        <div className="relative z-10 flex justify-between">
          {statuses.map((status, index) => (
            <motion.div
              key={status.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transform transition-all duration-300 ${
                  status.complete
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1'
                    : 'bg-white border-2 border-gray-300 text-gray-400 hover:border-teal-400 hover:text-teal-500'
                }`}
              >
                {status.icon}
                {status.complete && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-white opacity-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  />
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="mt-4 text-center"
              >
                <p className={`text-sm font-semibold mb-1 ${
                  status.complete ? 'text-teal-600' : 'text-gray-500'
                }`}>
                  {status.label}
                </p>
                <p className="text-xs text-gray-400">
                  {status.complete ? 'Completed' : 'Pending'}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// New Weather Widget Component
const WeatherWidget = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-teal-600 to-emerald-700 p-6 rounded-2xl text-white shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-1">Swiss Alps</h3>
          <p className="text-sm opacity-90">Mountain Weather</p>
        </div>
        <Mountain className="w-10 h-10" />
      </div>
      <div className="mt-4">
        <div className="text-4xl font-bold">12°C</div>
        <p className="text-sm mt-1">Clear skies, light wind</p>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {['Mon', 'Tue', 'Wed', 'Thu'].map((day, i) => (
          <div key={day} className="text-center">
            <p className="text-xs">{day}</p>
            {i === 0 || i === 3 ? 
              <Sun className="w-5 h-5 mx-auto my-1" /> : 
              <Cloud className="w-5 h-5 mx-auto my-1" />
            }
            <p className="text-xs font-medium">{14 - i}°</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// New Trip Highlights Component
const TripHighlights = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Compass className="w-5 h-5 mr-2 text-teal-600" />
        Mountain Adventure Highlights
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: <Mountain className="w-5 h-5" />, label: 'Alpine Hiking', value: '3 trails' },
          { icon: <Camera className="w-5 h-5" />, label: 'Scenic Views', value: '5 lookouts' },
          { icon: <Utensils className="w-5 h-5" />, label: 'Mountain Lodge', value: '2 meals daily' },
          { icon: <Activity className="w-5 h-5" />, label: 'Skiing Access', value: '4 slopes' }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl flex items-center space-x-3"
          >
            <div className="p-2 bg-white rounded-lg text-teal-600">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{item.label}</p>
              <p className="text-xs text-gray-500">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Dashboard = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New message from Sarah', time: '2h ago', read: false, type: 'message' },
    { id: 2, message: 'Payment received', time: '1d ago', read: true, type: 'payment' },
    { id: 3, message: 'Your trip to Bali is confirmed!', time: '2d ago', read: false, type: 'booking' }
  ]);
  const [currentTripStatus] = useState(3); // Example: Guide Assigned
  const [darkMode, setDarkMode] = useState(false);
  // Removed unused state variable 'showWeather'

  const upcomingTrips = [
    {
      id: 1,
      title: 'Swiss Alps Adventure',
      date: '2024-03-15',
      duration: '7 days',
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3',
      agent: {
        name: 'Sarah Johnson',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3'
      }
    },
    {
      id: 2,
      title: 'Rocky Mountains Trek',
      date: '2024-04-20',
      duration: '5 days',
      status: 'pending',
      image: 'https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?ixlib=rb-4.0.3',
      agent: {
        name: 'Michael Chen',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3'
      }
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'message',
      title: 'New message from Sarah',
      time: '2 hours ago',
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      id: 2,
      type: 'booking',
      title: 'Hotel booking confirmed',
      time: '1 day ago',
      icon: <Star className="w-5 h-5" />
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment received',
      time: '2 days ago',
      icon: <DollarSign className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3')] bg-cover bg-fixed bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-teal-800/50 before:via-teal-700/40 before:to-emerald-900/60 before:z-0 relative">
      {/* Enhanced Header */}
      <motion.header 
        style={{ y }}
        className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-200/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
            >
              Dashboard
            </motion.h1>
            <div className="flex items-center space-x-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <button 
                  onClick={() => setShowNotificationPanel(!showNotificationPanel)}
                  className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  {notifications.some(n => !n.read) && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                  )}
                </button>
                <AnimatePresence>
                  {showNotificationPanel && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                      <div className="p-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map((notification) => (
                          <motion.div
                            key={notification.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                            onClick={() => {
                              setNotifications(notifications.map(n => 
                                n.id === notification.id ? { ...n, read: true } : n
                              ));
                            }}
                          >
                            <div className="flex items-start">
                              <div className={`p-2 rounded-full ${
                                notification.type === 'message' ? 'bg-blue-100 text-blue-600' :
                                notification.type === 'payment' ? 'bg-green-100 text-green-600' :
                                'bg-purple-100 text-purple-600'
                              }`}>
                                {notification.type === 'message' ? <MessageSquare className="w-5 h-5" /> :
                                 notification.type === 'payment' ? <DollarSign className="w-5 h-5" /> :
                                 <Star className="w-5 h-5" />}
                              </div>
                              <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-gray-500">{notification.time}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Settings className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Status Tracker */}
        <div className="mb-8">
          <StatusTracker currentStatus={currentTripStatus} />
        </div>

        {/* New Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <TripHighlights />
          </div>
          <div>
            <WeatherWidget />
          </div>
        </div>

        {/* Enhanced Stats Overview with Trends */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { 
              title: 'Upcoming Treks', 
              value: '2', 
              icon: <Mountain className="w-6 h-6" />, 
              color: 'from-teal-500 to-teal-600',
              trend: '+12%',
              trendIcon: <TrendingUp className="w-4 h-4" />
            },
            { 
              title: 'Elevation Gain', 
              value: '2,850m', 
              icon: <ChevronUp className="w-6 h-6" />, 
              color: 'from-emerald-500 to-emerald-600',
              trend: '+5%',
              trendIcon: <TrendingUp className="w-4 h-4" />
            },
            { 
              title: 'Days Until Next Trek', 
              value: '15', 
              icon: <Clock className="w-6 h-6" />, 
              color: 'from-green-500 to-green-600',
              trend: '-2',
              trendIcon: <TrendingDown className="w-4 h-4" />
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {stat.value}
                    </p>
                  </div>
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.trendIcon}
                  <span className="ml-1">{stat.trend}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Upcoming Trips with Modal */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden"
            >
              <div className="border-b border-gray-200">
                <div className="flex items-center justify-between p-6">
                  <h2 className="text-xl font-semibold text-gray-900">Your Mountain Treks</h2>
                  <Link
                    to="/plan-trip"
                    className="group inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Plus className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform" />
                    Plan New Trek
                  </Link>
                </div>
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('upcoming')}
                    className={`px-6 py-3 text-sm font-medium relative ${
                      activeTab === 'upcoming'
                        ? 'text-indigo-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Upcoming
                    {activeTab === 'upcoming' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('past')}
                    className={`px-6 py-3 text-sm font-medium relative ${
                      activeTab === 'past'
                        ? 'text-indigo-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Past Trips
                    {activeTab === 'past' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                      />
                    )}
                  </button>
                </div>
              </div>

              <div className="p-6">
                <AnimatePresence>
                  {upcomingTrips.map((trip) => (
                    <motion.div
                      key={trip.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedTrip(trip)}
                      className="flex items-center space-x-6 p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 group cursor-pointer"
                    >
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                        <div className="absolute bottom-2 left-2 right-2 text-white text-sm">
                          <p>{trip.duration}</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {trip.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            trip.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {trip.status}
                          </span>
                        </div>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{trip.date}</span>
                        </div>
                        <div className="flex items-center mt-4">
                          <img
                            src={trip.agent.image}
                            alt={trip.agent.name}
                            className="w-8 h-8 rounded-full ring-2 ring-white group-hover:ring-indigo-500 transition-all duration-300"
                          />
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                              {trip.agent.name}
                            </p>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="ml-1 text-xs text-gray-600">{trip.agent.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link
                        to={`/trip/${trip.id}`}
                        className="p-2 text-gray-400 hover:text-indigo-600 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Recent Activity */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-6">
                <AnimatePresence>
                  {recentActivities.map((activity) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 group"
                    >
                      <div className="p-2 bg-gray-100 rounded-full text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {activity.title}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Enhanced Quick Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <MessageSquare className="w-5 h-5" />, label: 'Chat', color: 'from-teal-500 to-teal-600' },
                    { icon: <Video className="w-5 h-5" />, label: 'Video Call', color: 'from-emerald-500 to-emerald-600' },
                    { icon: <Phone className="w-5 h-5" />, label: 'Call Guide', color: 'from-green-500 to-green-600' },
                    { icon: <Plus className="w-5 h-5" />, label: 'New Trek', color: 'from-teal-600 to-emerald-700' }
                  ].map((action, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 bg-gradient-to-r ${action.color} text-white`}
                    >
                      <span className="mr-2 group-hover:rotate-12 transition-transform">
                        {action.icon}
                      </span>
                      <span className="text-sm font-medium">{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Trip Details Modal */}
      <AnimatePresence>
        {selectedTrip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedTrip(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white/90 backdrop-blur-lg rounded-xl shadow-xl max-w-2xl w-full overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={selectedTrip.image}
                  alt={selectedTrip.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold">{selectedTrip.title}</h3>
                  <p className="text-sm opacity-90">{selectedTrip.duration}</p>
                </div>
                <button
                  onClick={() => setSelectedTrip(null)}
                  className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={selectedTrip.agent.image}
                      alt={selectedTrip.agent.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{selectedTrip.agent.name}</p>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{selectedTrip.agent.rating}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    selectedTrip.status === 'confirmed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {selectedTrip.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{selectedTrip.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{selectedTrip.title.includes('Swiss') ? 'Zermatt, Switzerland' : 'Colorado, USA'}</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link
                    to={`/trip/${selectedTrip.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard; 