import PropTypes from "prop-types";

const VideoCard = ({ videoSrc, title, buttonText, backgroundColor, textColor }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-6 ${backgroundColor} w-full`}>
      <video src={videoSrc} controls className="w-full max-w-md rounded-lg shadow-lg" />
      <h3 className={`text-xl font-bold mt-4 ${textColor}`}>{title}</h3>
      <button className={`mt-2 px-6 py-2 border-2 rounded-lg ${textColor} border-${textColor} hover:bg-${textColor} hover:text-white transition`}>
        {buttonText}
      </button>
    </div>
  );
};

VideoCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default VideoCard;
