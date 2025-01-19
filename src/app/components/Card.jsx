import Image from 'next/image';

export default function Card({ title, subtitle, image, listItems, buttonText }) {
  return (
    <div className="card bg-gray-100 shadow-md rounded-lg p-4 w-[380px] shadow-xl shadow-gray-800 min-h-[450px] flex flex-col justify-between lg:hover:-translate-y-1 lg:hover:scale-105 transition duration-500 ease-in-out">
      {/* Titre principal */}
      <h2 className="text-xl font-bold mb-4 text-red-700 font-poppins">{title}</h2>

      {/* Image */}
      <div className="overflow-hidden rounded-t-lg mb-4 h-72 relative">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" objectFit="cover" />
      </div>

      {/* Petit titre */}
      <h3 className="text-lg font-semibold mb-2 font-poppins font-light">{subtitle}</h3>

      {/* Liste */}
      <ul className="list-disc list-inside text-gray-600 mb-4 font-roboto">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Bouton */}
      {buttonText && (
        <button className="mt-4 bg-red-800 text-white px-4 py-2 block mx-auto rounded hover:bg-gray-200 hover:text-gray-800 font-poppins font-semibold   lg:text-xl">
          {buttonText}
        </button>
      )}
    </div>
  );
}