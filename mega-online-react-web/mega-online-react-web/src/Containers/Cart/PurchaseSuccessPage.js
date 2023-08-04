import React from "react";
import { AiOutlineOrderedList,AiOutlineCheckCircle } from "react-icons/ai";
import { StyledButton, Wrapper } from "../../assets/Themes/Styles/StyledComponents";

export default function PurchaseSuccessPage() {
  return (
    <Wrapper>
    
    <div className="PurchaseSuccess">
      
        <AiOutlineOrderedList />
        <div className="Success-icon">
        <AiOutlineCheckCircle/>
        </div>
        <h1>Purchase Success</h1>
        
          <p>
            Thank’s for your order at Elma e-commerce. Your order will be
            processed as soon as possible.
          </p>
          <p>
            Make sure you make note of your order number, which is <b>1234ABCD56EF</b>.
          </p>
          <p>
            You will be receiving an email shortly with invoice from your order.
          </p>
        <div className="purchase-Button">
          <StyledButton type="secondary" width="small">Shopping continue</StyledButton>
          <StyledButton type="primary" width="small">Track Your Order</StyledButton>
         

        </div>
        
      
    </div>
    </Wrapper>
  );
}
