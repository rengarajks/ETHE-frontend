import { Rating } from '@mui/material'
import React from 'react'

const Notifications = () => {
  return (
    <div className='space-y-5'>
        <span className='font-semibold flex items-center gap-1 text-[1.1rem] md:px-6 px-3'><h1>All Notifications</h1></span>

        <div className=''>
            <div className='flex items-center gap-2 border-y md:px-2 px-0 hover:bg-blue-100'>
                <div className='w-24 h-24 px-4 py-4'>
                    <img className='w-full h-full object-contain' src='https://rukminim2.flixcart.com/image/60/60/xif0q/ball/r/j/t/400-country-colour-england-5-22-1-1360eg-football-nivia-original-imaghjk2hgfykugg.jpeg?q=100'/>
                </div>

                <div className='space-y-2 px-2 text-xs'>
                    <p className=' font-normal'>...is waiting on your cart.  Our popular products go fast - don't miss!</p>
                    <p className='text-gray-400 font-medium text-xs'>26 Jul, 2025</p>
                </div>

            </div>
            <div className='flex items-center gap-2 border-y md:px-2 px-0 hover:bg-blue-100'>
                <div className='w-24 h-24 px-4 py-4'>
                    <img className='w-full h-full object-contain' src='https://rukminim2.flixcart.com/image/60/60/xif0q/ball/r/j/t/400-country-colour-england-5-22-1-1360eg-football-nivia-original-imaghjk2hgfykugg.jpeg?q=100'/>
                </div>

                <div className='space-y-2 px-2 text-xs'>
                    <p className=' font-normal'>...is waiting on your cart.  Our popular products go fast - don't miss!</p>
                    <p className='text-gray-400 font-medium text-xs'>26 Jul, 2025</p>
                </div>

            </div>
       
        </div>
    </div>
  )
}

export default Notifications