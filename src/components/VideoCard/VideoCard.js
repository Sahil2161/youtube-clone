import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';


function VideoCard(props) {
  return (
    <div onClick={()=>props?.onClick(props?.video)} className='videoCard'>
      <img 
        width={props?.video?.snippet?.thumbnails.high.width} 
        heigth={props?.video?.snippet?.thumbnails.high.heigth} 
        className='videoCard__thumbnail' 
        src={props?.video?.snippet?.thumbnails.high.url} 
        alt='thumbnail' 
      />

      <div className='videoCard__info'>
        <Avatar
          className='videoCard__avatar'
          alt={props?.video?.snippet?.channelTitle[0]}
          // src={`https://www.youtube.com/embed/${props?.video?.snippet?.channelId} `}  
        />

        <div className='videoCard__text'>
          <h4 title='Title'>{props?.video?.snippet?.title}</h4>
          <p title='channel'>{props?.video?.snippet?.channelTitle}</p>
          <p>
            views · timestamp
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard

