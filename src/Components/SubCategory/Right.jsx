import React from 'react'
import ProductCard from '../AllProducts/ProductCard';

const pro=[1,1,1,1,1,1,1,1];
const Right = () => {
  return (
    <div className='col-span-8 md:col-span-10'>
        <div className='bg-white grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 p-2 md:p-4'>
        {
            pro.map((data)=><ProductCard/>)
        }
    </div>
    </div>
  )
}

export default Right