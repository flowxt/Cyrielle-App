export default function Card({ title, subtitle, image, listItems, buttonText }) {
    return (
      <div className="card bg-white shadow-md rounded-lg p-4 w-[380px] shadow-xl shadow-gray-800 min-h-[450px] flex flex-col justify-between lg:hover:-translate-y-1 lg:hover:scale-105 transition ">
        {/* Titre principal */}
        <h2 className="text-xl font-bold mb-4 text-red-700">{title}</h2>
  
        {/* Image */}
        <img src={image} alt={title} className="rounded-t-lg w-full mb-4" />
  
        {/* Petit titre */}
        <h3 className="text-lg font-semibold mb-2">{subtitle}</h3>
  
        {/* Liste */}
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
  
        {/* Bouton */}
        {buttonText && (
          <button className="mt-4 bg-red-700 text-white px-4 py-2 block mx-auto rounded hover:bg-gray-200 hover:text-gray-800">
            {buttonText}
          </button>
        )}
      </div>
    );
  }