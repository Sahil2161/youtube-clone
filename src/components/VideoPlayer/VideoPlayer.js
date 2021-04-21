import React from 'react'
import './VideoPlayer.css'
import Avatar from '@material-ui/core/Avatar'

export default function VideoPlayer(props) {
  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`

  return (
    <div className='videoPlayer'>
      <div className='videoPlayer__frame'>
        <iframe
          allowFullScreen
          src={videoSrc} 
        />
      </div>
      <div className='videoPlayer__details'>
        <h4 title='title' className='title'>
          {props?.video?.snippet?.title}
        </h4>
        <hr />
        <div className='videoPlayer__channel'>
          <Avatar />
          <p title='channel' title='channel'>{props?.video?.snippet?.channelTitle}</p>
        </div>
      </div>
    </div>
  )
}
