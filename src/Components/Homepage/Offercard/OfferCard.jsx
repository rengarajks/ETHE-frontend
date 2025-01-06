import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router';

const sample=[1,1,1,1,1,1,1,1,1,1,1];
const OfferCard = ({data}) => {
  return (
    <div className='m-4 px-4 pb-4 bg-white rounded-sm shadow-sm '>
        <div className='py-4'>
            <div className='px-2 flex justify-between items-center '>
              <h1 className='font-semibold text-lg'>{data.title}</h1>
              <div className='bg-[#312ba6] p-[0.2rem] rounded-full'><FaAngleRight size='1rem' color='white'/></div>
            </div>
        </div>
   
        <div className='flex gap-4 overflow-y-auto'>
         {
            data.products.map((product)=>
                <Link to={`/product/${3}`}>
                 <div className='bg-white border rounded-sm w-44 cursor-pointer'>
                    <div className='w-44 h-44'>
                    <img className='object-center' src={product.image} />
                    </div>
                    <div className='pb-2'>
                        <h1 className='text-center text-sm'>{product.name}</h1>
                        <p className='text-center text-[0.9rem] font-semibold'>Just ${product.currentPrice}</p>
                    </div>
                </div>
                </Link>
            )
         }
        </div>
    </div>
  )
}

export default OfferCard