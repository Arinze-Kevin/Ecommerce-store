import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from '../components/Product';
import axios from 'axios';

const Container = styled.div`   
display: flex;
   padding: 20px;
   flex-wrap: wrap;
`;

const Title = styled.h1`
text-align: center;
letter-spacing: 5px;
margin: auto;
align-text: center;
width: 100%;
margin-top: 0em
`;

const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%
`;

const Filter = styled.div`
   margin: 20px;
`;

const FilterText = styled.span`
   margin-right: 20px;
   font-weight: 600;
   font-size: 20px;
`;

const Select = styled.select`
   margin-right: 20px;
   padding: 10px
`;

const Option = styled.option`
  
`;

function HealthBeauty() {
  const [filters, setFillters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFillters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/products?category=health&beauty')
        setProducts(res.data)
      } catch (err) {}
    }
    getProducts()
  })

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
      Object.entries(filters).every(([key, value]) =>
      item[key].includes(value)
      )
      )
    )
  }, [products, filters])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
       [...prev].sort((a, b) => a.price - b.price)
      )
    } else {
      setFilteredProducts((prev) =>
       [...prev].sort((a, b) => b.price - a.price)
      )
    }
  }, [sort])

    return (
        <Container>
            <Title>HEALTH & BEAUTY</Title>
            <FilterContainer>
              <Filter>
                <FilterText>Filter Products</FilterText>
                <Select name="color" onChange={handleFilters}>
                  <Option disabled>
                    Color
                  </Option>
                  <Option>White</Option>
                  <Option>Black</Option>
                  <Option>Red</Option>
                  <Option>Blue</Option>
                  <Option>Yellow</Option>
                  <Option>Green</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                  <Option disabled>
                    Size
                  </Option>
                  <Option>XS</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>XL</Option>
                </Select>
              </Filter>
              <Filter>
                <FilterText>Sort Products</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                  <Option value="newest">Newest</Option>
                  <Option value="asc">Price (asc)</Option>
                  <Option value="desc">Price (desc)</Option>
                </Select>
              </Filter>
            </FilterContainer>
          {filteredProducts.map((item) => (
            <Product item={item} key={item.id} filters={filters} sort={sort} />
          ))}
        </Container>
        
    )
}

export default HealthBeauty

