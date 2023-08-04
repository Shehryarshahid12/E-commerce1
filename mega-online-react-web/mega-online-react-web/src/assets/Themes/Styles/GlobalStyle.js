import {createGlobalStyle} from "styled-components";


// ---------------(light themed values in comment)

// // ------------themed bg-colors 
// const bgPrimaryColor = ({theme}) => theme.bgColors.primaryColor; // primaryColor:'#ED1B24' ,
// const bgSecondaryColor = props => props.theme.bgColors.secondaryColor; // secondaryColor:'#0000',
// const bgDullSecondaryColor = props => props.theme.bgColors.dullSecondaryColor; // dullSecondaryColor:'#FBFBFB',
// const bgDeepSecondaryColor = props => props.theme.bgColors.deepSecondaryColor; // deepSecondaryColor:'#E7E7E7',
// const bgSuccessColor = props => props.theme.bgColors.successColor; // successColor:'#4CAF50',
// const bgThirdColor = props => props.theme.bgColors.thirdColor; // thirdColor:'#CA32F0',
// const bgForthColor = props => props.theme.bgColors.forthColor; // forthColor:'#1976D2',
// const bgFifthColor = props => props.theme.bgColors.secondaryColor; // fifthColor:'#ed1b240d',
// const bgDarkColor = props => props.theme.bgColors.darkColor; // darkColor: '#272727'

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

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

* {
    box-sizing: border-box;
  }

  body,h1,h2,h3,h4,h5,h6,p,ul,li{
    padding: 0;
    margin: 0;
  }

  label{
    line-height: 30px;
    font-weight:${fontNormal};
    margin-top: 15px;
  }

  a,a:visited,a:hover{
    text-decoration: none;
    color: inherit;
  }

  li{
    list-style-type: none;
  }
  
  img{
    width:100%
  }
  
    //-----------scroll bar-----------------
    ::-webkit-scrollbar {
      width: 10px;
    }
    /* Track  */
    ::-webkit-scrollbar-track {
      background-color:  ${darkColor};
    }
     /* Handle  */
    ::-webkit-scrollbar-thumb {
      background-color: ${deepSecondaryColor};
    }
      /* Handle on hover  */
    ::-webkit-scrollbar-thumb:hover {
      background-color:  ${primaryColor};
    }
    // ---------------end------------------

body{
    font-family: ${fontFamily}, sans-serif;
}

// ---------------AntDesign styles override-----------
.ant-select-dropdown .ant-select-item-option-selected{
    background-color:${primaryColor} !important;
    color:${secondaryColor} !important;
    &:hover{
        opacity:1;
    }
}

.ant-select-dropdown .ant-select-item-option-active{
    background-color:${primaryColor} !important;
    color:${secondaryColor};
    opacity:0.7;
}

.ant-tabs-nav{
    .ant-tabs-tab{
        font-size:${fontSmall};
        font-weight: ${fontBold};
    }
    .ant-tabs-tab-btn{
        color: ${seventhColor};
    }
    .ant-tabs-tab-active .ant-tabs-tab-btn{
        color: ${primaryColor} !important;
    }
    .ant-tabs-tab:hover,
    .ant-tabs-tab-btn:hover,
    .ant-tabs-tab-btn:focus,
    .ant-tabs-tab-btn:active{
        color: ${primaryColor}!important;
    }
    .ant-tabs-ink-bar{
        background: ${primaryColor} ;
    }
}
/* ---------------- AntDesign Styles Override end--------------------- */

/* -----------------Logo Start------------------- */
.main_logo{
    display: flex;
    align-items: center;
    img{
        width:unset;
    }
    .brand_name{
        color:${primaryColor};
        font-size:${fontMedium};
        text-transform: uppercase;
    }
}
/* -----------------Logo end------------------- */

// ----------TopBar start---------------
.topbar_main{
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${deepSecondaryColor};
    font-size:${fontXsmall};
    .topbar{
        width:90%;
        margin:auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
        span{
            margin-left:20px;
            .topbar_icons{
                margin-right:5px;
            }
        }
        .colored_span{
            margin-left:0;
            color:${primaryColor}
        }
    }
}
// ----------TopBar end---------------


