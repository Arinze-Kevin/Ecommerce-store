import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { publicRequest } from '../requestMethods';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/cartRedux';
import { cart } from '../redux/apiCalls';
import { mobile } from '../responsive';

const Container = styled.div`


`;

const Wrapper = styled.div`
${mobile({flexDirection: 'column', marginLeft: '-5em'})}
padding: 50px;
display: flex;
  
`;

const Image = styled.img`
${mobile({height: '30vh', marginTop: '7em'})}
margin-top: 2em;
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
    
    `;
    
    const Desc = styled.p`
    ${mobile({width: '200%'})}
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
   width: 50%;
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: black;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
   margin-left: 10px;
   padding: 5px;
`;

const FilterSizeOption = styled.option`

`;
const FilterColorOption = styled.option`

`;

const AddContainer = styled.div`
   width: 50%;
   display: flex;
   align-items:ncenter;
   justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid #E3242B;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px 5px;
`;

const Button = styled.button`
   padding: 15px;
   border: 2px solid #E3242B;
   background-color: white;
   cursor: pointer;
   font-weight: 500;

   &:hover{
    background-color: #f8f4f4
   }
`;


function ProductPage() {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const dispatch = useDispatch()
    // const user  = useSelector((state) => state.user.currentUser) || {}
     
    // console.log('hsuser', user)

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get('/api/products/product/' + id)
                setProduct(res.data)
            } catch (err) { }
        }
        getProduct()
    }, [id])

    const handleQuantity = (type) => {
        if (type === 'dec') {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    };

    // console.log("product!!", product)

    // Add to cart frontend
    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, color, size }))
    };

      //Add to cart backend
      const handleClick2 = () => {
        cart(dispatch, { ...product, quantity, color, size })
    };

    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor color={c} key={c} onClick={() => setColor} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map((s) => (
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity('dec')} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity('inc')} />
                        </AmountContainer>
                          {/* {user ? (<Button onClick={handleClick2}>Add TO CART</Button>)  */}
                          {/* :  */}
                          <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default ProductPage
