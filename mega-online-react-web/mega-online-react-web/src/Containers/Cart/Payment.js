import React from "react";
import {
  StyledRadio,
  Wrapper,
  StyledButton,
} from "../../assets/Themes/Styles/StyledComponents";

export default function Payment() {
  return (
    <Wrapper>
      <div className="payment-page">
        <div className="Carpayment">
          <div className="payment-content">
            <h2>Payment With</h2>
            <p>Choose what service you want for your transaction</p>
          </div>

          <div className="payment-select">
            <div>
              <StyledRadio />
            </div>

            <div>
              <h2>MAPESA</h2>
              <p>
                You can use all credit card service. We can accept Visa and
                Master Card.
              </p>
            </div>
          </div>
          <div className="payment-select">
            <div>
              <StyledRadio />
            </div>

            <div>
              <h2>COD (Cash on Delivery)</h2>
              <p>
                You can use all credit card service. We can accept Visa and
                Master Card.,,,.
              </p>
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
  );
}
