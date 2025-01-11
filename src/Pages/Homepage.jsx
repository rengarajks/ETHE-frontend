import React from 'react'
import Banner from '../Components/Homepage/Banner/Banner'
import OfferCard from '../Components/Homepage/Offercard/OfferCard'
import { MainData } from '../Components/Homepage/MainData'
import { MainHomeCategory } from '../Components/MainCategory/MainHomeCategory'
import Footer from '../Components/Footer/Footer'

const Homepage = () => {
  return (
    <div className=''>
      <MainHomeCategory/>
      <Banner/>
      <div className='md:pt-0 pt-14'>
      {
        MainData.map((data)=><OfferCard data={data} />)
      }
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage