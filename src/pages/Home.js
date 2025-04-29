import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Camera, 
  MessageSquare,
  Star,
  ChevronRight,
  Plane,
  Hotel,
  Utensils,
  Mountain,
  Globe,
  Award,
  Shield,
  Heart,
  User,
  ChevronUp
} from 'lucide-react';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      icon: <MapPin size={24} />,
      title: 'Personalized Itineraries',
      description: 'Get custom travel plans tailored to your preferences and interests.',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Smart Scheduling',
      description: 'Efficiently plan your trip with our intelligent scheduling system.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Users size={24} />,
      title: 'Expert Guides',
      description: 'Connect with experienced travel agents and local guides.',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: <Camera size={24} />,
      title: 'Photographer Booking',
      description: 'Book professional photographers to capture your special moments.',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Real-time Chat',
      description: 'Communicate instantly with your travel agent and guides.',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: <Star size={24} />,
      title: 'Verified Reviews',
      description: 'Read authentic reviews from fellow travelers.',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  const popularDestinations = [
    {
      name: 'Bali',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3',
      description: 'Tropical paradise with stunning beaches',
      price: 'From $899',
      rating: 4.8
    },
    {
      name: 'Paris',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3',
      description: 'City of love and lights',
      price: 'From $1299',
      rating: 4.7
    },
    {
      name: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3',
      description: 'Vibrant city with rich culture',
      price: 'From $1499',
      rating: 4.9
    },
    {
      name: 'New York',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d6e355b1e?ixlib=rb-4.0.3',
      description: 'The city that never sleeps',
      price: 'From $1099',
      rating: 4.6
    }
  ];

  const travelTypes = [
    {
      name: 'Adventure',
      icon: <Mountain size={24} />,
      description: 'Thrilling experiences and outdoor activities',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Luxury',
      icon: <Award size={24} />,
      description: 'Premium accommodations and exclusive services',
      color: 'from-amber-500 to-yellow-600'
    },
    {
      name: 'Cultural',
      icon: <Globe size={24} />,
      description: 'Immerse in local traditions and heritage',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Relaxation',
      icon: <Heart size={24} />,
      description: 'Peaceful retreats and wellness experiences',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-teal-800/50 before:via-teal-700/40 before:to-emerald-900/60 before:z-0 relative">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-r from-teal-700/60 via-emerald-600/40 to-green-800/50 z-10"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay opacity-60 z-10"
        />
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/5 to-black/30 z-10"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d9488,#065f46,#047857)] opacity-10 mix-blend-overlay z-10" />
        
        <div className="relative h-full flex items-center justify-center z-20">
          <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-600/30 text-white backdrop-blur-sm border border-teal-500/30 hover:bg-teal-600/40 transition-colors group">
                <span className="w-2 h-2 rounded-full bg-teal-300 mr-2 animate-pulse group-hover:animate-none group-hover:bg-teal-200" />
                Live Booking Available
                <span className="ml-2 px-2 py-0.5 text-xs bg-teal-500/30 text-teal-100 rounded-full group-hover:bg-teal-500/40 transition-colors">New</span>
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl drop-shadow-lg"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block"
              >
                EXPLORE
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="block"
              >
                DREAM
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200 drop-shadow-md animate-gradient-x"
              >
                DESTINATION
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 max-w-2xl mx-auto text-xl text-white/90 drop-shadow-md"
            >
              It encourages exploration of unfamiliar territories, embracing diverse cultures and
              landscapes, while pursuing the desired destination that captivates the heart and
              ignites a sense of wonder.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/trip-categories"
                className="group inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-indigo-900 bg-white hover:bg-indigo-50 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl backdrop-blur-sm"
              >
                <span className="relative">
                  Start Planning
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/register"
                className="group inline-flex items-center px-8 py-4 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white/20 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl backdrop-blur-sm"
              >
                <span className="relative">
                  Create Account
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-white rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-8 flex items-center justify-center space-x-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden hover:z-10 hover:scale-110 transition-transform"
                  >
                    <img
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 1}.jpg`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="text-sm text-white/80">
                <span className="font-medium">1000+</span> travelers joined this week
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features, Popular Destinations, and other sections */}
      <div className="relative z-10">
        {/* Stats Section with 3D Cards */}
        <section className="py-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-md mb-8 mx-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '10K+', label: 'Happy Travelers', icon: <User size={24} />, color: 'from-teal-600 to-emerald-600', trend: '+12%' },
                { number: '50+', label: 'Destinations', icon: <Globe size={24} />, color: 'from-emerald-600 to-green-600', trend: '+5%' },
                { number: '100+', label: 'Expert Guides', icon: <Users size={24} />, color: 'from-teal-500 to-teal-700', trend: '+8%' },
                { number: '4.9', label: 'Average Rating', icon: <Star size={24} />, color: 'from-amber-400 to-amber-600', trend: '+0.2' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group perspective-1000"
                >
                  <div className="transform group-hover:rotate-y-12 transition-transform duration-300">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-full text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 group-hover:from-indigo-600 group-hover:to-purple-600 transition-colors">
                      {stat.number}
                    </div>
                    <div className="mt-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-sm font-medium text-green-500 flex items-center justify-center group-hover:text-green-600 transition-colors">
                      <ChevronUp className="w-4 h-4 mr-1 group-hover:translate-y-[-2px] transition-transform" />
                      {stat.trend}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section with Interactive Cards */}
        <section className="py-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-md mb-8 mx-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors group">
                  <Star className="w-4 h-4 mr-2 fill-current text-amber-500 group-hover:animate-spin" />
                  Premium Features
                </span>
              </motion.div>
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                <span className="block">Why Choose</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-emerald-600">Us?</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                We provide everything you need for a perfect travel experience.
              </p>
            </div>

            <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mt-4 group-hover:text-indigo-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      {feature.description}
                    </p>
                    <div className="mt-6">
                      <span className="inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-800">
                        Learn more
                        <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Travel Types Section */}
        <section className="py-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-md mb-8 mx-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                <span className="block">Discover Your</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-green-600">Travel Style</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Find the perfect travel experience that matches your interests
              </p>
            </div>

            <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {travelTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`relative p-8 rounded-2xl bg-gradient-to-r ${type.color} text-white transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}>
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-semibold">
                      {type.name}
                    </h3>
                    <p className="mt-4 text-white/80">
                      {type.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Popular Destinations */}
        <section className="py-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-md mb-8 mx-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                <span className="block">Popular</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-500">Destinations</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Explore our most sought-after travel destinations
              </p>
            </div>

            <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {popularDestinations.map((destination, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-white">
                          {destination.name}
                        </h3>
                        <div className="flex items-center text-yellow-400">
                          <Star size={16} className="fill-current" />
                          <span className="ml-1 text-sm">{destination.rating}</span>
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-gray-200">
                        {destination.description}
                      </p>
                      <div className="mt-2 text-sm font-medium text-white">
                        {destination.price}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-md mb-8 mx-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                <span className="block">What Our</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-500">Travelers Say</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Hear from our satisfied customers about their experiences
              </p>
            </div>

            <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3">
              {[1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                      <User size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "The personalized itinerary was perfect! Every detail was taken care of, and the local guides were amazing. Will definitely use this service again!"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="bg-gradient-to-r from-teal-800/90 via-teal-700/90 to-emerald-800/90 backdrop-blur-sm rounded-xl shadow-md mb-8 mx-4">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to start your journey?</span>
                <span className="block text-teal-200">Create your account today.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-teal-100">
                Join thousands of happy travelers and start planning your dream vacation.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-full shadow">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-teal-700 bg-white hover:bg-teal-50 transform transition-all hover:scale-105 hover:shadow-xl"
                >
                  Get started
                </Link>
              </div>
              <div className="inline-flex rounded-full shadow">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-full text-white hover:bg-white/10 transform transition-all hover:scale-105 hover:shadow-xl"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home; 