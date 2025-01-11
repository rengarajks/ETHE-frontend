import React from 'react'
import { Link, useNavigate } from 'react-router';

const ModalMainCategory = ({handleMouseEnter,handleMouseLeave,subCategory,cat}) => {
  const navigate=useNavigate();
  const handleNavigate=(sub)=>{
    navigate(`${cat}/${sub}`)
  }
  return (
    <div
    className="absolute top-full -translate-x-12 left-0 mt-2 bg-white border rounded shadow-md z-40 w-[40vh]"
    onMouseEnter={() => handleMouseEnter(data.title)} // Keep open when entering popup
    onMouseLeave={handleMouseLeave} // Handle when leaving popup
    >
        <ul className="text-[0.8rem]" >
          {
            subCategory.map((data)=>
            <Link to={`/category/${cat}/${data?.title}`}>
              <li className="py-3 px-7 hover:font-bold hover:bg-blue-50 transition-all duration-200 ease-in-out cursor-pointer">{data?.title}</li>
            </Link>
          )
          } 
        </ul>
    </div>
  )
}

export default ModalMainCategory