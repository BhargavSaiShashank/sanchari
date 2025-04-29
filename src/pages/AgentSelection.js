import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Star,
  MessageSquare,
  Video,
  Phone,
  Globe,
  Filter,
  Search,
  Check,
  ChevronDown,
  MapPin,
  Clock,
  Award,
  ThumbsUp,
  Users,
  Heart
} from 'lucide-react';

const AgentSelection = () => {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState({
    specializations: [],
    languages: [],
    minRating: 0,
    availability: 'all'
  });
  const [sortBy, setSortBy] = useState('rating');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Updated mock data for travel agents with Indian language expertise
  const agents = [
    {
      id: 1,
      name: 'Sarah Johnson',
      photo: 'https://randomuser.me/api/portraits/women/1.jpg',
      specializations: ['Luxury Travel', 'Honeymoon'],
      experience: 8,
      languages: ['English', 'Hindi', 'Punjabi'],
      languageProficiency: {
        'English': 'Native',
        'Hindi': 'Fluent',
        'Punjabi': 'Native'
      },
      rating: 4.9,
      reviews: 127,
      tripsPlanned: 312,
      availability: 'online',
      location: 'New Delhi, India',
      responseTime: '< 5 mins',
      badges: ['Top Rated', 'North India Expert']
    },
    {
      id: 2,
      name: 'Priya Patel',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      specializations: ['Cultural Tours', 'Heritage Sites'],
      experience: 7,
      languages: ['English', 'Gujarati', 'Hindi', 'Marathi'],
      languageProficiency: {
        'English': 'Fluent',
        'Gujarati': 'Native',
        'Hindi': 'Fluent',
        'Marathi': 'Conversational'
      },
      rating: 4.8,
      reviews: 98,
      tripsPlanned: 245,
      availability: 'online',
      location: 'Mumbai, India',
      responseTime: '< 10 mins',
      badges: ['West India Specialist', 'Cultural Expert']
    },
    {
      id: 3,
      name: 'Karthik Raman',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
      specializations: ['Temple Tours', 'Food Tours'],
      experience: 10,
      languages: ['English', 'Tamil', 'Malayalam', 'Telugu'],
      languageProficiency: {
        'English': 'Fluent',
        'Tamil': 'Native',
        'Malayalam': 'Fluent',
        'Telugu': 'Conversational'
      },
      rating: 4.9,
      reviews: 156,
      tripsPlanned: 428,
      availability: 'busy',
      location: 'Chennai, India',
      responseTime: '< 30 mins',
      badges: ['South India Expert', 'Temple Tour Pro']
    },
    {
      id: 4,
      name: 'Ananya Chatterjee',
      photo: 'https://randomuser.me/api/portraits/women/4.jpg',
      specializations: ['Adventure', 'Wildlife Tours'],
      experience: 6,
      languages: ['English', 'Bengali', 'Hindi', 'Odia'],
      languageProficiency: {
        'English': 'Fluent',
        'Bengali': 'Native',
        'Hindi': 'Fluent',
        'Odia': 'Conversational'
      },
      rating: 4.7,
      reviews: 89,
      tripsPlanned: 198,
      availability: 'online',
      location: 'Kolkata, India',
      responseTime: '< 15 mins',
      badges: ['East India Expert', 'Wildlife Pro']
    },
    {
      id: 5,
      name: 'Rajesh Kumar',
      photo: 'https://randomuser.me/api/portraits/men/5.jpg',
      specializations: ['Family Travel', 'Religious Tours'],
      experience: 9,
      languages: ['English', 'Hindi', 'Sanskrit', 'Urdu'],
      languageProficiency: {
        'English': 'Fluent',
        'Hindi': 'Native',
        'Sanskrit': 'Fluent',
        'Urdu': 'Native'
      },
      rating: 4.8,
      reviews: 134,
      tripsPlanned: 287,
      availability: 'online',
      location: 'Varanasi, India',
      responseTime: '< 10 mins',
      badges: ['Religious Tour Expert', 'Family Travel Pro']
    },
    {
      id: 6,
      name: 'Maya Reddy',
      photo: 'https://randomuser.me/api/portraits/women/6.jpg',
      specializations: ['Adventure', 'Eco Tourism'],
      experience: 5,
      languages: ['English', 'Telugu', 'Kannada', 'Hindi'],
      languageProficiency: {
        'English': 'Fluent',
        'Telugu': 'Native',
        'Kannada': 'Native',
        'Hindi': 'Conversational'
      },
      rating: 4.7,
      reviews: 76,
      tripsPlanned: 156,
      availability: 'online',
      location: 'Bangalore, India',
      responseTime: '< 20 mins',
      badges: ['Adventure Expert', 'Eco Tourism Pro']
    }
  ];

  const specializations = [
    'Luxury Travel',
    'Adventure',
    'Family Travel',
    'Honeymoon',
    'Cultural Tours',
    'Eco Tourism'
  ];

  // Updated languages array with proficiency levels
  const languages = [
    // Indian Languages
    'Hindi',
    'Telugu',
    'Tamil',
    'Malayalam',
    'Kannada',
    'Marathi',
    'Bengali',
    'Gujarati',
    'Odia',
    'Punjabi',
    'Assamese',
    'Urdu',
    'Sanskrit',
    // International Languages
    'English',
    'Spanish',
    'French',
    'Mandarin',
    'Japanese',
    'Portuguese'
  ];

  const handleSpecializationToggle = (specialization) => {
    setSelectedFilters(prev => ({
      ...prev,
      specializations: prev.specializations.includes(specialization)
        ? prev.specializations.filter(s => s !== specialization)
        : [...prev.specializations, specialization]
    }));
  };

  const handleLanguageToggle = (language) => {
    setSelectedFilters(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }));
  };

  const filteredAgents = agents
    .filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.specializations.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesSpecializations = selectedFilters.specializations.length === 0 ||
        agent.specializations.some(s => selectedFilters.specializations.includes(s));
      
      const matchesLanguages = selectedFilters.languages.length === 0 ||
        agent.languages.some(l => selectedFilters.languages.includes(l));
      
      const matchesRating = agent.rating >= selectedFilters.minRating;
      
      const matchesAvailability = selectedFilters.availability === 'all' ||
        agent.availability === selectedFilters.availability;
      
      return matchesSearch && matchesSpecializations && matchesLanguages && 
        matchesRating && matchesAvailability;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'experience':
          return b.experience - a.experience;
        case 'trips':
          return b.tripsPlanned - a.tripsPlanned;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-teal-800/50 before:via-teal-700/40 before:to-emerald-900/60 before:z-0 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 pt-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-md">
            Choose Your Travel Expert
          </h1>
          <p className="text-xl text-white/90 drop-shadow-md">
            Connect with experienced travel agents who will bring your dream journey to life
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 mx-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium text-gray-700 transition-all"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
              <ChevronDown className={`w-5 h-5 ml-2 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </motion.button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-6 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            >
              <option value="rating">Sort by Rating</option>
              <option value="experience">Sort by Experience</option>
              <option value="trips">Sort by Trips Planned</option>
            </select>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Specializations */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Specializations</h3>
                    <div className="space-y-2">
                      {specializations.map((specialization) => (
                        <motion.button
                          key={specialization}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSpecializationToggle(specialization)}
                          className={`w-full p-2 rounded-lg text-left text-sm transition-all ${
                            selectedFilters.specializations.includes(specialization)
                              ? 'bg-indigo-100/90 text-indigo-700'
                              : 'hover:bg-gray-100/90'
                          }`}
                        >
                          {specialization}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Languages</h3>
                    <div className="space-y-2">
                      {languages.map((language) => (
                        <motion.button
                          key={language}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleLanguageToggle(language)}
                          className={`w-full p-2 rounded-lg text-left text-sm transition-all ${
                            selectedFilters.languages.includes(language)
                              ? 'bg-indigo-100/90 text-indigo-700'
                              : 'hover:bg-gray-100/90'
                          }`}
                        >
                          {language}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Minimum Rating</h3>
                    <div className="space-y-2">
                      {[4.8, 4.5, 4.0].map((rating) => (
                        <motion.button
                          key={rating}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedFilters(prev => ({ ...prev, minRating: rating }))}
                          className={`w-full p-2 rounded-lg text-left text-sm transition-all ${
                            selectedFilters.minRating === rating
                              ? 'bg-indigo-100/90 text-indigo-700'
                              : 'hover:bg-gray-100/90'
                          }`}
                        >
                          {rating}+ <Star className="w-4 h-4 inline-block ml-1" />
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Availability Filter */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Availability</h3>
                    <div className="space-y-2">
                      {['all', 'online', 'busy'].map((status) => (
                        <motion.button
                          key={status}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedFilters(prev => ({ ...prev, availability: status }))}
                          className={`w-full p-2 rounded-lg text-left text-sm capitalize transition-all ${
                            selectedFilters.availability === status
                              ? 'bg-indigo-100/90 text-indigo-700'
                              : 'hover:bg-gray-100/90'
                          }`}
                        >
                          {status}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredAgents.map((agent) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-200/50"
            >
              {/* Agent Header */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start gap-4">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {agent.location}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{agent.rating}</span>
                      <span className="text-gray-500">({agent.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    agent.availability === 'online'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {agent.availability === 'online' ? 'Online' : 'Busy'}
                  </div>
                </div>

                {/* Language Proficiency */}
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.languages.map((lang) => (
                      <span
                        key={lang}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700"
                        title={`${lang} - ${agent.languageProficiency[lang]}`}
                      >
                        {lang}
                        <div className={`w-2 h-2 ml-1 rounded-full ${
                          agent.languageProficiency[lang] === 'Native' 
                            ? 'bg-green-500' 
                            : agent.languageProficiency[lang] === 'Fluent'
                              ? 'bg-blue-500'
                              : 'bg-gray-500'
                        }`} />
                      </span>
                    ))}
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {agent.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Agent Stats */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-500">Experience</div>
                    <div className="mt-1 font-semibold text-gray-900">{agent.experience} years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-500">Response</div>
                    <div className="mt-1 font-semibold text-gray-900">{agent.responseTime}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-500">Trips</div>
                    <div className="mt-1 font-semibold text-gray-900">{agent.tripsPlanned}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Language Proficiency Legend */}
        <div className="mt-8 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm mx-4 mb-8">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Language Proficiency Guide</h4>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm text-gray-600">Native</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm text-gray-600">Fluent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-500" />
              <span className="text-sm text-gray-600">Conversational</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSelection; 