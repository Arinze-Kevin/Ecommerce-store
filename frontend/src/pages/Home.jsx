import React, { useEffect } from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'


function Home() {
    
    return (
        <div>
          <Slider />
          <Categories />
          <Products />
        </div>

    )
}

export default Home
