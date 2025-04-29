/**
 * Travel Agent Response Database
 * 
 * This file contains a comprehensive set of travel-related questions and detailed answers
 * organized by categories for use in the agent chat feature.
 */

const agentResponses = {
  // GREETINGS AND INTRODUCTION
  greetings: {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    response: (agentName) => `Hi there! I'm ${agentName}, your dedicated travel expert. How can I help you plan your perfect trip today?`
  },
  
  introduction: {
    keywords: ['who are you', 'about you', 'your experience', 'tell me about yourself'],
    response: (agent) => `I'm ${agent.name}, a travel expert with ${agent.experience} years of experience. I specialize in ${agent.specializations.join(', ')}. I've helped plan ${agent.tripsPlanned}+ trips for travelers, and I'd be delighted to assist you with your travel needs!`
  },
  
  // DESTINATION RECOMMENDATIONS
  destinationGeneral: {
    keywords: ['destination', 'where', 'place', 'country', 'recommend', 'suggestion', 'where to go'],
    response: `I'd be happy to recommend destinations based on your preferences. Are you interested in beaches, mountains, cultural experiences, wildlife, adventure activities, or perhaps a mix? Also, what's your preferred travel duration and budget range?`
  },
  
  beachDestinations: {
    keywords: ['beach', 'beaches', 'coastal', 'island', 'sea', 'ocean'],
    response: `For beach lovers, I highly recommend Goa, Kerala, and the Andaman Islands in India. Internationally, Bali (Indonesia), Maldives, Seychelles, and Thailand offer stunning beaches with crystal clear waters. Would you prefer a quiet secluded beach or a more lively one with water activities?`
  },
  
  mountainDestinations: {
    keywords: ['mountain', 'mountains', 'hill', 'hills', 'trek', 'hiking', 'snow'],
    response: `For mountain getaways, Himachal Pradesh, Uttarakhand, and Sikkim in India offer breathtaking landscapes. Internationally, Nepal, Switzerland, New Zealand, and Canada have some spectacular mountain experiences. Are you interested in trekking, skiing, or just enjoying the mountain views?`
  },
  
  culturalDestinations: {
    keywords: ['culture', 'heritage', 'history', 'historical', 'temple', 'museum', 'architecture'],
    response: `For cultural experiences, Rajasthan, Varanasi, and Kerala in India are fantastic. Internationally, Japan, Italy, Egypt, Peru, and Turkey have rich historical sites and cultural experiences. Are you interested in ancient ruins, local traditions, or immersive cultural experiences?`
  },
  
  adventureDestinations: {
    keywords: ['adventure', 'activities', 'thrill', 'extreme', 'sports', 'rafting', 'diving', 'skydiving', 'bungee'],
    response: `For adventure travel, consider Rishikesh for rafting, Manali for paragliding, or Andaman for scuba diving in India. Internationally, New Zealand, Costa Rica, South Africa, and Iceland offer thrilling adventures. What kind of adventure activities do you enjoy?`
  },
  
  // BUDGET PLANNING
  budgetGeneral: {
    keywords: ['budget', 'cost', 'price', 'expensive', 'cheap', 'affordable', 'money', 'spending'],
    response: `Budget planning is crucial for a good trip. Typically, international trips can range from ₹50,000 to ₹2,00,000+ per person depending on the destination, duration, and style of travel. Domestic trips might range from ₹15,000 to ₹80,000. Could you share your approximate budget range and trip duration so I can provide tailored recommendations?`
  },
  
  budgetFriendly: {
    keywords: ['low budget', 'cheap', 'affordable', 'budget-friendly', 'economical', 'inexpensive'],
    response: `For budget-friendly travel, Southeast Asia (Thailand, Vietnam), Nepal, and domestic destinations in India offer great value. Consider traveling during shoulder seasons (just before or after peak season), staying in hostels or guesthouses, using public transport, and eating at local establishments. Would you like specific budget recommendations for a particular destination?`
  },
  
  luxuryTravel: {
    keywords: ['luxury', 'high-end', 'premium', 'expensive', 'five star', '5 star', 'vip'],
    response: `For luxury travel, destinations like Maldives, Dubai, Switzerland, and Japan offer exceptional high-end experiences. I can arrange private tours, 5-star accommodations, exclusive experiences, and premium transportation. What aspects of luxury travel are most important to you?`
  },
  
  // ACCOMMODATION
  accommodationGeneral: {
    keywords: ['hotel', 'stay', 'resort', 'accommodation', 'hostel', 'where to stay', 'place to stay', 'lodging'],
    response: `I can help you find the perfect accommodation based on your preferences. Options range from luxury hotels and resorts to boutique properties, serviced apartments, homestays, and budget-friendly hostels. What's your preferred accommodation type, budget range, and are there any specific amenities you require?`
  },
  
  familyAccommodation: {
    keywords: ['family hotel', 'family stay', 'kid friendly', 'child friendly', 'family accommodation', 'family resort'],
    response: `For family stays, I recommend resorts or serviced apartments that offer amenities like swimming pools, kids' activities, and spacious rooms. Many hotel chains like Marriott, Hyatt, and Taj have excellent family-friendly properties. Would you prefer a beach resort, a mountain retreat, or a city hotel for your family?`
  },
  
  luxuryAccommodation: {
    keywords: ['luxury hotel', 'luxury resort', 'luxury accommodation', 'five star hotel', '5 star hotel', 'premium hotel'],
    response: `For luxury accommodations, I can recommend renowned chains like Taj, Oberoi, Four Seasons, and Aman Resorts, or boutique luxury properties depending on your destination. Would you prefer a classic luxury hotel, a boutique property, or perhaps a private villa experience?`
  },
  
  budgetAccommodation: {
    keywords: ['budget hotel', 'cheap hotel', 'affordable accommodation', 'hostel', 'guesthouse', 'budget stay'],
    response: `For budget-friendly accommodations, consider well-rated hostels, guesthouses, homestays, or 3-star hotels. Platforms like Airbnb can also offer good value. Many destinations have excellent budget options that don't compromise on cleanliness and safety. What's your preferred accommodation type?`
  },
  
  // TRANSPORTATION
  transportationGeneral: {
    keywords: ['transport', 'transportation', 'travel', 'commute', 'getting around', 'travel within'],
    response: `Transportation options vary by destination. I can help with flight bookings, train reservations, car rentals, private transfers, or advice on using public transportation. What's your preferred mode of transport, and which specific journey are you planning?`
  },
  
  flights: {
    keywords: ['flight', 'air', 'plane', 'airport', 'airline', 'flying'],
    response: `For flights, I recommend booking 2-3 months in advance for the best rates. Consider flexible dates if possible, and use fare comparison tools. For international flights, mid-week departures often have better rates. Would you like tips for a specific route or airline recommendations?`
  },
  
  trains: {
    keywords: ['train', 'rail', 'railway', 'track', 'metro', 'subway'],
    response: `Train travel can be an excellent way to see the countryside and is quite comfortable in many countries. In India, you can book through IRCTC, while Europe has extensive rail networks with options like Eurail passes. Would you like specific information about train travel in a particular region?`
  },
  
  roadTrips: {
    keywords: ['car', 'drive', 'road trip', 'rental car', 'taxi', 'cab', 'driving', 'road travel'],
    response: `Road trips offer great flexibility. I can help arrange reliable car rentals with or without drivers. International driving permits are needed for many countries. Popular road trip routes include the Golden Triangle in India, Pacific Coast Highway in the US, and the Great Ocean Road in Australia. Do you have a specific region in mind for your road trip?`
  },
  
  // VISA AND DOCUMENTATION
  visaDocumentation: {
    keywords: ['visa', 'passport', 'document', 'documentation', 'requirement', 'permit', 'immigration', 'customs'],
    response: `Visa requirements vary by your nationality and destination. Generally, you'll need a passport valid for at least 6 months beyond your travel dates, visa application forms, photos, proof of accommodation, flight itineraries, and sometimes financial statements. I can provide specific requirements for your destination. Which country are you planning to visit?`
  },
  
  // WEATHER AND SEASONALITY
  weatherSeasonality: {
    keywords: ['weather', 'season', 'best time', 'when to visit', 'climate', 'temperature', 'rainy', 'monsoon', 'summer', 'winter'],
    response: `The best time to visit depends on your destination and preferences. For example, winter (November-February) is ideal for South India, while the mountains are best in summer (April-June). Southeast Asia is wonderful during winter, while Europe shines in summer (June-August). Could you specify which destination you're interested in for more tailored advice?`
  },
  
  // SAFETY CONCERNS
  safety: {
    keywords: ['safe', 'safety', 'dangerous', 'security', 'crime', 'risk', 'danger', 'warning', 'advisory'],
    response: `Safety is a top priority for travel. Most popular tourist destinations maintain good security standards, but it's always wise to take precautions like securing valuables, being aware of your surroundings, and having travel insurance. I can provide specific safety advice for your chosen destination. Which location are you concerned about?`
  },
  
  // TRAVEL INSURANCE
  travelInsurance: {
    keywords: ['insurance', 'medical', 'emergency', 'coverage', 'health insurance', 'travel insurance'],
    response: `Travel insurance is highly recommended for all trips. Look for coverage that includes medical emergencies, trip cancellation, lost baggage, and travel delays. For international travel, ensure you have adequate medical coverage (at least $100,000). Would you like me to recommend some reliable travel insurance providers?`
  },
  
  // FOOD AND DINING
  foodDining: {
    keywords: ['food', 'restaurant', 'cuisine', 'eat', 'dining', 'meal', 'breakfast', 'lunch', 'dinner', 'taste', 'flavors', 'gastronomy'],
    response: `Exploring local cuisine is one of the joys of travel! I can recommend authentic local restaurants, food tours, cooking classes, and must-try dishes based on your destination. I also keep dietary restrictions in mind when making recommendations. Which destination's cuisine are you curious about?`
  },
  
  // ACTIVITIES AND EXPERIENCES
  activitiesExperiences: {
    keywords: ['activity', 'experience', 'things to do', 'attraction', 'sightseeing', 'tour', 'excursion', 'visit'],
    response: `I can suggest a variety of activities based on your interests - from historical tours and museum visits to outdoor adventures, culinary experiences, and local workshops. Early booking is recommended for popular activities, especially during peak seasons. What kind of experiences interest you the most?`
  },
  
  // FAMILY TRAVEL
  familyTravel: {
    keywords: ['family', 'kid', 'child', 'children', 'toddler', 'baby', 'parent', 'family vacation', 'family holiday'],
    response: `Family-friendly destinations include beaches like Goa and Andaman, hill stations like Munnar and Darjeeling, and places with entertainment options like Singapore and Dubai. I recommend accommodations with family amenities, planning a balanced itinerary with kid-friendly activities, and allowing flexibility in your schedule. How old are the children traveling with you?`
  },
  
  // SOLO TRAVEL
  soloTravel: {
    keywords: ['solo', 'alone', 'by myself', 'independent', 'single traveler', 'solo trip'],
    response: `Solo travel can be incredibly rewarding! Popular solo-friendly destinations include Thailand, Japan, New Zealand, and parts of Europe where safety, infrastructure, and ease of meeting other travelers are good. I can suggest accommodations with communal spaces, group tours, and safety tips specifically for solo travelers. Have you traveled solo before?`
  },
  
  // HONEYMOON / ROMANTIC TRAVEL
  romanticTravel: {
    keywords: ['honeymoon', 'romantic', 'couple', 'anniversary', 'engagement', 'wedding trip', 'love', 'romance'],
    response: `For honeymoons or romantic getaways, I recommend destinations like Maldives, Santorini, Bali, or Kerala. I can arrange special experiences like private dinners, couples' spa treatments, and scenic accommodations with views. Would you prefer a beach destination, a cultural city, or perhaps a mountain retreat for your romantic trip?`
  },
  
  // PACKING TIPS
  packingTips: {
    keywords: ['pack', 'luggage', 'what to bring', 'suitcase', 'backpack', 'baggage', 'packing list', 'essentials'],
    response: `Packing essentials vary by destination, but generally include appropriate clothing for the weather, comfortable walking shoes, travel documents, medications, adapters, and toiletries. I can provide a customized packing list based on your specific destination and activities planned. Where are you traveling to, and in which season?`
  },
  
  // LANGUAGE BARRIERS
  languageBarriers: {
    keywords: ['language', 'speak', 'communicate', 'translation', 'barrier', 'local language', 'english', 'foreign language'],
    response: `Language barriers can be navigated with translation apps like Google Translate, learning a few basic phrases, carrying a pocket phrasebook, or booking guided tours. In major tourist areas, English is often understood to some degree. Would you like some useful phrases for a specific destination?`
  },
  
  // CURRENCY AND MONEY
  currencyMoney: {
    keywords: ['currency', 'money', 'exchange', 'cash', 'payment', 'atm', 'card', 'forex', 'exchange rate', 'transaction'],
    response: `For currency exchange, I recommend getting some local currency before your trip, using ATMs at your destination for the best rates, and having a mix of payment options (cash, credit cards). Inform your bank about your travel plans to avoid card blocks. Would you like specific currency advice for your destination?`
  },
  
  // COVID OR HEALTH-RELATED
  healthSafety: {
    keywords: ['covid', 'health', 'vaccination', 'restriction', 'medicine', 'illness', 'disease', 'pandemic', 'vaccine', 'quarantine'],
    response: `Health requirements and restrictions change frequently. Currently, many destinations have relaxed COVID restrictions, but some may require vaccinations or testing. I recommend checking the latest requirements closer to your travel date and considering travel insurance with COVID coverage. Do you have a specific destination in mind?`
  },
  
  // ITINERARY PLANNING
  itineraryPlanning: {
    keywords: ['itinerary', 'plan', 'schedule', 'day', 'how many days', 'agenda', 'timeline', 'program', 'route'],
    response: `I specialize in creating balanced itineraries that mix must-see attractions with off-the-beaten-path experiences and adequate rest time. The ideal trip length varies - major cities usually need 2-4 days, while regions might require 1-2 weeks to explore properly. I can create a customized itinerary based on your interests and pace. Which destination are you planning for?`
  },
  
  // SUSTAINABLE TRAVEL
  sustainableTravel: {
    keywords: ['eco', 'sustainable', 'green', 'responsible', 'environment', 'conservation', 'eco-friendly', 'carbon footprint'],
    response: `Sustainable travel is increasingly important. I can suggest eco-friendly accommodations, low-impact transportation options, responsible tour operators, and ways to support local communities during your travels. Would you like some specific sustainable travel recommendations for your destination?`
  },
  
  // LOCAL CUSTOMS AND ETIQUETTE
  localCustoms: {
    keywords: ['custom', 'etiquette', 'tradition', 'culture', 'behavior', 'respect', 'manners', 'tipping', 'dressing', 'dress code'],
    response: `Understanding local customs enhances your travel experience. This can include appropriate dress codes for religious sites, dining etiquette, greeting customs, tipping practices, and cultural taboos. I can provide specific guidance based on your destination. Which country's customs are you interested in learning about?`
  },
  
  // WORK AND TRAVEL / DIGITAL NOMADS
  digitalNomad: {
    keywords: ['work and travel', 'digital nomad', 'remote work', 'working vacation', 'workation', 'work remotely', 'wifi'],
    response: `For working travelers, key considerations include reliable internet, time zone compatibility, comfortable workspaces, and a reasonable cost of living. Popular digital nomad destinations include Bali, Chiang Mai in Thailand, Lisbon in Portugal, and certain cities in Mexico. Would you like recommendations for specific work-friendly destinations or accommodations?`
  },
  
  // SPECIAL EVENTS AND FESTIVALS
  eventsAndFestivals: {
    keywords: ['event', 'festival', 'celebration', 'carnival', 'fair', 'holiday', 'special occasion', 'new year', 'festival season'],
    response: `Traveling during festivals can provide unique cultural insights. Some notable events include Diwali and Holi in India, Carnival in Brazil, Songkran in Thailand, and Oktoberfest in Germany. Many festivals affect accommodation prices and availability, so early planning is essential. Is there a particular festival or event you're interested in experiencing?`
  },
  
  // AGENT EXPERTISE
  agentExpertise: {
    keywords: ['your expertise', 'your experience', 'your specialty', 'what do you know', 'what are you good at', 'your background', 'your skills', 'agent expertise', 'travel agent experience'],
    response: (agent) => {
      return `As ${agent.name}, I specialize in ${agent.specialty}. I have ${agent.experience} years of experience crafting personalized travel experiences. My expertise includes ${agent.expertise.join(', ')}. I'm particularly knowledgeable about ${agent.favoriteDestinations.join(', ')} and can provide insider tips for these destinations. How can I help with your travel plans today?`;
    }
  },
  
  // ITINERARY OPTIONS
  itineraryOptions: {
    keywords: ['itinerary options', 'travel packages', 'trip options', 'vacation options', 'tour packages', 'travel plans', 'trip suggestions', 'vacation ideas', 'travel recommendations'],
    response: `I can create several types of itineraries based on your preferences:
    
1. Adventure-focused trips with hiking, water sports, and outdoor activities
2. Cultural immersion experiences with local interactions, workshops, and historical sites
3. Relaxation-oriented vacations with spa retreats, beach time, and minimal scheduling
4. Culinary journeys focused on food tours, cooking classes, and regional specialties
5. Family-friendly itineraries with activities for all ages
6. Luxury experiences with premium accommodations and exclusive access

What type of experience are you looking for, and what's your ideal trip duration?`
  },
  
  // FINALIZED TRAVEL PLANS WITH GUIDE PORTFOLIOS
  finalizedPlans: {
    keywords: ['final plan', 'finalize plan', 'finalized itinerary', 'final itinerary', 'complete plan', 'travel plan ready', 'book this trip', 'confirm itinerary', 'approve plan'],
    response: `Perfect! I've finalized your travel plan. Here's a summary of your itinerary:

1. Day 1-2: Arrival and city exploration
2. Day 3-4: Cultural excursions and local experiences
3. Day 5-6: Adventure activities in the surrounding region
4. Day 7: Departure

For this journey, I'd like to introduce you to our expert local guides who will enhance your experience:

**LOCAL GUIDES IN YOUR DESTINATION:**

1. **Vikram Singh** - Cultural Heritage Expert
   • 8+ years of experience
   • Specializes in historical monuments and local traditions
   • Fluent in English, Hindi, and French
   • 98% positive reviews from travelers

2. **Meera Patel** - Adventure Guide
   • Certified mountaineer and wilderness first responder
   • Expert in outdoor activities and nature experiences
   • 6+ years guiding experience in the region
   • Known for customizing experiences to all fitness levels

3. **Rajan Kumar** - Culinary Expert
   • Former chef turned food tour guide
   • Intimate knowledge of local markets and hidden eateries
   • Offers cooking demonstrations with local families
   • Can accommodate all dietary restrictions

Would you like to proceed with booking this itinerary? I can connect you with these guides and begin making reservations for your trip.`
  },
  
  // DEFAULT RESPONSE
  default: {
    response: `That's a great question. I'd be happy to help you with that. Could you provide a bit more detail so I can give you the best personalized advice for your trip?`
  }
};

/**
 * Function to find the most appropriate response for a user message
 * @param {string} userMessage - The message from the user
 * @param {Object} agent - The agent object containing name, experience, etc.
 * @returns {string} The agent's response
 */
export const getAgentResponse = (userMessage, agent) => {
  const lowerCaseMessage = userMessage.toLowerCase();
  
  // Check each category for matching keywords
  for (const category in agentResponses) {
    if (category === 'default') continue;
    
    const responseObj = agentResponses[category];
    
    // Skip if there are no keywords (like in greetings)
    if (!responseObj.keywords) continue;
    
    // Check if any keyword matches the user message
    const hasMatch = responseObj.keywords.some(keyword => 
      lowerCaseMessage.includes(keyword)
    );
    
    if (hasMatch) {
      // If the response is a function, call it with the agent data
      if (typeof responseObj.response === 'function') {
        return responseObj.response(agent);
      }
      return responseObj.response;
    }
  }
  
  // Check for greetings separately (they're simpler)
  if (agentResponses.greetings.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return agentResponses.greetings.response(agent.name);
  }
  
  // Return default response if no match is found
  return agentResponses.default.response;
};

export default agentResponses; 