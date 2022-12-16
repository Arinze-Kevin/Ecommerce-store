import React from 'react'
import styled from 'styled-components'
import {  ArrowRight, ArrowLeft } from '@mui/icons-material';

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
`;

const Arrow = styled.div`
    width: 2em;
    height: 2em;
    background-color: grey;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    cursor: pointer;
    opacity: 0.5;
    margin: auto;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
`;

const Wrapper = styled.div`
    // height: 100%;
    width: 100%;
`;


const Slide = styled.div`
   display: flex;
//    width: 100%;
//    height: 100vh;
   align-items: center;
`;


const ImgContainer = styled.div`
   flex: 1;
   height:110vh;
//    width: 100%;
`;

const Image = styled.img`
height: 70%;
width: 100%;
`;

const InfoContainer = styled.div`
   fllex: 1;
`;


function Slider() {
    return (

        <Container>
            <Arrow direction='left'>
                 <ArrowLeft/>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                       <Image src='https://i.ibb.co/qy2BvDJ/img2.jpg'/>
                    </ImgContainer>
                  <InfoContainer> </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right'>
                <ArrowRight/>
            </Arrow>
        </Container>
        
    )
}

export default Slider
