import React, { useEffect } from 'react'
import Banner from '../Components/Homepage/Banner/Banner'
import OfferCard from '../Components/Homepage/Offercard/OfferCard'
import { MainData } from '../Components/Homepage/MainData'
import { MainHomeCategory } from '../Components/MainCategory/MainHomeCategory'
import Footer from '../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Store } from '@mui/icons-material'
import { getCategoryDataAction } from '../Redux/Product/product.action'

const Homepage = () => {
  const dispatch=useDispatch(Store=>Store);
  const jwt=localStorage.getItem('jwt')
  useEffect(()=>{
    dispatch(getCategoryDataAction());
  },[jwt])
  const{product}=useSelector(Store=>Store);

  return (
    <div className=''>
      <MainHomeCategory categoryData={product?.categoryData}/>
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