// ----------Navbar Start---------------
.navbar_main{
    padding-top:20px;
    padding-bottom:20px;
    border-bottom: 1px solid ${deepSecondaryColor};
    .navbar{
        width:90%;
        margin:auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .nav_search_main{
            padding:10px;
            border-radius:8px;
            display:flex;
            background-color:${dullSecondaryColor};
            width:50%;
            input{
                border:none;
                border-radius:0px;
            }
            .nav_select{
                border-radius:0px;
                width:30%;
                border:none !important;
                display: flex;
                align-items: center;
                .ant-select-selector{
                    border-radius:0px;
                    border:none !important;
                    border-right:1px solid ${deepSecondaryColor} !important;
                }
            }
        }
        .right_nav{
            display:flex;
            align-items:center;
            gap:20px;
            .nav_auth{
                display:flex;
                align-items:center;
                gap:10px;
                padding:7px;
                border: 1px solid ${deepSecondaryColor};
                border-radius:40px;
                .nav_user_icon{
                    padding:8px;
                    border-radius:50%;
                    color: ${secondaryColor};
                    background-color:${primaryColor}
                }
            }
        }
    }
}
// ----------Navbar End----------------

// ----------Footer Start----------------
.footer_main{
    background-color:${darkColor};
    color:${secondaryColor};
    .footer_navigation_main{
        display:flex;
        justify-content:space-between;
        .footer_nav{
            padding:30px 0;
            h3{
                padding:30px 0;
            }
            .footer_link{
                opacity:0.7;
                padding:10px 0;
            }
        }
    }
    .socials_main{
        border-top:1px solid ${deepSecondaryColor};
        border-bottom:1px solid ${deepSecondaryColor};
        .socials_container{
            display:flex;
            justify-content:space-between;
            align-items:center;
            .socials_links{
                font-size:${fontSmall};
                span{
                    margin-right:20px;
                }
            }
            .download_links{
                align-items:center;
                display:flex;
                gap:10px;
            }
        }
    }
    .copy_right{
        display:flex;
        justify-content:space-between;
        opacity:0.7;
    }
}
// ----------Footer end----------------

// ----------Home Section start----------------
.home_section{
    h2{
      display: flex;
      align-items: baseline;
      font-size: ${fontMedium};
      margin-bottom: 30px;
      span{
          margin-left: 15px;
      }
      a{
          font-size:${fontXsmall};
          display:flex;
          align-items:center;
      }
  }
}
// ----------Home Section End----------------

