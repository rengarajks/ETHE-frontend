import React from 'react'

const ProductsHeader = () => {
  return (
    <div className='py-2 bg-white'>

        <div className='text-xs px-4 font-medium cursor-pointer pb-4 text-gray-500'>
            Home / Mobile / Iphone / Iphone 7 plus
        </div>

        <div className='text-sm font-medium flex gap-4 border-b px-4'>
            <span>Sort By</span>
            <span className='border-b-2 border-blue-500 text-blue-500'>Relevance</span>
            <span>Popularity</span>
            <span>Price--Low to High</span>
            <span>Price--High to Low</span>
            <span>Newest First</span>
        </div>
    </div>
  )
}

export default ProductsHeader