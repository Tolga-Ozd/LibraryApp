import styled from "styled-components";
import { NavLink } from 'react-router-dom';

// Navbar Style:
export const NavStyled = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    background-color: white;
`

export const MenuStyled = styled(NavStyled)`
    gap:2rem;
    font-size: 24px;
    font-family: 'Shantell Sans', cursive;
    font-weight: 700px;
   

`
export const StyledLink = styled(NavLink)`
    text-decoration:none;
    :hover{
        font-size: 26px;
        color:red;
        transition:0.3s linear;
    }
`

export const NavTitle = styled(NavStyled)`
    font-size: 32px;
    font-weight: 800px;
    font-family: 'Shantell Sans', cursive;
    color:red;

`