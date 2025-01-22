import React from 'react';
import CustomButton from './CustomButton';

export default function CardTB({ imageSrc, title, content, buttonText }) {
  return (
    <div className="max-w-sm mx-auto mb-8 w-full md:w-80 h-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full h-48 md:h-56 overflow-hidden">
        <img src={imageSrc} alt="image" className="w-full h-full object-cover " />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="mb-4" 
        dangerouslySetInnerHTML={{ __html: content }}></p>
       
        <CustomButton text={buttonText} />
      </div>
    </div>
  );
}