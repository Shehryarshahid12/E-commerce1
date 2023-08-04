import React from "react";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../../assets/Images/authPages/EnterCode.png"
import {StyledButton,StyledInputPassword, StyledInput, Wrapper, StyledLink, StyledCheckBox} from "../../../assets/Themes/Styles/StyledComponents"
import Logo from "../../../Components/Logo/Logo";


const EnterCode = () => {

  const Navigate = useNavigate();

  return (
    <Wrapper>
    <div className="auth_main">
      <div className="auth_content_main">
        {/* <Logo/> */}
        <div className="auth_content">
          <div className="content_section">
            <h1>Enter code</h1>
            <p className="auth_note">We’ve sent you a 6-digit code on <span>+92 303 2335546</span>. Please enter below to verify</p>
            <form className="auth_form">
              <div className="digit_inputs_groups">
                <StyledInput sizes="medium" category="digit" placeholder="-" maxLength={1}/>
                <StyledInput sizes="medium" category="digit" placeholder="-" maxLength={1}/>
                <StyledInput sizes="medium" category="digit" placeholder="-" maxLength={1}/>
                <StyledInput sizes="medium" category="digit" placeholder="-" maxLength={1}/>
                <StyledInput sizes="medium" category="digit" placeholder="-" maxLength={1}/>
                <StyledInput sizes="medium" category="digit" placeholder="-" maxLength={1}/>
              </div>
              <div className="buttons_main">
                <StyledButton type="primary" width="maximum" onClick={()=>Navigate("/")}>Continue</StyledButton>
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

export default EnterCode;
