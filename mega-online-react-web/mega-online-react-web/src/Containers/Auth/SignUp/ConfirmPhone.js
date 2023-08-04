import React from "react";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../../assets/Images/authPages/ConfirmPhone.png"
import {StyledButton,StyledInputPassword, StyledInput, Wrapper, StyledLink, StyledCheckBox} from "../../../assets/Themes/Styles/StyledComponents"
import Logo from "../../../Components/Logo/Logo";


const ConfirmPhone = () => {

  const Navigate=useNavigate();

  return (
    <Wrapper>
    <div className="auth_main">
      <div className="auth_content_main">
        {/* <Logo/> */}
        <div className="auth_content">
          <div className="content_section">
            <h1>Comfirm your phone </h1>
            <p className="auth_note">Please enter you phone number, we’ll send you a link 
              to verify your account
            </p>
            <form className="auth_form">
              <label>Phone</label>
              <StyledInput sizes="medium" placeholder="Enter phone number"/>
             
              
              <div className="buttons_main">
                <StyledButton type="primary" width="maximum" onClick={()=>Navigate("/enter-code")}>Continue</StyledButton>
              </div>
            </form>
            
          </div>
        </div>
      </div>
      <div className="auth_image">
        <img src={LoginImage} alt="Login Page Image"/>
      </div>
    </div>
  </Wrapper>
  );
};

export default ConfirmPhone;
