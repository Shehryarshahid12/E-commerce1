import React from 'react'
import styled from 'styled-components'
import ProductPic from "../../assets/Images/Products/product1.png"
import { ProductTag, StyledLink } from '../../assets/Themes/Styles/StyledComponents'
import Ratings from "../Ratings/Ratings"
import * as AiIcons from "react-icons/ai"



const primaryColor = ({theme}) => theme.colors.primaryColor; 
const dullSecondaryColor = props => props.theme.colors.dullSecondaryColor; 
const deepSecondaryColor = props => props.theme.colors.deepSecondaryColor; 
const seventhColor = ({theme}) => theme.colors.seventhColor; 
const darkColor = ({theme}) => theme.colors.darkColor; 

const fontXsmall = props => props.theme.fontSizes.xsmall;
const fontSmall = props => props.theme.fontSizes.small;
const fontMedium = props => props.theme.fontSizes.medium;
const fontBold = props => props.theme.fontWeights.bold; 
const fontNormal = props => props.theme.fontWeights.normal; 

const ResultProduct=styled.div`
    border: 1px solid ${deepSecondaryColor};
    border-radius: 8px;
    display: flex;
    .product_image{
        width: 30%;
        border-right:1px solid ${deepSecondaryColor};
        background-color: ${dullSecondaryColor};
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product_info_main{
        padding: 25px;
        width: 80%;
        h3{
            font-size:${fontSmall};
            font-weight: ${fontBold};
            margin-bottom: 10px;
            max-width: 80%;
            line-height: 22px;
        }
        .price_main{
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 10px 0;
            h4{
                font-size:${fontMedium};
            }
        }
        a{
            font-size:${fontXsmall};
        }
        .shipping_note{
            margin: 25px 0;
            p{
                font-size: ${fontXsmall};
                color: ${seventhColor};
                margin: 10px 0;
                span{
                    color: ${darkColor};
                    font-weight: ${fontNormal};
                }
            }
        }
    }

`

const ResultProductCard = ({data}) => {
  return (
    <ResultProduct>
        <div className='product_image'>
            <img src={ProductPic} alt=''/>
        </div>
        <div className='product_info_main'>
            <h3>Samsung Galaxy S20 | S20+ | S20 FE | S20 Ultra 5G 128GB - Unlocked Verizon AT&T</h3>
            <Ratings ratings="53285"/>
            <div className='price_main'>
                <h4>$400</h4>
                <ProductTag type="used">Used</ProductTag>
            </div>
            <StyledLink type='primary' to="#"><AiIcons.AiOutlineShop/> Visit the Logitech G Store</StyledLink>
            <div className='shipping_note'>
                <p><span>$2.16</span> Shipping & Import Fees</p>
                <p>Delivery <span>Mon, Mar 27</span></p>
            </div>
        </div>
    </ResultProduct>
  )
}

export default ResultProductCard