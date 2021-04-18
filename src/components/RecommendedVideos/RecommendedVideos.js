import { useState, useEffect } from 'react';
import './RecommendedVideos.css';
import VideoCard from '../VideoCard/VideoCard.js';

import apiKey from '../../api/apiKey';
import YouTube from '../../api/youtube';

function RecommendedVideos(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState('');
  const [videoId, setVideoId] = useState('');
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await YouTube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          key: apiKey,
          q: props.search
        }
      })

      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
      setVideoId(response.data.items[1].id.videoId)
    }
    fetchData();
  }, [props.search])


  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {videos && videos.map((video, index) => {
          return <VideoCard onClick={''} video={video} key={index} />
        })}
      </div>
    </div>
  );
}

export default RecommendedVideos
