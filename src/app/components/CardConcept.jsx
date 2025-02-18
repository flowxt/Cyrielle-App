import React from "react";
import { motion } from "framer-motion";

const CardConcept = ({ image, title, paragraph, listItems }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.98 }}
      className="max-w-sm rounded-lg overflow-hidden shadow-md m-4 bg-white"
    >
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="text-xl mb-2 text-red-700 bg-gray-400 text-center font-poppins font-light">
          {title}
        </div>
        <p className="text-gray-600 text-base font-roboto font-light">
          {paragraph.split("\n").map((line, index) => (
            <span key={index}>
              {line.split("**").map((part, i) =>
                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
              )}
              <br />
            </span>
          ))}
        </p>
        <ul className=" list-inside mt-4 text-gray-600 list-none">
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
    </motion.div>
  );
};

export default CardConcept;