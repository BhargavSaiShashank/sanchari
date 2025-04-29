import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  LineChart,
  PieChart,
  Users,
  Briefcase,
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Star,
  Filter,
  ChevronDown,
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('last30Days');
  
  // Mock data - in a real application this would come from an API/backend
  const analytics = {
    totalUsers: 2543,
    totalAgents: 87,
    totalBookings: 4328,
    revenue: 523950,
    userGrowth: 16.8,
    bookingGrowth: 12.3,
    revenueGrowth: 22.5,
    popularDestinations: [
      { name: 'Bali, Indonesia', bookings: 428, growth: 24 },
      { name: 'Paris, France', bookings: 356, growth: 12 },
      { name: 'Tokyo, Japan', bookings: 287, growth: 18 },
      { name: 'New York, USA', bookings: 245, growth: 8 },
      { name: 'Rome, Italy', bookings: 214, growth: 15 }
    ],
    topAgents: [
      { id: 1, name: 'Sarah Johnson', rating: 4.9, bookings: 87, revenue: 124500 },
      { id: 2, name: 'Michael Chen', rating: 4.8, bookings: 76, revenue: 108000 },
      { id: 3, name: 'Emily Rodriguez', rating: 4.9, bookings: 65, revenue: 98500 },
      { id: 4, name: 'David Kim', rating: 4.7, bookings: 54, revenue: 82000 },
      { id: 5, name: 'Lisa Patel', rating: 4.8, bookings: 48, revenue: 76500 }
    ],
    // Mock data for charts
    chartData: {
      bookings: [
        { date: '2023-01', count: 230 },
        { date: '2023-02', count: 285 },
        { date: '2023-03', count: 320 },
        { date: '2023-04', count: 356 },
        { date: '2023-05', count: 390 },
        { date: '2023-06', count: 428 }
      ],
      users: [
        { date: '2023-01', count: 1850 },
        { date: '2023-02', count: 1950 },
        { date: '2023-03', count: 2080 },
        { date: '2023-04', count: 2190 },
        { date: '2023-05', count: 2340 },
        { date: '2023-06', count: 2543 }
      ],
      tripTypes: [
        { type: 'Adventure', percentage: 28 },
        { type: 'Cultural', percentage: 24 },
        { type: 'Beach', percentage: 22 },
        { type: 'Urban', percentage: 15 },
        { type: 'Rural', percentage: 11 }
      ]
    }
  };
  
  // Helper for formatting numbers
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };
  
  // Mock Chart Components - in a real app use a chart library
  const BookingChart = () => (
    <div className="h-64 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
      <div className="text-center">
        <LineChart className="w-12 h-12 mx-auto text-indigo-600 mb-2" />
        <p className="text-gray-500 text-sm">Booking trends chart would render here</p>
        <p className="text-xs text-gray-400 mt-1">(Using a chart library like Chart.js or Recharts)</p>
      </div>
    </div>
  );
  
  const RevenueChart = () => (
    <div className="h-64 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
      <div className="text-center">
        <BarChart3 className="w-12 h-12 mx-auto text-green-600 mb-2" />
        <p className="text-gray-500 text-sm">Revenue trends chart would render here</p>
        <p className="text-xs text-gray-400 mt-1">(Using a chart library like Chart.js or Recharts)</p>
      </div>
    </div>
  );
  
  const TripTypeChart = () => (
    <div className="h-64 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
      <div className="text-center">
        <PieChart className="w-12 h-12 mx-auto text-purple-600 mb-2" />
        <p className="text-gray-500 text-sm">Trip type distribution chart would render here</p>
        <p className="text-xs text-gray-400 mt-1">(Using a chart library like Chart.js or Recharts)</p>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="mt-2 text-gray-600">Track bookings, user growth, and platform performance</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select 
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="last7Days">Last 7 Days</option>
                <option value="last30Days">Last 30 Days</option>
                <option value="last3Months">Last 3 Months</option>
                <option value="last6Months">Last 6 Months</option>
                <option value="lastYear">Last Year</option>
                <option value="allTime">All Time</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            
            <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50">
              <Download className="w-5 h-5" />
              <span>Export</span>
            </button>
          </div>
        </div>
        
        {/* Key Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { 
              title: 'Total Users',
              value: formatNumber(analytics.totalUsers), 
              icon: <Users className="w-8 h-8 text-blue-500" />,
              change: analytics.userGrowth,
              changeLabel: 'vs. last period',
              bgColor: 'bg-blue-50'
            },
            { 
              title: 'Total Bookings',
              value: formatNumber(analytics.totalBookings), 
              icon: <Briefcase className="w-8 h-8 text-indigo-500" />,
              change: analytics.bookingGrowth,
              changeLabel: 'vs. last period',
              bgColor: 'bg-indigo-50'
            },
            { 
              title: 'Total Revenue',
              value: `$${formatNumber(analytics.revenue)}`, 
              icon: <DollarSign className="w-8 h-8 text-green-500" />,
              change: analytics.revenueGrowth,
              changeLabel: 'vs. last period',
              bgColor: 'bg-green-50'
            },
            { 
              title: 'Travel Agents',
              value: formatNumber(analytics.totalAgents), 
              icon: <Users className="w-8 h-8 text-purple-500" />,
              change: 8.5,
              changeLabel: 'vs. last period',
              bgColor: 'bg-purple-50'
            }
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl shadow-sm border border-gray-100 ${metric.bgColor}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 text-sm">{metric.title}</p>
                  <h3 className="text-2xl font-bold mt-1 text-gray-900">{metric.value}</h3>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {metric.icon}
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                {metric.change > 0 ? (
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={metric.change > 0 ? 'text-green-600' : 'text-red-600'}>
                  {metric.change}%
                </span>
                <span className="ml-1 text-gray-500">{metric.changeLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Tabs Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="flex overflow-x-auto">
            {['overview', 'bookings', 'users', 'agents', 'revenue'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Chart Section */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Booking Trends</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Last 6 months</span>
                </div>
              </div>
              <BookingChart />
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Revenue Analysis</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Last 6 months</span>
                </div>
              </div>
              <RevenueChart />
            </div>
          </div>
        )}
        
        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Popular Destinations */}
          <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Popular Destinations</h3>
              <button className="text-indigo-600 text-sm font-medium">View All</button>
            </div>
            
            <div className="space-y-4">
              {analytics.popularDestinations.map((destination, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4 text-gray-700 font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{destination.name}</h4>
                    <p className="text-sm text-gray-500">{destination.bookings} bookings</p>
                  </div>
                  <div className="flex items-center text-sm font-medium text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {destination.growth}%
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Trip Type Distribution */}
          <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Trip Type Distribution</h3>
              <div className="flex items-center text-sm text-gray-500">
                <Filter className="w-4 h-4 mr-1" />
                <span>By bookings</span>
              </div>
            </div>
            
            <TripTypeChart />
            
            <div className="mt-4 grid grid-cols-2 gap-2">
              {analytics.chartData.tripTypes.map((type, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className={`w-3 h-3 rounded-full mr-2 ${
                      index % 5 === 0 ? 'bg-purple-500' :
                      index % 5 === 1 ? 'bg-blue-500' :
                      index % 5 === 2 ? 'bg-green-500' :
                      index % 5 === 3 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                  ></div>
                  <span className="text-xs text-gray-600">{type.type} ({type.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Top Performing Agents */}
          <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Top Agents</h3>
              <button className="text-indigo-600 text-sm font-medium">View All</button>
            </div>
            
            <div className="space-y-4">
              {analytics.topAgents.map((agent, index) => (
                <div 
                  key={agent.id}
                  className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-4 flex items-center justify-center text-gray-700 font-medium">
                    {agent.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h4 className="font-medium text-gray-900">{agent.name}</h4>
                      <div className="flex items-center ml-2">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1">{agent.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{agent.bookings} trips, ${formatNumber(agent.revenue)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;