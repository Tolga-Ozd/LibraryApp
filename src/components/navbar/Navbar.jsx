import React from 'react'
import { MenuStyled, NavStyled, NavTitle, StyledLink } from './Navbar.style'


const Navbar = () => {
  return (
    <NavStyled>
      <NavTitle>
        UNIVERSAL  LİBRARY
      </NavTitle>
      <MenuStyled>
        <StyledLink to="/" > HOME </StyledLink>
        <StyledLink to="/about" > ABOUT </StyledLink>
        <StyledLink to="/register" > REGİSTER </StyledLink>
        <StyledLink to="/login" > LOGIN </StyledLink>
      </MenuStyled>
    </NavStyled>
  )
}

export default Navbar