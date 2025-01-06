import React from 'react'

const Login = ({setIsRegister}) => {
  return (
    <div className='grid grid-cols-12 w-full h-full bg-white'>
            <div className='col-span-5 flex flex-col items-center justify-between bg-[#312ba6] px-6 py-12 text-white'>
                <div>
                    <h1 className='font-semibold text-2xl'>Login</h1>
                    <p className='text-lg'>Get access to your Orders, Wishlist and Recommendations</p>
                </div>

                <div className='flex justify-center w-40 h-40 pr-4'>
                    <img src='giphy.webp'/>
                </div>
            </div>
            <div className='col-span-7 px-8 py-12 flex flex-col justify-between'>
                <div className='space-y-4'>
                    <div className='space-y-8'>
                        <div className='space-y-4'>
                        <div>
                            <input placeholder='Enter Email/Mobile number' className='w-full border-b-[2px] outline-none font-medium '/>
                        </div>
                        <div className='text-xs text-gray-700'>
                            By continuing, you agree to Ethe's Terms of Use and Privacy Policy.
                        </div>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-[#FB641B] text-white font-medium py-3 w-full'>Request OTP</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 onClick={()=>setIsRegister(true)} className='text-center text-sm text-[#312ba6] font-medium cursor-pointer'>New to Ethe? Create an account</h1>
                </div>
            </div>
        </div>
  )
}

export default Login