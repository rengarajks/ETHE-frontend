import React from 'react'
import Left from './Left'
import Right from './Right'


const Accountlayout = () => {
  return (
    <div>
      <div className='grid grid-cols-12 px-8 py-4 gap-4'>
        <Left/>
        <Right/>
      </div>
    </div>
  )
}

export default Accountlayout