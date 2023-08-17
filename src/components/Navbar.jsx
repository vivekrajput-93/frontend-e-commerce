import React from 'react'
import { styled } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Badge, MenuItem } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../Responsive"

const Container  = styled.div`
   height: 60px;
   ${mobile({height: "50px"})};
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display : flex;
  align-items : center;
  justify-content: space-between;
  ${mobile({padding : "10px 0px"})};
`;



const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: poniter;
  ${mobile({display: "none"})};
`;


const SearchContainer = styled.div`
   border : 0.5px solid lightgray;
   display: flex;
   align-items : center;
   margin-left : 25px;
   padding: 5px;
`


const  Input = styled.input`
   border : none;
   outline : none;
   ${mobile({width: "50px"})};
`

const Center = styled.div`
flex: 1;
text-align : center;
`;

const Logo = styled.h1`
  font-weight : bold;
  letter-spacing : 2px;
  ${mobile({fontSize: "24px"})};
`

const Right = styled.div`flex: 1;
display : flex;
align-items : center;
justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent : "center"})}
`;

const Menu = styled.div`
 font-size : 14px;
 cursor: pointer;
 margin-left: 25px;
 ${mobile({fontSize: "12px", marginLeft: "10px"})};
 
 
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>HIN</Language>
                <SearchContainer>
                    <Input placeholder='Search' />
                    <SearchIcon style={{color : "gray", fontSize:18, cursor:'pointer'}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>SHOPIO.</Logo>
            </Center>
            <Right>
                <Menu>REGISTER</Menu>
                <Menu>LOGIN</Menu>
                <Menu>
                    <Badge badgeContent={4} color='primary'>
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </Menu>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar; 