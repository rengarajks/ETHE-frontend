import React from 'react'
import ListProducts from '../Components/AllProducts/ListProducts'
import ProductsHeader from '../Components/AllProducts/ProductsHeader'
import { MainHomeCategory } from '../Components/MainCategory/MainHomeCategory'

const Search = () => {
  return (
    <div className=''>
        <MainHomeCategory/>
        <ProductsHeader/>
        <ListProducts/>
    </div>
  )
}

export default Search