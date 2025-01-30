import PropTypes from "prop-types";
import VideoCard from "./VideoCard";

const VideoSection = ({ title, videos, reverseColors }) => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="flex flex-col md:flex-row">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoSrc={video.videoSrc}
            title={video.title}
            buttonText={video.buttonText}
            backgroundColor={index % 2 === 0 ? (reverseColors ? "bg-red-700" : "bg-white") : (reverseColors ? "bg-white" : "bg-red-700")}
            textColor={index % 2 === 0 ? (reverseColors ? "text-white" : "text-black") : (reverseColors ? "text-black" : "text-white")}
          />
        ))}
      </div>
    </div>
  );
};

VideoSection.propTypes = {
  title: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      videoSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
    })
  ).isRequired,
  reverseColors: PropTypes.bool,
};

export default VideoSection;
