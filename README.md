#  Sanchari – Personalized Travel Planning Platform

**Problem Statement KR0355 – Soven Developers**  
A digital marketplace connecting travelers with verified, experienced travel agents who design customized itineraries based on user preferences, interests, and budget. Travelers collaborate with agents through chat or video to co-create their ideal journey, with all planning and bookings managed in one platform.

---

##  Overview

**Sanchari** is a travel-tech platform that enables:
- Personalized trip planning with the help of human travel agents
- Real-time collaboration via chat or video
- A unified place for travelers to plan, customize, and manage their travel experiences

Currently, the platform features a fully responsive UI and mapped-out system flow. Backend and AI integrations are scoped and under development.

---

##  Tech Stack

| Layer          | Technology         |
|----------------|--------------------|
| Frontend       | HTML, Tailwind CSS, JavaScript|
| UI/UX Design   | Figma              |
| Version Control| Git, GitHub        |
| Deployment     |  Netlify |
| AI (Planned)   | Groq / OpenAI / Custom LLM prompts |
| Backend (Planned) | Node.js + Express or Flask API |
| DevOps (Planned) | Docker, GitHub Actions |

---

##  Features Implemented

- 🖼️ Clean, modern, responsive UI
- 🧭 User journey mapped for travelers and agents
- 🗺️ Itinerary structure planned
- 🔗 Frontend ready for API hooks

---

##  Features in Progress

- 🔌 Backend integration for agent-traveler communication
- 🤖 AI module for generating personalized itineraries
- 🧾 Booking system and real-time updates
- 🎥 Live chat/video session integration (Twilio or Agora)

---

## 🧭 Project Architecture (Planned)

```plaintext
Frontend (User Interface)
        ↓
Backend API (Trip Data, Booking Info, User Auth)
        ↓
AI Engine (Personalized Itinerary Generator)
        ↓
Database (Traveler Info, Agent Profiles, Itineraries)

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
