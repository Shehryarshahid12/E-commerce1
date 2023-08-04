import React from 'react'
import LogoImage from "../../assets/Images/megaLogo.png"

const Logo = () => {
  return (
    <div className='main_logo'>
        <img src={LogoImage} alt="Mega Logo"/>
        <span className='brand_name'>
            Mega Online
        </span>
    </div>
  )
}

export default Logo