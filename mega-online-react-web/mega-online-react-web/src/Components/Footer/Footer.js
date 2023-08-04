import React from 'react'
import { Wrapper, FooterSection, StyledLink } from '../../assets/Themes/Styles/StyledComponents'
import { FooterNavigation } from './FooterNavigationData'
import IOSdownload from "../../assets/Images/IosDownloadIcon.png"
import Psdownload from "../../assets/Images/PsDownloadIcon.png"
import * as AiIcons from "react-icons/ai"

const Footer = () => {
  return (
    <div className='footer_main'>
      <Wrapper>
        <FooterSection>
          <div className='footer_navigation_main'>
            {FooterNavigation?.map((item)=>{
              return(
                <div className='footer_nav' key={item?.key}>
                  <h3>{item?.heading}</h3>
                  <ul className='footer_link_list'>
                    {
                      item?.content.map((links)=>{
                        return(
                          <li className='footer_link' key={links?.key}>
                            <StyledLink to={links?.link} type="secondary">{links?.title}</StyledLink>
                          </li>
                          )
                      })
                    }
                  </ul>
                </div>
              )
            })}
          </div>
        </FooterSection>
      </Wrapper>
      <Wrapper className='socials_main'>
        <FooterSection className='socials_container'>
          <div className='socials_links'>
            <StyledLink to="#" type='secondary'><span><AiIcons.AiFillFacebook/></span></StyledLink>
            <StyledLink to="#" type='secondary'><span><AiIcons.AiFillInstagram/></span></StyledLink>
            <StyledLink to="#" type='secondary'><span><AiIcons.AiFillTwitterCircle/></span></StyledLink>
          </div>
          <div className='download_links'>
            Download Our App
            <span>
              <StyledLink to="#">
                <img src={IOSdownload} alt="ios-download-link"/>
              </StyledLink>
            </span>
            <span>
              <StyledLink to="#">
                <img src={Psdownload} alt="PlayStore-download-link"/>
              </StyledLink>
            </span>
          </div>
        </FooterSection>
      </Wrapper>
      <Wrapper>
        <FooterSection className='copy_right'>
            <p>© 2023 Mega Online. All Rights Reserved.</p>
            <div>
              <span>
                <StyledLink to="#" type='secondary'>Privacy Policy</StyledLink>
              </span> | <span>
                <StyledLink to="#" type='secondary'>Terms &Conditions</StyledLink>
              </span>
              </div>
        </FooterSection>
      </Wrapper>
    </div>
  )
}

export default Footer