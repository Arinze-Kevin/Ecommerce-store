import { Facebook, Room, Phone, Instagram, MailOutline, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
   display: flex;
   ${mobile({flexWrap: 'wrap' })}

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 2em;
`;
const Logo = styled.h1`
    flex: 1;
`;
const Desc = styled.p`
    flex: 1;
    margin: 20px 0px;
    ${mobile({marginLeft: '1em' })}
    // margin-right: 50em;
`;
const SocialContainer = styled.div`
    flex: 1;
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    margin-left: 4em;
    ${mobile({display: 'none' })}

`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
     list-style: none;
     padding: 0;
     margin: o;
     display: flex;
     flex-wrap: wrap;
`;
const ListItem = styled.li`
   width: 50%; 
   margin-bottom: 10px;
`;
const Right = styled.div`
   flex: 1;
   padding: 20px;
`;
const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
`;
const Payment = styled.img`
   width: 50%;
   background-color: none;
`;

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>E-Shop</Logo>
                <Desc>
                Lorem ipsum dolor sit amet. Et nostrum odit qui voluptatem inventore et temporibus repudiandae ea numquam sapiente? 
                Vel beatae praesentium et quas asperiores ad voluptates provident rem exercitationem provident est consequatur 
                voluptatibus ut sapiente suscipit aut voluptas esse.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Home</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:'10px'}} />Lorem ipsum dolor sit amet.</ContactItem>
                <ContactItem><Phone style={{marginRight:'10px'}} /> +234 706 5488 267</ContactItem>
                <ContactItem><MailOutline style={{marginRight:'10px'}} /> iam.arinzekevin@gmail.com</ContactItem>
                <Payment src='https://i.ibb.co/wCgMxyQ/291-2918799-stripe-payment-icon-png-transparent-png.png' />

            </Right>
        </Container>
        
    )
}

export default Footer
