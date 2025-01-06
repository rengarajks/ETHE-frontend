import React from 'react'
import ListProducts from '../Components/AllProducts/ListProducts'
import ProductsHeader from '../Components/AllProducts/ProductsHeader'

const Search = () => {
  return (
    <div className='bg-w'>
        <ProductsHeader/>
        <ListProducts/>
    </div>
  )
}

export default Search