/* --------Auth Pages-------- */
.auth_main{
    display: flex;
    justify-content: space-between;
    /* max-height: 100vh; */
    overflow: hidden;
    .auth_content_main{
        padding: 30px;
        width: 48%;
        .auth_content{
            display: flex;
            flex-direction: column;
            align-items: center;
            /* height: 100vh; */
            .content_section{
                min-height: 100vh;
                justify-content: center;
                display: flex;
                /* align-items: center; */
                flex-direction: column;
                width: 80%;
                h1{
                    font-weight: ${fontBold};
                    font-size: ${fontLarge};
                }
                .auth_note{
                    font-size: ${fontSmall};
                    color: ${seventhColor};
                    margin-top:8px;
                    max-width: 74%;
                    line-height: 24px;
                    span{
                        color: ${primaryColor};
                    }
                }
                .auth_form{
                    margin-top:40px;
                    margin-bottom: 20px;
                    display: flex;
                    flex-direction: column;
                    .digit_inputs_groups{
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 30px;
                    }
                }
                .forgot_main{
                    display: flex;
                    justify-content: space-between;
                    margin: 25px 0;
                    .privacy_note{
                        line-height: 25px;
                    }
                }
                .buttons_main{
                    margin-top: 10px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .auth_footer{
                    text-align: center;
                    margin: 10px 0;
                }
            }
        }
    }
    .auth_image{
        width: 52%;
    }
}
// ----------Auth Pages End----------------

// ----------Rating Stars Start----------------
.rating_main{
    display: flex;
    gap: 10px;
    font-size: ${fontXsmall};
    .rating_stars{
        color: ${seventhColor};
        .filled{
            color: ${sixthColor};
        }
    }
    .ratings{
        color: ${seventhColor};
    }
}
// ----------Rating Stars end----------------

// ----------Detail Page start----------------
.detail_page_topbar{
    color: ${seventhColor};
    font-size: ${fontXsmall};
    span{
     color:${primaryColor}
    }
}
.detail_page_main{
    display: flex;
    justify-content: space-between;
    .detail_main{
        width: 74%;
        .product_info_main{
            display: flex;
            gap: 20px;
            .product_img{
                width: 40%;
                margin-top: 10px;
            }
            .product_info{
                width: 60%;
                .product_category{
                    color: ${seventhColor};
                    font-size: ${fontXsmall};
                }
                h3{
                    font-size: ${fontMedium};
                    line-height: 26px;
                    margin-top: 15px;
                    margin-bottom: 30px;
                }
                .variations_main{
                    margin-top: 20px;
                    .variation{
                        .var_value{
                            span{
                                color: ${seventhColor};
                            }
                        }
                        .var_images{
                            display: flex;
                            gap: 10px;
                            margin-top: 15px;
                            .var_image{
                                width: 60px;
                                height: 60px;
                                border-radius: 8px;
                                border: 1px solid ${deepSecondaryColor};
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                &:hover{
                                    border: 1px solid ${primaryColor};
                                }
                                img{
                                    width: 70%;
                                }
                            }
                        }
                    }
                }
            }
        }
        .description_main{
            margin-top: 70px;
            border-bottom: 1px solid ${seventhColor};
            .desc_main{
                .note{
                    max-width: 90%;
                    margin: 30px 0;
                }
                h3{
                    font-size: ${fontMedium};
                    margin-bottom: 15px;
                }
                .product_details{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    li{
                        width: 49%;
                        display: flex;
                        padding: 15px 20px;
                        &:nth-child(-n+2){
                            background-color: ${deepSecondaryColor};
                        }
                        .label{
                            color: ${seventhColor};
                            width: 30%;
                            padding-right: 10px;
                        }
                    }
                }
            }
        }
        .all_comments{
            .comments_heading{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 50px;
            }
            .comment_main{
                padding: 35px 0;
                border-bottom: 1px solid ${seventhColor};
                .comment_top{
                    display: flex;
                    justify-content: space-between;
                    .user{
                        width: 30%;
                        display: flex;
                        gap: 10px;
                        align-items: center;
                        font-size: ${fontSmall};
                        .profile_pic{
                            max-width:50px ;
                            max-height:50px ;
                        }
                        p{
                            margin-top: 5px;
                            color: ${seventhColor};
                            font-size: ${fontXsmall};
                        }
                    }
                    .review{
                        width: 50%;
                        p{
                            margin-top: 5px;
                            color: ${seventhColor};
                            font-size: ${fontXsmall};
                        }
                    }
                    .likes{
                        width: 10%;
                        display: flex;
                        justify-content: space-around;
                        color: ${seventhColor};
                        .like{
                            color: ${successColor};
                        }
                        .dislike{
                            color: ${primaryColor}
                        }
                    }
                }
                .comment_body{
                    max-width: 75%;
                    margin-top:25px;
                    p{
                        line-height: 28px;
                    }
                    .comment_images{
                        display: flex;
                        gap: 20px;
                        .comment_image{
                            width: 70px;
                            height: 70px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            img{
                                width: 80%;
                            }
                        }
                    }
                }
            }
            .view_all_button{
                margin-top:35px;
                button{
                    margin: auto;
                }
            }
        }
    }
    .detail_sidebar{
        width: 25%;
    }
}
// ----------Detail Page End----------------

// ----------Search Result Page start----------------
.result_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3{
        font-size: ${fontSmall};
        span{
            font-weight: ${fontLight};
        }
    }
    .sorting_main{
        display: flex;
        gap: 10px;
    }
}
.result_main{
    display: flex;
    gap: 15px;
    margin: 20px 0;
    .result_sidebar{
        width: 20%;
        border: 1px solid ${deepSecondaryColor};
        padding: 20px;
        border-radius: 8px;
    }
    .result_products_main{
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        .load_button{
            display: flex;
            justify-content: center;
            margin: 30px auto;
        }
    }
}
// ----------Search Result Page end----------------


    @media (max-width:${mediaTab}){
        button{
            background-color:yellow;
        }
    }
`




