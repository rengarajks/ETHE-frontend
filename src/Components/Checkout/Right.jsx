import React from 'react'

const Right = () => {
  return (
    <div className='col-span-12 md:col-span-4 w-full text-sm md:py-4 md:pl-4'>
        <div className='bg-white  rounded-sm border pt-2 shadow-sm'>
            <h1 className='font-medium text-gray-400 text-lg border-b px-4 py-2'>Price details</h1>
            <div className='text-[1rem] font-[450]'>
                <span className='flex justify-between items-center px-4 py-4'>
                    <p className=''>Price</p>
                    <p className=''>₹7,994</p>
                </span>

                <span className='flex justify-between items-center px-4 py-4'>
                    <p className=''>Discount</p>
                    <p className=''>- ₹7,994</p>
                </span>
                
                <span className='flex justify-between items-center px-4 py-4'>
                    <p className=''>Delivery Charges</p>
                    <p className=''>₹94</p>
                </span>

                <span className='flex justify-between items-center px-4 py-4 font-semibold border-y'>
                    <p className=''>Total Amount</p>
                    <p className=''>₹9,094</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Right