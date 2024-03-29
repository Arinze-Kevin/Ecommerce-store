import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { mobile } from '../responsive'
import axios from 'axios'

const Container2 = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  ${mobile({ marginTop: '-1.2em', display: 'grid', gap: '5px', grid: '210px / auto auto'})}

`;
const Container = styled.div`
  
`;
const H1 = styled.h1`
${mobile({alignItms: 'center', backgroundColor: '#9fdfff', marginTop: '-0.2em'})}
`;

function Products() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filters, setFillters] = useState({});

  useEffect(() => {
    const getProducts = async () => {
     try {
      const res = await axios.get('https://ecommerce-app-79uw.onrender.com/api/products/all?category=popularproducts')
      setProducts(res.data)
     } catch (err) {}
    }
    getProducts()
  },[])

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
      Object.entries(filters).every(([key, value]) =>
      item[key].includes(value)
      )
      )
    )
  }, [products, filters])
    return (
        <Container>
          <H1>BEST SELLERS</H1>
          <Container2>
            {filteredProducts.slice(0, 8).map((item) => (
                <Product item={item} key={item._id}  />
            ))}
          </Container2>  
        </Container>
        
    )
}

export default Products
