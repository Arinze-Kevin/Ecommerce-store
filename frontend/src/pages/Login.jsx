import { useState } from 'react'
import './Pages.css'
// import {toast} from 'react-toastify'
import { FaUser } from 'react-icons/fa'



function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()


    }

    return (
        <>
        <section style={{textAlign: 'center', marginTop: '3em'}}>
            <h1>
                <FaUser /> Login
            </h1>
            <h3>Please login</h3>
        </section>

         <section style={{textAlign: 'center'}}>
            <form onSubmit={onSubmit}>
                <div className='form-top'>
                    <input
                     type='email'
                     id='email'
                     name='email'
                     value={email}
                     onChange={onChange}
                     placeholder='Enter your email'
                     required
                      />
                </div>
                <div className='form-top'>
                    <input
                     type='password'
                     id='password'
                     name='password'
                     value={password}
                     onChange={onChange}
                     placeholder='Enter password'
                     required
                      />
                </div>
                <div className='button form-top'>
                    <button>Submit</button>
                </div>
            </form>
        </section>
        </>
    )
}

export default Register
