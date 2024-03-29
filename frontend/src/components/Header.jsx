import React, { useEffect } from 'react'
import { Dehaze, Search } from '@mui/icons-material';
import styled from 'styled-components'
import { FaUser, FaSignInAlt, FaShoppingCart } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { mobile } from '../responsive';
import { Badge } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Announcement = styled.div`
// position: relative;
// position: fixed;
  ${mobile({ width: '100%', height: '1.7em' })}
   z-index: 7;
   width: 100%;
   height:20px;
   background-color: rgb(219, 76, 76);
   color: black;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 14px;
   font-weight: 500;
`
const Container = styled.div`
${mobile({ height: 'none' })}
    position: relative;
    position: fixed;
    z-index: 8;
    width: 100%;
    background-color: white;
    color: rgb(219, 76, 76);
`;

const Wrapper = styled.div`
   padding; 10px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-left: 2em;
   margin-right: 2em;
   margin-bottom: -1em;
   

`;

const Logo = styled.div`
   fliex: 1;
   font-weight: bold;
   cursor: pointer;
   display: flex;
   align-items: center;
   margin-bottom: 1.5em;
   ${mobile({ marginRight: '-2em' })}

`;

const SearchContainer = styled.div`
    border: 0.8px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 95px;
    width: 35em;
    padding: 2px;
    margin-bottom: 1em;
    background:  rgb(219, 76, 76);
    ${mobile({ display: 'none',  })}
`;
const SearchContainer2 = styled.div`
  display: none;
    ${mobile({ border: '0.8px solid lightgrey', display: 'flex', padding: '5px', width: '96%', alignItems: 'center', border: '0.8px solid lightgrey', alignItem: 'center' })}
`;

const Input = styled.input`
   width: 45em;
   border: none;
   height: 20px;
   background: rgb(240, 240, 240);
   ${mobile({ padding: '5px', height: '20px', background: 'rgb(240, 240, 240)', width: '345px' })}

   
`;

const Center = styled.div`
   fliex: 1;
   

`;

const Right = styled.div`
   fliex: 1;
   align-items: center;
   display: flex;
   ${mobile({  marginRight: '1em' })}

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '13px', marginRight: '-1em' })}
`;


function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = JSON.parse(localStorage.getItem("user"))
    console.log('userLOcalstorage', userData)

    const quantity = useSelector(state => state.cart.quantity)
 
   
    return (
        <Container>
            <Announcement>Super Deal! Free Shipping on Orders over $50 </Announcement>
        
            <Wrapper>
                <Logo> <Link style={{ textDecoration: 'none', color: 'rgb(219, 76, 76)', fontSize: '1.2em', marginTop: '0.5em' }} to='/'>E-Shop</Link> </Logo>
                <Center>
                    <SearchContainer>
                        <Input placeholder='Search...' />
                        <Search style={{ width: '1.6em', cursor: 'pointer', background: 'rgb(219, 76, 76)', color: 'white' }} />
                    </SearchContainer>
                </Center>
                <Right>
                    {userData?(
                        <Link style={{ textDecoration: 'none', color: 'rgb(219, 76, 76)', fontSize: '1.2em' }} to='/user'><h3><FaUser /> Hi, {userData?.name}</h3></Link>
                        ) : (
                            <> <MenuItem> <Link style={{  textDecoration: 'none', color: 'rgb(219, 76, 76)', fontSize: '1.2em' }} to='/register'>  <FaUser />Register</Link> </MenuItem>
                                <MenuItem> <Link style={{ textDecoration: 'none', color: 'rgb(219, 76, 76)', fontSize: '1.2em' }} to='/login'> <FaSignInAlt />Login</Link></MenuItem>
                            </>
                        )
                    }
                    <MenuItem> <Link style={{ textDecoration: 'none', color: 'rgb(219, 76, 76)', fontSize: '1.2em' }} to='/cart'>
                        {!!quantity && <Badge style={{ marginRight: '0.6em' }} badgeContent={quantity} color='info' >
                            <FaShoppingCart />
                        </Badge>}
                        Cart</Link></MenuItem>
                </Right>
            </Wrapper>
            <SearchContainer2>
                        <Input placeholder='Search' />
                        <Search style={{ width: '1.6em', cursor: 'pointer', background: 'rgb(219, 76, 76)', color: 'white' }} />
                    </SearchContainer2>
        </Container>

    )
}

export default Header
