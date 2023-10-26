import React from 'react'
import './Feed.css'
import Share from '../Share/Share'
import Posts from '../Posts/Posts'
const feed = () => {
  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Share/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>

      </div>
    </div>
  )
}

export default feed