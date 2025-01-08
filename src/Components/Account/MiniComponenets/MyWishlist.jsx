import { Rating } from '@mui/material'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const MyWishlist = ({setMenuVisible}) => {
  return (
    <div className='pt-11 md:pt-0'>
        <span className='font-semibold flex items-center gap-2 text-[1.1rem] px-6 pb-3'>
            <FaArrowLeft onClick={()=>setMenuVisible(true)} className='md:hidden'/>
            <h1>My Wishlist</h1><p className=''>(6)</p></span>

        <div className=''>
           
            {/* CARD */}
            <div className='flex items-center gap-2 border-t md:px-6 py-3'>
                <div className='w-28 h-28 px-4 py-4'>
                    <img className='w-full h-full object-contain' src='https://rukminim2.flixcart.com/image/60/60/xif0q/ball/r/j/t/400-country-colour-england-5-22-1-1360eg-football-nivia-original-imaghjk2hgfykugg.jpeg?q=100'/>
                </div>

                <div className='flex justify-between w-full'>
                <div className='space-y-1 px-3'>
                    <p className='font-medium text-sm'>Khadi Herbal Vitamin C Serum For Natural Glowing Beauty (30 ml)</p>
                    <span className='text-xs md:text-[1rem] font-medium flex items-center gap-2'>
                       <Rating value={1} readOnly precision={0.5} sx={{fontSize:'1rem'}}/>
                       <p className='text-gray-500'>(450)</p>
                    </span>
                    <div className='font-medium flex gap-1 space-x-1'>
                    <span>₹134,900</span>
                    <s className='text-gray-500 pt-[0.03rem]'>₹34,900</s>
                    <span className='text-xs pt-[0.28rem] font-medium text-[#388E3C]'>
                            12% Off
                        </span>
                    </div>
                </div>

                <div className='flex items-center md:items-start'>
                    <MdDelete size='1.5rem' className='text-gray-400'/>
                </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default MyWishlist