import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  DollarSign,
  MapPin,
  MessageSquare,
  Video,
  Phone,
  ArrowRight,
  Check,
  Plane,
  Globe,
  Compass,
  Sun,
  Camera,
  Music,
  Utensils,
  Bed,
  Car,
  Wifi,
  Heart,
  AlertCircle,
  Briefcase,
  Wine,
  Baby,
  Accessibility,
  Languages,
  CreditCard,
  Umbrella,
  Activity,
  Building,
  Home,
  Droplet,
  Bus,
  Package
} from 'lucide-react';

const PlanTrip = () => {
  const { packageName } = useParams();
  const navigate = useNavigate();
  const [tripType, setTripType] = useState('regular');
  const [selectedCommunication, setSelectedCommunication] = useState(null);
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    travelers: '',
    adultsCount: '',
    childrenCount: '',
    infantsCount: '',
    travelClass: '',
    flexibleDates: false,
    preferredAirlines: '',
    accommodationType: [],
    roomPreferences: [],
    hotelAmenities: [],
    localTransport: [],
    airportTransfer: false,
    preferences: [],
    specificActivities: '',
    guidedTours: false,
    dietaryRestrictions: [],
    mealPreferences: [],
    accessibility: '',
    medicalNeeds: '',
    languagePreference: '',
    specialRequirements: '',
    travelInsurance: false,
    visaAssistance: false,
    primaryContact: '',
    emergencyContact: '',
    emergencyPhone: '',
    paymentMethod: '',
    installmentPreference: false
  });

  const preferenceOptions = [
    { id: 'adventure', icon: <Compass className="w-5 h-5" />, label: 'Adventure' },
    { id: 'culture', icon: <Globe className="w-5 h-5" />, label: 'Culture' },
    { id: 'relaxation', icon: <Sun className="w-5 h-5" />, label: 'Relaxation' },
    { id: 'food', icon: <Utensils className="w-5 h-5" />, label: 'Food & Dining' },
    { id: 'photography', icon: <Camera className="w-5 h-5" />, label: 'Photography' },
    { id: 'nightlife', icon: <Music className="w-5 h-5" />, label: 'Nightlife' }
  ];

  const accommodationTypes = [
    { id: 'hotel', icon: <Bed />, label: 'Hotel' },
    { id: 'resort', icon: <Umbrella />, label: 'Resort' },
    { id: 'villa', icon: <Home />, label: 'Villa' },
    { id: 'apartment', icon: <Building />, label: 'Apartment' }
  ];

  const amenities = [
    { id: 'pool', icon: <Droplet />, label: 'Swimming Pool' },
    { id: 'wifi', icon: <Wifi />, label: 'Free WiFi' },
    { id: 'spa', icon: <Heart />, label: 'Spa' },
    { id: 'gym', icon: <Activity />, label: 'Gym' },
    { id: 'restaurant', icon: <Utensils />, label: 'Restaurant' },
    { id: 'bar', icon: <Wine />, label: 'Bar' }
  ];

  const dietaryOptions = [
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'halal', label: 'Halal' },
    { id: 'kosher', label: 'Kosher' },
    { id: 'glutenFree', label: 'Gluten Free' },
    { id: 'dairyFree', label: 'Dairy Free' }
  ];

  const transportOptions = [
    { id: 'rentalCar', icon: <Car />, label: 'Rental Car' },
    { id: 'privateDriver', icon: <Users />, label: 'Private Driver' },
    { id: 'publicTransport', icon: <Bus />, label: 'Public Transport' }
  ];

  const handlePreferenceToggle = (prefId) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.includes(prefId)
        ? prev.preferences.filter(id => id !== prefId)
        : [...prev.preferences, prefId]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveStep(3);
    localStorage.setItem('tripFormData', JSON.stringify(formData));
    navigate('/agent-selection');
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setActiveStep(2);
  };

  const communicationMethods = [
    {
      id: 'chat',
      name: 'Chat',
      icon: <MessageSquare className="w-6 h-6" />,
      description: 'Real-time messaging with travel experts',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'video',
      name: 'Video Call',
      icon: <Video className="w-6 h-6" />,
      description: 'Face-to-face consultation',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'phone',
      name: 'Phone Call',
      icon: <Phone className="w-6 h-6" />,
      description: 'Direct conversation with agents',
      color: 'from-green-500 to-green-600'
    }
  ];

  const handleAccommodationToggle = (typeId) => {
    setFormData(prev => ({
      ...prev,
      accommodationType: prev.accommodationType.includes(typeId)
        ? prev.accommodationType.filter(id => id !== typeId)
        : [...prev.accommodationType, typeId]
    }));
  };

  const handleAmenityToggle = (amenityId) => {
    setFormData(prev => ({
      ...prev,
      hotelAmenities: prev.hotelAmenities.includes(amenityId)
        ? prev.hotelAmenities.filter(id => id !== amenityId)
        : [...prev.hotelAmenities, amenityId]
    }));
  };

  const handleTransportToggle = (transportId) => {
    setFormData(prev => ({
      ...prev,
      localTransport: prev.localTransport.includes(transportId)
        ? prev.localTransport.filter(id => id !== transportId)
        : [...prev.localTransport, transportId]
    }));
  };

  const handleDietaryToggle = (dietaryId) => {
    setFormData(prev => ({
      ...prev,
      dietaryRestrictions: prev.dietaryRestrictions.includes(dietaryId)
        ? prev.dietaryRestrictions.filter(id => id !== dietaryId)
        : [...prev.dietaryRestrictions, dietaryId]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Plan Your Dream Journey
          </h1>
          <p className="text-xl text-gray-600">
            {packageName ? "Customize your selected package" : "Let's create your perfect travel experience"}
          </p>
          
          {/* View Template Packages Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/packages')}
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md transform transition-all"
          >
            <Package className="w-5 h-5 mr-2" />
            View Template Packages
          </motion.button>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center relative">
            {[1, 2, 3].map((step) => (
              <motion.div
                key={step}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: step * 0.1 }}
                className={`z-10 flex flex-col items-center ${
                  step <= activeStep ? 'text-indigo-600' : 'text-gray-400'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step <= activeStep
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200'
                }`}>
                  {step}
                </div>
                <span className="mt-2 text-sm font-medium">
                  {step === 1 ? 'Trip Type' : step === 2 ? 'Details' : 'Review'}
                </span>
              </motion.div>
            ))}
            <div className="absolute top-5 left-0 w-full h-1 bg-gray-200">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${(activeStep - 1) * 50}%` }}
                className="h-full bg-indigo-600"
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200/50"
        >
          {/* Trip Type Selection */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Plane className="w-6 h-6 mr-2 text-indigo-600" />
              Choose Your Planning Style
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setTripType('regular')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  tripType === 'regular'
                    ? 'border-indigo-600 bg-indigo-50/50 shadow-lg'
                    : 'border-gray-200 hover:border-indigo-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Regular Planning</h3>
                  {tripType === 'regular' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-indigo-600 text-white p-2 rounded-full"
                    >
                      <Check className="w-4 h-4" />
                    </motion.div>
                  )}
                </div>
                <p className="text-gray-600 text-sm">
                  Connect directly with travel agents for personalized assistance
                </p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setTripType('personalized')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  tripType === 'personalized'
                    ? 'border-indigo-600 bg-indigo-50/50 shadow-lg'
                    : 'border-gray-200 hover:border-indigo-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Personalized Planning</h3>
                  {tripType === 'personalized' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-indigo-600 text-white p-2 rounded-full"
                    >
                      <Check className="w-4 h-4" />
                    </motion.div>
                  )}
                </div>
                <p className="text-gray-600 text-sm">
                  Fill out a detailed form for a customized travel experience
                </p>
              </motion.button>
            </div>
          </div>

          {/* Communication Method Selection */}
          {tripType === 'regular' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 border-b border-gray-200"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choose Communication Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {communicationMethods.map((method) => (
                  <motion.button
                    key={method.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCommunication(method.id)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      selectedCommunication === method.id
                        ? 'border-indigo-600 bg-indigo-50/50 shadow-lg'
                        : 'border-gray-200 hover:border-indigo-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} text-white shadow-lg`}>
                          {method.icon}
                        </div>
                        <h3 className="ml-4 text-lg font-medium text-gray-900">{method.name}</h3>
                      </div>
                      {selectedCommunication === method.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bg-indigo-600 text-white p-2 rounded-full"
                        >
                          <Check className="w-4 h-4" />
                        </motion.div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Personalized Trip Form */}
          {tripType === 'personalized' && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="p-8 space-y-8"
            >
              {/* Basic Travel Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Plane className="w-5 h-5 mr-2 text-indigo-600" />
                  Basic Travel Information
                </h3>
                
                {/* Destination Section */}
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Where would you like to go?
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="Enter your dream destination"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Travel Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Travelers Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adults (12+ years)
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input
                        type="number"
                        name="adultsCount"
                        value={formData.adultsCount}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Children (2-11 years)
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input
                        type="number"
                        name="childrenCount"
                        value={formData.childrenCount}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Infants (0-2 years)
                    </label>
                    <div className="relative">
                      <Baby className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input
                        type="number"
                        name="infantsCount"
                        value={formData.infantsCount}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Budget Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-indigo-600" />
                  Budget Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Budget
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input
                        type="number"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="Enter your total budget"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Payment Method
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      >
                        <option value="">Select payment method</option>
                        <option value="creditCard">Credit Card</option>
                        <option value="bankTransfer">Bank Transfer</option>
                        <option value="paypal">PayPal</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accommodation Preferences */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Bed className="w-5 h-5 mr-2 text-indigo-600" />
                  Accommodation Preferences
                </h3>
                
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Accommodation Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {accommodationTypes.map((type) => (
                      <motion.button
                        key={type.id}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAccommodationToggle(type.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          formData.accommodationType.includes(type.id)
                            ? 'border-indigo-600 bg-indigo-50/50 shadow-md'
                            : 'border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <div className={`p-2 rounded-lg ${
                            formData.accommodationType.includes(type.id)
                              ? 'bg-indigo-600 text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {type.icon}
                          </div>
                          <span className="font-medium text-gray-900">{type.label}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Desired Amenities
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {amenities.map((amenity) => (
                      <motion.button
                        key={amenity.id}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAmenityToggle(amenity.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          formData.hotelAmenities.includes(amenity.id)
                            ? 'border-indigo-600 bg-indigo-50/50 shadow-md'
                            : 'border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            formData.hotelAmenities.includes(amenity.id)
                              ? 'bg-indigo-600 text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {amenity.icon}
                          </div>
                          <span className="font-medium text-gray-900">{amenity.label}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transportation Preferences */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Car className="w-5 h-5 mr-2 text-indigo-600" />
                  Transportation Preferences
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Class
                    </label>
                    <div className="relative">
                      <Plane className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <select
                        name="travelClass"
                        value={formData.travelClass}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      >
                        <option value="">Select class</option>
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="first">First Class</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Airlines (optional)
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="preferredAirlines"
                        value={formData.preferredAirlines}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="Enter preferred airlines"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Local Transportation
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {transportOptions.map((option) => (
                      <motion.button
                        key={option.id}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleTransportToggle(option.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          formData.localTransport.includes(option.id)
                            ? 'border-indigo-600 bg-indigo-50/50 shadow-md'
                            : 'border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            formData.localTransport.includes(option.id)
                              ? 'bg-indigo-600 text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {option.icon}
                          </div>
                          <span className="font-medium text-gray-900">{option.label}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dietary Requirements */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Utensils className="w-5 h-5 mr-2 text-indigo-600" />
                  Dietary Requirements
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {dietaryOptions.map((option) => (
                    <motion.button
                      key={option.id}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleDietaryToggle(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        formData.dietaryRestrictions.includes(option.id)
                          ? 'border-indigo-600 bg-indigo-50/50 shadow-md'
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <span className="font-medium text-gray-900">{option.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Special Requirements */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-indigo-600" />
                  Special Requirements
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Accessibility Needs
                    </label>
                    <div className="relative">
                      <Accessibility className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="accessibility"
                        value={formData.accessibility}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="Any accessibility requirements?"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Language Preference
                    </label>
                    <div className="relative">
                      <Languages className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="languagePreference"
                        value={formData.languagePreference}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="Preferred language for communication"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Any other special requirements or requests..."
                    rows="4"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-indigo-600" />
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Contact Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input
                        type="tel"
                        name="primaryContact"
                        value={formData.primaryContact}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="Your contact number"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="Emergency contact number"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Travel Preferences */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Compass className="w-5 h-5 mr-2 text-indigo-600" />
                  Travel Preferences
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {preferenceOptions.map((option) => (
                    <motion.button
                      key={option.id}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handlePreferenceToggle(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        formData.preferences.includes(option.id)
                          ? 'border-indigo-600 bg-indigo-50/50 shadow-md'
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          formData.preferences.includes(option.id)
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {option.icon}
                        </div>
                        <span className="font-medium text-gray-900">{option.label}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Additional Services */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-indigo-600" />
                  Additional Services
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFormData(prev => ({ ...prev, travelInsurance: !prev.travelInsurance }))}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.travelInsurance
                        ? 'border-indigo-600 bg-indigo-50/50 shadow-md'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Travel Insurance</span>
                      {formData.travelInsurance && (
                        <Check className="w-5 h-5 text-indigo-600" />
                      )}
                    </div>
                  </motion.button>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFormData(prev => ({ ...prev, visaAssistance: !prev.visaAssistance }))}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.visaAssistance
                        ? 'border-indigo-600 bg-indigo-50/50 shadow-md'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Visa Assistance</span>
                      {formData.visaAssistance && (
                        <Check className="w-5 h-5 text-indigo-600" />
                      )}
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg transform transition-all"
                >
                  Continue to Agent Selection
                  <ArrowRight className="ml-2" size={20} />
                </motion.button>
              </div>
            </motion.form>
          )}

          {/* Regular Trip Continue Button */}
          {tripType === 'regular' && selectedCommunication && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 flex justify-end"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.setItem('communicationPreference', selectedCommunication);
                  navigate('/agent-selection');
                }}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg transform transition-all"
              >
                Continue to Agent Selection
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PlanTrip; 