import React from 'react'
import './Posts.css'
import {MoreVert} from '@mui/icons-material'
const Posts = () => {
  return (
    <div className='post'>
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
           <img className='post-profile-img' src="/assets/person/1.jpeg" alt="" />
           <span className="post-user-name">Adith S</span>
           <span className="post-date">5 mins ago</span>
          </div>
          <div className="post-top-right">
           <MoreVert/>
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">
            Hey Its my first post
          </span>
          <img className='post-img' src="assets/post/1.jpeg" alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
           <img className='like-icon' src="assets/like.png" alt="" />
           <img className='like-icon' src="assets/heart.png" alt="" />
          <span className="like-counter">32 people liked</span>
          </div>
          <div className="post-bottom-right">
          <span className="post-comment-text">9 Comments</span>
          </div>
          
        </div>
        </div>
        </div>
  )
}

export default Posts