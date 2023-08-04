import React from 'react'
import HeadCarousel from '../../Components/Carousels/HeadCarousel'
import * as AiIcons from "react-icons/ai"
import CategoriesCarousel from '../../Components/Carousels/CategoriesCarousel'
import ProductCarousel from '../../Components/Carousels/ProductCarousel'
import { categoriesData } from '../../Components/Carousels/CategoriesData'
import { ProductsData } from '../../Components/Carousels/ProductsData'
import {HeadCarouselData} from "../../Components/Carousels/HeadCarouselData";
import {Wrapper,Section, StyledLink, StyledRadio } from '../../assets/Themes/Styles/StyledComponents'
import PromoSection from '../../Components/Carousels/PromoCarousel'
import PromoImage from "../../assets/Images/homePromotionBanner.png"
import PromoImage1 from "../../assets/Images/HeadImages/HeadImage.png"

const Home = () => {

  const promoData=[
    {
      key:1,
      name:"Laptops and Computers",
      text:"International Women's Day is March 8 every year. This year March 8 is a Wednesday.",
      image:PromoImage,
      link:"#"
    },
    {
      key:2,
      name:"Electronics",
      text:"International deal of the day.",
      image:PromoImage1,
      link:"#"
    }
  ]



  console.log("categories data",categoriesData)
  return (
    <>
      <HeadCarousel data={HeadCarouselData}/>  
      {/* home categories Section */}
      <Wrapper>
        <Section className="home_section">
          <h2>Browse by Categories 
            <span>
              <StyledLink to="#">View All Categories <AiIcons.AiOutlineRight/></StyledLink>
            </span>
          </h2>
          <CategoriesCarousel data={categoriesData}/>
        </Section>
      </Wrapper>

      {/* home Popular Products Section */}
      <Wrapper>
        <Section className="home_section">
          <h2>Most Popular  
            <span>
              <StyledLink to="#">All Products <AiIcons.AiOutlineRight/></StyledLink>
            </span>
          </h2>
          <ProductCarousel data={ProductsData} desktopItem={4} tabletItem={3} mobileItem={2} />
        </Section>
      </Wrapper>

      {/* home top Selling Products Section */}
      <Wrapper>
        <Section className="home_section">
          <h2>Top Selling Products 
            <span>
              <StyledLink to="#">All Products <AiIcons.AiOutlineRight/></StyledLink>
            </span>
          </h2>
          <ProductCarousel data={ProductsData} desktopItem={4} tabletItem={3} mobileItem={2} />
        </Section>
      </Wrapper>

      {/* home Latest Products Section */}
      <Wrapper>
        <Section className="home_section">
          <h2>Latest Products  
            <span>
              <StyledLink to="#">All Products <AiIcons.AiOutlineRight/></StyledLink>
            </span>
          </h2>
          <ProductCarousel data={ProductsData} desktopItem={4} tabletItem={3} mobileItem={2} />
        </Section>
      </Wrapper>

      {/* Home Promotion Section */}
      <Wrapper>
        <Section className="home_section">
          <PromoSection data={promoData}/>
        </Section>
      </Wrapper>

      {/* home todays deal Products Section */}
      <Wrapper>
        <Section className="home_section">
          <h2>Today’s Deals-All with free shipping
            <span>
              <StyledLink to="#">All Products <AiIcons.AiOutlineRight/></StyledLink>
            </span>
          </h2>
          <ProductCarousel data={ProductsData} desktopItem={4} tabletItem={3} mobileItem={2} />
        </Section>
      </Wrapper>
    </>
  )
}

export default Home