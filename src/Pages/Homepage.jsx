import React from 'react'
import Banner from '../Components/Homepage/Banner/Banner'
import OfferCard from '../Components/Homepage/Offercard/OfferCard'
import { MainData } from '../Components/Homepage/MainData'
import { MainHomeCategory } from '../Components/MainCategory/MainHomeCategory'

const Homepage = () => {
  return (
    <div className=''>
      <MainHomeCategory/>
      <Banner/>
      {
        MainData.map((data)=><OfferCard data={data} />)
      }
    </div>
  )
}

export default Homepage