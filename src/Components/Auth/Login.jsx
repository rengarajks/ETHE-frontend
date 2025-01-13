import axios from 'axios';
import React, { useState } from 'react'
import { loginUserAction } from '../../Redux/Auth/auth.action';
import { useDispatch } from 'react-redux';

const Login = ({setIsRegister}) => {
    const dispatch=useDispatch();
    const[OTPVisible,setOTPVisible]=useState(false);
    const[loginData,setLoginData]=useState({
        phone:'',
        otp:''
    })
    const handleRequestOTP=()=>{
        setOTPVisible(true)
        console.log('FORM=',loginData)
        axios.post('http://localhost:8005/authentication/generate-otp',loginData).then(data=>console.log(data))
        // console.log(data);
    }
    const verifyOTP=()=>{
        console.log('FORM=',loginData)
        dispatch(loginUserAction(loginData))
    }
    // console.log(loginData)
  return (
    <div className='grid grid-cols-12 w-full h-full bg-white'>
            <div className='md:col-span-5 hidden md:block md:visible'>
                <div className='flex flex-col h-full items-center justify-between bg-[#312ba6] px-6 py-12 text-white'>
                <div>
                    <h1 className='font-semibold text-2xl'>Login</h1>
                    <p className='text-lg'>Get access to your Orders, Wishlist and Recommendations</p>
                </div>

                <div className='flex justify-center w-40 h-40 pr-4'>
                    <img src='giphy.webp'/>
                </div>
                </div>
            </div>
            <div className='md:col-span-7 col-span-12 px-8 py-12 flex flex-col justify-between'>
                <div className='space-y-8'>
                    <div className='space-y-8'>
                        <div className='space-y-4'>
                        <div>
                            <input type='number' onChange={(e)=>setLoginData((prev)=>({...prev,phone:e.target.value}))} placeholder='Enter Mobile number' className='w-full border-b-[2px] outline-none font-medium '/>
                        </div>
                        <div className='text-xs text-gray-700'>
                            By continuing, you agree to Ethe's Terms of Use and Privacy Policy.
                        </div>
                        </div>
                        <div className='flex justify-center'>
                            {
                            OTPVisible?
                            <button disabled className='bg-gray-600 text-white font-medium py-3 w-full'>Request OTP</button>
                            :
                            <button onClick={handleRequestOTP} className='bg-[#FB641B] text-white font-medium py-3 w-full'>Request OTP</button>
                            }
                            
                            
                        </div>
                    </div>

                    {
                        OTPVisible&&
                        <div className='space-y-4'>
                        <div className='space-y-4'>
                            <div>
                                <input onChange={(e)=>setLoginData((prev)=>({...prev,otp:e.target.value}))} type='number' placeholder='Enter OTP' className='w-full border-b-[2px] outline-none font-medium '/>
                            </div>
                            </div>
                            <div className='flex justify-center'>
                            <button onClick={verifyOTP} className='bg-[#FB641B] text-white font-medium py-3 w-full'>Verify OTP</button>
                            </div>
                        </div>
                    }

                </div>

                {/* <div>
                    <h1 onClick={()=>setIsRegister(true)} className='text-center text-sm text-[#312ba6] font-medium cursor-pointer'>New to Ethe? Create an account</h1>
                </div> */}
            </div>
        </div>
  )
}

export default Login