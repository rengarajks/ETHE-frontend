import React from 'react'
import Cartcard from './Cartcard'

const Leftsection = () => {
  return (
    <div className='md:col-span-8 col-span-full w-full text-sm md:py-4 py-8 space-y-4'>
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

            <div className='bg-white rounded-sm shadow-sm border'>
             <Cartcard/>
             <Cartcard/>
             <Cartcard/>
            </div>

            <div className='sticky bottom-0 bg-white rounded-sm shadow-lg flex justify-end px-4 py-2'>
                <button className='bg-[#FB641B] font-semibold text-white text-lg px-12 py-3'>PLACE ORDER</button>
            </div>

        </div>
  )
}

export default Leftsection