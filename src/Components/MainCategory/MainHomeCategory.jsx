import React, { useState, useRef } from 'react';
import { mainCategoryData } from './mainCategoryData';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import ModalMainCategory from './ModalMainCategory';

export const MainHomeCategory = ({categoryData}) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const closeTimeout = useRef(null); // Ref to track timeout

  const handleMouseEnter = (category) => {
    // Clear any existing close timeout
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setHoveredCategory(category); // Set the hovered category
  };

  const handleMouseLeave = () => {
    // Delay closing to account for slow movements
    closeTimeout.current = setTimeout(() => {
      setHoveredCategory(null); // Clear the hovered category
    }, 150); // Adjust delay as needed
  };

  console.log('CAT=',categoryData)
  const[category,setCategory]=useState();
  const getUniqueCategory = (data) => {
    // Reduce to calculate the counts of unique categories
    const categoryCounts = data.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});
  
    // Convert the result to an array of objects
    const uniqueCategories = Object.keys(categoryCounts).map((category) => ({
      title: category,
      length: categoryCounts[category],
    }));
  
    return uniqueCategories;
  };
  
  console.log(getUniqueCategory(categoryData));
  const getSubCategories= (cat) => {
    return categoryData.filter((c) => c.category === cat);
  };
  console.log('SUB=',getSubCategories('Electronics'))
  
  return (
    <div className="hidden md:block md:visible">
      <div className="pt-11 flex items-center justify-between px-[3.7rem] bg-white border-b-[1.8px] shadow-sm">
        {getUniqueCategory(categoryData)?.map((data) => (
          <div
            key={data.title}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(data.title)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main Category */}
            <div className="flex items-center py-3 cursor-pointer">
              <span className="font-medium text-sm">{data.title}</span>
              {
              data.length>1?(
                data.title==hoveredCategory?<FaAngleUp color='black' className="pl-2 text-gray-400" />
              :
              <FaAngleDown color='black' className="pl-2 text-gray-400" />
              ):''
              
              }
            </div>

            {/* Popup - Only display if subCategory length is greater than 0 */}
            {/* {hoveredCategory === data.title && data.subCategory.length > 0 && (
              <ModalMainCategory
                cat={data.title}
                subCategory={getSubCategories(data.title)}
                handleMouseLeave={handleMouseLeave}
                handleMouseEnter={handleMouseEnter}
              />
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};
