import React, { useState, useEffect } from 'react';
import './RecommendedVideos.css';
import VideoCard from '../VideoCard/VideoCard.js';
import VideoPlayer from '../VideoPlayer/VideoPlayer.js'

import apiKey from '../../api/apiKey';
import YouTube from '../../api/youtube';

function RecommendedVideos(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

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
    }
    fetchData();
  }, [props.search])

  if(selectedVideo !== null) {
    return (
      <React.Fragment>
      <div className="recommendedVideos">
        {/* current video */}
        <VideoPlayer video={selectedVideo} />
        
        <h2>Recommended</h2>
        <div className="recommendedVideos__videos">
          {videos && videos.map((video, index) => {
            return <VideoCard 
                      onClick={(selectedVideo) => {console.log('selected video:', selectedVideo); return setSelectedVideo(selectedVideo)}} 
                      video={video} 
                      key={index} 
                    />
          })}
        </div>
      </div>
      </React.Fragment>
    );
  } else {
      return (
        <div className="recommendedVideos">
          <h2>Recommended</h2>
          <div className="recommendedVideos__videos">
            {videos && videos.map((video, index) => {
              return <VideoCard 
                        onClick={(selectedVideo) => {console.log('selected video:', selectedVideo); return setSelectedVideo(selectedVideo)}} 
                        video={video} 
                        key={index} 
                      />
            })}
          </div>
        </div>
      );
  }
}

export default RecommendedVideos
