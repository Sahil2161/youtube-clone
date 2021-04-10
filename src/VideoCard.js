import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className='videoCard'>
      <img className='videoCard__thumbnail' src={image} alt='thumbnail' />
      <div className='videoCard__info'>
        <Avatar
          className='videoCard__avatar'
          alt={channel}
          src={channelImage}
        />

        <div className='videoCard__text'>
          <h4 title='Title'>{title}</h4>
          <p title='channel'>{channel}</p>
          <p>
            {views} · {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard

