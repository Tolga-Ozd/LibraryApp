import React from 'react'
import { Link } from 'react-router-dom'
import { MenuStyled, NavStyled, StyledLink } from './Navbar.style'


const Navbar = () => {
  return (
    <NavStyled>
      <div>
        Universal Library
      </div>
      <MenuStyled>
        <StyledLink to="/" > Home </StyledLink>
        <StyledLink to="/about" > About </StyledLink>
        <StyledLink to="/register" > Register </StyledLink>
        <StyledLink to="/login" > Login </StyledLink>
      </MenuStyled>
    </NavStyled>
  )
}

export default Navbar