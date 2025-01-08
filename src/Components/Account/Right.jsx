import React, { useState } from 'react'
import PersonalInformation from './PersonalInformation'
import AddressInfo from './AddressInfo'
import Reviews from './MiniComponenets/Reviews'
import Notifications from './MiniComponenets/Notifications'
import MyWishlist from './MiniComponenets/MyWishlist'
import Orders from './MiniComponenets/Orders'
import { SiBuymeacoffee } from 'react-icons/si'
import { IoIosHeart } from 'react-icons/io'
import { FaUser } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'


const Right = ({index,setIndex}) => {
  // MObile
  const[menuVisible,setMenuVisible]=useState(true);
  const handleMobileTabClick=(id)=>{
    setIndex(id);
    setMenuVisible(false);
  }
  return (
    <div className='col-span-12 md:col-span-9 bg-white rounded-sm shadow py-4'>
      
      {/* MOBILE */}
      {
        menuVisible&&
        <div className='md:hidden pt-4'>
        <div className='w-full pt-11  px-8'>
        <div className='flex justify-between pb-4'>
          <span onClick={()=>handleMobileTabClick(5)} className='w-[19vh] flex items-center justify-center gap-1 font-medium border rounded-sm px-5 py-3'>
            <SiBuymeacoffee color='#312ba6'/>Orders
          </span>
          <span onClick={()=>handleMobileTabClick(4)}  className='w-[19vh] flex items-center justify-center gap-1 font-medium border rounded-sm px-5 py-3'>
            <IoIosHeart color='#312ba6'/>Wishlist
          </span>
        </div>
        <div className='flex justify-between'>
          <span onClick={()=>handleMobileTabClick(0)}  className='w-[19vh] flex items-center justify-center gap-1 font-medium border rounded-sm px-5 py-3'>
            <FaUser  color='#312ba6'/>Profile
          </span>
          <span onClick={()=>handleMobileTabClick(1)}  className='w-[19vh] flex items-center justify-center gap-1 font-medium border rounded-sm px-5 py-3'>
            <FaLocationDot color='#312ba6'/>Address
          </span>
        </div>
        </div>

      <div className='py-8'>
        <Notifications/>
      </div>

      <div className='py-8'>
        <Reviews/>
      </div>

      </div>
      }

      {/* WINDOW */}
      {
        index==0?<PersonalInformation menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>:
        index==1?<AddressInfo menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>:
        index==2?<Reviews menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>:
        index==3?<Notifications menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>:
        index==4?<MyWishlist menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>:
        <Orders menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
      }

      {/* MOBILE */}
      

    </div>
  )
}

export default Right