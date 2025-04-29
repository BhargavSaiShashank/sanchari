import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AgentProfile = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch agent data from your backend
    const fetchAgentData = async () => {
      try {
        // Simulated data for now
        setAgent({
          id,
          name: 'John Doe',
          bio: 'Experienced travel agent specializing in European destinations',
          rating: 4.8,
          reviews: 120,
          specialties: ['Europe', 'Adventure', 'Luxury'],
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching agent data:', error);
        setLoading(false);
      }
    };

    fetchAgentData();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <div className="bg-gray-200 h-64 rounded-lg"></div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">{agent.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">★</span>
              <span className="ml-2">{agent.rating} ({agent.reviews} reviews)</span>
            </div>
            <p className="text-gray-600 mb-4">{agent.bio}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {agent.specialties.map((specialty, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {specialty}
                </span>
              ))}
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile; 