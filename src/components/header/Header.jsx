import React from 'react'
import { FormButton, FormInput, FormSelect, FormStyled, Title } from './Header.style'

const Header = () => {
  return (
    <>
        <Title>BOOKS OR MAGAZINES</Title>
       <div>
       <FormStyled action="">
          <FormInput placeholder='Search..' type="text" />
          <FormSelect name="" id=""></FormSelect>
          <FormButton>Seach</FormButton>
        </FormStyled>
       </div>
        
    </>
   
  )
}


export default Header