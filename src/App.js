import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ChatProvider } from './context/ChatContext';
import { NotificationProvider } from './context/NotificationContext';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TripPreferences from './pages/TripPreferences';
import AgentProfile from './pages/AgentProfile';
import ItineraryBuilder from './pages/ItineraryBuilder';
import Chat from './pages/Chat';
import Reviews from './pages/Reviews';
import PhotographerBooking from './pages/PhotographerBooking';
import TripCategories from './pages/TripCategories';
import PlanTrip from './pages/PlanTrip';
import AgentSelection from './pages/AgentSelection';
import TemplatePackages from './pages/TemplatePackages';
import LoyaltyProgram from './pages/LoyaltyProgram';
import AdminDashboard from './pages/AdminDashboard';
import GroupTripCollaboration from './pages/GroupTripCollaboration';
import AIItineraryAssistant from './pages/AIItineraryAssistant';
import GuidePortfolios from './pages/GuidePortfolios';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <NotificationProvider>
          <Router>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/trip-categories" element={<TripCategories />} />
                  <Route path="/plan-trip/:category/:packageName?" element={<PlanTrip />} />
                  <Route path="/preferences" element={<TripPreferences />} />
                  <Route path="/agent/:id" element={<AgentProfile />} />
                  <Route path="/itinerary" element={<ItineraryBuilder />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/photographer" element={<PhotographerBooking />} />
                  <Route path="/plan-trip" element={<PlanTrip />} />
                  <Route path="/agent-selection" element={<AgentSelection />} />
                  <Route path="/packages" element={<TemplatePackages />} />
                  <Route path="/loyalty" element={<LoyaltyProgram />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/group-trip" element={<GroupTripCollaboration />} />
                  <Route path="/ai-assistant" element={<AIItineraryAssistant />} />
                  <Route path="/guide-portfolios" element={<GuidePortfolios />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </NotificationProvider>
      </ChatProvider>
    </AuthProvider>
  );
}

export default App;