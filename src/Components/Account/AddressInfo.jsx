import { div } from 'framer-motion/client';
import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaArrowLeft } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

const AddressInfo = ({setMenuVisible}) => {
    const[addAddressVisible,setAddAddressVisible]=useState(false);
  return (
    <div className='space-y-6 px-6 md:pt-0 pt-11'>
        <h1 className='font-semibold text-lg flex items-center gap-2'>
            <FaArrowLeft onClick={()=>setMenuVisible(true)} className='md:hidden'/>
            Manage Addresses
        </h1>
        {
            addAddressVisible?<div className='space-y-4 bg-[#F5FAFF] border border-black/20 px-6 py-4'>
            <h1 className='font-medium text-blue-700'>Add a new address</h1>
            <div className='flex items-center gap-3'>
                <input placeholder='Name' className='border w-[15rem] px-2 py-2 outline-blue-500'/>
                <input placeholder='Mobile number' className='border w-[15rem] px-2 py-2 outline-blue-500'/>
            </div>
            <div className='flex items-center gap-3'>
                <input placeholder='Pincode' className='border w-[15rem] px-2 py-2 outline-blue-500'/>
                <input placeholder='Locality' className='border w-[15rem] px-2 py-2 outline-blue-500'/>
            </div>
            <div>
                <textarea cols={5} className='w-[30.8rem] outline-blue-500 border px-2 py-2' placeholder='Address (Area and Street)'/>
            </div>
            <div className='flex items-center gap-3'>
                <input placeholder='City' className='border w-[15rem] px-2 py-2 outline-blue-500'/>
                <select placeholder='Locality' className='border w-[15rem] px-2 py-2 outline-blue-500'>
                    <option>Select State</option>
                </select>
            </div>
            <div className='flex items-center gap-3'>
                <input placeholder='Landmark' className='border w-[15rem] px-2 py-2 outline-blue-500'/>
                <input placeholder='Alternate Mobile number' className='border w-[15rem] px-2 py-2 outline-blue-500'/>
            </div>
            <div className='text-sm py-1'>
                <p>Address Type</p>
            <div className='flex items-center gap-4'>
                <span className='flex items-center gap-1'>
                    <input type='radio'/>
                    <p>Male</p>
                </span>
                <span className='flex items-center gap-1'>
                    <input type='radio'/>
                    <p>Female</p>
                </span>
            </div>
            </div>

            <div className='flex items-center gap-2'>
                <button className='bg-blue-500 font-medium w-[10rem] py-2 text-white rounded-sm shadow'>Save</button>
                <button className='font-medium w-[10rem] py-2 text-blue-500' onClick={()=>setAddAddressVisible(false)}>Cancel</button>
            </div>

        </div>:
        <div onClick={()=>setAddAddressVisible(true)} className='flex gap-3 text-blue-700 items-center cursor-pointer border-black/20 border text-sm font-medium px-4 py-3'>
            <FiPlus/>
            <p>Add a new address</p>
        </div>
        }

        <div className='text-[0.9rem] w-full'>
        <div className='bg-white px-5 py-3 w-full rounded-sm border border-black/20 flex justify-between items-center'>
            <div className='space-y-2 w-full'>
           <div className='flex items-center justify-between w-full'>
           <span className='bg-gray-200 text-xs px-1 py-[0.1rem] rounded-md text-gray-600'>Home</span>
           <button><BsThreeDotsVertical/></button>
           </div>
                <div>
                    <span className='font-medium flex items-center gap-3'><p>Kalyan p</p>   <p>9009990005</p></span> 
                </div>
                <div className='text-gray-600'>
                    512-2B, Ramesh enclave shruti construction,...
                </div>
            </div>
        </div>        
        </div>
    </div>
  )
}

export default AddressInfo