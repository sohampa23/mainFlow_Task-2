import React from 'react'
import Banner from '../Home/HomePageSlider/Banner.jsx'
import NavCatSlider from '../Home/NavcatSlider/NavcatSlider.jsx'
import FreeShip from '../Home/Advertise/Freeship.jsx'
import Adevert from '../Home/Advertise/Adevert.jsx'
import ProductSlider from '../Home/ProductSlider/Productslider.jsx'
import MiddelAds from '../Home/Advertise/MiddelAds.jsx'
import RelationSlider from './RelationshipSlider/RelationSlider.jsx'



function Home() {
  return (
    <>
     <Banner/> 
     <section className='py-3 bg-white mt-2 mb-2'><h5 className='text-[10px] sm:text-[15px] font-[600] text-center'>Celebrate Occasions with India's #1 Online Gift Store</h5> </section>
     <NavCatSlider/>
     <FreeShip/>
     <Adevert/>
     <ProductSlider title='Birthday Gifts That Wow' />
     <ProductSlider title='Same Day Delights' />
     <MiddelAds/>
     <ProductSlider title='Birthday Gifts That Wow' />
     <RelationSlider title='For Your Valentine' />
     <ProductSlider title='Same Day Delights' />
    </>
  )
}

export default Home
