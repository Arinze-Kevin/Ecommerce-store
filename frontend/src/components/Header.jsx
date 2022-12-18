import React from 'react'
import {  Search, ShoppingCart, ShoppingCartRoundedIcon } from '@mui/icons-material';
import styled from 'styled-components'
import { FaUser, FaSignInAlt, FaShoppingCart } from 'react-icons/fa'
import './Header.css'

const Container = styled.div`
    height: 55px;
    background-color: rgb(219, 76, 76);
    color: white;


`;

const Wrapper = styled.div`
   padding; 10px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-left: 2em;
   margin-right: 2em;

`;

const Left = styled.div`
   fliex: 1;
   font-weight: bold;
   cursor: pointer;
   display: flex;
   align-items: center;
   margin-bottom: 1.5em;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    width: 30em;
    padding: 5px;
    margin-bottom: 1em;
`;

const Input = styled.div`
   
`;

const Center = styled.div`
   fliex: 1;
`;

const Right = styled.div`
   fliex: 1;
   align-items: center;
   display: flex;

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;


function Header() {
    return (
        <Container>
            <Wrapper>
                <Left style={{fontSize: '1.2em', marginTop: '0.5em'}}>E-Shop</Left>
                <Center>
                 <SearchContainer>
                    <Input/>
                    <Search/>
                    </SearchContainer>
                </Center>
                <Right>
                    {/* <h4 className='topone'>
                        <FaUser /> Register
                    </h4>
                    <h4 className='top'> 
                    <ShoppingCart />  Cart </h4> */} 
                   <MenuItem style={{fontSize: '1.2em'}}>  <FaUser/>Register</MenuItem>
                   <MenuItem style={{fontSize: '1.2em'}}> <FaSignInAlt />Login</MenuItem>
                   <MenuItem style={{fontSize: '1.2em'}}>  <FaShoppingCart/>Cart</MenuItem>
                   {/* <MenuItem> <ShoppingCart />Cart</MenuItem> */}
                </Right>
            </Wrapper>
        </Container>
       
    )
}

export default Header
