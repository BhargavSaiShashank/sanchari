import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Mail,
  Phone,
  MessageSquare,
  Map,
  Calendar,
  Clock,
  Plus,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Share2,
  Copy,
  Video,
  Save,
  Edit,
  ChevronRight,
  ChevronDown,
  Heart
} from 'lucide-react';

const GroupTripCollaboration = () => {
  const [activeTab, setActiveTab] = useState('plan');
  const [inviteEmail, setInviteEmail] = useState('');
  const [sharedLinkCopied, setSharedLinkCopied] = useState(false);
  
  // Mock data for the group trip
  const [tripData, setTripData] = useState({
    id: 'TRIP-1234',
    name: 'Summer Beach Getaway',
    destination: 'Bali, Indonesia',
    dates: {
      start: '2024-07-15',
      end: '2024-07-25'
    },
    creator: {
      name: 'You',
      email: 'you@sanchari.com'
    },
    members: [
      { id: 1, name: 'You', email: 'you@sanchari.com', status: 'admin', votedItems: [] },
      { id: 2, name: 'Sarah', email: 'sarah@sanchari.com', status: 'joined', votedItems: [1, 3] },
      { id: 3, name: 'Mike', email: 'mike@sanchari.com', status: 'pending', votedItems: [] },
      { id: 4, name: 'Jessica', email: 'jessica@sanchari.com', status: 'joined', votedItems: [2, 4] }
    ],
    activities: [
      { id: 1, name: 'Beach Day at Kuta', votes: 2, status: 'approved', date: '2024-07-16', time: '10:00 AM', duration: '6 hours' },
      { id: 2, name: 'Visit Ubud Monkey Forest', votes: 1, status: 'proposed', date: '2024-07-17', time: '9:00 AM', duration: '3 hours' },
      { id: 3, name: 'Sunrise Hike at Mount Batur', votes: 2, status: 'proposed', date: '2024-07-18', time: '4:00 AM', duration: '5 hours' },
      { id: 4, name: 'Uluwatu Temple Sunset Tour', votes: 3, status: 'approved', date: '2024-07-19', time: '4:00 PM', duration: '4 hours' },
      { id: 5, name: 'Balinese Cooking Class', votes: 0, status: 'proposed', date: '2024-07-20', time: '11:00 AM', duration: '3 hours' }
    ],
    accommodations: [
      { id: 1, name: 'Beach Resort & Spa', votes: 3, status: 'approved', price: '$150/night', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, name: 'Luxury Villa with Private Pool', votes: 1, status: 'proposed', price: '$280/night', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ],
    discussions: [
      { id: 1, user: 'Sarah', message: "I'm so excited for this trip!", timestamp: '2023-12-15T14:30:00Z' },
      { id: 2, user: 'You', message: 'Me too! Any thoughts on activities everyone wants to do?', timestamp: '2023-12-15T14:35:00Z' },
      { id: 3, user: 'Jessica', message: 'I definitely want to visit the Monkey Forest in Ubud!', timestamp: '2023-12-15T14:40:00Z' },
      { id: 4, user: 'You', message: 'Added it to the proposed activities!', timestamp: '2023-12-15T14:45:00Z' },
      { id: 5, user: 'Sarah', message: 'How about a sunset tour at Uluwatu Temple?', timestamp: '2023-12-15T15:00:00Z' }
    ]
  });
  
  const [newMessage, setNewMessage] = useState('');
  const [newActivity, setNewActivity] = useState({
    name: '',
    date: '',
    time: '',
    duration: ''
  });
  
  const handleInviteMember = (e) => {
    e.preventDefault();
    if (!inviteEmail) return;
    
    // In a real app, this would send an invitation email
    const newMember = {
      id: tripData.members.length + 1,
      name: inviteEmail.split('@')[0], // Just for demo
      email: inviteEmail,
      status: 'pending',
      votedItems: []
    };
    
    setTripData({
      ...tripData,
      members: [...tripData.members, newMember]
    });
    
    setInviteEmail('');
    alert(`Invitation sent to ${inviteEmail}`);
  };
  
  const handleRemoveMember = (memberId) => {
    setTripData({
      ...tripData,
      members: tripData.members.filter(member => member.id !== memberId)
    });
  };
  
  const handleAddActivity = (e) => {
    e.preventDefault();
    if (!newActivity.name || !newActivity.date) return;
    
    const newActivityItem = {
      id: tripData.activities.length + 1,
      name: newActivity.name,
      votes: 0,
      status: 'proposed',
      date: newActivity.date,
      time: newActivity.time,
      duration: newActivity.duration
    };
    
    setTripData({
      ...tripData,
      activities: [...tripData.activities, newActivityItem]
    });
    
    setNewActivity({
      name: '',
      date: '',
      time: '',
      duration: ''
    });
  };
  
  const handleVoteActivity = (activityId) => {
    const updatedActivities = tripData.activities.map(activity => {
      if (activity.id === activityId) {
        return {
          ...activity,
          votes: activity.votes + 1
        };
      }
      return activity;
    });
    
    // Update your voted items
    const updatedMembers = tripData.members.map(member => {
      if (member.id === 1) { // 'You' have ID 1 in this demo
        return {
          ...member,
          votedItems: [...member.votedItems, activityId]
        };
      }
      return member;
    });
    
    setTripData({
      ...tripData,
      activities: updatedActivities,
      members: updatedMembers
    });
  };
  
  const handleApproveActivity = (activityId) => {
    const updatedActivities = tripData.activities.map(activity => {
      if (activity.id === activityId) {
        return {
          ...activity,
          status: 'approved'
        };
      }
      return activity;
    });
    
    setTripData({
      ...tripData,
      activities: updatedActivities
    });
  };
  
  const handleRemoveActivity = (activityId) => {
    setTripData({
      ...tripData,
      activities: tripData.activities.filter(activity => activity.id !== activityId)
    });
  };
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage) return;
    
    const newMessageItem = {
      id: tripData.discussions.length + 1,
      user: 'You',
      message: newMessage,
      timestamp: new Date().toISOString()
    };
    
    setTripData({
      ...tripData,
      discussions: [...tripData.discussions, newMessageItem]
    });
    
    setNewMessage('');
  };
  
  const copyShareLink = () => {
    // In a real app, generate a proper sharing link
    const shareLink = `https://sanchari.com/trip/${tripData.id}`;
    navigator.clipboard.writeText(shareLink);
    setSharedLinkCopied(true);
    
    setTimeout(() => {
      setSharedLinkCopied(false);
    }, 2000);
  };
  
  // Convert ISO date to readable format
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Format timestamp for chat messages
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="min-h-screen relative">
      {/* Vibrant background image with proper overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&auto=format&fit=crop&q=85" 
          alt="Vibrant beach background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/20 to-blue-500/30"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Group Trip Header */}
        <div className="bg-white/85 backdrop-blur-md rounded-xl shadow-lg p-6 mb-8 border border-teal-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{tripData.name}</h1>
              <div className="flex items-center mt-2 text-gray-600">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{formatDate(tripData.dates.start)} - {formatDate(tripData.dates.end)}</span>
                <span className="mx-2">•</span>
                <Map className="w-4 h-4 mr-1" />
                <span>{tripData.destination}</span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button 
                onClick={copyShareLink}
                className={`flex items-center px-4 py-2 rounded-lg border ${
                  sharedLinkCopied ? 'bg-teal-50 border-teal-200 text-teal-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {sharedLinkCopied ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 mr-2" />
                    <span>Share Trip</span>
                  </>
                )}
              </button>
              
              <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                <Video className="w-4 h-4 mr-2" />
                <span>Group Call</span>
              </button>
            </div>
          </div>
          
          {/* Trip Members */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Trip Members</h3>
            <div className="flex flex-wrap items-center gap-2">
              {tripData.members.map((member) => (
                <div 
                  key={member.id} 
                  className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
                    member.status === 'admin' ? 'bg-teal-100 text-teal-800' :
                    member.status === 'joined' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  <span>{member.name}</span>
                  {member.id !== 1 && member.status !== 'pending' && (
                    <button 
                      onClick={() => handleRemoveMember(member.id)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              
              <form onSubmit={handleInviteMember} className="flex mt-2 sm:mt-0">
                <input
                  type="email"
                  placeholder="Invite by email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="px-3 py-1.5 border border-gray-300 rounded-l-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-white/85 backdrop-blur-md rounded-xl shadow-lg mb-8 border border-teal-100">
          <div className="flex border-b border-teal-100">
            <button
              onClick={() => setActiveTab('plan')}
              className={`flex-1 py-4 px-6 text-center font-medium border-b-2 ${
                activeTab === 'plan' ? 'text-teal-600 border-teal-600' : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Trip Planning
            </button>
            <button
              onClick={() => setActiveTab('discussion')}
              className={`flex-1 py-4 px-6 text-center font-medium border-b-2 ${
                activeTab === 'discussion' ? 'text-teal-600 border-teal-600' : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Group Discussion
            </button>
            <button
              onClick={() => setActiveTab('accommodations')}
              className={`flex-1 py-4 px-6 text-center font-medium border-b-2 ${
                activeTab === 'accommodations' ? 'text-teal-600 border-teal-600' : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Accommodations
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="mb-8">
          {/* Trip Planning Tab */}
          {activeTab === 'plan' && (
            <div className="bg-white/85 backdrop-blur-md rounded-xl shadow-lg p-6 border border-teal-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Activities & Itinerary</h2>
                <div className="text-sm text-gray-600">
                  Vote on activities you want to do
                </div>
              </div>
              
              {/* Activities List */}
              <div className="space-y-4 mb-8">
                {tripData.activities.map((activity) => (
                  <div 
                    key={activity.id}
                    className={`p-4 rounded-lg border ${
                      activity.status === 'approved' ? 'border-green-200 bg-green-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium text-gray-900">{activity.name}</h3>
                          {activity.status === 'approved' && (
                            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                              Approved
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center mt-2 text-sm text-gray-600">
                          <div className="flex items-center mr-4">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{formatDate(activity.date)}</span>
                          </div>
                          <div className="flex items-center mr-4">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{activity.time}, {activity.duration}</span>
                          </div>
                          <div className="flex items-center mt-1 sm:mt-0">
                            <Users className="w-4 h-4 mr-1" />
                            <span>{activity.votes} votes</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        {!tripData.members[0].votedItems.includes(activity.id) && (
                          <button
                            onClick={() => handleVoteActivity(activity.id)}
                            className="p-2 text-teal-600 hover:bg-teal-50 rounded-full"
                          >
                            <Heart className="w-5 h-5" />
                          </button>
                        )}
                        
                        {activity.status !== 'approved' && (
                          <button
                            onClick={() => handleApproveActivity(activity.id)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-full"
                          >
                            <CheckCircle className="w-5 h-5" />
                          </button>
                        )}
                        
                        <button
                          onClick={() => handleRemoveActivity(activity.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Add Activity Form */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Suggest a New Activity</h3>
                <form onSubmit={handleAddActivity} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Activity Name
                    </label>
                    <input
                      type="text"
                      value={newActivity.name}
                      onChange={(e) => setNewActivity({...newActivity, name: e.target.value})}
                      placeholder="E.g., Sunset Dinner at Beach Restaurant"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        value={newActivity.date}
                        min={tripData.dates.start}
                        max={tripData.dates.end}
                        onChange={(e) => setNewActivity({...newActivity, date: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Time
                      </label>
                      <input
                        type="time"
                        value={newActivity.time}
                        onChange={(e) => setNewActivity({...newActivity, time: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Duration
                      </label>
                      <select
                        value={newActivity.duration}
                        onChange={(e) => setNewActivity({...newActivity, duration: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      >
                        <option value="">Select duration</option>
                        <option value="1 hour">1 hour</option>
                        <option value="2 hours">2 hours</option>
                        <option value="3 hours">3 hours</option>
                        <option value="Half day">Half day</option>
                        <option value="Full day">Full day</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                    >
                      Add Activity
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          
          {/* Discussion Tab */}
          {activeTab === 'discussion' && (
            <div className="bg-white/85 backdrop-blur-md rounded-xl shadow-lg p-6 border border-teal-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Group Discussion</h2>
              
              {/* Messages */}
              <div className="h-96 overflow-y-auto border border-gray-200 rounded-lg p-4 mb-4">
                {tripData.discussions.map((message) => (
                  <div 
                    key={message.id}
                    className={`mb-4 ${message.user === 'You' ? 'text-right' : ''}`}
                  >
                    <div 
                      className={`inline-block max-w-[80%] rounded-lg px-4 py-2 ${
                        message.user === 'You' 
                          ? 'bg-teal-100 text-teal-900' 
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <div className="font-medium text-sm mb-1">
                        {message.user}
                      </div>
                      <p className="text-sm">{message.message}</p>
                      <div className="text-xs text-right mt-1 opacity-70">
                        {formatTimestamp(message.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="flex">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700"
                >
                  Send
                </button>
              </form>
            </div>
          )}
          
          {/* Accommodations Tab */}
          {activeTab === 'accommodations' && (
            <div className="bg-white/85 backdrop-blur-md rounded-xl shadow-lg p-6 border border-teal-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Accommodation Options</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tripData.accommodations.map((accommodation) => (
                  <div 
                    key={accommodation.id}
                    className={`rounded-lg border overflow-hidden ${
                      accommodation.status === 'approved' ? 'border-green-300' : 'border-gray-200'
                    }`}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={accommodation.image}
                        alt={accommodation.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium text-gray-900">{accommodation.name}</h3>
                            {accommodation.status === 'approved' && (
                              <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                                Selected
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{accommodation.price}</p>
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 text-red-500 mr-1" />
                          <span className="text-sm font-medium">{accommodation.votes} votes</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between mt-4">
                        <button className="text-sm text-teal-600 hover:text-teal-800">
                          View Details
                        </button>
                        <div className="space-x-2">
                          <button
                            className="px-3 py-1 text-sm border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50"
                          >
                            Vote
                          </button>
                          {accommodation.status !== 'approved' && (
                            <button
                              className="px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700"
                            >
                              Select
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Add New Accommodation Button */}
                <div className="h-64 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <button className="text-gray-500 hover:text-gray-700 flex flex-col items-center">
                    <Plus className="w-12 h-12 mb-2" />
                    <span>Suggest Accommodation</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupTripCollaboration; 