import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'

const Container = styled.div`
  display: none;
  padding: 20px;
    ${mobile({overflow: 'scroll', display: 'flex', flexDirection: 'row'})}
  
  `;

  const Container2 = styled.div`
  `;
  
  const Div = styled.h1`
  display: none;
  ${mobile({ backgroundColor: '#88E2F2', width: '92%', padding: '0px 15px', textAlign: 'center', marginRight: '0.8em', marginLeft: '0.1em', marginBottom: '-0.8em'})}
  `;

function Categories() {
    return (
        <Container2>
            <Div>TOP CATEGORIES</Div>
            <Container>
               {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
              ))}
            </Container>
        </Container2>
        
    )
}

export default Categories
