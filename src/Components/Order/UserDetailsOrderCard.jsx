import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { IoDocumentTextOutline } from 'react-icons/io5'

const UserDetailsOrderCard = () => {

  return (
    <div className='bg-white shadow-sm border w-full grid grid-cols-12'>
        <div className='space-y-1 py-5 md:px-5 col-span-12 md:col-span-6 border-r'>
           
           <div className='md:hidden'>
                <span className='font-semibold flex items-center gap-2 px-2 border-b py-3'>
                    <FaArrowLeft/>
                    Order Details
                </span>
           </div>
           
           <div className='space-y-1 px-5 pt-3 md:pt-0'>
             <h1 className='font-medium text-[1rem]'>Delivery Address</h1>
             <h1  className='font-medium text-[0.9rem]'>P Kalyana Sundaram</h1>
             <p className='text-xs max-w-[50vh]'>512-2B,Ramesh enclave-Shruti constructions First floor first house Brindavan street,metro star city,manigandan nagar,kundrathur, Near peace on green Earth school Chennai - 600069, Tamil Nadu</p>
             <h2  className='font-medium text-[0.85rem]'>Phone number 6383295364</h2>
           </div>
        </div>

        <div className='col-span-12 md:col-span-6 px-4 py-6'>
            <div>
                <h1 className='font-medium text-[1rem]'>More actions</h1>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-1'>
                        <IoDocumentTextOutline/>
                        <p>Download Invoice</p>
                    </span>

                    <button className='text-sm font-medium text-blue-600 border px-6 py-1'>Download</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDetailsOrderCard