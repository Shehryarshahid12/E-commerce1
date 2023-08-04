import React from "react";
import { useNavigate } from "react-router-dom";
import CreateAccountImage from "../../../assets/Images/authPages/CreateAccount.png";
import {
  StyledButton,
  StyledInputPassword,
  StyledInput,
  Wrapper,
  StyledLink,
  StyledCheckBox,
} from "../../../assets/Themes/Styles/StyledComponents";

const SignUp = () => {
  const Navigate=useNavigate();

  return (
    <Wrapper>
    <div className="auth_main">
      <div className="auth_content_main">

        <div className="auth_content">
          <div className="content_section">
            <h1>Create Account</h1>
            <p className="auth_note">Welcome back to mega online. Please enter your details.</p>
            <form className="auth_form">
              <label>Your Name</label>
              <StyledInput sizes="medium" placeholder="Enter your Name"/>
              <label>Email Address</label>
              <StyledInputPassword sizes="medium" placeholder="Enter your email"/>
              <label>Password</label>
              <StyledInputPassword sizes="medium" placeholder="Create Password"/>
              <label>Confirm Password</label>
              <StyledInputPassword sizes="medium" placeholder="Confirm Password"/>

              <div className="forgot_main">
                <div className="privacy_note">
                  <p>By creating an account, you agree to Mega Online </p>   
                  <p>
                    <StyledLink type="primary" to="#"> Conditions of Use</StyledLink> and 
                    <StyledLink type="primary" to="#"> Privacy Notice</StyledLink>
                  </p>             
                </div>
              </div>
              <div className="buttons_main">
                <StyledButton type="primary" width="maximum" onClick={()=>Navigate("/confirm-phone")}>Create Account</StyledButton>
                <StyledButton type="secondary" width="maximum">Sign in with Google</StyledButton>
              </div>
            </form>
            <p className="auth_footer">Already have an account? <StyledLink type="primary" to="/login">Log in</StyledLink></p>
            <p className="auth_footer">Want to sell? <StyledLink type="primary" to="#">Create a free seller account</StyledLink></p>
          </div>
        </div>
      </div>
      <div className="auth_image">
        <img src={CreateAccountImage} alt="Login Page Image"/>
      </div>
    </div>
  </Wrapper>
  );
};

export default SignUp;
