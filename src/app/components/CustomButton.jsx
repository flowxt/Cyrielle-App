import React from 'react';

const CustomButton = ({ text, additionalClasses }) => {
  return (
    <button className={`mt-6 px-4 py-2 block mx-auto rounded font-poppins ${additionalClasses} bg-red-800 text-white hover:bg-red-700 hover:text-gray-200`}>
      {text}
    </button>
  );
};

export default CustomButton;