import React from 'react'
import { FooterBtn, FooterContainer } from './Footer.style'
import { useThemeContext } from '../../context/ThemeContext'
import {lightIcon , darkIcon} from "../../helper/iconData"

const Footer = () => {
  const {myTheme ,setMyTheme} = useThemeContext()
  const changeTheme = ()=>{
    //toggle mantığı kurduk.
    setMyTheme((prev)=> prev === "light" ? "dark" : "light" )
  }

  return (
  <FooterContainer>
      <FooterBtn onClick={changeTheme}>
        {myTheme === "light" ? lightIcon : darkIcon}
      </FooterBtn>
  </FooterContainer>
    
  
  )
}


export default Footer