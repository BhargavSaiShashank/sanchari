import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Gift, 
  Star, 
  Calendar, 
  TrendingUp, 
  Zap, 
  Crown, 
  MapPin, 
  CheckCircle, 
  Lock,
  Users,
  MessageSquare,
  Heart,
  Clock
} from 'lucide-react';

const LoyaltyProgram = () => {
  const [userPoints, setUserPoints] = useState(1250);
  const [userLevel, setUserLevel] = useState('Silver');
  const [activeTab, setActiveTab] = useState('overview');
  const [redeemModal, setRedeemModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  
  // Mock achievements
  const userAchievements = [
    { id: 1, name: "First Trip Booked", icon: <Calendar className="w-5 h-5" />, completed: true, points: 100 },
    { id: 2, name: "Left 5 Reviews", icon: <Star className="w-5 h-5" />, completed: true, points: 250 },
    { id: 3, name: "Trip to 3 Countries", icon: <MapPin className="w-5 h-5" />, completed: true, points: 300 },
    { id: 4, name: "Booked 5 Trips", icon: <TrendingUp className="w-5 h-5" />, completed: false, progress: 3, total: 5, points: 500 },
    { id: 5, name: "Referred 3 Friends", icon: <Users className="w-5 h-5" />, completed: false, progress: 1, total: 3, points: 450 },
    { id: 6, name: "Social Media Share", icon: <Heart className="w-5 h-5" />, completed: true, points: 150 },
  ];
  
  // Mock activity history
  const activityHistory = [
    { id: 1, type: 'trip_completed', description: 'Completed Bali Trip', points: 500, date: '2023-11-15' },
    { id: 2, type: 'review', description: 'Left a review for Sarah Johnson', points: 50, date: '2023-11-17' },
    { id: 3, type: 'booking', description: 'Booked Paris Getaway', points: 300, date: '2023-12-05' },
    { id: 4, type: 'referral', description: 'Friend signup: John Smith', points: 200, date: '2023-12-20' },
    { id: 5, type: 'achievement', description: 'Unlocked: Trip to 3 Countries', points: 300, date: '2024-01-10' },
  ];
  
  // Rewards catalog
  const rewards = [
    { 
      id: 1, 
      name: "Airport Lounge Access", 
      description: "One-time access to premium airport lounges", 
      points: 750, 
      type: "travel",
      image: "https://images.unsplash.com/photo-1559240286-5c378b702c01?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    { 
      id: 2, 
      name: "Hotel Upgrade", 
      description: "Room upgrade at participating hotels", 
      points: 1000, 
      type: "accommodation",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    { 
      id: 3, 
      name: "Priority Customer Service", 
      description: "Skip the queue for 3 months", 
      points: 500, 
      type: "service",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    { 
      id: 4, 
      name: "Free Photography Session", 
      description: "1-hour professional photoshoot during your trip", 
      points: 1500, 
      type: "experience",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    { 
      id: 5, 
      name: "Exclusive Tour Access", 
      description: "Access to members-only tours", 
      points: 2000, 
      type: "experience",
      image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
  ];
  
  // Membership tiers
  const membershipTiers = [
    { name: "Bronze", points: 0, perks: ["Basic support", "Points on bookings", "Review points"] },
    { name: "Silver", points: 1000, perks: ["Priority support", "5% more points", "Early access to deals"] },
    { name: "Gold", points: 3000, perks: ["VIP support", "10% more points", "Free cancellation", "Exclusive events"] },
    { name: "Platinum", points: 10000, perks: ["Dedicated agent", "15% more points", "Free upgrades", "Airport transfers"] },
  ];
  
  const handleRedeemReward = (reward) => {
    setSelectedReward(reward);
    setRedeemModal(true);
  };
  
  const confirmRedemption = () => {
    const newPoints = userPoints - selectedReward.points;
    // In a real app, this would call an API to process the redemption
    setUserPoints(newPoints);
    
    // Update user level based on new point total
    if (newPoints >= 10000) setUserLevel('Platinum');
    else if (newPoints >= 3000) setUserLevel('Gold');
    else if (newPoints >= 1000) setUserLevel('Silver');
    else setUserLevel('Bronze');
    
    setRedeemModal(false);
    setSelectedReward(null);
    
    // Show success message
    alert(`Successfully redeemed: ${selectedReward.name}`);
  };
  
  // Calculate user's progress to next tier
  const calculateNextTier = () => {
    const currentTierIndex = membershipTiers.findIndex(tier => tier.name === userLevel);
    if (currentTierIndex < membershipTiers.length - 1) {
      const nextTier = membershipTiers[currentTierIndex + 1];
      return {
        name: nextTier.name,
        pointsNeeded: nextTier.points - userPoints,
        totalPoints: nextTier.points
      };
    }
    return null;
  };
  
  const nextTier = calculateNextTier();
  
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-teal-800/50 before:via-teal-700/40 before:to-emerald-900/60 before:z-0 relative">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white drop-shadow-md">Loyalty Program</h1>
          <p className="mt-2 text-white/90 drop-shadow-md">Earn rewards for your travels and engagement</p>
        </div>
        
        {/* Membership status card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl shadow-xl overflow-hidden mb-8"
        >
          <div className="p-8 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {userLevel} Member
                </h2>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 mr-1 fill-current text-yellow-300" />
                  <span className="text-xl font-semibold">{userPoints} points</span>
                </div>
                {nextTier && (
                  <p>
                    {nextTier.pointsNeeded} more points to {nextTier.name} status
                  </p>
                )}
              </div>
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                {userLevel === 'Bronze' && <Award className="w-10 h-10 text-yellow-300" />}
                {userLevel === 'Silver' && <Award className="w-10 h-10 text-gray-300" />}
                {userLevel === 'Gold' && <Crown className="w-10 h-10 text-yellow-400" />}
                {userLevel === 'Platinum' && <Crown className="w-10 h-10 text-blue-300" />}
              </div>
            </div>
            
            {nextTier && (
              <div className="mt-6">
                <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500"
                    style={{ width: `${((userPoints - membershipTiers.find(tier => tier.name === userLevel).points) / (nextTier.totalPoints - membershipTiers.find(tier => tier.name === userLevel).points)) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-white/80">
                  <span>{userLevel}</span>
                  <span>{nextTier.name}</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
        
        {/* Tabs */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'overview' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('rewards')}
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'rewards' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Rewards
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'achievements' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Achievements
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'history' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Activity
            </button>
          </div>
          
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Membership Benefits</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {membershipTiers.map((tier) => (
                    <div 
                      key={tier.name}
                      className={`p-4 rounded-lg border-2 ${
                        tier.name === userLevel 
                          ? 'border-teal-500 bg-teal-50'
                          : userPoints >= tier.points
                            ? 'border-green-200 bg-green-50'
                            : 'border-gray-200'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium text-gray-900">{tier.name}</h4>
                        {tier.name === userLevel && (
                          <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{tier.points} points</p>
                      <ul className="space-y-2">
                        {tier.perks.map((perk, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Ways to Earn Points</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: "Complete a Trip", points: "300-500", icon: <MapPin className="w-5 h-5" /> },
                    { name: "Write Reviews", points: "50 each", icon: <Star className="w-5 h-5" /> },
                    { name: "Book with the Same Agent", points: "100 bonus", icon: <Users className="w-5 h-5" /> },
                    { name: "Complete Achievements", points: "Varies", icon: <Award className="w-5 h-5" /> },
                    { name: "Refer Friends", points: "200 each", icon: <Heart className="w-5 h-5" /> },
                    { name: "Engage with Content", points: "10-50", icon: <MessageSquare className="w-5 h-5" /> },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-teal-100 text-teal-600 rounded-full">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-teal-600">{item.points} points</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Rewards Tab */}
            {activeTab === 'rewards' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Available Rewards</h3>
                  <div className="flex items-center bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                    <Zap className="w-4 h-4 mr-1" />
                    <span className="font-medium">{userPoints} points available</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rewards.map((reward) => (
                    <motion.div
                      key={reward.id}
                      whileHover={{ scale: 1.03 }}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={reward.image}
                          alt={reward.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{reward.name}</h4>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full capitalize">
                            {reward.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-teal-600">
                            <Gift className="w-4 h-4 mr-1" />
                            <span className="font-medium">{reward.points} points</span>
                          </div>
                          <button
                            onClick={() => handleRedeemReward(reward)}
                            disabled={userPoints < reward.points}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                              userPoints >= reward.points
                                ? 'bg-teal-600 text-white hover:bg-teal-700'
                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            {userPoints >= reward.points ? 'Redeem' : 'Not enough points'}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div>
                <h3 className="text-lg font-semibold mb-6">Your Achievements</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userAchievements.map((achievement) => (
                    <motion.div
                      key={achievement.id}
                      whileHover={{ scale: 1.02 }}
                      className={`p-4 border-2 rounded-lg ${
                        achievement.completed 
                          ? 'border-green-200 bg-green-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${
                            achievement.completed
                              ? 'bg-green-100 text-green-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {achievement.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{achievement.name}</h4>
                            <div className="flex items-center mt-1">
                              <Gift className="w-4 h-4 mr-1 text-teal-600" />
                              <span className="text-sm text-teal-600">
                                {achievement.points} points
                              </span>
                            </div>
                          </div>
                        </div>
                        {achievement.completed ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <div className="text-right">
                            <span className="text-sm font-medium text-gray-700">
                              {achievement.progress}/{achievement.total}
                            </span>
                            <div className="mt-1 h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-teal-600"
                                style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-md font-semibold mb-4">Locked Achievements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: "Elite Traveler", description: "Book 10 premium trips", points: 1000 },
                      { name: "Globe Trotter", description: "Visit 10 different countries", points: 1500 },
                      { name: "Social Butterfly", description: "Refer 10 friends", points: 2000 },
                    ].map((locked, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-100 border border-gray-200 rounded-lg relative overflow-hidden"
                      >
                        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                          <div className="flex flex-col items-center">
                            <Lock className="w-6 h-6 text-gray-400" />
                            <span className="text-sm text-gray-500 mt-1">Locked</span>
                          </div>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-1">{locked.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{locked.description}</p>
                        <div className="flex items-center">
                          <Gift className="w-4 h-4 mr-1 text-gray-400" />
                          <span className="text-sm text-gray-400">
                            {locked.points} points
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Activity History Tab */}
            {activeTab === 'history' && (
              <div>
                <h3 className="text-lg font-semibold mb-6">Activity History</h3>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-12 bg-gray-50 p-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                    <div className="col-span-6">Activity</div>
                    <div className="col-span-2">Date</div>
                    <div className="col-span-2 text-right">Points</div>
                  </div>
                  
                  {activityHistory.map((activity) => (
                    <div 
                      key={activity.id}
                      className="grid grid-cols-12 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <div className="col-span-6 flex items-center">
                        <div className={`p-2 rounded-full mr-3 ${
                          activity.type === 'trip_completed' ? 'bg-green-100 text-green-600' :
                          activity.type === 'review' ? 'bg-yellow-100 text-yellow-600' :
                          activity.type === 'booking' ? 'bg-blue-100 text-blue-600' :
                          activity.type === 'referral' ? 'bg-purple-100 text-purple-600' :
                          'bg-teal-100 text-teal-600'
                        }`}>
                          {activity.type === 'trip_completed' && <MapPin className="w-4 h-4" />}
                          {activity.type === 'review' && <Star className="w-4 h-4" />}
                          {activity.type === 'booking' && <Calendar className="w-4 h-4" />}
                          {activity.type === 'referral' && <Users className="w-4 h-4" />}
                          {activity.type === 'achievement' && <Award className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{activity.description}</p>
                          <p className="text-sm text-gray-500 capitalize">{activity.type.replace('_', ' ')}</p>
                        </div>
                      </div>
                      <div className="col-span-2 flex items-center">
                        <Clock className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">
                          {new Date(activity.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="col-span-2 flex items-center justify-end">
                        <span className="text-sm font-medium text-green-600">+{activity.points}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Redemption Modal */}
      <AnimatePresence>
        {redeemModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Confirm Redemption</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Gift className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{selectedReward?.name}</h4>
                    <p className="text-sm text-gray-600">{selectedReward?.description}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Your current points</span>
                    <span className="font-medium">{userPoints} points</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Reward cost</span>
                    <span className="font-medium text-red-600">-{selectedReward?.points} points</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between items-center font-medium">
                      <span>Remaining points</span>
                      <span>{userPoints - (selectedReward?.points || 0)} points</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-6">
                  Once confirmed, this reward will be added to your account. This action cannot be undone.
                </p>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => setRedeemModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmRedemption}
                    className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                  >
                    Confirm Redemption
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoyaltyProgram; 