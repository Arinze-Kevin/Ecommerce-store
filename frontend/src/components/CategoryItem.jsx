import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
    ${mobile({ height: '90%' })}
  
  `;
//   ${mobile({ width: '90%', height: '15vh' })}
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '15vh' })}
`;
const Info = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   `;
//    ${mobile({  marginTop: '2em' })}
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    `;
    // ${mobile({ display: 'none' })}

const Button = styled.button`
   padding: 10px;
   border: none;
   background-color: white;
   color: gray;
   cursor: pointer;
   font-weight: 600;
   `;
//    ${mobile({ marginTop: '9em' })}
const Desc = styled.div`
   font-weight: 700;
   padding: 10px;
   margin-left: 4em;
   letter-spacing: 5px;
   color: grey;
   font-size: 20px
      ${mobile({ width: '100%' })}
   `;

function CategoryItem({item}) {
    return (
        <Container>
            <Desc>{item.desc}</Desc> 
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button><Link style={{textDecoration: 'none', color: 'rgb(63, 156, 202)  '}} to={item.link}>SHOP NOW</Link></Button>
            </Info>
        </Container>
        
    )
}

export default CategoryItem
