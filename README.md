# KR0355: Digital Marketplace for Personalized Travel Planning

A full-stack web application for personalized travel planning with real-time collaboration features.

## Features

- User and Agent Authentication
- Trip Preference Form
- Agent Matching System
- Real-time Chat and Video Collaboration
- Itinerary Builder
- Dashboard Tracking
- Push Notifications
- Review System
- Smart Suggestions
- Voice Assistant Trip Planning
- Photographer Booking
- Filtered Guide Portfolios

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React
- Web Speech API

### Backend
- Firebase Authentication
- Firestore
- Realtime Database
- Cloud Messaging
- Hosting

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── services/          # Firebase and API services
├── context/           # React context providers
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── assets/            # Static assets
└── styles/            # Global styles
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your Firebase configuration
4. Start the development server:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file with the following variables:

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

## License

MIT 