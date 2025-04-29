import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  Heart,
  Briefcase,
  User,
  ArrowRight,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  IndianRupee
} from 'lucide-react';

const TripCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'solo',
      title: 'Solo Travel',
      description: 'Explore the world at your own pace with personalized solo adventures',
      icon: <User className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3',
      color: 'from-purple-500 to-indigo-600',
      packages: [
        {
          name: 'Backpacker Special',
          price: '25999',
          duration: '7 days',
          rating: 4.8,
          features: ['Hostel stays', 'Local guides', 'City tours']
        },
        {
          name: 'Luxury Solo',
          price: '35999',
          duration: '5 days',
          rating: 4.9,
          features: ['5-star hotels', 'Private transfers', 'VIP experiences']
        }
      ]
    },
    {
      id: 'couple',
      title: 'Couple Getaway',
      description: 'Romantic escapes and memorable experiences for two',
      icon: <Heart className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3',
      color: 'from-pink-500 to-rose-600',
      packages: [
        {
          name: 'Romantic Retreat',
          price: '35999',
          duration: '6 days',
          rating: 4.9,
          features: ['Couple spa', 'Candlelight dinners', 'Private tours']
        },
        {
          name: 'Adventure Couple',
          price: '45999',
          duration: '8 days',
          rating: 4.7,
          features: ['Adventure activities', 'Luxury camping', 'Guided hikes']
        }
      ]
    },
    {
      id: 'family',
      title: 'Family Vacation',
      description: 'Create lasting memories with your loved ones',
      icon: <Users className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3',
      color: 'from-blue-500 to-cyan-600',
      packages: [
        {
          name: 'Family Fun',
          price: '29999',
          duration: '7 days',
          rating: 4.8,
          features: ['Kid-friendly activities', 'Family rooms', 'Entertainment']
        },
        {
          name: 'Educational Tour',
          price: '35499',
          duration: '10 days',
          rating: 4.9,
          features: ['Educational sites', 'Interactive museums', 'Cultural experiences']
        }
      ]
    },
    {
      id: 'business',
      title: 'Business Travel',
      description: 'Professional trips with comfort and efficiency',
      icon: <Briefcase className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3',
      color: 'from-gray-600 to-gray-800',
      packages: [
        {
          name: 'Executive Package',
          price: '35799',
          duration: '5 days',
          rating: 4.9,
          features: ['Business class', 'Meeting rooms', 'Concierge service']
        },
        {
          name: 'Corporate Retreat',
          price: '49999',
          duration: '4 days',
          rating: 4.8,
          features: ['Team building', 'Conference facilities', 'Luxury accommodation']
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Travel Style
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select from our curated travel categories and find the perfect package for your journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="mb-4">{category.icon}</div>
                    <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Packages</h3>
                <div className="space-y-4">
                  {category.packages.map((pkg, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{pkg.name}</h4>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm">{pkg.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 space-x-4 mb-2">
                        <div className="flex items-center">
                          <IndianRupee className="w-4 h-4 mr-1" />
                          <span>{pkg.price}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{pkg.duration}</span>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <button
                    onClick={() => navigate(`/plan-trip/${category.id}`)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Plan Custom Trip
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <Link
                    to={`/plan-trip/${category.id}/template`}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View Template Packages
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TripCategories; 