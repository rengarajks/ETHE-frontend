import { div } from 'framer-motion/client'
import React from 'react'

const PersonalInformation = () => {
  return (
    <div className='space-y-10'>
            <div className='space-y-6'>
        <div>
            <div className='flex items-center font-medium gap-2'>
            <h1>Personal Information</h1>
            <button className='text-blue-500'>Edit</button>
            </div>
        </div>

        <div className='flex items-center gap-4 '>
             <input className='border rounded-sm px-2 py-2 text-sm' disabled value={'Ethe'}/>
             <input className='border rounded-sm px-2 py-2 text-sm' disabled value={'Customer'}/>
        </div>

        <div>
            <h1 className='text-sm pb-2'>Your Gender</h1>
            <span className='flex items-center gap-4'>
            <span className='flex items-center gap-2 text-gray-600'>
                <input type='radio' disabled/><p>Male</p>
            </span>
            <span className='flex items-center gap-2 text-gray-600'>
                <input type='radio' disabled/><p>Female</p>
            </span>
            </span>
        </div>
    </div>

    <div>
    <div>
            <div className='flex items-center font-medium gap-2'>
            <h1>Email Address</h1>
            <button className='text-blue-500'>Edit</button>
            </div>
        </div>

        <div className='py-4 flex items-center gap-4'>
             <input className='border rounded-sm px-2 py-2 text-sm' disabled value={'sam@123.com'}/>
        </div>
    </div>

    <div>
    <div>
            <div className='flex items-center font-medium gap-2'>
            <h1>Mobile Number</h1>
            <button className='text-blue-500'>Edit</button>
            </div>
        </div>

        <div className='py-4 flex items-center gap-4'>
             <input className='border rounded-sm px-2 py-2 text-sm' disabled value={'sam@123.com'}/>
        </div>
    </div>
    </div>
  )
}

export default PersonalInformation