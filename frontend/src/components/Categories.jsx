import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  padding: 20px;
    ${mobile({ flexWrap: 'wrap'})}
  
  `;

  const Container2 = styled.div``;
  
  const Div = styled.h1`
  ${mobile({backgroundColor: '#88E2F2', width: '85%', padding: '0px 15px', textAlign: 'center', marginRight: '0.8em', marginLeft: '0.1em', marginBottom: '-0.8em'})}
  `;

  //   ${mobile({ width: '32em', flexDirection: 'column',  flexWrap: 'wrap', flex: '1' })}
//   ${mobile({ flex: 1, marginBottom: '7em', justifyContent: 'center', display: 'grid', gap: '5px', grid: '100px / auto auto' })}
  
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
