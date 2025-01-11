import React, { useState } from 'react'

const imageData = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHnXKN8_fQCX0ljsRYmugBkdjRUa31Gvemndb1GSLQkw8IHk2lr_aEdDIO9MJVsNaFFA&usqp=CAU',
     'https://assets.hardwarezone.com/img/2019/08/apple-iphone11-camera2.jpg',
     'https://indianexpress.com/wp-content/uploads/2021/10/Apple_iPhone13_LEAD.jpg', 
     'https://images.squarespace-cdn.com/content/v1/5264f7c9e4b0a3247c641860/1632989378093-PZQYFRFSATG9M2UJLR37/iphone-13-pro-photography_01.jpg',
     'https://bestpricegh.com/cdn/shop/products/iPhone13promaxsizes_a5c5b370-e87c-43bc-b6f4-45dc18fd9643_2048x.jpg?v=1632873310'];

const ImageSection = () => {
    const[imageIndex,setImageIndex]=useState(0);
  return (
    <div className='col-span-5 h-[70vh] flex md:sticky left-0 pt-12 md:pt-0 md:top-14 pb-10'>
            <div className='w-[10vh]'>
             
             {
                imageData.map((data,index)=>
                    <div onClick={()=>setImageIndex(index)} className={`w-14 h-14  ${imageIndex == index ? 'border-[#312ba6] border-[1.5px]':'border'}`}>
                      <img className='w-full h-full object-contain cursor-pointer' src={data}/>
                    </div>
                )
             }

            </div>
            <div className='w-full h-full'>
            <div className='border w-full h-full'> 
              <img className='w-full h-full object-contain' src={imageData[imageIndex]}/>
            </div>
            <div className='flex gap-2 w-full py-2 font-bold text-white'>
                {/* <button className='bg-[#FF9F00] rounded-sm shadow-sm w-[50%] py-3'>ADD TO CART</button> */}
                <button className='bg-[#FF9F00] rounded-sm shadow-sm w-[50%] py-3'>ADDED IN CART</button>

                <button className='bg-[#FB641B] rounded-sm shadow-sm w-[50%] py-3'>BUY NOW</button>
            </div>
            </div>
        </div>
  )
}

export default ImageSection