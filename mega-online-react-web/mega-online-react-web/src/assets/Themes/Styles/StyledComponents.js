
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Select, Input, Radio, Checkbox} from "antd";

// ------------file contains---------------
// div as Wrapper
// section as Section
// div as Container
// div as FooterSection
// button as StyledButton
// a as StyledLink
// Select as StyledSelect
// Input as StyledInput
// Input.Password as StyledInputPassword
// Radio as StyledRadio
// span as ProductTag



// ------------themed colors 
const primaryColor = ({theme}) => theme.colors.primaryColor; // primaryColor:'#ED1B24' red,
const secondaryColor = props => props.theme.colors.secondaryColor; // secondaryColor:'#0000' white,
const dullSecondaryColor = props => props.theme.colors.dullSecondaryColor; // dullSecondaryColor:'#FBFBFB' light-white,
const deepSecondaryColor = props => props.theme.colors.deepSecondaryColor; // deepSecondaryColor:'#E7E7E7' grayish-white,
const successColor = props => props.theme.colors.successColor; // successColor:'#4CAF50' green,
const thirdColor = props => props.theme.colors.thirdColor; // thirdColor:'#CA32F0' purple,
const forthColor = props => props.theme.colors.forthColor; // forthColor:'#1976D2' light-blue ,
const fifthColor = props => props.theme.colors.fifthColor; // fifthColor:'#ed1b240d' skin,
const sixthColor = props => props.theme.colors.sixthColor; // sixthColor:'#FDBB26' yellow,
const seventhColor = props => props.theme.colors.seventhColor; // secondaryColor:'#ed1b240d' gray,
const darkColor = props => props.theme.colors.darkColor; // darkColor: '#272727' black

// --------------themed Font Family
const fontFamily = ({theme}) => theme.fonts.fontFamily; // fontFamily:'DM Sans'
// --------------themed Font Sizes
const fontXsmall = props => props.theme.fontSizes.xsmall; // xsmall:'0.85rem',
const fontSmall = props => props.theme.fontSizes.small; // small:'1.0rem',
const fontMedium = props => props.theme.fontSizes.medium; // medium:'1.5rem',
const fontLarge = props => props.theme.fontSizes.large; // large:'2rem',
const fontXlarge = props => props.theme.fontSizes.xlarge; // xlarge:'3.5rem'
// --------------themed Font Weights
const fontLight = props => props.theme.fontWeights.light; // light:'400',
const fontNormal = props => props.theme.fontWeights.normal; // normal:'600',
const fontBold = props => props.theme.fontWeights.bold; // bold:'700'
// --------------themed Media
const mediaMobile = props => props.theme.media.mobile; // mobile:'768px',
const mediaTab = props => props.theme.media.tab; // tab:'900px',
const mediaSmallLaptop = props => props.theme.media.smallLaptop; // smallLaptop:'1200px'

