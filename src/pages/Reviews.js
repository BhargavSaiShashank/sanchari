import React, { useState } from 'react';

const Reviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      author: 'Sarah Johnson',
      rating: 5,
      date: '2023-10-15',
      comment: 'Excellent service! The travel agent was very knowledgeable and helped us plan the perfect trip.',
    },
    {
      id: 2,
      author: 'Michael Chen',
      rating: 4,
      date: '2023-09-28',
      comment: 'Great experience overall. The itinerary was well-planned and the accommodations were perfect.',
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      rating: 5,
      date: '2023-08-10',
      comment: 'Couldn\'t have asked for a better travel planning experience. Highly recommended!',
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Customer Reviews</h1>
      
      <div className="grid gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{review.author}</h3>
                <p className="text-gray-500">{review.date}</p>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews; 