import React from 'react';

const CustomButton = ({ text, additionalClasses }) => {
  return (
    <button className={`mt-6 bg-red-800 text-white px-4 py-2 block mx-auto rounded hover:bg-red-700 hover:text-gray-200 font-poppins ${additionalClasses}`}>
      {text}
    </button>
  );
};

export default CustomButton;