// ---------------Wrapper---------
export const Wrapper= styled.div`
    padding-right: 10px;
    padding-left: 10px;
`
// ---------------Section--------
export const Section= styled.section`
  width: 90%;
  margin: 80px auto;
`
// ---------------Container--------
export const Container= styled.section`
  width: 90%;
  margin: 20px auto;
`
// ---------------FooterSection--------
export const FooterSection= styled.div`
  width: 90%;
  margin: 0px auto;
  padding: 20px 0;
`
// --------------StyledButton---------
export const StyledButton= styled.button`
  background-color: ${darkColor};
  color:${secondaryColor};
  border: 1px solid ${darkColor};
  border-radius: 8px;
  font-size: ${fontSmall} ;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  transition: 0.4s;
  &:hover{
    background-color: ${secondaryColor};
    color:${darkColor};
    transition: 0.4s;
  }
  &[type="round"]{
    padding: 15px;
    border-radius: 50%;
    background-color: ${secondaryColor};
    border: 1px solid ${deepSecondaryColor};
    color: ${darkColor};
    transition: 0.4s;
    &:hover{
      border: 1px solid ${primaryColor};
      color: ${primaryColor};
      transition: 0.4s;
    }
  }
  &[type= "primary"]{
    background-color: ${primaryColor};
    color:${secondaryColor};
    border: 1px solid ${primaryColor};
    transition: 0.4s;
    &:hover{
      background-color: ${secondaryColor};
      color:${primaryColor};
      border: 1px solid ${primaryColor};
      transition: 0.4s;
    }
  }
  &[type= "secondary"]{
    background-color: ${secondaryColor};
    color:${darkColor};
    border: 1px solid ${darkColor};
    transition: 0.4s;
    &:hover{
      background-color: ${deepSecondaryColor};
      color:${primaryColor};
      border: 1px solid ${primaryColor};
      transition: 0.4s;
    }
  }
  &[width="small"]{
    padding: 10px;
  }
  &[width="medium"]{
    padding: 10px 20px;
  }
  &[width="maximum"]{
    padding: 15px;
    width: 100%;
  }
`
// --------------StyledLink----------
export const StyledLink =styled(Link)`
  color: inherit;
  cursor: pointer;
  transition: 0.4s;
  &:hover{
    opacity: 0.8;
    transition: 0.4s;
  }
  &[type="secondary"]{
    color:${secondaryColor};
    &:hover{
      opacity: 0.6;
    }
  }
  &[type="primary"]{
    color:${primaryColor};
    &:hover{
      opacity: 0.8;
    }
  }
  &[type="primaryButton"]{
    color:${secondaryColor};
    border:1px solid ${secondaryColor};
    background-color: ${primaryColor};
    border-radius: 8px;
    padding: 15px;
    &:hover{
      opacity: 0.8;
    }
  }
`
// --------------StyledSelect---------
export const StyledSelect =styled(Select)`
    border-radius: 12px;
    border: 1px solid ${deepSecondaryColor};
    outline: none;
    box-shadow: none;
    &:hover,
    &:focus{
        border-radius: 12px;
        outline: none;
        box-shadow: none;
        border: 1px solid ${primaryColor} !important;
    }
    .ant-select-selector{
        border-radius: 12px;
        border: 1px solid ${deepSecondaryColor} !important;
        outline: none !important;
        box-shadow: none !important;
        transition: 0.4s;
        &:hover,
        &:focus,.ant-select-open,.ant-select-focused{
            border-radius: 12px;
            outline: none;
            box-shadow: none;
            border: 1px solid ${({theme}) => theme.colors.primaryColor} !important;
        }
    }    
`
// --------------StyledInput----------
export const StyledInput =styled(Input)`
  border-radius: 12px;
  border: 1px solid ${seventhColor};
  &::placeholder{
    color: ${seventhColor};
  }
  &:hover,
  &:focus{
    outline: none;
    box-shadow: none;
    border: 1px solid ${primaryColor};
  }
  &[sizes="medium"]{
    padding: 12px;
  }
  &[category="digit"]{
    width: 55px;
    height: 55px;
    font-size: ${fontLarge};
    text-align: center;
  }
`
// --------------StyledInputPassword----------
export const StyledInputPassword=styled(Input.Password)`
  border: 1px solid ${seventhColor};
  border-radius: 12px;
  box-shadow: none !important;
  &:hover,
  &:focus{
    outline: none !important;
    border: 1px solid ${primaryColor} !important;
  }
  input {
    border: none;
    &::placeholder{
      color: ${seventhColor};
    }
    &:hover,
    &:focus{
      outline: none;
      box-shadow: none !important;
    }
    &[sizes="medium"]{
      padding: 8px;
    }
  }

  // Style for the password visibility icon
  .anticon-eye {
    color: #999;
  }
`
// --------------StyledRadio----------
export const StyledRadio =styled(Radio)`
  .ant-radio-inner{
    border-color: ${darkColor};
  }
  &:hover .ant-radio-inner{
    opacity: 0.8;
    border-color: ${primaryColor};
  }
  .ant-radio-checked{
    .ant-radio-inner{
      border-color: red;
      background-color: red;
    }
  }
`
// ---------------StyledCheckBox-----------
export const StyledCheckBox=styled(Checkbox)`
  /* border: 1px solid red; */
  .ant-checkbox-inner{
    border: 1px solid ${seventhColor};
  }
  .ant-checkbox:hover .ant-checkbox-inner{
    border: 1px solid ${seventhColor};
    background-color: ${deepSecondaryColor};
  }
  .ant-checkbox-checked::after{
    border: 1px solid ${primaryColor} !important;
  }
  .ant-checkbox-checked .ant-checkbox-inner{
    background-color: ${primaryColor} !important;
  }
`
// --------------ProductTag----------
export const ProductTag=styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  color: ${secondaryColor};
  font-size: ${fontXsmall};
  &[type="new"]{
    background-color: ${successColor};
  }
  &[type="used"]{
    background-color: ${forthColor};
  }
  &[type="warehouse purchased"]{
    background-color: ${thirdColor};
  }
`