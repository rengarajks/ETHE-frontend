import { Rating } from '@mui/material'
import React from 'react'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { FaRegTrashAlt } from 'react-icons/fa'
import { HiOutlineTrash } from 'react-icons/hi'

const Cartcard = () => {
  return (
    <div className='md:px-7 py-3  rounded-sm shadow-sm flex justify-between items-center border-b '>
                <div className='flex'>
                
                <div className='w-40 h-40 md:visible md:block hidden'>
                  <img className='w-full h-full object-contain' src='https://p3-ofp.static.pub/ShareResource/na/subseries/hero/lenovo-ideapad-slim-3i-15inch-gen8-abyss-blue.png'/>      
                </div>

                {/* MOBILE */}
                <div className='flex flex-col md:hidden'>
                <div className='w-36 h-36 '>
                  <img className='w-full h-full object-contain' src='https://p3-ofp.static.pub/ShareResource/na/subseries/hero/lenovo-ideapad-slim-3i-15inch-gen8-abyss-blue.png'/>      
                </div>

                <div className='text-sm flex justify-center'>
                  <div>
                  <span className='pr-2 font-medium text-gray-600'>Qty:</span>
                    <span>
                        <select className='px-1 border rounded-md bg-gray-100 outline-none'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </span>
                  </div>

                </div>
                </div>

                <div className='flex flex-col justify-between py-4 px-2'>
                <div className='space-y-[0.34rem]'>
                    <h1 className='font-medium text-[1rem]'>Iphone 16 pro</h1>
                    <p className='text-gray-600 text-[0.9rem]'>Seller: Wester Products</p>
                    <div className='font-medium flex gap-1 space-x-1 text-[0.9rem]'>
                        <span>₹134,900</span>
                        <s className='text-gray-500 pt-[0.03rem]'>₹34,900</s>
                        <span className='text-xs pt-[0.1rem] font-medium text-[#388E3C]'>
                           12% Off
                        </span>
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
                </div>
                <div className='flex gap-4 text-[1rem] font-medium'>
                    <span className='cursor-pointer hover:text-blue-500 flex items-center'><AiOutlineThunderbolt/> Buy Now</span>
                    <span className='cursor-pointer hover:text-red-500 flex items-center'><HiOutlineTrash/>  Remove</span>
                </div>
                </div>
                </div>

                <div className='text-sm hidden md:block md:visible'>
                    <span className='pr-2 font-medium text-gray-600'>Qty:</span>
                    <span>
                        <select className='px-1 border rounded-md bg-gray-100 outline-none'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </span>

                </div>

            </div>
  )
}

export default Cartcard