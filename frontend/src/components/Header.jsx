import React from 'react'
import {  Search } from '@mui/icons-material';
import styled from 'styled-components'
import { FaUser, FaSignInAlt, FaShoppingCart } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { mobile } from '../responsive';
import { Badge } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

const Container = styled.div`
${mobile({ height: 'none' })}
    z-index: 8;
    width: 100%;
    // height: 9vh;
    background-color: white;
    color: rgb(219, 76, 76);
    margin-top: 0em;
    // margin-bottom: 11.2em;
    


`;

const Wrapper = styled.div`
//    margin-bottom: 41.2em;
   padding; 10px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-left: 2em;
   margin-right: 2em;
   

`;

const Logo = styled.div`
   fliex: 1;
   font-weight: bold;
   cursor: pointer;
   display: flex;
   align-items: center;
   margin-bottom: 1.5em;
   ${mobile({  marginRight: '-2em' })}

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
    ${mobile({ width: '160px', marginTop: '1em', marginRight: '0em' })}
`;

const Input = styled.input`
   width: 45em;
   border: none;
   height: 20px;
   background: rgb(240, 240, 240);
   ${mobile({ width: '115px', marginLeft: '0em' })}

   
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
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user.currentUser) || {}
    // console.log(user.tokens)

    const quantity = useSelector(state=>state.cart.quantity)
    
    return (
        <Container>
            <Wrapper> 
                <Logo> <Link style={{textDecoration: 'none', color: 'rgb(219, 76, 76)', fontSize: '1.2em', marginTop: '0.5em'}} to='/'>E-Shop</Link> </Logo>
                <Center>
                 <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{width: '1.6em', cursor: 'pointer', background: 'rgb(219, 76, 76)', color: 'white'}}/>
                    </SearchContainer>
                </Center>
                <Right>
                   {user ? (<Link style={{textDecoration: 'none', color: 'rgb(219, 76, 76)', fontSize: '1.2em'}} to='/user'><h3><FaUser/> Hi, {user.name}</h3></Link>) : ( 
                    <> <MenuItem> <Link style={{textDecoration: 'none', color: 'rgb(219, 76, 76)', fontSize: '1.2em'}} to='/register'>  <FaUser/>Register</Link> </MenuItem>
                   <MenuItem> <Link style={{textDecoration: 'none', color: 'rgb(219, 76, 76)', fontSize: '1.2em'}} to='/login'> <FaSignInAlt />Login</Link></MenuItem>
                   </> )}
                   <MenuItem> <Link style={{textDecoration: 'none', color: 'rgb(219, 76, 76)', fontSize: '1.2em'}} to='/cart'> 
                   {!!quantity && <Badge style={{marginRight: '0.6em'}} badgeContent={quantity} color='info' >
                    <FaShoppingCart/>
                    </Badge>}
                    Cart</Link></MenuItem>
                </Right>
            </Wrapper>
        </Container>
       
    )
}

export default Header
