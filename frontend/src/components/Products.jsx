import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;


`;

function Products() {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
        
    )
}

export default Products
