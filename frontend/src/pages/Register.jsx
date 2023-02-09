import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import {mobile} from '../responsive';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
   ),
   url('https://i.ibb.co/GJxVDDJ/photo-1664915949792-011667b9a89f-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg')
     center;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Wrapper = styled.div`
margin-top: 5em;
width: 25%;
   padding: 20px;
   background-color: white;
   ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
   font-size: 24px;
   font-weight: 300;
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;
`;

const Input = styled.input`
   flex: 1;
   min-width: 40%;
   margin: 10px 0;
   padding: 10px;
`;

const Button = styled.button`
   width: 40%;
   border: none;
   padding: 15px 20px;
   background-color: teal;
   color: white;
   cursor: pointer;
   margin-bottom: 10px;
   &:disabled{
    color: green;
    cursor: not-allowed;
   }
`;

const Link = styled.a`
   margin: 5px 0px;
   font-size: 12px;
   text-decoration: underline;
   cursor: pointer;
`;

const Error = styled.span`
   color: red;
`;

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { error } = useSelector((state) => state.user)
    const navigate = useNavigate()

   

    const handleClick = (e) => {
                e.preventDefault()
        
                if (password !== password2) {
                    toast.error('Passwords do not match')
                } 
                if (name === '') {
                    toast.error('Please enter name')
                } 
                else {
        
                    register(dispatch, {name, email, password })
                    setLoading(true)

                    setTimeout(() => {
                     navigate('/')
                     setLoading(false)
                  },5000)
                }
            }

    return (
        <Container>
            <Wrapper>
            {loading &&      
               <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    }
                <Title>SIGN UP</Title>
                <Form>
                <Input 
                       type='text'
                       placeholder="Name" 
                       onChange={(e) => setName(e.target.value)}
                       required
                    />
                    <Input 
                       type='email'
                       placeholder="Email" 
                       onChange={(e) => setEmail(e.target.value)}
                       required
                    />
                    <Input 
                        placeholder="Password"
                        type='password'
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                     <Input 
                        placeholder="Confirm password"
                        type='password'
                        onChange={(e) => setPassword2(e.target.value)} 
                        required
                    />
                    <Button onClick={handleClick} >REGISTER</Button>
                    {error && <Error>Something went wrong...</Error>}
                    {/* <Link>DON'T HAVE AN ACCOUNT?</Link> */}
                    {/* <Link>CREATE A NEW ACCOUNT</Link> */}
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
