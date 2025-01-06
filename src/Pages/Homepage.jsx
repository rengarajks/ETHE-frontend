import React from 'react'
import Banner from '../Components/Homepage/Banner/Banner'
import OfferCard from '../Components/Homepage/Offercard/OfferCard'
import { MainData } from '../Components/Homepage/MainData'

const Homepage = () => {
  return (
    <div className=''>
      <Banner/>
      {
        MainData.map((data)=><OfferCard data={data} />)
      }
      
    </div>
  )
}

export default Homepage