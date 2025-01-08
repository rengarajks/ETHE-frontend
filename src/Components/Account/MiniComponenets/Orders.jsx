import { Rating } from '@mui/material'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import { IoMdStar } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router'

const Orders = ({setMenuVisible}) => {
  return (
    <div className=''>
        <span className='font-semibold flex items-center gap-1 text-[1.1rem] px-6 pb-3 pt-11 md:pt-0'>
            <FaArrowLeft onClick={()=>setMenuVisible(true)} className='md:hidden'/>
            <h1>My Orders</h1><p className=''>(6)</p>    
        </span>

        <div className=''>
            
            {/* CARD */}
            <Link to='/account/orders/sdgds'>
            <div className='flex items-center gap-2 border-t md:px-6 py-3 text-[0.8rem] hover:bg-blue-100 cursor-pointer'>
                <div className='w-28 h-28 px-4 py-4'>
                    <img className='w-full h-full object-contain' src='https://rukminim2.flixcart.com/image/60/60/xif0q/ball/r/j/t/400-country-colour-england-5-22-1-1360eg-football-nivia-original-imaghjk2hgfykugg.jpeg?q=100'/>
                </div>

                <div className='md:flex space-y-4 md:space-y-0 justify-between w-full'>
                <div className='space-y-1 px-1'>
                    <p className=' font-normal'>Khadi Herbal Vitamin C Serum For Natural Glowing Beauty (30 ml)</p>
                    <div className='font-medium flex gap-1 space-x-1'>
                    <span>₹134,900</span>
                    </div>
                </div>

                <div className='md:pr-6'>
                    <span className='flex items-center gap-1 font-medium text-[0.94rem]'> 
                        <GoDotFill className='text-green-500'/>
                        <p>Delivered on Apr 20, 2024</p>
                    </span>
                    <p className='text-xs md:pl-6'>Your order has been delivered</p>
                    <span className='font-medium text-blue-500 flex items-center gap-2 py-2 text-[0.94rem]'><IoMdStar/><p>Rate & Review Product</p></span>
                </div>
                </div>

            </div>
            </Link>

        </div>
    </div>
  )
}

export default Orders