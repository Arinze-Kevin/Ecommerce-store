import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: rgb(219, 76, 76);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({ width: '25.7em', height: '30vh' })}
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize: '50px', marginTop: '-0.8em' })}
`;
const Desc = styled.div`
   font-size: 24px;
   font-weight: 300;
   margin-bottom: 20px;
   ${mobile({fontSize: '18px', fontWeight: 350 })}

`;
const InputContainer = styled.div`
   width: 50%;
   height: 40px;
   background-color: white;
   display: flex;
   justify-content: space-between;
   border: 7px solid lightblue;

`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: teal;
    color: white;
`;

function Newsletter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products</Desc>
            <InputContainer>
            <Input placeholder='Your Email' />
            <Button>
                <Send />
            </Button>
            </InputContainer>
        </Container>
        
    )
}

export default Newsletter
