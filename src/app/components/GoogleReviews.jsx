"use client";
import React from 'react';

const reviews = [
  {
    author_name: "Jean Dupont",
    profile_photo_url: "https://via.placeholder.com/150",
    relative_time_description: "il y a 2 semaines",
    text: "Excellent service, je recommande vivement !",
    rating: 5,
  },
  {
    author_name: "Marie Curie",
    profile_photo_url: "https://via.placeholder.com/150",
    relative_time_description: "il y a 1 mois",
    text: "Très bonne expérience, personnel très accueillant.",
    rating: 4,
  },
  {
    author_name: "Albert Einstein",
    profile_photo_url: "https://via.placeholder.com/150",
    relative_time_description: "il y a 3 mois",
    text: "Service de qualité, je reviendrai sans hésiter.",
    rating: 5,
  },
  // Ajoutez d'autres avis ici
];

const GoogleReviews = () => {
  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Avis Google</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src={review.profile_photo_url}
                alt={review.author_name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{review.author_name}</h3>
                <p className="text-gray-600">{review.relative_time_description}</p>
              </div>
            </div>
            <p className="text-gray-800">{review.text}</p>
            <div className="mt-4">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleReviews;