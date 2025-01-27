import React from 'react';

const CardConcept = ({ image, title, paragraph, listItems }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md m-4 bg-white ">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2 text-red-700 bg-gray-400 text-center font-poppins font-light ">{title}</div>
        <p className="text-gray-600 text-base font-roboto font-light">
          {paragraph.split('\n').map((line, index) => (
            <span key={index}>
              {line.split('**').map((part, i) => (
                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
              ))}
              <br />
            </span>
          ))}
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600 list-none">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="text-base relative pl-6 before:content-['➤'] before:absolute before:left-0 before:text-red-500 before:animate-move-x"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardConcept;