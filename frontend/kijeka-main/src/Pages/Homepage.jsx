import React from 'react'

//Components
import Hero from '../Components/Hero/Hero'
import OurClients from '../Components/OurClients/OurClients'
import ProductVideos from '../Components/Product_Video/ProductVideos'
import WhatPeopeSay from '../Components/WhatPeopleSay/WhatPeopeSay'
import MainProducts from '../Components/AllProducts/MainProducts'
import BlogSlider from '../Components/BlogSlider/BlogSlider'


const Homepage = () => {
     document.title = "Kijeka"
     return (
          <div>
               <Hero />
               <MainProducts />
               <BlogSlider />
               <ProductVideos />
               <OurClients />
               <WhatPeopeSay />
          </div>
     )
}

export default Homepage