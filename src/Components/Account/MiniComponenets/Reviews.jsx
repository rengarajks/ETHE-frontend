import { Rating } from '@mui/material'
import React from 'react'

const Reviews = () => {
  return (
    <div className=''>
        <span className='font-semibold flex items-center gap-1 text-[1.1rem] md:px-6 px-3'><h1>My Reviews</h1><p className='text-gray-400'>(6)</p></span>

        <div className=''>
            <div className='flex items-center gap-2 border-b md:px-6 px-2 py-3'>
                <div className='w-36 h-36 px-4 py-4'>
                    <img className='w-full h-full object-contain' src='https://rukminim2.flixcart.com/image/60/60/xif0q/ball/r/j/t/400-country-colour-england-5-22-1-1360eg-football-nivia-original-imaghjk2hgfykugg.jpeg?q=100'/>
                </div>

                <div className='md:space-y-2 space-y-1 text-xs px-2'>
                    <p className='text-gray-400  md:text-[1rem] font-normal'>Khadi Herbal Vitamin C Serum For Natural Glowing Beauty (30 ml)</p>
                    <span className='text-[1rem] font-medium md:flex items-center gap-2'>
                       <Rating value={1} readOnly precision={0.5} sx={{fontSize:'1.4rem'}}/>
                       <p className='text-xs'>Absolute rubbish !</p>
                    </span>
                    <p className='text-gray-400 text-xs'>26 Jul, 2023</p>
                    <span className='text-blue-600 flex items-center gap-8 text-sm font-medium'>
                         <button>Edit</button>
                         <button>Delete</button>
                    </span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Reviews