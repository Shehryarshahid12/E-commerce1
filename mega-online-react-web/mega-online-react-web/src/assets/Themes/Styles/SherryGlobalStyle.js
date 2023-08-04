import { createGlobalStyle } from "styled-components";

// ---------------(light themed values in comment)

// ------------themed colors
const primaryColor = ({ theme }) => theme.colors.primaryColor; // primaryColor:'#ED1B24' red,
const secondaryColor = (props) => props.theme.colors.secondaryColor; // secondaryColor:'#0000' white,
const dullSecondaryColor = (props) => props.theme.colors.dullSecondaryColor; // dullSecondaryColor:'#FBFBFB' light-white,
const deepSecondaryColor = (props) => props.theme.colors.deepSecondaryColor; // deepSecondaryColor:'#E7E7E7' grayish-white,
const successColor = (props) => props.theme.colors.successColor; // successColor:'#4CAF50' green,
const thirdColor = (props) => props.theme.colors.thirdColor; // thirdColor:'#CA32F0' purple,
const forthColor = (props) => props.theme.colors.forthColor; // forthColor:'#1976D2' light-blue ,
const fifthColor = (props) => props.theme.colors.fifthColor; // fifthColor:'#ed1b240d' skin,
const sixthColor = (props) => props.theme.colors.sixthColor; // sixthColor:'#FDBB26' yellow,
const seventhColor = (props) => props.theme.colors.seventhColor; // secondaryColor:'#ed1b240d' gray,
const darkColor = (props) => props.theme.colors.darkColor; // darkColor: '#272727' black

// --------------themed Font Family
const fontFamily = ({ theme }) => theme.fonts.fontFamily; // fontFamily:'DM Sans'
// --------------themed Font Sizes
const fontXsmall = (props) => props.theme.fontSizes.xsmall; // xsmall:'0.85rem',
const fontSmall = (props) => props.theme.fontSizes.small; // small:'1.0rem',
const fontMedium = (props) => props.theme.fontSizes.medium; // medium:'1.5rem',
const fontLarge = (props) => props.theme.fontSizes.large; // large:'3rem',
const fontXlarge = (props) => props.theme.fontSizes.xlarge; // xlarge:'4.5rem'
// --------------themed Font Weights
const fontXlight = (props) => props.theme.fontWeights.xlight; // light:'200',
const fontLight = (props) => props.theme.fontWeights.light; // light:'400',
const fontNormal = (props) => props.theme.fontWeights.normal; // normal:'500',
const fontBold = (props) => props.theme.fontWeights.bold; // bold:'700'
// --------------themed Media
const mediaMobile = (props) => props.theme.media.mobile; // mobile:'768px',
const mediaTab = (props) => props.theme.media.tab; // tab:'900px',
const mediaSmallLaptop = (props) => props.theme.media.smallLaptop; // smallLaptop:'1200px'

