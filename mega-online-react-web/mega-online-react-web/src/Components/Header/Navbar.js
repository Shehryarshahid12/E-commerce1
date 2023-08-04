import React from 'react'
import * as AiIcons from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Wrapper,StyledInput,StyledSelect,StyledButton, StyledLink } from '../../assets/Themes/Styles/StyledComponents';
import Logo from '../Logo/Logo';

const Navbar = () => {
    const navigate= useNavigate();

  return (
    <Wrapper className='navbar_main'>
        <div className='navbar'>
            <StyledLink to="/">
                <Logo/>
            </StyledLink>
            <div className='nav_search_main'>
                <StyledSelect
                    className='nav_select'
                    defaultValue="All Categories"
                    options={[
                        {
                            value: 'All Categories',
                            label: 'All Categories',
                        },
                        {
                            value: 'New',
                            label: 'New',
                        },
                        {
                            value: 'Used',
                            label: 'Used',
                        },
                    ]}
                /> 
                <StyledInput placeholder="What are you looking for?"/>
                <StyledButton type='primary' onClick={()=>navigate("search-result")}><AiIcons.AiOutlineSearch/></StyledButton>
            </div>
            <div className='right_nav'>
                <StyledButton type='round' onClick={()=>navigate("cart")}><AiIcons.AiOutlineShoppingCart/></StyledButton>
                <StyledLink to="login">
                    <div className='nav_auth'>
                            {/* <span className='nav_user_icon'><AiIcons.AiOutlineUser/> </span> */}
                            Login/Register <AiIcons.AiOutlineDown/>
                    </div>
                </StyledLink>
            </div>
        </div>
    </Wrapper>
  )
}

export default Navbar