import React from 'react'
import ProductCard from './ProductCard';

const pro=[1,1,1,1,1,1,1,1];
const ListProducts = () => {
  return (
    <div className='bg-white grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4'>
        {
            pro.map((data)=><ProductCard/>)
        }
    </div>
  )
}

export default ListProducts