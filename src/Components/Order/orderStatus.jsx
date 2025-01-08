import React from 'react'
import { IoMdStar } from 'react-icons/io'
import OrderStatusTimeline from './Timeline'

const orderStatus=[
  {
    type:"Order Confirmed",
    status:true,
    date:"Mon, 15 Apr"
  },
  {
    type:"Shipped",
    status:true,
    date:"Mon, 16 Apr"
  },
  {
    type:"Out for delivery",
    status:false,
    date:""
  },
  {
    type:"Delivered",
    status:false,
    date:""
  }
]
const OrderStatus = () => {
  return (
    <div className='bg-white shadow-sm border w-full grid grid-cols-12 py-4 px-2'>
    
        <div className='space-y-1 px-2 py-2 col-span-12 md:col-span-4 w-full flex items-center'>
        <div className='flex items-center gap-2 '>
                <div className='w-40 h-40 px-2 py-2'>
                    <img className='w-full h-full object-contain' src='https://rukminim2.flixcart.com/image/60/60/xif0q/ball/r/j/t/400-country-colour-england-5-22-1-1360eg-football-nivia-original-imaghjk2hgfykugg.jpeg?q=100'/>
                </div>

                <div className='flex justify-between w-full text-[0.85rem]'>
                <div className='space-y-4 px-3'>
                    <p className=' font-medium'>Khadi Herbal Vitamin C Serum For Natural Glowing Beauty (30 ml)</p>
                    <span className='text-gray-400'>Qty: 1</span>
                    <br/>
                    <span className='text-gray-400'>Seller: VeBNoR</span>
                    <div className='font-medium flex gap-1 space-x-1'>
                    <span>₹134,900</span>
                    </div>
                </div>

                </div>

            </div>
        </div>

        <div className='col-span-12 md:col-span-4 px-4 py-6 flex justify-center w-full'>
          <OrderStatusTimeline orderStatus={orderStatus}/>
        </div>

        <div className='col-span-12 md:col-span-4 px-4 py-6'>
          <span className='font-medium text-blue-500 flex items-center gap-2 py-2 text-[0.94rem]'><IoMdStar/><p>Rate & Review Product</p></span>
        </div>

    </div>
  )
}

export default OrderStatus