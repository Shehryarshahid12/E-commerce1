import React from 'react'
import * as AiIcons from "react-icons/ai";
import { Wrapper } from '../../assets/Themes/Styles/StyledComponents';

const TopBar = () => {
  return (
    <Wrapper className='topbar_main'>
      <div className='topbar'>
        <div>
          <span className='colored_span'>Today's Deals</span> 
          <span>Help & Contact</span>
        </div>
        <div>
          <span className='colored_span'>Become A Seller</span>
          <span><AiIcons.AiOutlineHeart className='topbar_icons'/>Wishlist</span>
          <span>Track your order</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default TopBar