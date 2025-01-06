import React, { useState } from 'react'

import ImageSection from './ImageSection';
import DetailSection from './DetailSection';


const ProductLayout = () => {
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 bg-white p-4'>
        
        <ImageSection/>
        <DetailSection/>        
        
    </div>
  )
}

export default ProductLayout