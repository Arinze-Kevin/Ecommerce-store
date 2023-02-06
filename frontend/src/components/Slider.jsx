import { React, useState } from 'react'
import styled from 'styled-components'
import { ArrowRight, ArrowLeft } from '@mui/icons-material';
import { sliderItems } from '../data'
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';



const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: 'none' })}
    `;
    
    // ${mobile({ display: 'flex', overflow: 'hidden',
    //  position: 'relative', width: '33em' })}
const Categories = styled.div`
   z-index: 6;
   background: white;
   margin-right: 2em;
   padding: 20px;
   border-radius: 1em;
   margin-top: 2.2em;
   margin-left: 2em;
   height: 77%;
   

`;

const Title2 = styled.h1`
   color: grey;
   font-weight: 700
   
`;


const List = styled.ul`
    font-weight: 500;
    list-style: none;
     padding: 0;
     margin: o;
     height: 70%
    
`;
const ListItem = styled.li`
//    width: 50%; 
//    margin-bottom: 10px;
     cursor: pointer;
     height: 20%;
   
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
   margin-top: 4em;
   ${mobile({  marginRight: '-3em' })}
   
`;

// const Image = styled.img`
// height: 70%;
// width: 100%;
// `;

const Image = styled.img`
height: 80%;
width: 71%;
${mobile({ width: '250%' })}

margin-left: 2em;



`;

// const InfoContainer = styled.div`
//    fllex: 1;
//    align-item: center;

// `;

const  CatContainer = styled.div`

margin-top: 2em;

${mobile({ display: 'none' })}
`;

const InfoContainer = styled.div`
   fllex: 1;
   padding: 50px;
   position: absolute;
//    background-color: white;
//    opacity: 0.5;
//    text-align: center;
   margin-left: 14em;
   margin-right: 21em;
   margin-bottom: 9em;
//    background-size: 1em;
${mobile({ marginLeft: '22em' })}

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
            <CatContainer style={{background: 'lightgrey', zIndex: '2' }}>
        <Categories>
            <Title2>CATEGORIES</Title2>
            <List>
                <ListItem><Link style={{textDecoration: 'none', color: 'rgb(63, 156, 202)  '}} to='/mensfashion'>Men's Fashion</Link></ListItem>
                <ListItem><Link style={{textDecoration: 'none', color: 'rgb(63, 156, 202) '}} to='/womensfashion'>Women's Fashion</Link></ListItem>
                <ListItem><Link style={{textDecoration: 'none', color: 'rgb(63, 156, 202) '}} to='/accessories'>Accessories</Link></ListItem>
                <ListItem><Link style={{textDecoration: 'none', color: 'rgb(63, 156, 202) '}} to='/health&beauty'>Health & Beauty</Link></ListItem>
                <ListItem><Link style={{textDecoration: 'none', color: 'rgb(63, 156, 202) '}} to='/gaming'>Gaming</Link></ListItem>
            </List>
        </Categories>
        </CatContainer>
            <Arrow style={{marginLeft: '20.5em'}} direction='left' onClick={()=>handleClick('left')}>
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
