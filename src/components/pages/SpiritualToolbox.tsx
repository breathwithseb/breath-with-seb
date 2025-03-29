import React, { useState, useEffect } from "react";
import axios from "axios";

import '../../styles/SpiritualToolbox.css'; // Make sure to create this CSS file for styling

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.REACT_APP_CHANNEL_ID;

const MAX_RESULTS = 10;

const SpiritualToolbox: React.FC = () => {
  const [videos, setVideos] = useState<{ id: string; title: string; thumbnail: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            channelId: CHANNEL_ID,
            part: "snippet",
            maxResults: MAX_RESULTS,
            type: "video",
          },
        });

        const videoData = response.data.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));

        setVideos(videoData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <p>Loading videos...</p>;
  if (error) return <p>Failed to load videos. Please try again later.</p>;

  return (
    <div className="toolbox-container">
      <h2>Spiritual Toolbox</h2>
      <div className="video-carousel">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <img src={video.thumbnail} alt={video.title} className="thumbnail" />
            <p>{video.title}</p>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#333" }}
            >
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpiritualToolbox;