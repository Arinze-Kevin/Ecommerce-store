import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({ width: '32em', flexDirection: 'column',  flexWrap: 'wrap', flex: '1' })}
`;

function Categories() {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
        
    )
}

export default Categories
