import React from 'react'
import { MainHomeCategory } from '../Components/MainCategory/MainHomeCategory'
import UserDetailsOrderCard from '../Components/Order/UserDetailsOrderCard'
import OrderStatus from '../Components/Order/orderStatus'

const Orders = () => {
  return (
    <div className=''>
      <MainHomeCategory/>
      <div className='md:px-16 py-6 space-y-4 pt-11 md:pt-0'>
          <UserDetailsOrderCard/>
          <OrderStatus/>
      </div>
    </div>
  )
}

export default Orders