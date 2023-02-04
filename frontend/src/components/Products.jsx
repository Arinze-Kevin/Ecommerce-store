import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { mobile } from '../responsive'
import { popularProducts } from '../data'
import axios from 'axios'

const Container2 = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  ${mobile({ marginTop: '-1.2em', display: 'grid', gap: '10px', grid: '210px / auto auto'})}

`;
const Container = styled.div`
  
`;
const H1 = styled.h1`
${mobile({backgroundColor: '#88E2F2', marginTop: '-0.2em'})}
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
          <H1>TOP SELLING PRODUCTS</H1>
          <Container2>
            {filteredProducts.slice(0, 8).map((item) => (
                <Product item={item} key={item._id}  />
            ))}
          </Container2>  
        </Container>
        
    )
}

// function Products() {
    

//   return (
//       <Container>
//           {popularProducts.slice(0, 8).map((item) => (
//               <Product item={item} key={item.id} />
//           ))}
//       </Container>
      
//   )
// }


export default Products
