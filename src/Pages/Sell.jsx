import React, { useState } from 'react'
import Header from '../Components/Seller/Header'
import Vertical from '../Components/Seller/Vertical';
import ProductInfo from '../Components/Seller/ProductInfo';
import Images from '../Components/Seller/Images';
import Agreement from '../Components/Seller/Agreement';

const Sell = () => {
  const [product,setProduct]=useState({
    category:'',
    subCategory:'',
    name:'',
    mrp:0,
    sp:0,
    highlights:[],
    desc:'',
    img1:'',
    img2:'',
    img3:'',
    img4:'',
    img5:''
  });
  const [selectedSection,setSelectedSection]=useState(1);
  console.log('PRODUCT',product);
  return (
    <div className='md:pt-11 pt-16 bg-white h-[100vh]'>
      <div className='h-full px-4'>
        <Header selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
        <div className=' py-4'>
          {
            selectedSection==1?<Vertical setProduct={setProduct} setSelectedSection={setSelectedSection}/>:
            selectedSection==2?<ProductInfo setProduct={setProduct} setSelectedSection={setSelectedSection}/>:
            selectedSection==3?<Images/>:
            <Agreement/>
          }
        </div>
      </div>
    </div>
  )
}

export default Sell