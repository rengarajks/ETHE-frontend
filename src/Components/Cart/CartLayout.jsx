import React from 'react'
import Cartcard from './Cartcard'
import Leftsection from './Leftsection'
import Rightsection from './Rightsection'

const CartLayout = () => {
  return (
    <div className='grid grid-cols-12 h-full w-full pt-11 px-8 py-4'>
        <Leftsection/>
        <Rightsection/>
    </div>
  )
}

export default CartLayout