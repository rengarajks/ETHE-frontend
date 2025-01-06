import React, { useState } from 'react'
import Login from '../Components/Auth/Login'
import { IoCloseOutline } from 'react-icons/io5'
import Register from '../Components/Auth/Register'

const Auth = ({setAuthEnable}) => {
    const[isRegister,setIsRegister]=useState(false);
  return (
    <div className='fixed bg-slate-900/40 w-full md:top-0 top-10 left-0 right-0 bottom-0 z-10 flex items-center justify-center'>
        <div className='w-[55%] h-[80vh]'>
            <div className='flex justify-end' onClick={()=>setAuthEnable(false)}>
                <IoCloseOutline  size='1.6rem' className='text-white font-bold cursor-pointer'/>
            </div>
            {
                !isRegister?<Login setIsRegister={setIsRegister}/>:<Register setIsRegister={setIsRegister}/>
            }
        </div>
    </div>
  )
}

export default Auth