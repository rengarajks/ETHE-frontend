import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import CheckoutCard from './Card';

const Left = () => {
    const navigate=useNavigate();
  return (
    <div className='md:col-span-8 col-span-full w-full text-sm py-4  space-y-4'>
            
            <div className='bg-white'>
            <div onClick={()=>navigate('/')} className='md:hidden bg-white px-4 py-4 font-semibold text-[1.2rem] rounded-sm shadow-sm flex items-center gap-2'>
                <FaArrowLeft/>
                <h1 className='pt-[0.1rem]'>Checkout</h1>
            </div>
            <div className='bg-white px-5 py-3 rounded-sm border shadow-sm flex justify-between items-center'>
                <div>
                    <div>
                        Deliver to: <span className='font-medium'>Kalyan p, 600005</span> <span className='bg-gray-200 text-xs px-1 py-[0.1rem] rounded-md text-gray-600'>Home</span>
                    </div>
                    <div className='text-gray-600'>
                        512-2B, Ramesh enclave shruti construction,...
                    </div>
                </div>
                <div>
                    <button className='border px-3 py-1 rounded-md font-medium text-blue-500'>Change</button>
                </div>
            </div>
            </div>

            <div className='bg-white rounded-sm shadow-sm border'>
             <CheckoutCard/>
            </div>
        </div>
  )
}

export default Left