export const SherryGlobalStyle = createGlobalStyle`
   //shipping method start
   .Shipping-method{
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
      margin-bottom: 10px;
       
      .Shipping-details{
        width: 70%;
        border: 1px solid  ${seventhColor};
        border-radius: 10px;
        padding: 10px;
        
        }
          .Shipping-details h2, span{
                    margin-left: 19px !important; 
                    
           }
        .choose-method{
        display: flex;
    /* justify-content: center; */
    justify-content: space-around;
    margin-top: 40px;
    margin-bottom: 40px;
      }
      .method{
        display: flex;
        justify-content: space-between;
        width: 90%;
      }
        
      }
    

   
   
   /*vocher*/
   .voucher{
    margin-top: 10px;
        /* width: 26%; */
    border: 1px solid ${seventhColor};
    padding: 33px;
    border-radius: 15px;
    /*height: 310px;*/
    
}
        input{
            border-radius: 10px;
            padding: 15px;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        
        button{
            background-color: ${darkColor};
            color:${secondaryColor};
           
    
    padding: 15px;
    border-radius: 10px
    
        }
        .voucher-discount{
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            margin-bottom: 30px;

            border-bottom: 1px solid ${seventhColor};
            div{
                margin-bottom: 15px;
            }
            
            
            
        }

//productDetails

.Qty{
    border: 1px solid ${seventhColor};
    width: 40%;
    padding: 12px;
    border-radius: 10px;
    text-align: center;
    border-bottom: 1px solid;
       
   
}
.P-DetailButton{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .Voucher-input h3{
                margin-top: 20px;
            } 

  //start
  .Seller-information{
    margin-top: 10px;
    /* width: 26%; */
    border: 1px solid ${seventhColor};
    border-radius: 12px;
    padding: 12px;
    .seller-content{
        border-bottom: 1px solid ${seventhColor};
        margin-top: 40px;
        margin-bottom: 10px;
    }
    .seller-profile{
        margin-top: 25px;
    }

  }   
  //end   
  
  //start ProductFromStore
 .ProductFromStore{
    .ProductFromHeading{
        display: flex;
        justify-content: center;
    }
    /* width: 26%; */
    margin-top: 10px;
    border: 1px solid ${seventhColor};
    border-radius: 12px;
    padding: 10px;
    .Store-Details{
        
      display: flex;
    /* margin: 0 auto; */
    /* width: 100%; */
     justify-content: center;
    /* justify-content: space-around; */
    justify-content: space-evenly;
    margin-top: 20px;
    margin-bottom: 10px;
    }
    
    .Store-Image{
        width: 30%;
        border: 1px solid;
         border-radius: 4px;
        padding: 7px;
    }

 }  
            //Payment.js
            .Carpayment{
                width: 70%;
                border: 1px solid black;
                height: 456px;
                padding: 20px;
                border-radius: 15px;
                margin-top: 10px;

                
                .payment-select{
                    display: flex;
                    margin-top: 25px;
                  
                   border: 1px solid;
                   border-radius: 10px;
                    padding: 5px;
                   
                }
                p{
                    margin-top: 10px;
                }
               
               
            } 

            .payment-page{
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    margin-bottom: 10px;
                
                }

                   /*end*/

                   //PurchaseSuccespage

                   .PurchaseSuccess{
                    text-align: center;
                    /* display: list-item;*/
                /* margin-top: 150px; */
                   margin: 106px auto;
                   p{
                    color: ${seventhColor};
                   }
                   b{
                    color: ${darkColor};
                   }
                   
                   .purchase-Button{
                  /*  width: 24%; */
                      display: flex;
                      gap: 5px;
                      justify-content: center;
                      margin-top: 15px;
                   }
                   .Success-icon{
                    position: relative;
                     bottom: 12px;
                     left: 10px;
                   }

                   }
                   
            
                   //signup

               /*    .Signup{
                    width: 100%;
                    display: flex;
                        
                    .Signup-content{
                        width: 50%;
                    }
                    .sign-image{
                        width: 50%;
                    }
                    .input-fields{
                        width: 71%;
                       margin: auto;
                       margin-top: 30px;
                    }
                    .creating-account{
                        margin-top: 20px;
                        margin-bottom: 20px;
                    }
                    .sign-google{
                        margin-top: 10px;
                    }
                    .sign-footer{
                        text-align: center;
                           margin: 10px 0px;
                    }

                   }*/

                   //confirm
               /*    .confirm-phone{
                    width: 100%;
                    display: flex;

                    .confirm-contant{
                        width: 50%;
                        
                        margin: auto;
                    }
                    .confirmImage{
                        width: 50%;
                    }
                    .confir-input{
                        width: 50%;
                        margin: auto;
                        margin-top: 30px;
                    }
                    .confirm-button{
                        width: 50%;
                        margin: auto;
                        margin-top: 30px;
                    }

                   }*/
                   //end
                   //EnterCode
                 /*  .Enter-code{
                    width: 100%;
                    display: flex;

                    .ECode-contant{
                        width: 50%;
                    }
                    .Ecode-image{
                        width: 50%;
                    }
                    .Ecode-input{
                        width: 50%;
                    }
                    .Ecode-details{
                        margin: 120px;
                        .Ecode-input{
                            margin-top: 25px;
                            width: 70%;
                        }
                        .Ecode-footer{
                            margin-top: 10px;
                        }
                    }

                   }*/
                   //end 
                     
`;
