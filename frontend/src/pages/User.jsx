import {useEffect, useState} from 'react'
import axios from "axios";
import { publicRequest } from '../requestMethods';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { mobile } from '../responsive';
import { Badge } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../redux/userRedux';

const Container = styled.div`
    padding: 70px 30px;
    color: gray;
    border: 30px solid #e9f5f5;
    font-weight: 500;
    ${mobile({  width: '18em', height: '10vh' })}
`;

const Desc = styled.div`
    margin-left: 10em;
    padding: 20px;
    ${mobile({fontSize: '10px', marginTop: '-5em', width: '100%', height: '1vh' })}
`;
const Button = styled.button`
    margin-left: 30em;
    padding: 10px;
    width: 30%;
    text-spacing: 20px;
    cursor: pointer;
    margin-top: 20px;
    ${mobile({marginLeft: '7em', wdth: '25.7em', hight: '1vh' })}

`;
const Hr = styled.hr`
    
`;
const Hr2 = styled.hr`
margin-left: 8em
`;

function User() {
    const [product, setProduct] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user?.currentUser)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
        window.location.reload()
    }

    return (
        <div>
            <Container> <div style={{marginTop: '3em'}}>My Account </div>
                <Desc>Full Name: {user?.name}</Desc><Hr2 />
                <Desc>Email: {user?.email}</Desc>
                <Button onClick={onLogout}>Logout</Button>
            </Container>
            <Hr />
            <Container>Orders</Container>
            <Hr />
            <Container>Saved Items</Container>
        </div>
    )
}

export default User
 