import React, { useState } from 'react'
import styled from 'styled-components'
import { womensFashionData } from '../data';
import Product from '../components/Product';

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

function WomensFashion() {
  const [filters, setFillters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFillters({
      ...filters,
      [e.target.name]: value,
    });
  };

    return (
        <Container>
            <Title>WOMEN'S FASHION</Title>
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
          {womensFashionData.map((item) => (
            <Product item={item} key={item.id} filters={filters} sort={sort}/>
          ))}
        </Container>
        
    )
}

export default WomensFashion

