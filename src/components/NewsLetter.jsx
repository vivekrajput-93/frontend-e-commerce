import { Send } from '@mui/icons-material';
import React from 'react'
import { styled } from 'styled-components';
import { mobile } from '../Responsive';

const  Container = styled.div`
 height: 60vh;
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 background-color: var(--bg-color);

`



const  Title = styled.h1`
 font-size: 40px;
 color: white;
`



const  Desc = styled.p`
 font-size: 24px;
 color: white;
 padding: 10px 50px;
 text-align:center;
 ${mobile({textAlgin: "center"})};
`



const  InputContainer = styled.div`
    width:50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "80%"})};
`


const  Button = styled.button`
    flex:1;
    border: none;
    outline: none;
    background-color: white;
    border-left : 1px solid var(--bg-color);
    cursor:pointer;



`


const  Input = styled.input`
    flex:8;
    border:none;
    outline:none;
    font-size:16px;
`






const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
        <Input type='email' placeholder='Enter your Email' />
        <Button>
            <Send />
        </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter ;