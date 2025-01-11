import React from 'react'

const Register = ({setIsRegister}) => {
  return (
    <div className='grid grid-cols-12 w-full h-full bg-white'>
            
           <div className='md:col-span-5 hidden md:block md:visible'>
                <div className='h-full flex flex-col items-center justify-between bg-[#312ba6] px-6 py-12 text-white'>
                <div className='space-y-2'>
                    <h1 className='font-semibold text-2xl'>Looks like you're new customer!</h1>
                    <p className='text-lg'>Sign up with your mobile number to get started</p>
                </div>

                <div className='flex justify-center w-40 h-40 pr-4'>
                    <img src='register.webp'/>
                </div>
                </div>
            </div>

            <div className='col-span-12 md:col-span-7 px-8 py-12 flex flex-col justify-between'>
                <div className='space-y-4'>
                    <div className='space-y-8'>
                        <div className='space-y-4'>
                            <div>
                                <input placeholder='Enter Mobile number' className='w-full border-b-[2px] outline-none font-medium '/>
                            </div>
                            <div className='text-xs text-gray-700'>
                                By continuing, you agree to Ethe's Terms of Use and Privacy Policy.
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-[#FB641B] text-white font-medium py-3 w-full'>Continue</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 onClick={()=>setIsRegister(false)} className='text-center text-sm text-[#312ba6] font-medium cursor-pointer'>Existing User? Login</h1>
                </div>
            </div>
    </div>
  )
}

export default Register