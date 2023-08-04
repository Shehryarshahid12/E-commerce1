
import React from "react";
import LoginImage from "../../../assets/Images/authPages/LoginImage.png"
import {StyledButton,StyledInputPassword, StyledInput, Wrapper, StyledLink, StyledCheckBox} from "../../../assets/Themes/Styles/StyledComponents"
import Logo from "../../../Components/Logo/Logo";

const Login = () => {
  return (
    <Wrapper>
      <div className="auth_main">
        <div className="auth_content_main">
          {/* <Logo/> */}
          <div className="auth_content">
            <div className="content_section">
              <h1>Welcome Back!</h1>
              <p className="auth_note">Welcome back to mega online. please enter your details</p>
              <form className="auth_form">
                <label>Email Address</label>
                <StyledInput sizes="medium" placeholder="Enter Your Email"/>
                <label>Password</label>
                <StyledInputPassword sizes="medium" placeholder="Enter Password"/>
                <div className="forgot_main">
                  <span>
                    <StyledCheckBox/> Remeber me
                  </span>
                  <span>
                    <StyledLink type="primary" to="#">Forgot Password?</StyledLink>
                  </span>
                </div>
                <div className="buttons_main">
                  <StyledButton type="primary" width="maximum">Sign in</StyledButton>
                  <StyledButton type="secondary" width="maximum">Sign in with Google</StyledButton>
                </div>
              </form>
              <p className="auth_footer">Don't have an account? <StyledLink type="primary" to="/sign-up">Sign up</StyledLink></p>
              <p className="auth_footer">Want to sell? <StyledLink type="primary" to="#">Create a free seller account</StyledLink></p>
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

export default Login;
