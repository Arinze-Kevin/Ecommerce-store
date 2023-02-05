import React, { useEffect } from 'react'
import Slider from '../components/Slider'
import Slider2 from '../components/Slider2'
import Categories from '../components/Categories'
import Products from '../components/Products'


function Home() {
    
    return (
        <div>
          <Slider />
          <Slider2 />
          <Categories />
          <Products />
        </div>

    )
}

export default Home
