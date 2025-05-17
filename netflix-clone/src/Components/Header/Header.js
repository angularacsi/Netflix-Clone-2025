import React from 'react'
import "./header.css"
import netflixLogo from "../../assets/images/netflix-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  return (
    <div className='header-outer-container'>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li><img src ={netflixLogo} alt="Netflix-Logo" width="100"/></li>
                    <li>Home</li>
                    <li>TV Shows</li>

                    <li>Movies</li>
                    <li>Latest</li>
                    <li>My list</li>
                    <li>Browse by languages</li>

                </ul>
                </div>
            <div className='header_right'>
               <ul>
                <li><SearchIcon/></li>
                <li><NotificationsNoneIcon/></li>
                <li><PermContactCalendarIcon/></li>
                <li><KeyboardArrowDownIcon/></li>


               </ul>
                </div>
             </div>

    </div>
  )
}

export default Header
