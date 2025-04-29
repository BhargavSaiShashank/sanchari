import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Plus, X, Save, ChevronRight, ChevronDown, ChevronUp, Star, GripHorizontal, Globe } from 'lucide-react';

const ItineraryBuilder = () => {
  const [days, setDays] = useState([{ date: '', activities: [] }]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeDay, setActiveDay] = useState(0);
  const [mapView, setMapView] = useState(true);
  const [draggedActivity, setDraggedActivity] = useState(null);
  const [showActivityDetails, setShowActivityDetails] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const mapRef = useRef(null);

  // Mock place data - in a real app this would come from a places API
  const mockPlaces = [
    { id: 1, name: 'Beach Resort', type: 'accommodation', location: { lat: 1.23, lng: 103.45 }, address: '123 Beach Road', rating: 4.7, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Ocean View Restaurant', type: 'dining', location: { lat: 1.24, lng: 103.47 }, address: '45 Ocean Drive', rating: 4.5, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Sunset Beach', type: 'attraction', location: { lat: 1.22, lng: 103.44 }, address: 'Sunset Bay', rating: 4.9, image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Cultural Museum', type: 'attraction', location: { lat: 1.25, lng: 103.48 }, address: '78 Heritage Street', rating: 4.3, image: 'https://images.unsplash.com/photo-1582034438086-9e5543d6b2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: 5, name: 'Mountain Hiking Trail', type: 'activity', location: { lat: 1.27, lng: 103.49 }, address: 'Mountain Park', rating: 4.8, image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: 6, name: 'Downtown Cafe', type: 'dining', location: { lat: 1.23, lng: 103.46 }, address: '96 Main Street', rating: 4.4, image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  ];

  useEffect(() => {
    // Simulating a search API call
    const results = mockPlaces.filter(place => 
      place.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);

  // In a real app, this would initialize a map library like Google Maps or Mapbox
  useEffect(() => {
    if (mapRef.current) {
      // Initialize map here
      console.log('Map initialized');
    }
  }, [mapRef]);

  const addDay = () => {
    setDays([...days, { date: '', activities: [] }]);
    setActiveDay(days.length);
  };

  const addActivity = (activity, dayIndex) => {
    const newDays = [...days];
    // Convert API place to activity format with time
    const newActivity = {
      id: activity.id,
      name: activity.name,
      location: activity.location,
      address: activity.address,
      image: activity.image,
      time: '',
      duration: '1 hour',
      notes: '',
      type: activity.type
    };
    newDays[dayIndex].activities.push(newActivity);
    setDays(newDays);
    setIsSaved(false);
  };

  const removeActivity = (dayIndex, activityIndex) => {
    const newDays = [...days];
    newDays[dayIndex].activities.splice(activityIndex, 1);
    setDays(newDays);
    setIsSaved(false);
  };

  const handleDateChange = (date, dayIndex) => {
    const newDays = [...days];
    newDays[dayIndex].date = date;
    setDays(newDays);
    setIsSaved(false);
  };

  const handleActivityChange = (dayIndex, activityIndex, field, value) => {
    const newDays = [...days];
    newDays[dayIndex].activities[activityIndex][field] = value;
    setDays(newDays);
    setIsSaved(false);
  };

  const handleDragStart = (dayIndex, activityIndex) => {
    setDraggedActivity({ dayIndex, activityIndex });
  };

  const handleDragOver = (e, dayIndex, activityIndex) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetDayIndex, targetActivityIndex) => {
    e.preventDefault();
    
    if (draggedActivity) {
      const { dayIndex: sourceDayIndex, activityIndex: sourceActivityIndex } = draggedActivity;
      
      // Make a copy of days
      const newDays = [...days];
      
      // Get the activity being dragged
      const activity = newDays[sourceDayIndex].activities[sourceActivityIndex];
      
      // Remove the activity from its original position
      newDays[sourceDayIndex].activities.splice(sourceActivityIndex, 1);
      
      // Insert the activity at the new position
      if (targetActivityIndex !== undefined) {
        newDays[targetDayIndex].activities.splice(targetActivityIndex, 0, activity);
      } else {
        newDays[targetDayIndex].activities.push(activity);
      }
      
      setDays(newDays);
      setDraggedActivity(null);
      setIsSaved(false);
    }
  };

  const saveItinerary = () => {
    // In a real app, this would save to backend/database
    console.log('Saving itinerary:', days);
    setIsSaved(true);
    // Show success notification
    alert('Itinerary saved successfully!');
  };

  const activityTypeIcons = {
    accommodation: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21H21M3 18H21M6 18V13.5C6 12.8096 6 12.4644 6.16853 12.2346C6.24149 12.1281 6.3281 12.0415 6.43466 11.9685C6.66444 11.8 6.96 11.8 7.55111 11.8H15.4489C16.04 11.8 16.3356 11.8 16.5653 11.9685C16.6719 12.0415 16.7585 12.1281 16.8315 12.2346C17 12.4644 17 12.8096 17 13.5V18M10.5 11.8V8.2M19.5 18V8.2C19.5 7.0799 19.5 6.51984 19.2275 6.09202C19.0399 5.7157 18.7843 5.46005 18.408 5.27248C17.9802 5 17.4201 5 16.3 5H7.7C6.5799 5 6.01984 5 5.59202 5.27248C5.21571 5.46005 4.96005 5.7157 4.77248 6.09202C4.5 6.51984 4.5 7.0799 4.5 8.2V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    dining: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 10H5M21 21L16.5 13.5M3 21L7.5 13.5M6 7L6.01 7M10 7L10.01 7M14 7L14.01 7M18 7L18.01 7M5.5 4C6.1811 2.47992 7.63523 1.35109 9.35641 1.08268C11.0776 0.814266 12.8343 1.41192 14 2.67317C15.1657 1.41192 16.9224 0.814266 18.6436 1.08268C20.3648 1.35109 21.8189 2.47992 22.5 4C22.6699 4.45849 22.778 4.9373 22.8213 5.42504C22.9207 6.53908 22.5587 7.64673 21.8324 8.48482C21.1061 9.32292 20.0755 9.82508 19 9.9M5 9.9C3.92454 9.82508 2.89391 9.32292 2.16762 8.48482C1.44133 7.64673 1.07926 6.53908 1.17871 5.42504C1.22197 4.9373 1.33009 4.45849 1.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    attraction: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9L12 3L22 9M2 9V19.5M2 9L12 15M12 15L22 9M12 15V21M22 9V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    activity: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.83233 13C2.35176 14.9279 2.5153 17.2564 4 19C5.90344 21.3306 9.70947 22.331 12.525 20.6039C13.0255 20.282 13.4749 19.8683 13.8475 19.3923C14.0001 19.1982 14.1435 18.9889 14.2735 18.7675M9.5 7.5L12 5L14.5 7.5M21 12.5C22.1955 10.4003 22.195 7.70538 21 5.5C19.4868 2.7432 15.8293 1.2651 12.9888 2.91871C12.4439 3.25162 11.9602 3.71157 11.5715 4.26275C11.2805 4.68264 11.0333 5.14358 10.835 5.635M9 11L5 16H15L11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  };

  return (
    <div className="min-h-screen bg-gray-50 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-no-repeat bg-center bg-opacity-50 before:content-[''] before:absolute before:inset-0 before:bg-white before:bg-opacity-90 before:z-0 relative">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Build Your Itinerary</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={saveItinerary}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              isSaved ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'
            } transition-colors`}
          >
            <Save className="w-5 h-5" />
            <span>{isSaved ? 'Saved' : 'Save Itinerary'}</span>
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar with days and place search */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="p-5 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Days</h2>
              </div>
              <div className="p-4 space-y-4">
      {days.map((day, dayIndex) => (
                  <div 
                    key={dayIndex}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      activeDay === dayIndex ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveDay(dayIndex)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Day {dayIndex + 1}</h3>
                <input
                        type="date"
                        value={day.date}
                        onChange={(e) => handleDateChange(e.target.value, dayIndex)}
                        className="text-sm p-1 border rounded"
                      />
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {day.activities.length} activities planned
                    </div>
                  </div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={addDay}
                  className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Plus className="w-5 h-5 text-gray-600" />
                  <span>Add Day</span>
                </motion.button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-5 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Find Places</h2>
              </div>
              <div className="p-4">
                <div className="relative mb-4">
                <input
                  type="text"
                    placeholder="Search for places..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <MapPin className="absolute left-3 top-3.5 text-gray-400" size={18} />
                </div>
                
                <div className="space-y-4 max-h-[500px] overflow-y-auto p-1">
                  {searchResults.map((place) => (
                    <motion.div
                      key={place.id}
                      whileHover={{ scale: 1.02 }}
                      className="flex bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => addActivity(place, activeDay)}
                      draggable="true"
                      onDragStart={() => {}}
                    >
                      <div className="w-24 h-24 flex-shrink-0">
                        <img 
                          src={place.image} 
                          alt={place.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 flex-1">
                        <div className="flex items-center space-x-1 mb-1">
                          <div className="p-1 rounded-full bg-blue-100 text-blue-600">
                            {activityTypeIcons[place.type]}
                          </div>
                          <span className="text-xs text-gray-500 capitalize">{place.type}</span>
                        </div>
                        <h3 className="font-medium text-gray-900 line-clamp-1">{place.name}</h3>
                        <p className="text-xs text-gray-600 line-clamp-1">{place.address}</p>
                        <div className="flex items-center mt-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs ml-1">{place.rating}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content area with map and day details */}
          <div className="lg:col-span-2">
            {/* View toggle */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setMapView(true)}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    mapView ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Map View
                </button>
          <button
                  onClick={() => setMapView(false)}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    !mapView ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  List View
          </button>
        </div>
            </div>
            
            {/* Map view */}
            {mapView && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Day {activeDay + 1} Map
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">
                      {days[activeDay].date ? new Date(days[activeDay].date).toLocaleDateString() : 'No date set'}
                    </span>
                  </div>
                </div>
                <div 
                  ref={mapRef}
                  className="h-[400px] bg-gray-100 relative flex items-center justify-center"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleDrop(e, activeDay)}
                >
                  {/* Map placeholder - in a real app this would be an actual map */}
                  <div className="text-center text-gray-500">
                    <Globe className="w-16 h-16 mx-auto mb-2 text-gray-400" />
                    <p>Map View</p>
                    <p className="text-sm">Drag and drop activities here</p>
                    <p className="text-xs mt-2">(In a real app, this would show a map with markers for each activity)</p>
                  </div>
                  
                  {/* Activity markers would be placed here in a real map implementation */}
                </div>
              </div>
            )}
            
            {/* Day activities list */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-5 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Day {activeDay + 1} Activities
                </h2>
              </div>
              <div 
                className="p-4"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, activeDay)}
              >
                {days[activeDay].activities.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>No activities planned for this day.</p>
                    <p className="text-sm">Search for places or drag activities here.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {days[activeDay].activities.map((activity, activityIndex) => (
                      <div
                        key={`${activity.id}-${activityIndex}`}
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        draggable="true"
                        onDragStart={() => handleDragStart(activeDay, activityIndex)}
                        onDragOver={(e) => handleDragOver(e, activeDay, activityIndex)}
                        onDrop={(e) => handleDrop(e, activeDay, activityIndex)}
                      >
                        <div className="flex bg-white">
                          <div className="w-24 h-24 flex-shrink-0 relative">
                            <img 
                              src={activity.image} 
                              alt={activity.name} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-0 right-0 p-1 bg-blue-600 text-white text-xs">
                              {activityIndex + 1}
                            </div>
                          </div>
                          <div className="p-3 flex-1">
                            <div className="flex justify-between">
                              <div>
                                <div className="flex items-center space-x-1 mb-1">
                                  <div className="p-1 rounded-full bg-blue-100 text-blue-600">
                                    {activityTypeIcons[activity.type]}
                                  </div>
                                  <span className="text-xs text-gray-500 capitalize">{activity.type}</span>
                                </div>
                                <h3 className="font-medium text-gray-900">{activity.name}</h3>
                              </div>
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => setShowActivityDetails(showActivityDetails === activityIndex ? null : activityIndex)}
                                  className="p-1 text-gray-400 hover:text-gray-600"
                                >
                                  {showActivityDetails === activityIndex ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </button>
      <button
                                  onClick={() => removeActivity(activeDay, activityIndex)}
                                  className="p-1 text-gray-400 hover:text-red-500"
      >
                                  <X className="w-5 h-5" />
      </button>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 mt-1">
                              <div className="flex items-center text-gray-600">
                                <Clock className="w-4 h-4 mr-1" />
                                <input
                                  type="time"
                                  value={activity.time}
                                  onChange={(e) => handleActivityChange(activeDay, activityIndex, 'time', e.target.value)}
                                  className="text-sm p-1 border rounded w-24"
                                />
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Clock className="w-4 h-4 mr-1" />
                                <select
                                  value={activity.duration}
                                  onChange={(e) => handleActivityChange(activeDay, activityIndex, 'duration', e.target.value)}
                                  className="text-sm p-1 border rounded"
                                >
                                  <option value="30 min">30 min</option>
                                  <option value="1 hour">1 hour</option>
                                  <option value="2 hours">2 hours</option>
                                  <option value="3 hours">3 hours</option>
                                  <option value="4 hours">4 hours</option>
                                  <option value="Full day">Full day</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="w-8 flex items-center justify-center bg-gray-50 cursor-move">
                            <GripHorizontal className="w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                        
                        {/* Expanded view with additional details */}
                        {showActivityDetails === activityIndex && (
                          <div className="p-4 bg-gray-50 border-t border-gray-200">
                            <div className="mb-3">
                              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                              <div className="flex items-center text-gray-600">
                                <MapPin className="w-4 h-4 mr-1" />
                                <p className="text-sm">{activity.address}</p>
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                              <textarea
                                value={activity.notes}
                                onChange={(e) => handleActivityChange(activeDay, activityIndex, 'notes', e.target.value)}
                                placeholder="Add any notes or special instructions..."
                                className="w-full p-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                rows={3}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryBuilder; 