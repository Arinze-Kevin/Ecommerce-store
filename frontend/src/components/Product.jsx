import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { mobile } from '../responsive';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../redux/cartRedux';
import { publicRequest } from '../requestMethods';
import { cart } from '../redux/apiCalls';

const Info = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   background-color: rgba(0, 0, 0, 0.2);
   width: 100%;
   height: 100%;
   display: flex;
   z-index: 2;
   align-items: center;
   justify-content: center;
   transition: all 0.5s ease;
   opacity: 0;
   cursor: pointer;
`;

const Container = styled.div`

`;

const Container2 = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  ${mobile({ height: '20vh', minWidth: '160px'})}

  &:hover ${Info}{
    opacity: 1;


  }
`;
const Circle = styled.div`
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background-color: white;
   position: absolute;
   
  ${mobile({ height: '16vh', width: '15%'})}
   
`;

const Image = styled.img`
  z-index: 2;
  height: 75%;
  width: 290px;
  
  ${mobile({ width: '20vh'})}
`;

const Icon = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: rgb(234, 127, 127);
        transform: scale(1.1);
    }
`;

const Title = styled.div`
width: 100%;
    margin-bottom: 10em;
    border-radius: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
    
  ${mobile({ alignItems: 'center', marginTop: '-2em', fontSize: '11px', width: '50%'})}

    &:hover {
        background-color: rgb(234, 127, 127);
        transform: scale(1.1);
    }
   
`;

function Product({ item }) {

    const dispatch = useDispatch()
    const [product, setProduct] = useState({})
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')



    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/api/products/product/${item._id}`)
                setProduct(res.data)
            } catch (err) { }
        }
        getProduct()
    }, [])
   
    // Add to cart frontend
    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, color, size }))
    };

    //Add to cart backend
    // const handleClick2 = () => {
    //     cart(dispatch, { ...product, quantity, color, size })
    // };

    console.log("product@@", product)
    return (
        <Container>
            <Container2>
                <Circle />
                <Image src={item.img} />
                <Info>
                    <Icon>
                        <Link to={`/cart/`}>
                        <ShoppingCartOutlined onClick={handleClick}/>
                        </Link>
                    </Icon>
                    <Icon>
                        <Link to={`/product/${item._id}`}>
                            <SearchOutlined />
                        </Link>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
            </Container2>
            <Title>
                <h3>{item.title} <br />$ {item.price}</h3>
            </Title>
        </Container>

    )
}

// function Product({item}) {
//     return (
//         <Container>
//             <Circle/>
//             <Image src={item.img} />
//             <Info>
//                 <Icon>
//                     <ShoppingCartOutlined/>
//                 </Icon>
//                 <Icon>
//                     <Link to={`/product/${item._id}`}>
//                     <SearchOutlined/>
//                     </Link>
//                 </Icon>
//                 <Icon>
//                     <FavoriteBorderOutlined/>
//                 </Icon>
//             </Info>
//         </Container>

//     )
// }


export default Product
