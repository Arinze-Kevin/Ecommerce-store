import React from 'react'
import { useLocation } from 'react-router-dom'

function Success() {
    const location = useLocation()

    console.log(location)
    return (
        <div>
            SUCCESSFULL
        </div>
        
    )
}

export default Success
