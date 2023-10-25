import React from 'react'
import './Home.css'
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed';
import Rightbar from '../../Components/Rightbar/Rightbar'
const Home = () => {
  return (
    <><Topbar/>
    <div className="home-container">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    
    </>
  )
}

export default Home