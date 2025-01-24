// Bouton sans l'animation
import React from 'react';

const CustomButton = ({ text, additionalClasses }) => {
  return (
    <button className={`mt-6 px-4 py-2 block mx-auto rounded font-poppins ${additionalClasses} bg-red-800 text-white hover:bg-red-700 hover:text-gray-200`}>
      {text}
    </button>
  );
};

export default CustomButton;

// const CustomButton = ({ text, additionalClasses }) => {
//   return (
//     <button
//       className={`relative mt-6 px-6 py-2 block mx-auto rounded font-poppins text-white 
//       bg-red-800 hover:bg-red-700 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] 
//       transition-transform duration-300 ease-in-out overflow-hidden group 
//       animate-wiggleWithPause ${additionalClasses}`}
//     >
//       <span
//         className="absolute inset-0 rounded border-2 border-red-800 group-hover:border-red-500"
//       ></span>
//       <span className="relative z-10">{text}</span>
//     </button>
//   );
// };

// export default CustomButton;