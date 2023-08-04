import React from 'react'
import Carousel from "react-multi-carousel";
import styled from 'styled-components';
import { StyledButton, StyledLink } from '../../assets/Themes/Styles/StyledComponents';

const primaryColor=({theme})=> theme.colors.primaryColor
const secondaryColor=({theme})=> theme.colors.secondaryColor
const darkColor=({theme})=> theme.colors.darkColor
const fontMedium= ({theme}) => theme.fontSizes.medium
const fontSmall= ({theme}) => theme.fontSizes.small

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

const PromoCard=styled.div`
    position: relative; 
    background-color: ${darkColor};
    img{
        display: flex;
    }
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        color: ${secondaryColor};
        overflow: hidden;
        .overlay_content{
            background-color: ${primaryColor};
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            .content_main{
                max-width: 80%;
                h3{
                    font-size: ${fontMedium};
                }
                p{
                    font-size: ${fontSmall} ;
                    margin-top: 15px;
                    margin-bottom: 50px;
                    line-height: 24px;
                }
            }
        }
        .overlay_transparent{
            border-left: 140px solid ${primaryColor};
            border-top: 320px solid transparent;
        }
    }
`

const PromoCarousel = ({data}) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={3000}
    //   keyBoardControl={true}
    //   customTransition="all .5"
    //   transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {data?.length>0 && data.map((item)=>{
        return(
          <PromoCard key={item.key}>
            {/* <div className='promo_img'> */}
                <img src={item.image}/>
            {/* </div> */}
            <div className='overlay'>
                <div className='overlay_content'>
                    <div className='content_main'>
                        <h3>Best Deals on {item.name}</h3>
                        <p>{item.text}</p>
                        <StyledLink type='primaryButton' to={item.link}>Explore Products</StyledLink>
                    </div>
                </div>
                <section className='overlay_transparent'></section>
            </div>
          </PromoCard>
        )
      })}
    </Carousel>
  )
}

export default PromoCarousel