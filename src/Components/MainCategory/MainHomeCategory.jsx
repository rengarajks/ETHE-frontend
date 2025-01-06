import React from 'react'
import { mainCategoryData } from './mainCategoryData'
import { FaAngleDown } from 'react-icons/fa'

export const MainHomeCategory = () => {
  return (
    <div className='hidden md:block md:visible'>
      <div className='pt-11 flex items-center justify-between px-[3.7rem] bg-white border-b-[1.8px] shadow-sm'>
      {
        mainCategoryData.map((data)=>
        <div className='flex items-center py-3'>
          <div className='font-medium text-sm'>{data.title}</div>
          <FaAngleDown className='pt-1 text-gray-400'/>
        </div>
      )
      }
    </div>
    </div>
  )
}
