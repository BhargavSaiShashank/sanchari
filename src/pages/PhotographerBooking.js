import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Star,
  MapPin,
  Camera,
  Calendar,
  Clock,
  X,
  Check,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Heart,
  Share2,
  Award,
  Image as ImageIcon,
  Users,
  DollarSign,
  Info,
  ArrowRight,
  Mail,
  Linkedin
} from 'lucide-react';

const PhotographerBooking = () => {
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    location: '',
    type: '',
    message: ''
  });

  const photographers = [
    {
      id: 1,
      name: 'Alex Thompson',
      rating: 4.9,
      reviews: 128,
      price: '₹15,000',
      location: 'Mumbai',
      style: ['Portrait', 'Wedding', 'Travel'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
      portfolio: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3'
      ],
      bio: 'Specializing in wedding and portrait photography with 8 years of experience. Known for capturing authentic moments and creating timeless memories.',
      social: {
        instagram: '@alexthompson',
        facebook: 'AlexThompsonPhotography',
        twitter: '@alexthompson'
      },
      availability: [
        '2024-03-15',
        '2024-03-16',
        '2024-03-20',
        '2024-03-22',
        '2024-03-25'
      ],
      packages: [
        {
          name: 'Basic',
          price: '₹15,000',
          duration: '2 hours',
          includes: ['50 edited photos', '1 location', 'Online gallery']
        },
        {
          name: 'Premium',
          price: '₹25,000',
          duration: '4 hours',
          includes: ['100 edited photos', '2 locations', 'Online gallery', 'Photo album']
        },
        {
          name: 'Elite',
          price: '₹40,000',
          duration: '8 hours',
          includes: ['200 edited photos', '3 locations', 'Online gallery', 'Photo album', 'Drone footage']
        }
      ],
      achievements: [
        'Best Wedding Photographer 2023',
        'Top 10 Portrait Photographers in India',
        'Featured in Vogue India'
      ]
    },
    {
      id: 2,
      name: 'Priya Sharma',
      rating: 4.8,
      reviews: 95,
      price: '₹12,000',
      location: 'Delhi',
      style: ['Fashion', 'Commercial', 'Portrait'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
      portfolio: [
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3'
      ],
      bio: 'Fashion and commercial photographer with a keen eye for detail. Specializes in creating stunning visual narratives for brands and individuals.',
      social: {
        instagram: '@priyasharma',
        facebook: 'PriyaSharmaPhotography',
        twitter: '@priyasharma'
      }
    }
  ];

  // Remove the unused constant since it's not being used in the component

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', bookingForm);
    setShowBookingForm(false);
    // Reset form
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      location: '',
      type: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Enhanced Header with Search Bar */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-900 rounded-lg">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-light text-gray-900">Photographers</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search photographers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3"
            alt="Photography"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-light mb-6">
              Capture Your Perfect Moments
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Find and book professional photographers for your special occasions. From weddings to corporate events, we've got you covered.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Browse Photographers</span>
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors flex items-center space-x-2">
                <Info className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Photographers */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-light text-gray-900">Featured Photographers</h2>
            <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-1">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photographers.map((photographer) => (
              <motion.div
                key={photographer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] group">
                  <img
                    src={photographer.image}
                    alt={photographer.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-medium text-white mb-1">
                          {photographer.name}
                        </h3>
                        <div className="flex items-center text-sm text-white/90">
                          <MapPin className="w-4 h-4 mr-1.5" />
                          <span>{photographer.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm font-medium text-white">
                            {photographer.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600">
                        {photographer.reviews} reviews
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                      {photographer.price}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {photographer.style.map((style) => (
                      <span
                        key={style}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedPhotographer(photographer)}
                      className="flex-1 py-2.5 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Info className="w-4 h-4" />
                      <span>View Profile</span>
                    </button>
                    <button
                      onClick={() => setShowBookingForm(true)}
                      className="flex-1 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Browse by Category</h2>
          <div className="flex space-x-2 bg-gray-100 p-1.5 rounded-xl">
            {[
              { name: 'All', icon: <Camera className="w-4 h-4" /> },
              { name: 'Wedding', icon: <Heart className="w-4 h-4" /> },
              { name: 'Portrait', icon: <Users className="w-4 h-4" /> },
              { name: 'Fashion', icon: <Award className="w-4 h-4" /> },
              { name: 'Commercial', icon: <DollarSign className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name.toLowerCase())}
                className={`flex items-center space-x-2 flex-1 py-2.5 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === tab.name.toLowerCase()
                    ? 'bg-white text-gray-900 shadow-sm transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">John Doe</h4>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The photographer was professional and captured our wedding perfectly. The photos are absolutely stunning!"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl font-light mb-4">Ready to Book Your Photographer?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have captured their special moments with our professional photographers.
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2 mx-auto">
            <Calendar className="w-5 h-5" />
            <span>Book Now</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gray-900 rounded-lg">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-light text-gray-900">Photographers</h3>
              </div>
              <p className="text-gray-600">
                Find and book professional photographers for your special occasions.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Explore', 'How it works', 'Pricing', 'FAQs'].map((item) => (
                  <li key={item}>
                    <button className="text-gray-600 hover:text-teal-700 transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {['Wedding', 'Portrait', 'Nature', 'Commercial', 'Events'].map((item) => (
                  <li key={item}>
                    <button className="text-gray-600 hover:text-teal-700 transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-teal-700 mr-3" />
                  <span className="text-gray-600">support@sanchari.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-teal-700 mr-3" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                    <button
                      key={i}
                      className="p-2 bg-gray-100 text-teal-700 rounded-full hover:bg-teal-50 hover:text-teal-800 transition-colors"
                      onClick={() => {/* Add social media action here */}}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Sanchari Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {showBookingForm && selectedPhotographer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl max-w-md w-full shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-900 rounded-lg">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-medium text-gray-900">Book Photographer</h2>
                  </div>
                  <button
                    onClick={() => setShowBookingForm(false)}
                    className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Duration
                    </label>
                    <select
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">Select duration</option>
                      <option value="2">2 hours</option>
                      <option value="4">4 hours</option>
                      <option value="8">8 hours</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Location
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Special Requests
                    </label>
                    <textarea
                      rows="3"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowBookingForm(false)}
                      className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors flex items-center space-x-2"
                    >
                      <X className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2"
                    >
                      <Check className="w-4 h-4" />
                      <span>Confirm Booking</span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photographer Details Modal */}
      <AnimatePresence>
        {selectedPhotographer && !showBookingForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedPhotographer(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
                <div className="relative aspect-[16/9]">
                  <img
                    src={selectedPhotographer.image}
                    alt={selectedPhotographer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-medium text-white">
                          {selectedPhotographer.name}
                        </h2>
                        <div className="flex items-center text-white/90">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{selectedPhotographer.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 bg-white/20 rounded-full hover:bg-white/30">
                          <Heart className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-2 bg-white/20 rounded-full hover:bg-white/30">
                          <Share2 className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-lg font-medium text-gray-900">
                        {selectedPhotographer.rating}
                      </span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-600">
                      {selectedPhotographer.reviews} reviews
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-medium text-gray-900">
                      {selectedPhotographer.price}
                    </span>
                    <p className="text-sm text-gray-500">per session</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">About</h3>
                    <p className="text-gray-600 mb-6">{selectedPhotographer.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedPhotographer.style.map((style) => (
                          <span
                            key={style}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                          >
                            {style}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Achievements</h4>
                      <div className="space-y-2">
                        {selectedPhotographer.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center text-gray-600">
                            <Award className="w-4 h-4 text-yellow-500 mr-2" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Packages</h3>
                    <div className="space-y-4">
                      {selectedPhotographer.packages.map((pkg, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-4 hover:border-gray-900 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">{pkg.name}</h4>
                            <span className="text-gray-900 font-medium">{pkg.price}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mb-3">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{pkg.duration}</span>
                          </div>
                          <ul className="space-y-2">
                            {pkg.includes.map((item, i) => (
                              <li key={i} className="flex items-center text-sm text-gray-600">
                                <Check className="w-4 h-4 text-green-500 mr-2" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Portfolio</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedPhotographer.portfolio.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Portfolio ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 rounded-lg flex items-center justify-center transition-opacity">
                          <button className="p-2 bg-white rounded-full">
                            <ImageIcon className="w-5 h-5 text-gray-900" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Social Media</h3>
                  <div className="flex space-x-6">
                    <a
                      href={`https://instagram.com/${selectedPhotographer.social.instagram}`}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="ml-2 text-sm">
                        {selectedPhotographer.social.instagram}
                      </span>
                    </a>
                    <a
                      href={`https://facebook.com/${selectedPhotographer.social.facebook}`}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="ml-2 text-sm">
                        {selectedPhotographer.social.facebook}
                      </span>
                    </a>
                    <a
                      href={`https://twitter.com/${selectedPhotographer.social.twitter}`}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <Twitter className="w-5 h-5" />
                      <span className="ml-2 text-sm">
                        {selectedPhotographer.social.twitter}
                      </span>
                    </a>
                  </div>
                </div>

                <div className="mt-8 flex justify-end space-x-4">
                  <button className="px-6 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-md hover:bg-gray-50">
                    Message
                  </button>
                  <button
                    onClick={() => setShowBookingForm(true)}
                    className="px-6 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotographerBooking; 