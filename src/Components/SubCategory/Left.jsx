import React from 'react'
import { Link, useParams } from 'react-router'

const Left = ({subCategory,extractedSub}) => {
  console.log('lower',subCategory[0].title.toLowerCase())
  const extractedData=useParams();
  return (
    <div className='col-span-4 md:col-span-2 '>
        <div className='bg-white shadow rounded-sm sticky top-16 left-0'>
        <ul className="text-[0.8rem]">
          {
            subCategory.map((data)=>
            <div>
               {
                data?.title?.toLowerCase()===extractedSub?.toLowerCase()?
                  <li className="py-3 md:px-7 px-3 font-bold bg-blue-50 transition-all duration-200 ease-in-out cursor-pointer">{data.title}</li>:
                  <Link to={`/category/${extractedData.cat}/${data.title}`}>
                    <li className="py-3 md:px-7 px-3 hover:font-bold hover:bg-blue-50 transition-all duration-200 ease-in-out cursor-pointer">{data.title}</li>
                  </Link>
                }
            </div>
          )
          } 
        </ul>
        </div>
    </div>
  )
}

export default Left