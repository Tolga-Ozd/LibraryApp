import styled from "styled-components";
import { NavLink } from 'react-router-dom'

// Navbar Style:
export const NavStyled = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const MenuStyled = styled(NavStyled)`
    gap:2rem;
    font-size: 24px;
    
`
export const StyledLink = styled(NavLink)`
    text-decoration:none;
`
