// import { useState, useEffect } from 'react'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'
// import styled from 'styled-components'
// import { FaSignInAlt } from 'react-icons/fa'
// import { useSelector, useDispatch  } from 'react-redux'
// import { login, reset } from '../redux/authService'

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

// function Login() {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     })

//     const {email, password} = formData

//     const dispatch = useDispatch()
//     const navigate = useNavigate()
    
//     const { user, isFetching, isError, isSuccess, message } = useSelector(
//         (state) => state.auth
//     )

//    //  useEffect(() => {
//    //      if(isError) {
//    //          toast.error(message)
//    //      }

//    //      // Redirect when logged in
//    //    //   if (isSuccess || user) {
//    //    //       navigate('/')
//    //    //   }

//    //      dispatch(reset())
//    //  }, [isError, isSuccess, user, message, navigate, dispatch])

//     const onChange = (e) => {
//         setFormData((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value
//         }))
//     }

//     const onSubmit = (e) => {
//         e.preventDefault()

//         const userData = {
//             email,
//             password
//         }

//         dispatch(login(userData))

//     }

//     return (
//         <Container>
//             <Section1>
//                 <Title>
//                     <FaSignInAlt /> Login
//                 </Title>
//                 <Desc>Please login to get support</Desc>
//             </Section1>
//             <Section2>
//                 <Form onSubmit={onSubmit}>
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
//                         <Button>Submit</Button>
//                     </Div>
//                 </Form>
//             </Section2>
//         </Container>
        
//     )
// }

// export default Login




import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import {mobile} from '../responsive';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { loginFailure } from "../redux/userRedux";

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

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { isFetching, user, currentUser, error } = useSelector((state) => state.user)
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { email, password })
        navigate('/')
        console.log(handleClick)
    }

    
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input 
                       placeholder="Email" 
                       type='email'
                       onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        placeholder="Password"
                        type='password'
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Link>DON'T HAVE AN ACCOUNT?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login