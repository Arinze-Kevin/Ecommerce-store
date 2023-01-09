import StripeCheckout from 'react-stripe-checkout'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const KEY="pk_test_51MOErXJ4lUCToH2aVTr9hnOyWNXQsS4e3C3IrbOEtUpeeMGUt8GS7szI1ZYPh1Tlzin6xK5hBufu5krYbEmRPpGJ00FyttNVHh"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()

    const onToken = (token) =>{
        setStripeToken(token)
    }

    useEffect(()=>{
        const makeRequest = async () =>{
            try{
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                    )
                    console.log(res.data)
                    navigate('/success')

            }catch(err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken, navigate])
    
    return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
         >
          {stripeToken ? (<span>Processing. Please wait...</span>) : (  
         <StripeCheckout
            name="E-Shop"
            image="https://avatars.githubusercontent.com/u/97902965?v=4"
            billingAddress
            shippingAddress
            description=' Your total is $20'
            amount={2000}
            token={onToken}
            stripeKey={KEY}
         >   
          <button
             style={{
                border: "none",
                width: 120,
                borderRadius: 5,
                padding: "20px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "600",
                cursor: "pointer"
             }}
          >
              Pay Now
          </button>
         </StripeCheckout> 
         )}
        </div>
    )
}

export default Pay