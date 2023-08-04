import React from 'react'
import Carousel from "react-multi-carousel";
import styled from 'styled-components';

const fifthColor=({theme})=> theme.colors.fifthColor
const fontXsmall= ({theme}) => theme.fontSizes.xsmall

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const CategoryCard=styled.div`
  text-align: center;
  margin-top: 10px;
  .category_image_main{
    width: 125px;
    height: 125px;
    margin: auto;
    background-color: ${fifthColor};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .category_image{
      max-width: 80%;
      margin: auto;
    }
  }
  p{
    margin-top: 15px;
    font-size: ${fontXsmall};
  }
`

const CategoriesCarousel = ({data}) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      autoPlay={true}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      // autoPlaySpeed={1000}
      // keyBoardControl={true}
      // customTransition="all .5"
      // transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {data?.length>0 && data.map((item)=>{
        return(
          <CategoryCard key={item.key} >
            <div className='category_image_main'>
              <div className='category_image'>
                <img src={item.image} alt={`${item.name} image`}/>
              </div>
            </div>
            <p>{item.name}</p>
          </CategoryCard>
        )
      })}
    </Carousel>
  )
}

export default CategoriesCarousel