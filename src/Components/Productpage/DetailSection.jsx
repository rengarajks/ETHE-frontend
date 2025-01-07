import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go';
import { RatingsBar } from './Ratingsbar';
import { MdOutlineStar } from 'react-icons/md';
import { Rating } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

const ratingsData = [50, 30, 20, 10, 5];
const DetailSection = () => {
    const[seeMore,setSeeMore]=useState(false);
    const toggleSeeMore=()=>{
        setSeeMore(!seeMore);
    }
  return (
    <div className='col-span-7 md:px-8 space-y-2'>
            
            <div className='hidden md:block md:visible text-xs font-medium cursor-pointer text-gray-500'>
                Home / Mobile / Iphone / Iphone 7 plus
            </div>
            
            <div className='font-semibold text-lg'>
                Iphone 7 plus
            </div>
            
            <div className='flex gap-2 items-center'>
              <p className='font-semibold text-lg'>₹19,000</p>
              <s className='font-medium text-sm items-center pt-1 text-gray-500'>₹1,20,000</s>
              <p className='text-[#388e3c] font-medium text-sm items-center pt-1'>80% Off</p>
            </div>

            <div className='flex gap-2 items-center'>
            <Rating
                value={5}
                readOnly
                precision={0.5}
                // emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: '16px' }}/>} // Adjust the fontSize here
                sx={{ fontSize: "1.1rem" }} // Optionally, adjust the size of the entire rating component
            />
            <div className='text-[0.8rem] text-gray-500 font-medium'>
                12,211 reviews & 4,000 ratings
            </div>
            </div>

            <div className='space-y-6 py-6'>
                <div className='grid grid-cols-12 text-sm'>
                    <div className='col-span-3 font-medium text-gray-800'>Highlights</div>
                    <div className='col-span-9'>
                      <span className='flex items-center'>
                        <GoDotFill className='pt-1 text-gray-500'/>
                        <p>Type: Combo of 6pc</p>
                      </span>
                      <span className='flex items-center'>
                        <GoDotFill className='pt-1 text-gray-500'/>
                        <p>Type: Combo of 6pc</p>
                      </span>
                      <span className='flex items-center'>
                        <GoDotFill className='pt-1 text-gray-500'/>
                        <p>Type: Combo of 6pc</p>
                      </span>
                    </div>
                </div>

                {/* SELLER */}
                <div className='grid grid-cols-12 text-sm'>
                    <div className='col-span-3 font-medium text-gray-800'>Seller</div>
                    <div className='col-span-9'>
                      <span className='flex items-center gap-2'>
                        <p>VelcoRetails</p>
                        <Rating
                            value={5}
                            readOnly
                            precision={0.5}
                            // emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: '16px' }}/>} // Adjust the fontSize here
                            sx={{ fontSize: "0.9rem" }} // Optionally, adjust the size of the entire rating component
                        />
                      </span>
                      <span className='flex items-center'>
                        <GoDotFill className='pt-1 text-gray-500'/>
                        <p>10 Days Return Policy</p>
                      </span>
                    </div>
                </div>

                {/* Description */}
                <div className='grid grid-cols-12 text-sm'>
                    <div className='col-span-3 font-medium text-gray-800'>Description</div>
                    <div className='col-span-9'>
                    <div className={`${seeMore?"h-auto":"h-[40vh]"} overflow-hidden`}>
                      <span className='flex items-center gap-2 '>
                      Our aim is to provide our customers classy, elegant and durable ties. This product contains everything you want from a neck tie such as Elegance, Class and Perennial. Polycotton ties are the quintessential piece of neckwear that screams “high fashion”.The laborious and expensive process of combining cotton and polyster, decadent nature of its fabric has a marker of style and elegance. However, not all polycotton ties are created equal, as exact ratio of cotton to polyster varies depending on the fabric's intended use can vary in weight and texture. Higher cotton content makes the fabric softer and more breathable, while higher polyster content makes it more durable and wrinke resistant. Polycotton ties no longer only define the elegance of an event but are now a staple of the everyday modern man. Floral print ties makes the perfect official ties as well as ties for marriages and ties for functions. Floral pattern neckties can be worn for a casual weekend outing as a casual ties or at the office to maintain a professional look while adding a touch of personality. Floral print will add an extra charm to your personality which keeps you outlandish in the party or any gathering.
                      </span>
                      </div>
                      <div>
                        {
                            seeMore?<button className='text-[#312ba6] font-semibold' onClick={toggleSeeMore}>See Less</button>
                            :
                            <button className='text-[#312ba6] font-semibold' onClick={toggleSeeMore}>See more</button>
                        }
                      </div>
                    </div>
                </div>

                {/* RATINGS AND REVIEWS */}
                <div className='border py-4'>
                    <div className='flex justify-between px-4'>
                        <h1 className='font-semibold text-lg'>Ratings & Reviews</h1>
                        <button className='shadow-sm shadow-slate-500 rounded-sm px-4 py-2 font-medium text-gray-800'>Rate Product</button>
                    </div>
                    <div className='flex items-center gap-10 py-7 px-4'>
                        <div className='max-w-[5.5rem] text-center'>
                            <div className='text-3xl font-semibold pl-3 text-gray-800 flex items-center gap-1'>
                            <p>4.4</p>
                            <MdOutlineStar className='pt-[0.1rem]'/>
                            </div>
                            <div className='font-medium text-sm text-gray-600'>
                                46 Ratings & 5 Reviews
                            </div>
                       </div>
                        
                        <div className='w-[50%]'>
                          <RatingsBar ratings={ratingsData} />
                        </div>
                    </div>


                    <div>
                        <div className='border-t space-y-2 py-4 px-4'>
                            <div className='flex gap-3 items-center font-medium text-gray-700'>
                                <span className='flex '>
                                    <div className='flex items-center bg-[#388e3c] px-[0.4rem] text-white rounded-md'>
                                    2
                                    <MdOutlineStar size='0.8rem'/>
                                    </div>
                                </span>
                                <span>Worth every penny</span>
                            </div>
                            <div className='flex items-center text-xs text-gray-500'>
                                <span className='font-medium'>Sunnty Leonw</span>
                                <span className='font-normal'>, New Delhi  3 months ago</span>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
  )
}

export default DetailSection