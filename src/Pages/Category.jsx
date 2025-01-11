import React from 'react'
import { MainHomeCategory } from '../Components/MainCategory/MainHomeCategory'
import MobileCategory from '../Components/MainCategory/MobileCategory/MobileCategory'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router'

const Category = () => {
  return (
    <div>
    <MainHomeCategory/>
    
    <div className='md:px-4 py-4 pt-14 md:pt-2'>
      <div className='bg-white shadow-sm rounded-sm'>
        <Link className='md:hidden' to='/'>
          <div className='py-3 font-semibold text-lg border-b flex items-center gap-2 px-2'>
          <FaArrowLeft/>
            Category
          </div>
        </Link>
        <MobileCategory/>
      </div>
    </div>
    </div>
  )
}

export default Category