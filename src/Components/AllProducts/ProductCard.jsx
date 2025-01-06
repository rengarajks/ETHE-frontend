import { Rating } from '@mui/material'
import React from 'react'
import { MdOutlineStar } from 'react-icons/md'
import { Link } from 'react-router'

const ProductCard = () => {
  return (
    <Link to='/product/iphone'>
     <div className='bg-white rounded-sm border pb-4 cursor-pointer hover:shadow-xl group transition-all duration-500 ease-in-out'>
        <div className='w-full h-52 py-2'> 
            <img className='w-full h-full  object-contain' src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70'/>
        </div>
        <div className='h-[4.3rem] px-3  space-y-[0.16rem]'>
            <div className='font-medium'>
                <h1 className='group-hover:text-blue-600'>Apple Iphone 12</h1>
            </div>
            <div className='flex items-center gap-1'>
                <Rating
                    value={5}
                    readOnly
                    precision={0.5}
                    // emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: '16px' }}/>} // Adjust the fontSize here
                    sx={{ fontSize: "1rem" }} // Optionally, adjust the size of the entire rating component
                />
                <div className='font-semibold text-[0.8rem] text-gray-500'>
                    (11,22,211)
                </div>
                
            </div>

            <div className='font-medium flex gap-1 space-x-1'>
               <span>₹134,900</span>
               <s className='text-gray-500 pt-[0.03rem]'>₹34,900</s>
               <span className='text-xs pt-[0.28rem] font-medium text-[#388E3C]'>
                    12% Off
                </span>
            </div>

        </div>
    </div>
    </Link>
  )
}

export default ProductCard