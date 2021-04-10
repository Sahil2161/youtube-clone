import { useState } from 'react'
import './Header.css';

// all header icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
  const [inputSearch, setInpputSearch] = useState('');

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to = '/'>
          <img 
            className="header__logo" 
            alt="yt-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
            />
          </Link>
      </div>

      <div className="header__input">
        <input
          type="text"
          onChange={e => setInpputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton"/>
        </Link>
      </div>
      
      <div className="header__right">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar 
          className="header__icon"
          alt="userAvatar"
          src=""
        />
      </div>
    </div>
  )
}

export default Header
