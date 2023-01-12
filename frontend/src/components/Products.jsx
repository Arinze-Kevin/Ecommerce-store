import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { popularProducts } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;


`;

function Products() {
    

    return (
        <Container>
            {popularProducts.slice(0, 8).map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
        
    )
}

export default Products
