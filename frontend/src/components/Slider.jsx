import { React, useState } from 'react'
import styled from 'styled-components'
import { ArrowRight, ArrowLeft } from '@mui/icons-material';
import { sliderItems } from '../data'

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;
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
    z-index: 2;
`;

// const Wrapper = styled.div`
//     // height: 100%;
//     width: 100%;
//     display: flex;
// `;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

// const Slide = styled.div`
//    display: flex;
//    width: 100%;
// //    height: 100vh;
//    align-items: center;
// `;

const Slide = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   background-color: #${props=>props.bg};
`;


// const ImgContainer = styled.div`
//    flex: 1;
//    height:110vh;
//    width: 100%;
// `;

const ImgContainer = styled.div`
   height:110vh;
   flex: 1;
   width: 100%;
`;

// const Image = styled.img`
// height: 70%;
// width: 100%;
// `;

const Image = styled.img`
height: 80%;
width: 100%;
`;

// const InfoContainer = styled.div`
//    fllex: 1;
//    align-item: center;

// `;

const InfoContainer = styled.div`
   fllex: 1;
   padding: 50px;
   position: absolute;
//    background-color: white;
//    opacity: 0.5;
//    text-align: center;
   margin-left: 21em;
   margin-right: 21em;
   margin-bottom: 9em;
//    background-size: 1em;

`;

// const Title = styled.h1`
// //  margin-bottom: 50px;

// `;

const Title = styled.h1`
   font-size: 70px;
   background-color: white;
   opacity: 0.5;


`;

// const Desc = styled.p`
// `;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 600;
  background-color: white;
   opacity: 0.5;
`;

// const Button = styled.button`
// `;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  background-color: white;
   opacity: 0.5;
   margin-left: 7em;
   font-weight: 600;
`;


function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };


    return (


        <Container>
            <Arrow direction='left' onClick={()=>handleClick('left')}>
                 <ArrowLeft/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (  
                 <Slide bg={item.bg} key={item.id} >
                    <ImgContainer>
                       <Image src={item.img} />
                    </ImgContainer>
                   <InfoContainer>
                       <Title>{item.title}</Title>
                       <Desc>
                          {item.desc}
                       </Desc>
                       <Button>SHOP NOW</Button>  
                   </InfoContainer>
                 </Slide>
                ))}  
            </Wrapper>
            <Arrow direction='right' onClick={()=>handleClick('right')}>
                <ArrowRight/>
            </Arrow>
        </Container>


        
    )
}

export default Slider
