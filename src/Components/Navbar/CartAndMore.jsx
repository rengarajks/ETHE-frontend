import React, { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { IoCart } from 'react-icons/io5'
import { etheData } from './data/etheData'
import { moreData } from './data/moreData'

const CartAndMore = () => {
    const[isEtheEnable,setIsEtheEnable]=useState(false);
    const[isMoreEnable,setIsMoreEnable]=useState(false);
    const modalRef = useRef(null); // Ref to track the modal

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         setIsEtheEnable(false); // Close the modal
//       }
//     };

//     document.addEventListener("mouseleave", handleClickOutside);
//     return () => {
//       document.removeEventListener("mouseleave", handleClickOutside);
//     };
//   }, []);
  
  return (
    <div className='flex items-center gap-8 text-sm font-medium'>
        <div>
            <div className='flex items-center gap-1' onMouseEnter={()=>setIsEtheEnable(true)} >
                <p>ETHE</p>
                <FaAngleDown size='0.8rem' className='pt-[0.1rem]'/>
            </div>
            
            {/* MODAL */}
            {
            isEtheEnable&&
            <div onMouseLeave={()=>setIsEtheEnable(false)} ref={modalRef} className='w-[30vh] rounded-sm text-[#312ba6] -translate-x-12 shadow-md font-medium text-xs absolute bg-white'>
            {
                etheData.map((data)=>
                <div className='flex items-center hover:bg-gray-100 px-3 py-3 gap-2 border-b cursor-pointer'>
                    {data.icon}
                    <p>{data.title}</p>
                </div>
                )
            }
            </div>
            }

        </div>

        <div>
            <div className='flex items-center gap-1' onMouseEnter={()=>setIsMoreEnable(true)}>
                <p>More</p>
                <FaAngleDown size='0.8rem' className='pt-[0.1rem]'/>
            </div>

            {/* MODAL */}
            {
            isMoreEnable&&
            <div onMouseLeave={()=>setIsMoreEnable(false)} ref={modalRef} className='w-[30vh] rounded-sm text-[#312ba6] -translate-x-12 shadow-md font-medium text-xs absolute bg-white'>
            {
                moreData.map((data)=>
                <div className='flex items-center hover:bg-gray-100 px-3 py-3 gap-2 border-b cursor-pointer'>
                    {data.icon}
                    <p>{data.title}</p>
                </div>
                )
            }
            </div>
            }
            
        </div>

        <div className='flex items-center gap-1'>
            <IoCart size='1.2rem'/>
            <p>Cart</p>
        </div>
    </div>
  )
}

export default CartAndMore