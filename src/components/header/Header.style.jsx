import styled from "styled-components";

// Header Style
export const FormStyled = styled.form`
border: 1px solid black;
border-radius: 20px;
padding: 30px;
width: 50%;
height: 100px;
display: flex;
flex-direction: column;
margin-top:20px;
margin: auto;
margin-top: 30px;
`

export const FormButton = styled.button`
    width: 150px;
    height:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    font-size: 18px;
    font-weight:bold;
    cursor: pointer;
    margin: auto;
    margin-top: 10px;
    `
export const FormInput = styled.input`
    width: 75%;
    height: 30px;
    border-radius: 20px 0 0 20px;
`

export const FormSelect = styled.select`
width: 20%;
height:34px;
border-radius:0 20px 20px 0;

`
export const Title = styled.title`
display: flex;
justify-content: center;
font-size: 48px;
font-weight: 700px;
font-family: 'Shantell Sans', cursive;
margin-top: 30px;
`
