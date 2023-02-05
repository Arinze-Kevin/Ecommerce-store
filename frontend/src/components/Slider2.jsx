import { React, useState } from 'react'
import styled from 'styled-components'
import { ArrowRight, ArrowLeft } from '@mui/icons-material';
import { sliderItems } from '../data'
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';



const Container = styled.div`
display: none;
    width: 100%;
    height: 80vh;
    // display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: 'flex', height: '40vh', width: '100%', margnLeft: '-1.8em', overflow: 'hidden' })}
    `;
    
    // ${mobile({ display: 'flex', overflow: 'hidden',
    //  position: 'relative', width: '33em' })}

const Title2 = styled.h1`
   color: grey;
   font-weight: 700
   
`;


const Arrow = styled.div`
    width: 2em;
    margin-left: 15em;
    height: 2em;
    background-color: grey;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    cursor: pointer;
    opacity: 4.5;
    margin: auto;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    z-index: 2;
    ${mobile({ marginTop: '13em' })}
`;

// const Wrapper = styled.div`
//     // height: 100%;
//     width: 100%;
//     display: flex;
// `;

const Wrapper = styled.div`
display: none;
 height: 100%;
    display: flex;
    ${mobile({ marginTop: '10em' })}
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
   `;

// const Slide = styled.div`
//    display: flex;
//    width: 100%
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
   ${mobile({ margiTop: '22em' })}
   
`;

const Image = styled.img`
height: 80%;
width: 100%;
${mobile({ marginop: '4em', height: '50vh', width: '110%' })}
`;

const InfoContainer = styled.div`
   flex: 1;
   padding: 5px;
   font-size: 27px;
   position: absolute;
height: 10vh;
width: 25%;
   margin-bottom: 30em;
${mobile({ marinLeft: '22em' })}

`;

// const Title = styled.h1`
// //  margin-bottom: 50px;

// `;

const Title = styled.h1`
   font-size: 24px;
   background-color: white;
   opacity: 0.5;
   text-align: center;
   margin-left: 3em;

`;

// const Desc = styled.p`
// `;

const Desc = styled.p`
text-align: center;
  margin: 10px 20px;
  margin-right: -2em;
  font-size: 15px;
  font-weight: 700;
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
   margin-left: 5em;
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
            <Arrow style={{marginLeft: '2.5em'}} direction='left' onClick={()=>handleClick('left')}>
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
                       <Button><Link to={`/mensfashion`}>SHOP NOW</Link></Button> 
                   </InfoContainer>
                 </Slide>
                ))}  
            </Wrapper>
            <Arrow style={{marginRight: '2em'}} direction='right' onClick={()=>handleClick('right')}>
                <ArrowRight/>
            </Arrow>
            
        </Container>


        
    )
}

export default Slider
