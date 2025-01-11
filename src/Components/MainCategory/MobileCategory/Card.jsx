import React from 'react'
import { Link } from 'react-router'

const Card = ({data}) => {
    console.log(data?.subCategory[0]?.title);
    // console.log(`/category/${data.title}/${data?.subCategory[0]?.title}`);
  return (
    <Link to={`/category/${data?.title}/${data?.subCategory[0]?.title}`}>
      <div className='border rounded-xl flex flex-col items-center hover:text-b hover:bg-blue-50 cursor-pointer'>
        <div className='w-24 h-24'>
            <img className='w-full h-full object-contain' src='tes.jpg'/>
        </div>

        <div className='font-semibold py-2'>
            {data.title}
        </div>
    </div>
  </Link>
  )
}

export default Card