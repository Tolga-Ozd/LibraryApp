import React from 'react'
import { FormButton, FormInput, FormSelect, FormStyled, Title } from './Header.style'

const Header = () => {
  return (
    <>
        <Title>BOOKS OR MAGAZINES</Title>
       <div>
       <FormStyled action="">
          <div>
          <FormInput placeholder='Search..' type="text" />
          <FormSelect name="" id=""></FormSelect>
          </div>
         <div>
         <FormButton>Search</FormButton>
         </div>
        </FormStyled>
       </div>
        
    </>
   
  )
}


export default Header