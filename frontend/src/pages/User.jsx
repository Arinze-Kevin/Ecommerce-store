import {useEffect} from 'react'
import axios from "axios";

function User() {
    useEffect(() => {
        const getProducts = async (auth) => {
          try {
            const res = await axios.get('http://localhost:5000/users/logout', auth)
            console.log(res.data)
          } catch (err) {}
        }
        getProducts()
      },[])
    return (
        <div><h1>User</h1></div>
    )
}

export default User
 