import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { 
  Home, 
  User, 
  LogOut, 
  Menu, 
  X, 
  MessageSquare,
  Bell,
  Calendar,
  Camera,
  Award,
  Users,
  Sparkles,
  BarChart
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/dashboard', label: 'Dashboard', icon: <Calendar size={20} /> },
    { path: '/chat', label: 'Chat', icon: <MessageSquare size={20} /> },
    { path: '/photographer', label: 'Photographers', icon: <Camera size={20} /> },
    { path: '/loyalty', label: 'Rewards', icon: <Award size={20} /> },
    { path: '/group-trip', label: 'Group Trips', icon: <Users size={20} /> },
    { path: '/ai-assistant', label: 'AI Assistant', icon: <Sparkles size={20} /> },
  ];

  // Admin items - only shown to admin users
  const adminItems = [
    { path: '/admin', label: 'Admin Dashboard', icon: <BarChart size={20} /> },
  ];

  // In a real app, you would check if the current user has admin rights
  const isAdmin = currentUser && currentUser.email === 'admin@example.com';

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">KR0355</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            ))}

            {isAdmin && adminItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            ))}

            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/notifications"
                  className="text-gray-700 hover:text-indigo-600 p-2 rounded-full hover:bg-gray-100"
                >
                  <Bell size={20} />
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-indigo-600 p-2 rounded-full hover:bg-gray-100"
                >
                  <User size={20} />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-indigo-600 p-2 rounded-full hover:bg-gray-100"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="sm:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Link>
          ))}

          {isAdmin && adminItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Link>
          ))}

          {currentUser ? (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <User size={24} />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {currentUser.displayName || 'User'}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {currentUser.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 