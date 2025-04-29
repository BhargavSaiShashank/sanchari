import React, { useState } from 'react';
// Removed unused import of 'motion' from 'framer-motion'
import {
  MapPin,
  Star,
  Check,
  Search,
  ThumbsUp,
  User,
  ArrowLeft,
  Sliders,
  MessageCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GuidePortfolios = ({ destination = "Bali, Indonesia", dates = "Aug 15-22, 2024", agentName = "Sarah Johnson" }) => {
  const navigate = useNavigate();
  const [selectedGuides, setSelectedGuides] = useState([]);
  const [filterLanguage, setFilterLanguage] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterAge, setFilterAge] = useState('');
  // Removed unused state variable 'showFilters'
  const [activeTab, setActiveTab] = useState('agent-recommended');
  const [showPreferenceModal, setShowPreferenceModal] = useState(true);
  const [userPreferences, setUserPreferences] = useState({
    languagePreference: '',
    agePreference: '',
    genderPreference: '',
    experienceLevel: 'any',
    specialtyFocus: [],
  });

  // Mock data for guides - enhanced with additional fields
  const guides = [
    {
      id: 1,
      name: "Wayan Sukerta",
      location: "Bali, Indonesia",
      gender: "Male",
      age: 32,
      rating: 4.9,
      reviews: 128,
      price: "₹2,500/day",
      languages: ["English", "Indonesian", "Japanese"],
      specialties: ["Cultural Heritage", "Nature Trails", "Photography Spots"],
      experience: "8 years",
      tripsGuided: 342,
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      about: "Born and raised in Bali, I have deep knowledge of the island's hidden gems, spiritual traditions, and local culture. I can customize tours based on your interests and ensure you experience authentic Bali.",
      availability: ["2024-08-15", "2024-08-16", "2024-08-18", "2024-08-20"],
      featured: true,
      agentRecommended: true,
      badges: ["Top Rated", "Local Expert"]
    },
    {
      id: 2,
      name: "Ketut Dharma",
      location: "Ubud, Bali",
      gender: "Male",
      age: 45,
      rating: 4.8,
      reviews: 95,
      price: "₹2,200/day",
      languages: ["English", "Indonesian", "German"],
      specialties: ["Art & Craft Tours", "Temple Visits", "Local Cuisine"],
      experience: "6 years",
      tripsGuided: 178,
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      about: "I specialize in cultural and art experiences around Ubud. As an artist myself, I can introduce you to local craftsmen and provide unique insights into Balinese artistic traditions.",
      availability: ["2024-08-16", "2024-08-17", "2024-08-19", "2024-08-21"],
      featured: false,
      agentRecommended: false,
      badges: ["Art Expert"]
    },
    {
      id: 3,
      name: "Made Surya",
      location: "Kuta, Bali",
      gender: "Male",
      age: 29,
      rating: 4.7,
      reviews: 76,
      price: "₹1,800/day",
      languages: ["English", "Indonesian", "Chinese"],
      specialties: ["Surfing Lessons", "Beach Exploration", "Nightlife Tours"],
      experience: "5 years",
      tripsGuided: 156,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      about: "Former professional surfer turned guide, I know every beach and wave in Bali. Perfect for adventure seekers and those looking to experience Bali's famous beach culture.",
      availability: ["2024-08-15", "2024-08-17", "2024-08-18", "2024-08-22"],
      featured: true,
      agentRecommended: true,
      badges: ["Adventure Expert"]
    },
    {
      id: 4,
      name: "Ni Kadek Sekar",
      location: "Denpasar, Bali",
      gender: "Female",
      age: 36,
      rating: 4.9,
      reviews: 112,
      price: "₹2,700/day",
      languages: ["English", "Indonesian", "French"],
      specialties: ["Culinary Tours", "Local Markets", "Cooking Classes"],
      experience: "7 years",
      tripsGuided: 203,
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      about: "Food enthusiast and certified chef specialized in Balinese cuisine. I'll take you on a culinary journey through authentic local markets and teach you how to prepare traditional dishes.",
      availability: ["2024-08-16", "2024-08-19", "2024-08-20", "2024-08-21"],
      featured: true,
      agentRecommended: true,
      badges: ["Culinary Expert", "Top Rated"]
    }
  ];

  // Get all unique languages and specialties for filters
  const allLanguages = [...new Set(guides.flatMap(guide => guide.languages))];
  const allSpecialties = [...new Set(guides.flatMap(guide => guide.specialties))];
  const ageRanges = ["20-30", "30-40", "40-50", "50+"];

  const toggleGuideSelection = (guideId) => {
    if (selectedGuides.includes(guideId)) {
      setSelectedGuides(selectedGuides.filter(id => id !== guideId));
    } else {
      setSelectedGuides([...selectedGuides, guideId]);
    }
  };

  const filteredGuides = guides.filter(guide => {
    let matchesLanguage = true;
    let matchesSpecialty = true;
    let matchesGender = true;
    let matchesAge = true;
    
    if (filterLanguage) {
      matchesLanguage = guide.languages.some(lang => 
        lang.toLowerCase().includes(filterLanguage.toLowerCase())
      );
    }
    
    if (filterSpecialty) {
      matchesSpecialty = guide.specialties.some(specialty => 
        specialty.toLowerCase().includes(filterSpecialty.toLowerCase())
      );
    }

    if (filterGender) {
      matchesGender = guide.gender.toLowerCase() === filterGender.toLowerCase();
    }

    if (filterAge) {
      if (filterAge === "20-30") {
        matchesAge = guide.age >= 20 && guide.age < 30;
      } else if (filterAge === "30-40") {
        matchesAge = guide.age >= 30 && guide.age < 40;
      } else if (filterAge === "40-50") {
        matchesAge = guide.age >= 40 && guide.age < 50;
      } else if (filterAge === "50+") {
        matchesAge = guide.age >= 50;
      }
    }
    
    if (activeTab === 'agent-recommended') {
      return matchesLanguage && matchesSpecialty && matchesGender && matchesAge && guide.agentRecommended;
    }
    
    return matchesLanguage && matchesSpecialty && matchesGender && matchesAge;
  });

  const handleSavePreferences = () => {
    setShowPreferenceModal(false);
    // Normally would save these preferences to user profile/backend
    console.log("Preferences saved:", userPreferences);
  };

  const confirmGuideSelection = () => {
    // In a real application, this would send the selection to the backend
    // and navigate to a confirmation page or back to the itinerary
    alert(`Successfully selected ${selectedGuides.length} guide(s). You'll be able to rate them after your trip.`);
    navigate('/itinerary');
  };

  // Preference Modal Component
  const PreferenceModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
        <div className="flex items-center mb-6">
          <div className="p-2 bg-teal-100 rounded-full mr-3">
            <User className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Your Guide Preferences</h3>
            <p className="text-sm text-gray-600">Help us find the perfect guide for your trip</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Language Preference</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              value={userPreferences.languagePreference}
              onChange={(e) => setUserPreferences({...userPreferences, languagePreference: e.target.value})}
            >
              <option value="">Any Language</option>
              {allLanguages.map((language, index) => (
                <option key={index} value={language}>{language}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender Preference</label>
            <div className="flex space-x-4">
              {["No Preference", "Male", "Female"].map((gender) => (
                <label key={gender} className="flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-teal-600"
                    checked={userPreferences.genderPreference === gender}
                    onChange={() => setUserPreferences({...userPreferences, genderPreference: gender})}
                  />
                  <span className="ml-2 text-sm text-gray-700">{gender}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age Range Preference</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              value={userPreferences.agePreference}
              onChange={(e) => setUserPreferences({...userPreferences, agePreference: e.target.value})}
            >
              <option value="">Any Age</option>
              {ageRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              value={userPreferences.experienceLevel}
              onChange={(e) => setUserPreferences({...userPreferences, experienceLevel: e.target.value})}
            >
              <option value="any">Any Experience Level</option>
              <option value="beginner">Beginner (1-3 years)</option>
              <option value="intermediate">Intermediate (3-6 years)</option>
              <option value="expert">Expert (6+ years)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Interest</label>
            <div className="grid grid-cols-2 gap-2">
              {allSpecialties.map((specialty, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-teal-600"
                    checked={userPreferences.specialtyFocus.includes(specialty)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setUserPreferences({
                          ...userPreferences, 
                          specialtyFocus: [...userPreferences.specialtyFocus, specialty]
                        });
                      } else {
                        setUserPreferences({
                          ...userPreferences,
                          specialtyFocus: userPreferences.specialtyFocus.filter(s => s !== specialty)
                        });
                      }
                    }}
                  />
                  <span className="ml-2 text-sm text-gray-700">{specialty}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSavePreferences}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 to-blue-100">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-teal-500 to-blue-500 p-6 shadow-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate(-1)} className="text-white hover:text-blue-100">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold text-white">Local Guides for {destination || 'Your Trip'}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowPreferenceModal(true)}
              className="flex items-center bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full text-white backdrop-blur-sm transition-colors"
            >
              <Sliders className="h-4 w-4 mr-2" />
              <span>Preferences</span>
            </button>
          </div>
        </div>
      </div>

      {/* Agent Message */}
      {agentName && (
        <div className="max-w-7xl mx-auto mt-6 px-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-teal-100">
            <div className="flex items-start">
              <div className="p-2 bg-teal-100 rounded-full mr-3">
                <MessageCircle className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold text-teal-700">{agentName}</span> has suggested these guides 
                  based on your trip to <span className="font-semibold">{destination}</span> 
                  {dates && ` from ${dates}`}.
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Select a guide that matches your comfort and preferences for a personalized experience!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs and Filters */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex border-b sm:border-b-0">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 font-medium ${
                  activeTab === 'all'
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-500 hover:text-teal-600'
                }`}
              >
                All Guides
              </button>
              <button
                onClick={() => setActiveTab('agent-recommended')}
                className={`px-4 py-2 font-medium ${
                  activeTab === 'agent-recommended'
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-500 hover:text-teal-600'
                }`}
              >
                Agent Recommended
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <select
                className="px-3 py-1.5 bg-gray-100 rounded-full text-sm border-none focus:ring-2 focus:ring-teal-500"
                value={filterLanguage}
                onChange={(e) => setFilterLanguage(e.target.value)}
              >
                <option value="">Language: Any</option>
                {allLanguages.map((language, index) => (
                  <option key={index} value={language}>{language}</option>
                ))}
              </select>
              
              <select
                className="px-3 py-1.5 bg-gray-100 rounded-full text-sm border-none focus:ring-2 focus:ring-teal-500"
                value={filterSpecialty}
                onChange={(e) => setFilterSpecialty(e.target.value)}
              >
                <option value="">Specialty: Any</option>
                {allSpecialties.map((specialty, index) => (
                  <option key={index} value={specialty}>{specialty}</option>
                ))}
              </select>
              
              <select
                className="px-3 py-1.5 bg-gray-100 rounded-full text-sm border-none focus:ring-2 focus:ring-teal-500"
                value={filterGender}
                onChange={(e) => setFilterGender(e.target.value)}
              >
                <option value="">Gender: Any</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              
              <select
                className="px-3 py-1.5 bg-gray-100 rounded-full text-sm border-none focus:ring-2 focus:ring-teal-500"
                value={filterAge}
                onChange={(e) => setFilterAge(e.target.value)}
              >
                <option value="">Age: Any</option>
                {ageRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Listing */}
      <div className="max-w-7xl mx-auto mt-6 px-4 pb-24">
        {filteredGuides.length === 0 ? (
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm text-center">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-xl font-medium text-gray-700">No guides match your filters</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters or preferences</p>
            <button
              onClick={() => {
                setFilterLanguage('');
                setFilterSpecialty('');
                setFilterGender('');
                setFilterAge('');
              }}
              className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide) => (
              <div 
                key={guide.id}
                className={`bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm transition-all 
                  ${selectedGuides.includes(guide.id) ? 'ring-4 ring-teal-500 scale-[1.01]' : 'hover:shadow-md'}
                `}
              >
                <div className="relative">
                  <img 
                    src={guide.image} 
                    alt={guide.name} 
                    className="w-full h-48 object-cover"
                  />
                  {guide.featured && (
                    <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  {guide.agentRecommended && (
                    <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      Recommended
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{guide.name}</h3>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <MapPin className="w-3 h-3 mr-1" /> {guide.location}
                      </p>
                    </div>
                    
                    {guide.badges.map((badge, index) => (
                      <div key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                        {badge}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-amber-500" fill="currentColor" />
                    <span className="text-sm font-medium ml-1">{guide.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({guide.reviews} reviews)</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{guide.gender}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{guide.age} yrs</span>
                  </div>
                  
                  <div className="mt-3 text-sm text-gray-700 line-clamp-2">
                    {guide.about}
                  </div>
                  
                  <div className="mt-3">
                    <p className="text-xs text-gray-600 mb-1">Speaks:</p>
                    <div className="flex flex-wrap gap-1">
                      {guide.languages.map((language, index) => (
                        <span key={index} className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <p className="text-xs text-gray-600 mb-1">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {guide.specialties.map((specialty, index) => (
                        <span key={index} className="inline-block bg-teal-50 text-teal-700 text-xs px-2 py-0.5 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="text-xs text-gray-500">Experience: {guide.experience} years</p>
                      <p className="text-xs text-gray-500">Trips guided: {guide.tripsGuided}</p>
                    </div>
                    <div className="text-teal-600 font-semibold">
                      ${guide.price}/day
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleGuideSelection(guide.id)}
                    className={`mt-4 w-full py-2 rounded-lg transition-colors ${
                      selectedGuides.includes(guide.id)
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {selectedGuides.includes(guide.id) ? (
                      <span className="flex items-center justify-center">
                        <Check className="w-4 h-4 mr-2" />
                        Selected
                      </span>
                    ) : (
                      'Select this Guide'
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating selection summary */}
      {selectedGuides.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 border-t border-gray-200">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-3 sm:mb-0">
              <p className="text-gray-800">
                <span className="font-semibold">{selectedGuides.length}</span> guide{selectedGuides.length !== 1 && 's'} selected
              </p>
              <p className="text-sm text-gray-600">You'll be able to rate and review them after your trip</p>
            </div>
            <button
              onClick={confirmGuideSelection}
              className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors shadow-sm"
            >
              Confirm Selection
            </button>
          </div>
        </div>
      )}

      {/* Preference Modal */}
      {showPreferenceModal && <PreferenceModal />}
    </div>
  );
};

export default GuidePortfolios; 