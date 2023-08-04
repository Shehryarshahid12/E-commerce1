import React from 'react'
import { Section, StyledButton, StyledLink, StyledSelect, Wrapper } from '../../assets/Themes/Styles/StyledComponents'
import { BsFillFilePostFill } from "react-icons/bs"
import ImageMagnifier from '../../Components/ImageMagnifier/ImageMagnifier'
import ProductImage from "../../assets/Images/ProductDetail/ProductDetail.png"
import Thumb1 from "../../assets/Images/ProductDetail/productThumb1.png"
import Thumb2 from "../../assets/Images/ProductDetail/productThumb2.png"
import Rectangle98 from "../../assets/Images/ProductDetail/Rectangle98.png"
import Shirt from "../../assets/Images/ProductDetail/Shirt.png"
import * as AiIcons from "react-icons/ai"
import VarImage from "../../assets/Images/Products/varient_image.png"
import Tabbing from '../../Components/Tabbing/Tabbing'
import Ratings from '../../Components/Ratings/Ratings'
import ProfilePic from "../../assets/Images/ProductDetail/profile_pic.png"
import ProductCarousel from '../../Components/Carousels/ProductCarousel'
import { ProductsData } from '../../Components/Carousels/ProductsData'




const ProductDetail = () => {
  
  const productImages={
    images:[
      {
        key:1,
        path:ProductImage
      },
      {
        key:2,
        path:Thumb1
      },
      {
        key:3,
        path:Thumb2
      },
      {
        key:4,
        path:Thumb1
      },
      {
        key:5,
        path:Thumb2
      },
      {
        key:6,
        path:Thumb1
      },
      {
        key:7,
        path:Thumb2
      }
    ]
  }

  const TabbingData = [
    {
      key: '1',
      label: `Description`,
      children: 
      <div className='desc_main'>
        <p className='note'>
          Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon Konica Minolta 
          camera technologies, including the Minolta AF SLR lens mount, whose assets were acquired by 
          Sony after the end of Konica Minolta's photography operations in early 2006.
        </p>
        <h3>Overview</h3>
        <ul className='product_details'>
          <li><p className='label'>Brand</p><p>Sony Alpha 7 Mark II</p></li>
          <li><p className='label'>Brand</p><p>Sony Alpha 7 Mark II</p></li>
          <li><p className='label'>Resolution</p><p>42MP Full-Frame Exmor R BSI CMOS Sensor</p></li>
          <li><p className='label'>Resolution</p><p>42MP Full-Frame Exmor R BSI CMOS Sensor</p></li>
          <li><p className='label'>Video</p><p>UHD 4K30p Video with HLG & S-Log3 Gammas</p></li>
          <li><p className='label'>Video</p><p>UHD 4K30p Video with HLG & S-Log3 Gammas</p></li>
          <li><p className='label'>Connectivity</p><p>Built-In Wi-Fi/Bluetooth, Dual SD Slots</p></li>
          <li><p className='label'>Connectivity</p><p>Built-In Wi-Fi/Bluetooth, Dual SD Slots</p></li>
          <li><p className='label'>Screen</p><p>3.69m-Dot Tru-Finder OLED EVF</p></li>
          <li><p className='label'>Screen</p><p>3.69m-Dot Tru-Finder OLED EVF</p></li>
        </ul>
      </div>,
    },
    {
      key: '2',
      label: `Care & Details`,
      children: `Content of care & details`,
    },
    {
      key: '3',
      label: `Shipping & Returns`,
      children: `Content of Shipping & Returns`,
    },
    {
      key: '4',
      label: `Reviews`,
      children: `Content of Reviews`,
    },
  ];

  return (
    <Wrapper>
      <Section>
        <div className="detail_page_topbar">Home / Shop / <span>Wine Topper Gnome</span></div>
        <div className='detail_page_main'>
          <div className="detail_main">
            {/* product Information like Images, variations and name etc. */}
            <div className='product_info_main'>
              <div className='product_img'>
                {productImages.images && productImages.images.length !== 0 ? (
                  <ImageMagnifier ImgSrcs={productImages.images !== 0 ?
                    productImages.images[0].path : productImages.images[0].path }
                    ImgCarousel={productImages.images}
                  />
                  ):("no pics")      
                }
                {console.log("products Image",productImages)}
              </div>
              <div className='product_info'>
                <p className='product_category'>
                  Electronics  Accessories
                </p>
                <h3>Apple 2021 10.2-inch iPad (Wi-Fi, 256GB) - Space Gray (9th Generation)</h3>
                <div className='ratings'>
                  <Ratings ratings="53285"/>
                </div>
                <div className='variations_main'>
                  <div className='variation'>
                    <p className='var_value'><span>Color: </span>Black</p>
                    <div className='var_images'>
                      <div className='var_image'>
                        <img src={VarImage} alt=''/>
                      </div>
                      <div className='var_image'>
                        <img src={VarImage} alt=''/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            {/* product description like description, shipping and returns etc. */}
            <div className='description_main'>
              <Tabbing defaultActiveKey="1" data={TabbingData}/>
            </div>

            {/* product Comments*/}
            <div className='all_comments'>
              <div className='comments_heading'>
                <h3>All Comments (2.1k)</h3>
                <div>
                  Sort by: <StyledSelect
                    style={{minWidth:"150px"}}
                    defaultValue="Newest"
                    options={[
                      {
                        value: 'Time Ascending',
                        label: 'Time Ascending',
                      },
                      {
                        value: 'Newest',
                        label: 'Newest',
                      },
                      {
                        value: 'Oldest',
                        label: 'Oldest',
                      },
                    ]}
                  />
                </div>
              </div>
              {/* comment 1 */}
              <div className='comment_main'>
                <div className='comment_top'>
                  <div className='user'>
                    <div className='profile_pic'>
                      <img src={ProfilePic} alt=""/>
                    </div>
                    <div className='name'>
                      <h5>Daisy Murphy</h5>
                      <p>July, 23 2020</p>
                    </div>
                  </div>
                  <div className='review'>
                    <Ratings/>
                    <p>83% of users found this review helpful</p>
                  </div>
                  <div className='likes'>
                    <span><AiIcons.AiFillLike/></span>
                    <span className='dislike'><AiIcons.AiFillDislike/></span>
                  </div>
                </div>
                <div className='comment_body'>
                  <p>Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon 
                    Konica Minolta camera technologies, including the Minolta AF SLR lens mount…
                  </p>
                  <div className='comment_images'>
                    <div className='comment_image'><img src={VarImage} alt=""/></div>
                    <div className='comment_image'><img src={VarImage} alt=""/></div>
                    <div className='comment_image'><img src={VarImage} alt=""/></div>
                  </div>
                </div>
              </div>
              {/* comment 2 */}
              <div className='comment_main'>
                <div className='comment_top'>
                  <div className='user'>
                    <div className='profile_pic'>
                      <img src={ProfilePic} alt=""/>
                    </div>
                    <div className='name'>
                      <h5>Daisy Murphy</h5>
                      <p>July, 23 2020</p>
                    </div>
                  </div>
                  <div className='review'>
                    <Ratings/>
                    <p>83% of users found this review helpful</p>
                  </div>
                  <div className='likes'>
                    <span className='like'><AiIcons.AiFillLike/></span>
                    <span><AiIcons.AiFillDislike/></span>
                  </div>
                </div>
                <div className='comment_body'>
                  <p>Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon 
                    Konica Minolta camera technologies, including the Minolta AF SLR lens mount…
                  </p>
                  <div className='comment_images'>
                    <div className='comment_image'><img src={VarImage} alt=""/></div>
                    <div className='comment_image'><img src={VarImage} alt=""/></div>
                    <div className='comment_image'><img src={VarImage} alt=""/></div>
                  </div>
                </div>
              </div>
              {/* comment 3 */}
              <div className='comment_main'>
                <div className='comment_top'>
                  <div className='user'>
                    <div className='profile_pic'>
                      <img src={ProfilePic} alt=""/>
                    </div>
                    <div className='name'>
                      <h5>Daisy Murphy</h5>
                      <p>July, 23 2020</p>
                    </div>
                  </div>
                  <div className='review'>
                    <Ratings/>
                    <p>83% of users found this review helpful</p>
                  </div>
                  <div className='likes'>
                    <span><AiIcons.AiFillLike/></span>
                    <span><AiIcons.AiFillDislike/></span>
                  </div>
                </div>
                <div className='comment_body'>
                  <p>Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon 
                    Konica Minolta camera technologies, including the Minolta AF SLR lens mount…
                  </p>
                  {/* <div className='comment_images'>
                    <div className='comment_image'><img src={VarImage} alt=""/></div>
                    <div className='comment_image'><img src={VarImage} alt=""/></div>
                    <div className='comment_image'><img src={VarImage} alt=""/></div>
                  </div> */}
                </div>
              </div>
              <div className='view_all_button'>
                <StyledButton type='secondary' width="small">
                  <AiIcons.AiOutlineReload/> Load More Reviews
                </StyledButton>
              </div>
            </div>
            
            {/* Related Products */}
            <div className='related_Products'>
              <h2>Related Products</h2>
              <ProductCarousel data={ProductsData} desktopItem={3} mobileItem={2} tabletItem={2}/>
            </div>
          </div>


          {/* ---------sidebar----------- */}
          <div className="detail_sidebar">
            <div className="voucher">
              <h1>$ 144.25</h1>
              <p >$54.16 Shipping & Import Fees</p>
              <p><StyledLink type="primary" to="#">$14.5</StyledLink> Shipping & Import Fees</p>

              <div className="Voucher-input">
                <h3>QTY</h3>
                <div className='Qty'> 
                  1  +  2
                </div>
              </div>
            
              <div className='P-DetailButton'>
                <StyledButton type="primary" width="maximum">
                Add To card{" "} </StyledButton>
              </div>
              <div className='P-DetailButton'>
                <StyledButton type="secondary" width="maximum">Buy Now</StyledButton>
              </div>
            </div>

            <div className='Seller-information'>
              <div className='seller-content'>
                <h3>Seller information</h3>
              </div>
              <div className='seller-content'>
                <h3>shopfirstclasskicks</h3>
                <Ratings/>
                <p>100% Positive feedback</p>
              </div>
              <div className='seller-profile'>
                <p><BsFillFilePostFill/> Seller Profile</p>
              </div>
            </div>

            <div className='ProductFromStore'>
              <h2 className='ProductFromHeading'>Product From Store</h2>
              <div className='Store-Details'>
                <div className='Store-Image'>
                <img src={Rectangle98} alt=''/>
                </div>
                <div className='Store-rating'>
                  <p>Best Photography<br/> Camera in 2022</p>
                  <Ratings/>
                  <p>$547.32</p>

                </div>
              </div>
              <div className='Store-Details'>
                <div className='Store-Image'>
                <img src={Shirt} alt=''/>
                </div>
                <div className='Store-rating'>
                  <p>Best Photography<br/> Camera in 2022</p>
                  <Ratings/>
                  <p>$547.32</p>

                </div>
              </div>
              <div className='Store-Details'>
                <div className='Store-Image'>
                <img src={Rectangle98} alt=''/>
                </div>
                <div className='Store-rating'>
                  <p>Best Photography<br/> Camera in 2022</p>
                  <Ratings/>
                  <p>$547.32</p>

                </div>
              </div>
              <div className='Store-Details'>
                <div className='Store-Image'>
                <img src={Shirt} alt=''/>
                </div>
                <div className='Store-rating'>
                  <p>Best Photography<br/> Camera in 2022</p>
                  <Ratings/>
                  <p>$547.32</p>

                </div>
              </div>
              
            </div>
          </div>
        </div>
      </Section>

    </Wrapper>
  )
}

export default ProductDetail