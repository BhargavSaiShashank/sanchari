import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { db } from '../services/firebase';
import { 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  Star,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

const TripPreferences = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    interests: [],
    groupSize: '',
    accommodationPreference: '',
    transportationPreference: '',
    specialRequirements: ''
  });

  const [matchedAgents, setMatchedAgents] = useState([]);
  const [loading, setLoading] = useState(false);

  const interestsOptions = [
    'Adventure',
    'Culture',
    'Food',
    'Relaxation',
    'Shopping',
    'Nature',
    'History',
    'Nightlife'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const findMatchingAgents = async () => {
    setLoading(true);
    try {
      // Query agents based on destination and interests
      const agentsRef = db.collection('agents');
      const snapshot = await agentsRef
        .where('expertise', 'array-contains-any', formData.interests)
        .where('regions', 'array-contains', formData.destination)
        .get();

      const agents = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setMatchedAgents(agents);
    } catch (error) {
      console.error('Error finding matching agents:', error);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      navigate('/login');
      return;
    }

    try {
      // Save trip preferences
      await db.collection('trips').add({
        userId: currentUser.uid,
        ...formData,
        status: 'pending',
        createdAt: new Date()
      });

      // Find matching agents
      await findMatchingAgents();
    } catch (error) {
      console.error('Error saving trip preferences:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tell Us About Your Trip</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Destination</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Budget (USD)</label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Group Size</label>
            <input
              type="number"
              name="groupSize"
              value={formData.groupSize}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Interests</label>
          <div className="flex flex-wrap gap-2">
            {interestsOptions.map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => handleInterestChange(interest)}
                className={`px-4 py-2 rounded-full ${
                  formData.interests.includes(interest)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Accommodation Preference</label>
          <select
            name="accommodationPreference"
            value={formData.accommodationPreference}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select preference</option>
            <option value="budget">Budget</option>
            <option value="mid-range">Mid-range</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Transportation Preference</label>
          <select
            name="transportationPreference"
            value={formData.transportationPreference}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select preference</option>
            <option value="public">Public Transport</option>
            <option value="private">Private Transport</option>
            <option value="mix">Mix of Both</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Special Requirements</label>
          <textarea
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Find Matching Agents'}
        </button>
      </form>

      {matchedAgents.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Recommended Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedAgents.map((agent) => (
              <div key={agent.id} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
                <p className="text-gray-600 mb-2">{agent.bio}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-2">{agent.rating} ({agent.reviews} reviews)</span>
                </div>
                <button
                  onClick={() => navigate(`/agent/${agent.id}`)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TripPreferences; 