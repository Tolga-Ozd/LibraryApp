import React from 'react'
import { FormButton, FormInput, FormSelect, FormStyled, Title } from './Header.style'
import { useDataContext } from '../../context/DataContext'

const Header = () => {

  const {data , setData, getData} = useDataContext() 

  const handleClick = (e) =>{
      e.preventDefault()
      getData()
      
  }

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
         <FormButton onClick={handleClick}>SEARCH</FormButton>
         </div>
        </FormStyled>
       </div>
        
    </>
   
  )
}


export default Header