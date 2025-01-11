import React from 'react'
import Card from './Card'

export const mainCategoryData = [
  {
    title: "Electronics",
    subCategory: [
      { id: 0, title: "Smartphones" },
      { id: 1, title: "Laptops" },
      { id: 2, title: "Cameras" },
      { id: 3, title: "Headphones" },
      { id: 4, title: "Tablets" },
      { id: 5, title: "Smartwatches" },
      { id: 6, title: "Home Audio Systems" },
      { id: 7, title: "Drones" },
      { id: 8, title: "Gaming Consoles" },
    ]
  },
  {
    title: 'Appliances',
    subCategory: [
      { id: 0, title: "Washing Machines" },
      { id: 1, title: "Refrigerators" },
      { id: 2, title: "Microwaves" },
      { id: 3, title: "Air Conditioners" },
      { id: 4, title: "Dishwashers" },
      { id: 5, title: "Water Heaters" },
      { id: 6, title: "Vacuum Cleaners" },
      { id: 7, title: "Food Processors" },
    ]
  },
  {
    title: 'Men',
    subCategory: [
      { id: 0, title: "T-shirts" },
      { id: 1, title: "Shirts" },
      { id: 2, title: "Jeans" },
      { id: 3, title: "Jackets" },
      { id: 4, title: "Sweatshirts" },
      { id: 5, title: "Blazers" },
      { id: 6, title: "Shorts" },
      { id: 7, title: "Suits" },
      { id: 8, title: "Activewear" },
    ]
  },
  {
    title: 'Women',
    subCategory: [
      { id: 0, title: "Dresses" },
      { id: 1, title: "Tops" },
      { id: 2, title: "Skirts" },
      { id: 3, title: "Outerwear" },
      { id: 4, title: "Sweaters" },
      { id: 5, title: "Blouses" },
      { id: 6, title: "Leggings" },
      { id: 7, title: "Jumpsuits" },
      { id: 8, title: "Pants" },
    ]
  },
  {
    title: 'Baby & Kids',
    subCategory: [
      { id: 0, title: "Toys" },
      { id: 1, title: "Clothing" },
      { id: 2, title: "Books" },
      { id: 3, title: "Baby Gear" },
      { id: 4, title: "Strollers" },
      { id: 5, title: "Diapering" },
      { id: 6, title: "Bedding" },
      { id: 7, title: "Learning Games" },
      { id: 8, title: "Footwear" },
    ]
  },
  {
    title: 'Home & Furniture',
    subCategory: [
      { id: 0, title: "Sofas" },
      { id: 1, title: "Beds" },
      { id: 2, title: "Tables" },
      { id: 3, title: "Chairs" },
      { id: 4, title: "Shelves" },
      { id: 5, title: "Cabinets" },
      { id: 6, title: "Mattresses" },
      { id: 7, title: "Lighting" },
      { id: 8, title: "Curtains" },
    ]
  },
  {
    title: 'Books & More',
    subCategory: [
      { id: 0, title: "Fiction" },
      { id: 1, title: "Non-fiction" },
      { id: 2, title: "Children's Books" },
      { id: 3, title: "Educational" },
      { id: 4, title: "Comics" },
      { id: 5, title: "Cookbooks" },
      { id: 6, title: "Biography" },
      { id: 7, title: "Self-help" },
      { id: 8, title: "Art & Design" },
    ]
  },
  {
    title: 'Offer Zone',
    subCategory: []
  }
]

const MobileCategory = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-8 py-8 gap-8'>
      {
        mainCategoryData.map((data)=><Card data={data}/>)
      }
    </div>
  )
}

export default MobileCategory