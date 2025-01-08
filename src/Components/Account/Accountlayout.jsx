import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'


const Accountlayout = () => {
  const[index,setIndex]=useState(0);
  return (
    <div>
      <div className='grid grid-cols-12 md:px-8 py-4 gap-4'>
        <Left index={index} setIndex={setIndex}/>
        <Right index={index} setIndex={setIndex}/>
      </div>
    </div>
  )
}

export default Accountlayout