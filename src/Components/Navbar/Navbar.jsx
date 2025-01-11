import React from 'react'
import { FaAngleDown, FaSearch } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import LogoAndSearch from './LogoAndSearch'
import CartAndMore from './CartAndMore'
import MobileNav from './MobileNav'

const Navbar = ({setAuthEnable,authEnable}) => {
  return (
    <div className='fixed z-50 w-full bg-[#312ba6] flex justify-between md:px-[10vh]  py-4 md:py-2 text-white'>
        <div className='hidden md:block md:visible'>
           <LogoAndSearch authEnable={authEnable} setAuthEnable={setAuthEnable}/>
        </div>
        <div className='hidden md:block md:visible'>
           <CartAndMore/>
        </div>
        {/* MOBILE */}
        <div className='md:hidden w-full'>
           <MobileNav setAuthEnable={setAuthEnable} authEnable={authEnable}/>
        </div>
    </div>
  )
}

export default Navbar