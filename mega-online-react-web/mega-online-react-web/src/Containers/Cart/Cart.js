import React from "react";
import {
  StyledButton,
  StyledRadio,
  Wrapper,
} from "../../assets/Themes/Styles/StyledComponents";

import shape from "./Shape.png";

const Cart = () => {
  return (
    <>
    <Wrapper>
      <div className="Shipping-method">
        <div className="Shipping-details">
          <h2>Choose Shipping Service</h2>
          <span>
            You can choose one best shipping service accross your needs.
          </span>
          <div className="choose-method">
            <div className="check-input">
              <input type="radio" />
            </div>
            <div className="method">
              <div className="shiping-date">
                <h3>DHL</h3>
                <p>Estimated delivery time: Jul 20 - Aug 03</p>
              </div>

              <div className="shipping-fee">
                <p>Free shipping</p>
              </div>

              <div className="shipping-logo">
                <img src={shape} alt="Logo" />
              </div>
            </div>
          </div>
          <div className="choose-method">
            <div className="check-input">
              <input type="radio" />
            </div>
            <div className="method">
              <div className="shiping-date">
                <h3>FedEx</h3>
                <p>Estimated delivery time: Jul 20 - Aug 03</p>
              </div>

              <div className="shipping-fee">
                <p>$56.65</p>
              </div>

              <div className="shipping-logo">
                <img src={shape} alt="Logo" />
              </div>
            </div>
          </div>
          <div className="choose-method">
            <div className="check-input">
              <input type="radio" />
            </div>
            <div className="method">
              <div className="shiping-date">
                <h3>Express Expedition</h3>
                <p>Estimated delivery time: Jul 20 - Aug 03</p>
              </div>

              <div className="shipping-fee">
                <p>$19.80</p>
              </div>

              <div className="shipping-logo">
                <img src={shape} alt="Logo" />
              </div>
            </div>
          </div>
          <div className="choose-method">
            <div className="check-input">
              <input type="radio" />
            </div>
            <div className="method">
              <div className="shiping-date">
                <h3>JNE Express</h3>
                <p>Estimated delivery time: Jul 20 - Aug 03</p>
              </div>

              <div className="shipping-fee">
                <p>58.98</p>
              </div>

              <div className="shipping-logo">
                <img src={shape} alt="Logo" />
              </div>
            </div>
          </div>
          <div className="choose-method">
            <div className="check-input">
              <input type="radio" />
            </div>
            <div className="method">
              <div className="shiping-date">
                <h3>POS Kenya</h3>
                <p>Estimated delivery time: Jul 20 - Aug 03</p>
              </div>

              <div className="shipping-fee">
                <p>$140.5</p>
              </div>

              <div className="shipping-logo">
                <img src={shape} alt="Logo" />
              </div>
            </div>
          </div>
          
         
        </div>

        <div className="voucher">
          <p>Have a voucher?</p>

          <div className="Voucher-input">
            <input type="text" placeholder="Voucher Code" />
            <button>Apply</button>
          </div>
          <div className="voucher-discount">
            <div>Subtotal</div>
            <div>$144.8</div>
          </div>
          <div className="voucher-discount">
            <div>Discount</div>
            <div>$0</div>
          </div>
          <div className="voucher-discount">
            <div>Grand Total</div>
            <div>$144.5</div>
          </div>

          <StyledButton type="primary" width="maximum">
            Checkout Now{" "}
          </StyledButton>
        </div>
      </div>
      </Wrapper>
    </>
  );
};

export default Cart;
