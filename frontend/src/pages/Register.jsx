import { useState } from 'react'
import './Pages.css'
import {toast} from 'react-toastify'
import { FaUser } from 'react-icons/fa'



function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2) {
            toast.error('Passwords do not match')
        }
    }

    return (
        <div className='border'>
        <section className='heading'>
            <h1>
                <FaUser /> Register
            </h1>
            <h3>Please create an account</h3>
        </section>

         <section className='form'>
            <form onSubmit={onSubmit}>
               <div className='form-top'>
                    <input
                     type='text'
                     id='name'
                     name='name'
                     value={name}
                     onChange={onChange}
                     placeholder='Enter your name'
                     required
                      />
                </div>
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
                <div className='form-top'>
                <input  
                     type='password'
                     id='password2'
                     name='password2'
                     value={password2}
                     onChange={onChange}
                     placeholder='Confirm password'
                     required
                      />
                </div>
                <div className='button form-top'>
                    <button>Submit</button>
                </div>
            </form>
        </section>
        </div>
    )
}

export default Register
