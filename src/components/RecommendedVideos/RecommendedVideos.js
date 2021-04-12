import { useState, useEffect } from 'react';
import './RecommendedVideos.css';
import VideoCard from '../VideoCard/VideoCard.js';


function RecommendedVideos(props) {
  
  useEffect(() => {

  },[props.search])

  if(props.search.length === 0) {
    return <h1>Search for videos</h1>
  } else {
    return (
      // <h1>{props.search}</h1>
      <div className="recommendedVideos">
        <h2>Recommended</h2>
        <div className="recommendedVideos__videos">
          {/* <VideoItem /> */}
          <VideoCard 
            title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
            views = {'151,954'}
            timestamp = 'Streamed live on Jul 29, 2020'
            channelImage = 'https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s48-c-k-c0x00ffffff-no-rj'
            channel = 'Clever Programmer'
            image = 'https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2TNleahkp_YHx0E9frBBDhXn2lQ'
          />
        </div>      
      </div>
    );
  }
}

export default RecommendedVideos
