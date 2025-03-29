import React from "react";
import '../../styles/SpiritualToolbox.css'; // Make sure to create this CSS file for styling

const videos = [
  { id: 1, title: "Breathwork Basics", thumbnail: "path/to/thumbnail1.jpg" },
  { id: 2, title: "Advanced Techniques", thumbnail: "path/to/thumbnail2.jpg" },
  { id: 3, title: "Relaxation Practices", thumbnail: "path/to/thumbnail3.jpg" },
];

const SpiritualToolbox: React.FC = () => {
  return (
    <div className="toolbox-container">
      <h2>Spiritual Toolbox</h2>
      <div className="video-carousel">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <img src={video.thumbnail} alt={video.title} className="thumbnail" />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpiritualToolbox;