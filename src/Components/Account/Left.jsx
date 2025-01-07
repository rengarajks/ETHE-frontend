import React from 'react'
import { BsWalletFill } from 'react-icons/bs'
import { FaAngleRight, FaFolder, FaUser } from 'react-icons/fa'
import { RiShutDownLine } from 'react-icons/ri'
import { Avatar } from '@mui/material'

const Left = () => {
  return (
    <div className='col-span-3 space-y-4'>
          <div className='bg-white rounded-sm shadow px-4 py-3 flex items-center gap-2'>
            <Avatar/>
            <span className=''>
              <p className='text-xs'>Hello,</p>
              <h1 className='font-semibold'>Ethe Customer</h1>
            </span>
          </div>

          <div className='bg-white rounded-sm shadow gap-2'>
             <div className='flex items-center justify-between w-full px-6 py-3 border-b hover:bg-blue-100 cursor-pointer hover:text-blue-600'>
             <div className='flex gap-2 items-center'>
                <BsWalletFill className='text-[#312ba6]'/>
                <h1 className='font-medium text-gray-500'>MY ORDERS</h1>
             </div>

             <div>
              <FaAngleRight size='1.3rem' className='text-gray-500'/>
             </div>
             </div>  

             <div className='border-b'>
             <div className='flex items-center justify-between w-full px-6 pt-3'>
             <div className='flex gap-2 items-center'>
                <FaUser className='text-[#312ba6]'/>
                <h1 className='font-medium text-gray-500'>ACCOUNT SETTINGS</h1>
             </div>

             <div>
             </div>
             </div>
                <h1 className='text-xs font-medium text-gray-700 hover:bg-blue-100 cursor-pointer hover:text-blue-600 pl-12 px-6 py-3'>Profile Information</h1>
                <h1 className='text-xs font-medium text-gray-700 hover:bg-blue-100 cursor-pointer hover:text-blue-600 pl-12 px-6 py-3'>Manage Addresses</h1>
              </div>

              <div className='border-b'>
             <div className='flex items-center justify-between w-full px-6 pt-3'>
             <div className='flex gap-2 items-center'>
                <FaFolder className='text-[#312ba6]'/>
                <h1 className='font-medium text-gray-500'>MY STUFF</h1>
             </div>

             <div>
             </div>
             </div>
                <h1 className='text-xs font-medium text-gray-700 hover:bg-blue-100 cursor-pointer hover:text-blue-600 pl-12 px-6 py-3'>My Reviews & Ratings</h1>
                <h1 className='text-xs font-medium text-gray-700 hover:bg-blue-100 cursor-pointer hover:text-blue-600 pl-12 px-6 py-3'>All Notifications</h1>
                <h1 className='text-xs font-medium text-gray-700 hover:bg-blue-100 cursor-pointer hover:text-blue-600 pl-12 px-6 py-3'>My Wishlist</h1>
              </div>  

              <div className='border-b hover:bg-blue-100 cursor-pointer hover:text-blue-600'>
             <div className='flex items-center justify-between w-full px-6 py-3'>
             <div className='flex gap-2 items-center '>
                <RiShutDownLine className='text-[#312ba6]'/>
                <h1 className='font-medium text-gray-500'>LOG OUT</h1>
             </div>

             <div>
             </div>
             </div>
              </div> 


          </div>


        </div>
  )
}

export default Left