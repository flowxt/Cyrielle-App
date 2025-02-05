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

<<<<<<< HEAD
export default GoogleReviews;
=======
export default GoogleReviews;


// 'use client'; // Marque le composant comme côté client

// import { useState, useEffect } from 'react';

// const GoogleReviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch('https://places.googleapis.com/v1/places/ChIJj_8jHo12DWARSMt8YL8SQ4A?fields=reviews&key=ICI API KEY');
//         const data = await response.json();
//         if (data.reviews) {
//           setReviews(data.reviews);
//         } else {
//           throw new Error('Aucun avis trouvé');
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   if (loading) {
//     return <div className="text-center p-4">Chargement des avis...</div>;
//   }

//   if (error) {
//     return <div className="text-center p-4 text-red-500">{error}</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">Avis Google</h2>
//       <div className="space-y-4">
//         {reviews.map((review, index) => (
//           <div key={index} className="p-4 border rounded-lg shadow-md hover:bg-gray-100">
//             <div className="flex items-center mb-2">
              
//               <div>
//                 <p className="font-semibold">{review.authorAttribution.displayName}</p>
//                 {/* Formater la date de publication */}
//                 <p className="text-gray-500 text-sm">
//                   {review.publishTime ? new Date(review.publishTime).toLocaleDateString() : 'Date non disponible'}
//                 </p>
//               </div>
//             </div>
//             {/* Affichage du texte de l'avis */}
//             <p className="text-gray-800">
//               {review.text?.text ? review.text.text : 'Avis non disponible'}
//             </p>
//             <div className="flex items-center mt-2">
//               <span className="text-yellow-500">★</span>
//               <p className="ml-1">{review.rating}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GoogleReviews;
>>>>>>> eaa33ae (api)
