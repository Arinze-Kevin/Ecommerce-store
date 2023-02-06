import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { loginSuccess } from "../redux/userRedux";
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
    const { currentUser, isFetching, error } = useSelector((state) => state.user)
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
                    <Link>DON'T HAVE AN ACCOUNT?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register

// import { useState, useEffect } from 'react'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'
// import styled from 'styled-components'
// import { FaUser } from 'react-icons/fa'
// import { useSelector, useDispatch  } from 'react-redux'
// import { register, reset } from '../redux/authSlice'

// const Container = styled.div`
//     text-align: center;
//     width: 100vw;
//        height: 100vh;
//        background: linear-gradient(
//         rgba(255, 255, 255, 0.5),
//         rgba(255, 255, 255, 0.5)
//        ),
//        url('https://i.ibb.co/GJxVDDJ/photo-1664915949792-011667b9a89f-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg')
//          center;
//       //  background-size: cover;
// `;

// const Section1 = styled.section`
//    margin-top: -2em;
//    letter-spacing: 1.7px;
// `;

// const Section2 = styled.section`
    
// `;

// const Title = styled.h1`
//    font-weight: 900;
//    font-size: 2.3em;
// `;

// const Desc = styled.h3`
//    color: #48494b;
//    font-size: 1.6em;
// `;

// const Div = styled.div`
// `;

// const Form = styled.form`
//    padding: 10px;
// `;

// const Input = styled.input`
//    width: 30%;
//    padding: 10px;
//    border: 10px solid #c7c6c1;
//    border-radius: 10%;
// `;

// const Button = styled.button`
//     width: 33%;
//     padding: 10px;
//     letter-spacing: 8px;
//     margin-top: 10px;
//     background-color: #48494b;
//     color: white;
//     border-radius: 20%;
//     cursor: pointer;
// `;

// function Register() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         password2: ''
//     })

//     const {name, email, password, password2} = formData
    
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
    
//     const { user, isLoading, isError, isSuccess, message } = useSelector(
//         (state) => state.auth
//     )

//     useEffect(() => {
//         if(isError) {
//             toast.error(message)
//         }

//         // Redirect when logged in
//         // if (isSuccess || user) {
//         //     navigate('/')
//         // }

//         dispatch(user())
//     }, [isError, isSuccess, user, message, navigate, dispatch])

//     const onChange = (e) => {
//         setFormData((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value
//         }))
//     }

//     const onSubmit = (e) => {
//         e.preventDefault()

//         if (password !== password2) {
//             toast.error('Passwords do not match')
//         } else {
//             const userData = {
//                 name, 
//                 email,
//                 password,
//             }

//             dispatch(register(userData))
//         }
//     }

//     return (
//         <Container>
//             <Section1>
//                 <Title>
//                     <FaUser /> Register
//                 </Title>
//                 <Desc>Please create an account</Desc>
//             </Section1>
//             <Section2>
//                 <Form onSubmit={onSubmit}>
//                     <Div>
//                         <Input
//                           type='text'
//                           id='name'
//                           name='name'
//                           value={name}
//                           onChange={onChange}
//                           placeholder='Enter your name'
//                           required
//                         />  
//                     </Div>
//                     <Div>
//                         <Input
//                           type='text'
//                           id='email'
//                           name='email'
//                           value={email}
//                           onChange={onChange}
//                           placeholder='Enter your email'
//                           required
//                         />  
//                     </Div>
//                     <Div>
//                         <Input
//                           type='text'
//                           id='password'
//                           name='password'
//                           value={password}
//                           onChange={onChange}
//                           placeholder='Enter password'
//                           required
//                         />  
//                     </Div>
//                     <Div>
//                         <Input
//                           type='text'
//                           id='password2'
//                           name='password2'
//                           value={password2}
//                           onChange={onChange}
//                           placeholder='Confirm password2'
//                           required
//                         />  
//                     </Div>
//                     <Div>
//                         <Button>Submit</Button>
//                     </Div>
//                 </Form>
//             </Section2>
//         </Container>
        
//     )
// }

// export default Register