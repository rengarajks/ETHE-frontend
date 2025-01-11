import React from 'react'
import Left from '../Components/Checkout/Left'
import Right from '../Components/Checkout/Right'

const Checkout = () => {
  return (
    <div className='h-full'>
      <div className='grid grid-cols-12 h-full w-full pt-11 md:px-8 py-4'>
        <Left/>
        <Right/>
      </div>

      <div className='relative md:absolute w-full bottom-0 bg-white rounded-sm shadow-lg flex justify-end px-4 py-2'>
          <button className='bg-[#FB641B] font-semibold text-white text-lg px-12 py-3'>PLACE ORDER</button>
      </div>
    </div>
  )
}

export default Checkout