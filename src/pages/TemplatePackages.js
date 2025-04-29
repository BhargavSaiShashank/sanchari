import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  Users,
  Clock,
  Star,
  Heart,
  Filter,
  Search,
  ChevronDown
} from 'lucide-react';

const TemplatePackages = () => {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState({
    destinations: [],
    duration: [],
    budget: [],
    type: []
  });
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const packages = [
    {
      id: 1,
      title: "European Adventure",
      destination: "Multiple European Cities",
      duration: "14 days",
      price: 3499,
      rating: 4.8,
      reviews: 124,
      image: "https://source.unsplash.com/random/800x600/?europe",
      activities: ["City Tours", "Cultural Experiences", "Food Tastings"],
      highlights: ["Visit 6 countries", "Guided Tours", "Local Experiences"],
      type: "Adventure",
      included: ["Hotels", "Some Meals", "Transport", "Guide"],
      startDates: ["2024-06-15", "2024-07-01", "2024-07-15"],
      maxGroupSize: 12
    },
    {
      id: 2,
      title: "Tropical Paradise",
      destination: "Bali",
      duration: "10 days",
      price: 2299,
      rating: 4.9,
      reviews: 89,
      image: "https://source.unsplash.com/random/800x600/?bali",
      activities: ["Beach Activities", "Temple Visits", "Spa Days"],
      highlights: ["Luxury Resorts", "Private Tours", "Cultural Shows"],
      type: "Relaxation",
      included: ["Resort Stay", "All Meals", "Airport Transfers", "Activities"],
      startDates: ["2024-05-20", "2024-06-10", "2024-06-25"],
      maxGroupSize: 8
    },
    {
      id: 3,
      title: "Safari Experience",
      destination: "Tanzania",
      duration: "7 days",
      price: 4299,
      rating: 4.7,
      reviews: 67,
      image: "https://source.unsplash.com/random/800x600/?safari",
      activities: ["Game Drives", "Nature Walks", "Cultural Visits"],
      highlights: ["Big Five Viewing", "Luxury Camping", "Expert Guides"],
      type: "Wildlife",
      included: ["Luxury Tents", "All Meals", "Safari Vehicles", "Park Fees"],
      startDates: ["2024-08-05", "2024-08-20", "2024-09-10"],
      maxGroupSize: 6
    }
  ];

  const filters = {
    destinations: ["Europe", "Asia", "Africa", "Americas"],
    duration: ["1-7 days", "8-14 days", "15+ days"],
    budget: ["$0-2000", "$2001-4000", "$4001+"],
    type: ["Adventure", "Relaxation", "Wildlife", "Cultural"]
  };

  const handleFilterToggle = (category, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilters = Object.entries(selectedFilters).every(([key, values]) => {
      if (values.length === 0) return true;
      if (key === 'duration') {
        const days = parseInt(pkg.duration);
        return values.some(range => {
          if (range === '1-7 days') return days <= 7;
          if (range === '8-14 days') return days > 7 && days <= 14;
          return days > 14;
        });
      }
      return values.length === 0 || values.includes(pkg[key]);
    });

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Explore Our Travel Packages
        </h1>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search packages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Filter size={20} />
              Filters
              <ChevronDown size={16} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.entries(filters).map(([category, options]) => (
                    <div key={category}>
                      <h3 className="font-semibold mb-3 capitalize">{category}</h3>
                      <div className="space-y-2">
                        {options.map(option => (
                          <label key={option} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={selectedFilters[category].includes(option)}
                              onChange={() => handleFilterToggle(category, option)}
                              className="rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map(pkg => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart size={20} className="text-gray-600 hover:text-red-500 transition-colors" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium">
                    {pkg.type}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {pkg.destination}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {pkg.duration}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="ml-1 font-medium">{pkg.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-500">Max {pkg.maxGroupSize}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Highlights:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">${pkg.price}</span>
                    <span className="text-gray-500 text-sm">/person</span>
                  </div>
                  <button 
                    onClick={() => navigate(`/plan-trip/${pkg.type.toLowerCase()}/${pkg.title.toLowerCase().replace(/\s+/g, '-')}`)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatePackages; 