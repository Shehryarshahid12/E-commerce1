import React from 'react'
import styled from 'styled-components';
import {StyledButton, StyledLink, ProductTag} from "../../assets/Themes/Styles/StyledComponents"
import * as AiIcons from "react-icons/ai"

const deepSecondaryColor=({theme})=> theme.colors.deepSecondaryColor
const secondaryColor=({theme})=> theme.colors.secondaryColor
const thirdColor=({theme})=> theme.colors.thirdColor
const forthColor=({theme})=> theme.colors.forthColor
const successColor=({theme})=> theme.colors.successColor
const seventhColor=({theme})=> theme.colors.seventhColor
const fifthColor=({theme})=> theme.colors.fifthColor
const dullSecondaryColor=({theme})=> theme.colors.dullSecondaryColor
const fontXsmall= ({theme}) => theme.fontSizes.xsmall
const fontSmall= ({theme}) => theme.fontSizes.small

const ThemeProductCard=styled.div`
  .react-multi-carousel-list{
    gap:10px !important;
  }
  margin:0 05px;
  border: 1px solid ${deepSecondaryColor};
  border-radius: 8px;
  overflow: hidden;
  .product_image_main{
    border: 1px solid ${deepSecondaryColor};
    background-color: ${dullSecondaryColor};
    .product_image{
      width: 55%;
      margin: 40px auto;
    }
    .image_footer{
      display: flex;
      justify-content: space-between;
      padding: 5px 15px;
      .wishlist_icon{
        color: ${seventhColor};
      }
    }
  }
  .product_detail{
    padding: 10px 15px;
    h4{
      font-size: ${fontSmall};
      height: 40px;
    }
    .product_ratings{
      margin:10px 0;
    }
    .detail_footer{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .product_price{
        del{
          margin-left: 10px;
          color: ${seventhColor};
        }
      }
    }
  }
`

const ProductCard = ({data}) => {
  return (
    <ThemeProductCard>
      <div className='product_image_main'>
        <div className='product_image'>
          <img src={data.image} alt="product image"/>
        </div>
        <div className='image_footer'>
          <ProductTag type={data.tag}>{data.tag}</ProductTag>
          <span className='wishlist_icon'><AiIcons.AiFillHeart/></span>
        </div>
      </div>
      <div className='product_detail'>  
        <StyledLink to="/product-detail">
          <h4 className='product_name'>{data.name}</h4>
        </StyledLink>
        <div className='product_ratings'>{data.ratings}
          <span> {data.reviews}</span>
        </div>
        <div className='detail_footer'>
          <p className='product_price'>${data.price}<del>${data.disountPrice}</del></p>
          <StyledButton type='primary' width="medium">Add to cart</StyledButton>
        </div>
      </div>
    </ThemeProductCard>
  )
}

export default ProductCard