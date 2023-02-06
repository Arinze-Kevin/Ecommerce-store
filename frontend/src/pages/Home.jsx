import React, { useEffect } from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Slider2 from '../components/Slider2'
import Categories2 from '../components/Categories2'
import Products from '../components/Products'


function Home() {
    
    return (
        <div>
          <Slider />
          <Slider2 />
          <Categories />
          <Categories2 />
          <Products />
        </div>

    )
}

export default Home
