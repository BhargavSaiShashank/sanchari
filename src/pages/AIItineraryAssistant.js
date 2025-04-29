import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Users,
  Sparkles,
  PlusCircle,
  ChevronDown,
  Star,
  Camera,
  Coffee,
  Music,
  Utensils,
  Wine,
  Mountain,
  Globe,
  Send,
  RefreshCw,
  Save
} from 'lucide-react';

const AIItineraryAssistant = () => {
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [interests, setInterests] = useState([]);
  const [budget, setBudget] = useState('medium');
  const [generating, setGenerating] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState(null);
  const [queryPrompt, setQueryPrompt] = useState('');
  const [conversation, setConversation] = useState([]);
  
  const interestOptions = [
    { id: 'food', label: 'Food & Dining', icon: <Utensils className="w-4 h-4" /> },
    { id: 'culture', label: 'Arts & Culture', icon: <Globe className="w-4 h-4" /> },
    { id: 'adventure', label: 'Adventure', icon: <Mountain className="w-4 h-4" /> },
    { id: 'nightlife', label: 'Nightlife', icon: <Music className="w-4 h-4" /> },
    { id: 'photography', label: 'Photography', icon: <Camera className="w-4 h-4" /> },
    { id: 'relaxation', label: 'Relaxation', icon: <Coffee className="w-4 h-4" /> },
    { id: 'wine', label: 'Wine Tasting', icon: <Wine className="w-4 h-4" /> }
  ];

  // Mock itinerary data - this would come from an AI API in a real app
  const mockItineraries = {
    bali: {
      destination: 'Bali, Indonesia',
      days: [
        {
          day: 1,
          title: 'Arrival & Cultural Immersion',
          activities: [
            { time: '10:00 AM', description: 'Arrive at Ngurah Rai International Airport' },
            { time: '12:30 PM', description: 'Check-in at beachfront resort in Seminyak' },
            { time: '2:00 PM', description: 'Lunch at Ku De Ta with ocean views' },
            { time: '4:00 PM', description: 'Visit Tanah Lot Temple for sunset views' },
            { time: '7:30 PM', description: 'Welcome dinner with traditional Balinese dance performance' }
          ]
        },
        {
          day: 2,
          title: 'Ubud Cultural Journey',
          activities: [
            { time: '8:00 AM', description: 'Breakfast at hotel' },
            { time: '9:30 AM', description: 'Visit Sacred Monkey Forest Sanctuary' },
            { time: '12:00 PM', description: 'Lunch at organic farm-to-table restaurant' },
            { time: '2:00 PM', description: 'Tour Ubud Palace and art markets' },
            { time: '4:30 PM', description: 'Visit Tegalalang Rice Terrace' },
            { time: '7:00 PM', description: 'Dinner at Locavore, a renowned fine dining restaurant' }
          ]
        },
        {
          day: 3,
          title: 'Adventure Day',
          activities: [
            { time: '6:00 AM', description: 'Mount Batur sunrise trek with breakfast at summit' },
            { time: '12:00 PM', description: 'Lunch at Kintamani with volcano views' },
            { time: '2:30 PM', description: 'White water rafting on Ayung River' },
            { time: '5:30 PM', description: 'Relax with traditional Balinese massage' },
            { time: '8:00 PM', description: 'Dinner at beachside seafood restaurant in Jimbaran' }
          ]
        }
      ]
    },
    paris: {
      destination: 'Paris, France',
      days: [
        {
          day: 1,
          title: 'Classic Paris Sightseeing',
          activities: [
            { time: '9:00 AM', description: 'Breakfast at local café with fresh croissants' },
            { time: '10:30 AM', description: 'Visit the Eiffel Tower (skip-the-line tickets)' },
            { time: '1:00 PM', description: 'Lunch at Le Jules Verne restaurant' },
            { time: '3:00 PM', description: 'Seine River cruise' },
            { time: '5:30 PM', description: 'Explore the Louvre Museum (evening session)' },
            { time: '8:30 PM', description: 'Dinner at historic brasserie' }
          ]
        },
        {
          day: 2,
          title: 'Artistic and Historic Paris',
          activities: [
            { time: '8:30 AM', description: 'Breakfast at Montmartre café' },
            { time: '10:00 AM', description: 'Visit Sacré-Cœur Basilica and artist square' },
            { time: '12:30 PM', description: 'Lunch at bistro in Le Marais' },
            { time: '2:00 PM', description: 'Explore Notre-Dame Cathedral area' },
            { time: '4:00 PM', description: 'Visit Musée d\'Orsay' },
            { time: '7:30 PM', description: 'Dinner and wine tasting experience' }
          ]
        }
      ]
    }
  };
  
  const toggleInterest = (interestId) => {
    if (interests.includes(interestId)) {
      setInterests(interests.filter(id => id !== interestId));
    } else {
      setInterests([...interests, interestId]);
    }
  };
  
  const generateItinerary = () => {
    if (!destination) return;
    
    setGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // In a real app, this would call an AI API service
      let itinerary;
      if (destination.toLowerCase().includes('bali')) {
        itinerary = mockItineraries.bali;
      } else if (destination.toLowerCase().includes('paris')) {
        itinerary = mockItineraries.paris;
      } else {
        // Default to Bali for demo purposes
        itinerary = mockItineraries.bali;
      }
      
      setGeneratedItinerary(itinerary);
      setGenerating(false);
    }, 2000);
  };
  
  const regenerateItinerary = () => {
    setGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Just toggle between our two mock options for demo
      const newItinerary = generatedItinerary.destination.includes('Bali') 
        ? mockItineraries.paris 
        : mockItineraries.bali;
      
      setGeneratedItinerary(newItinerary);
      setGenerating(false);
    }, 1500);
  };
  
  const handleAskAI = (e) => {
    e.preventDefault();
    if (!queryPrompt) return;
    
    // Add user message to conversation
    setConversation([
      ...conversation,
      { role: 'user', content: queryPrompt }
    ]);
    
    // Simulate AI response with timeout
    setTimeout(() => {
      let response;
      
      if (queryPrompt.toLowerCase().includes('restaurant') || queryPrompt.toLowerCase().includes('food')) {
        response = "Based on your preferences, I recommend these restaurants: 1) Locavore - innovative farm-to-table cuisine, 2) Mozaic - fine dining in garden setting, 3) Warung Babi Guling Ibu Oka - authentic Balinese suckling pig. Would you like me to add any of these to your itinerary?";
      } else if (queryPrompt.toLowerCase().includes('beach') || queryPrompt.toLowerCase().includes('swimming')) {
        response = "The best beaches in Bali for your interests are: 1) Seminyak Beach - great for sunsets and beach clubs, 2) Nusa Dua - calm waters and water sports, 3) Uluwatu - stunning cliffs and surfing. I can adjust your itinerary to include beach time if you'd like.";
      } else if (queryPrompt.toLowerCase().includes('budget') || queryPrompt.toLowerCase().includes('cheap')) {
        response = "To make this trip more budget-friendly, consider: 1) Staying in Ubud rather than beach resorts, 2) Using GoJek for transportation, 3) Eating at local warungs instead of tourist restaurants. Would you like me to adjust your itinerary with more budget-friendly options?";
      } else {
        response = "I'd be happy to help with that. Based on your itinerary to " + generatedItinerary.destination + ", I can recommend some modifications to better match your interests. Would you like me to focus on cultural experiences, outdoor adventures, or relaxation options?";
      }
      
      setConversation([
        ...conversation,
        { role: 'user', content: queryPrompt },
        { role: 'assistant', content: response }
      ]);
      
      setQueryPrompt('');
    }, 1000);
  };
  
  return (
    <div className="min-h-screen relative">
      {/* Vibrant background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&auto=format&fit=crop&q=85" 
          alt="Tropical travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/30 to-blue-500/40"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-teal-100 p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <Sparkles className="w-7 h-7 mr-2 text-teal-600" />
              AI Itinerary Assistant
            </h1>
            <p className="text-gray-600 mb-8">Generate personalized travel itineraries powered by AI</p>
          
            {/* Generate Itinerary Form */}
            {!generatedItinerary && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/80 rounded-xl shadow-md border border-teal-100 p-6 mb-8"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Where would you like to go?</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 text-teal-500" size={20} />
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Try 'Bali' or 'Paris' for demo"
                        className="w-full pl-10 pr-4 py-3 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Travel Dates</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 text-teal-500" size={20} />
                        <input
                          type="text"
                          value={dateRange}
                          onChange={(e) => setDateRange(e.target.value)}
                          placeholder="e.g., Aug 15-22, 2024"
                          className="w-full pl-10 pr-4 py-3 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 text-teal-500" size={20} />
                        <select
                          value={travelers}
                          onChange={(e) => setTravelers(parseInt(e.target.value))}
                          className="w-full pl-10 pr-4 py-3 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm appearance-none"
                        >
                          <option value="1">1 traveler (Solo)</option>
                          <option value="2">2 travelers (Couple)</option>
                          <option value="3">3 travelers</option>
                          <option value="4">4 travelers</option>
                          <option value="5">5+ travelers (Group)</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-3 text-teal-500 pointer-events-none" size={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travel Interests</label>
                    <div className="flex flex-wrap gap-2">
                      {interestOptions.map(interest => (
                        <button
                          key={interest.id}
                          onClick={() => toggleInterest(interest.id)}
                          className={`flex items-center px-3 py-2 rounded-full text-sm border transition-colors ${
                            interests.includes(interest.id)
                              ? 'bg-teal-100 text-teal-800 border-teal-300 shadow-sm'
                              : 'bg-white/90 text-gray-700 border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <span className="mr-1.5">{interest.icon}</span>
                          <span>{interest.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Level</label>
                    <div className="grid grid-cols-3 gap-4">
                      {['budget', 'medium', 'luxury'].map(level => (
                        <button
                          key={level}
                          onClick={() => setBudget(level)}
                          className={`py-2 px-4 rounded-lg border text-center transition-colors ${
                            budget === level
                              ? 'bg-teal-100 text-teal-800 border-teal-300 shadow-sm'
                              : 'bg-white/90 text-gray-700 border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      onClick={generateItinerary}
                      disabled={!destination}
                      className={`flex items-center px-8 py-3 rounded-lg shadow-md transition-all ${
                        destination
                          ? 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg transform hover:-translate-y-1'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      <span>Generate Itinerary</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Generated Itinerary */}
            {generating && (
              <div className="bg-white/80 rounded-xl shadow-md border border-teal-100 p-8 text-center">
                <div className="animate-spin w-12 h-12 mx-auto mb-4 border-4 border-teal-200 border-t-teal-600 rounded-full"></div>
                <h3 className="text-lg font-medium text-gray-900">Generating your perfect itinerary...</h3>
                <p className="text-gray-600 mt-2">Our AI is crafting a personalized travel plan just for you</p>
              </div>
            )}
            
            {generatedItinerary && !generating && (
              <div className="mb-12">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-teal-100 p-6 mb-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{generatedItinerary.destination}</h2>
                      <p className="text-gray-600 mt-1">
                        {dateRange || 'Custom dates'} • {travelers} traveler{travelers !== 1 ? 's' : ''}
                      </p>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button
                        onClick={regenerateItinerary}
                        className="flex items-center px-4 py-2 border border-teal-300 rounded-lg text-teal-700 hover:bg-teal-50 transition-colors"
                      >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        <span>Regenerate</span>
                      </button>
                      
                      <button
                        className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        <span>Save Itinerary</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Day by day itinerary */}
                  <div className="space-y-8">
                    {generatedItinerary.days.map((day) => (
                      <div key={day.day} className="border-b border-teal-100 pb-6 last:border-0 last:pb-0">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
                            {day.day}
                          </div>
                          <div className="ml-3">
                            <h3 className="text-lg font-semibold text-gray-900">Day {day.day}: {day.title}</h3>
                          </div>
                        </div>
                        
                        <div className="ml-6 pl-6 border-l-2 border-teal-200">
                          {day.activities.map((activity, i) => (
                            <div key={i} className="mb-6 last:mb-0 relative">
                              <div className="absolute -left-[22px] top-1 w-4 h-4 bg-teal-400 rounded-full border-2 border-white"></div>
                              <div className="flex">
                                <div className="w-20 flex-shrink-0 text-teal-700 font-medium">
                                  {activity.time}
                                </div>
                                <div className="flex-1">
                                  <p className="text-gray-900">{activity.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                          
                          <button className="mt-4 flex items-center text-sm text-teal-600 hover:text-teal-800 transition-colors">
                            <PlusCircle className="w-4 h-4 mr-1" />
                            <span>Add activity</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-100">
                    <div className="flex items-start">
                      <Sparkles className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                      <div>
                        <p className="text-gray-700">
                          This AI-generated itinerary is a starting point. You can customize it, add or remove activities, and ask for specific recommendations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* New Guide Recommendation Section */}
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-white/80 rounded-full mr-3">
                        <Users className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Local Guide Recommendations</h3>
                        <p className="text-sm text-gray-600">Enhance your trip with expert local guides</p>
                      </div>
                    </div>
                    
                    <a href="/guide-portfolios" className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow-sm transition-all hover:-translate-y-1">
                      View Local Guides
                    </a>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-teal-100">
                    <p className="text-gray-700">
                      We've found <span className="font-semibold text-teal-700">4 expert guides</span> in {generatedItinerary.destination} who specialize in the activities on your itinerary. Local guides can provide unique cultural insights and access to hidden gems not found in typical tourist experiences.
                    </p>
                    
                    <div className="mt-4 flex overflow-x-auto space-x-4 pb-2">
                      {[
                        {
                          name: "Wayan Sukerta",
                          specialty: "Cultural Heritage",
                          rating: 4.9,
                          image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                        },
                        {
                          name: "Made Surya",
                          specialty: "Adventure Activities",
                          rating: 4.7,
                          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                        }
                      ].map((guide, index) => (
                        <div key={index} className="flex-shrink-0 w-48">
                          <div className="bg-white rounded-lg shadow-sm border border-teal-100 overflow-hidden">
                            <div className="h-24 overflow-hidden">
                              <img src={guide.image} alt={guide.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-3">
                              <h4 className="font-medium text-gray-900 text-sm">{guide.name}</h4>
                              <p className="text-xs text-gray-600">{guide.specialty}</p>
                              <div className="flex items-center mt-1">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                <span className="text-xs ml-1">{guide.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* AI Chat Interface */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-teal-100 overflow-hidden">
                  <div className="p-4 bg-teal-50 border-b border-teal-100">
                    <h3 className="font-medium text-gray-900 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-teal-600" />
                      Ask the AI for personalized recommendations
                    </h3>
                  </div>
                  
                  <div className="p-6 h-72 overflow-y-auto">
                    {conversation.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <Globe className="w-12 h-12 mx-auto mb-4 text-teal-300" />
                        <p>Ask for restaurant recommendations, activity suggestions, or how to optimize your itinerary</p>
                        <div className="mt-6 flex flex-wrap justify-center gap-2">
                          {[
                            "What are the best restaurants in the area?",
                            "Recommend some beaches to visit",
                            "How can I make this trip more budget-friendly?"
                          ].map((suggestion, i) => (
                            <button
                              key={i}
                              onClick={() => setQueryPrompt(suggestion)}
                              className="px-4 py-2 text-sm bg-teal-50 text-teal-700 rounded-full hover:bg-teal-100 transition-colors border border-teal-100"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {conversation.map((message, i) => (
                          <div
                            key={i}
                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-sm ${
                                message.role === 'user'
                                  ? 'bg-teal-100 text-teal-900 rounded-tr-none'
                                  : 'bg-white text-gray-900 rounded-tl-none border border-teal-100'
                              }`}
                            >
                              <p className="text-sm">{message.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 border-t border-teal-100 bg-white">
                    <form onSubmit={handleAskAI} className="flex">
                      <input
                        type="text"
                        value={queryPrompt}
                        onChange={(e) => setQueryPrompt(e.target.value)}
                        placeholder="Ask for recommendations or changes..."
                        className="flex-1 px-4 py-3 border border-teal-200 rounded-l-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm"
                      />
                      <button
                        type="submit"
                        className="px-4 py-3 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700 transition-colors shadow-sm"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIItineraryAssistant;