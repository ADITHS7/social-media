import React from 'react'
import './Topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Chat, Notifications } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div  className='topbar-container'>
      <div className="topbar-left">
        <span className="logo">Adi's Social</span>
        </div>
      <div className="topbar-center">
        <div className="search-bar">
         <SearchIcon className='search-icon'/>
         <input type="text" placeholder='search for friend,post or video' className="search-input" />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-link">
          <span className="topbar-link">Homepage</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <PersonIcon/>
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
          <Chat/>
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <Notifications/>
            <span className="topbar-icon-badge">1</span>
          </div>
        </div>
        <img src="./assets/person/1.jpeg" alt="" className="topbar-img" />
      </div>
    </div>
  )
}

export default Topbar