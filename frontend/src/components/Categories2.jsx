import React from 'react'
import styled from 'styled-components'
import { categories2 } from '../data'
import CategoryItem2 from './CategoryItem2'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  padding: 20px;
    ${mobile({ flexWrap: 'wrap'})}
  
  `;

  const Container2 = styled.div``;
  
  const Div = styled.h1`
  ${mobile({backgroundColor: '#404a4e', width: '92%', padding: '0px 15px', textAlign: 'center', marginRight: '0.8em', marginLeft: '0.1em', marginBottom: '-0.8em'})}
  `;

function Categories() {
    return (
        <Container2>
            <Div>TOP CATEGORIES</Div>
            <Container>
               {categories2.map((item) => (
                <CategoryItem2 item={item} key={item.id} />
              ))}
            </Container>
        </Container2>
        
    )
}

export default Categories
