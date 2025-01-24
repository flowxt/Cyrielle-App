import Image from "next/image";
import CustomButton from "./CustomButton";

const Section = ({ 
  title, 
  subtitle, 
  paragraphs, 
  buttonText, 
  imageSrc, 
  imageAlt, 
  textHighlight 
}) => {
  return (
    <section>
      <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-200 to-gray-400">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none text-center md:text-left mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl font-poppins pb-4">
                {title} <strong className="text-red-600">{textHighlight}</strong>
              </h2>

              <p className="mt-4 text-gray-700 lg:text-2xl font-roboto font-light">
                {paragraphs.map((paragraph, index) => (
                  <span key={index}>
                    {paragraph}
                    <br /><br />
                  </span>
                ))}
              </p>

              <div className="flex justify-center md:justify-start">
                <CustomButton text={buttonText} />
              </div>
            </div>
          </div>

          <div className="order-first md:order-last">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="rounded"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;