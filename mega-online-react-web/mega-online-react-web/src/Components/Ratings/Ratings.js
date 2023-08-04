import React from 'react'
import * as AiIcons from "react-icons/ai"

const Ratings = ({ratings}) => {
  
  return (
    <div className='rating_main'>
      {
      }
        <div className='rating_stars'>
            <span className='filled'><AiIcons.AiFillStar/></span>
            <span className='filled'><AiIcons.AiFillStar/></span>
            <span className='filled'><AiIcons.AiFillStar/></span>
            <span><AiIcons.AiFillStar/></span>
            <span><AiIcons.AiFillStar/></span>
        </div>
        {ratings && 
          <span className='ratings'>
              {ratings} ratings
          </span>
        }
    </div>
  )
}

export default Ratings