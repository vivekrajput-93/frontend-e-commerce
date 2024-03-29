import React from 'react'
import { styled } from 'styled-components';
import { mobile } from '../Responsive';



const Container = styled.div`
 width: 100vw;
 height : 100vh;
 background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
background-size: cover;
margin-top: -1.8rem;
display: flex;
justify-content: center;
align-items: center;


`;


const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})};

`;

const Title = styled.h1`
   font-size : 24px;
   font-weight: 300;

`;


const Form = styled.form`
  display : flex;
  flex-direction: column;
  
 
`;

const Input = styled.input`
 flex: 1;
 min-width: 40%;
 margin: 10px 0px;
 padding : 10px;

`;

const Button = styled.button`
  width: 40%;
  border:none;
  outline:none;
  padding: 15px 20px;
  background-color: var(--bg-color);
  color: white;
  cursor:pointer;
  font-size: 1rem;
  margin-bottom: 5px;

`;

const Link = styled.a`
 margin : 5px 0px;
 cursor:pointer;
 text-decoration: underline;
 color : gray;


 &:hover {
    color: #111;
 }

`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <Button>Login</Button>
                <Link>DO NOT REMEMBER YOUR PASSWORD ?</Link>
                <Link>CREATE AN ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login ;