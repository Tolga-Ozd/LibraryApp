import styled from "styled-components";

// Header Style
export const FormStyled = styled.form`
border: 1px solid black;
border-radius: 20px;
padding: 20px;
width: 50%;
height: 150px;
display: flex;
justify-content: center;
margin-top:20px;
`

export const FormButton = styled.button`
    width: 150px;
    height:30px;
    
`
export const FormInput = styled.input`
    width: 75%;
    height: 30px;
    border-radius: 20px 0 0 20px;
`

export const FormSelect = styled.select`
width: 20%;
height:30px;
border-radius:0 20px 20px 0;

`
export const Title = styled.title`
display: block;
justify-content: center;
font-size: 48px;
font-weight: 700px;
font-family: 'Shantell Sans', cursive;
`