import React from 'react';
import CustomButton from './CustomButton';

export default function CardTB({ imageSrc, title, content, buttonText }) {
  return (
    <article className="group flex flex-col h-full shadow-xl rounded-xl overflow-hidden ">
      <img
        alt="image de cohésion d'équipe"
        src={imageSrc}
        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
      />
  
      <div className="p-4 flex flex-col flex-grow">
        <a href="#">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-red-700 font-semibold font-poppins pb-4">{title}</h3>
        </a>
  
        <p className="text-xl mt-2 text-sm/relaxed text-gray-500 flex-grow font-roboto font-light" dangerouslySetInnerHTML={{ __html: content }} />
        
        <CustomButton text={buttonText} additionalClasses="mt-4 lg:text-xl font-semibold self-start" />
      </div>
    </article>
  );
}