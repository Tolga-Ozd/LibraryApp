import React from 'react'
import { Link } from 'react-router-dom'
import { NavStyled } from './Navbar.style'

const Navbar = () => {
  return (
    <NavStyled>
      <div>
        Universal Library
      </div>
      <div>
        <Link to="/" > Home </Link>
        <Link to="/about" > About </Link>
        <Link to="/register" > Register </Link>
        <Link to="/login" > Login </Link>
      </div>
    </NavStyled>
  )
}

export default Navbar