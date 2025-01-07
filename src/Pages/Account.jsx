import React from 'react'
import Accountlayout from '../Components/Account/Accountlayout'
import { Route, Routes } from 'react-router'
import Orders from './Orders'
import { MainHomeCategory } from '../Components/MainCategory/MainHomeCategory'

const Account = () => {
  return (
    <div className=''>
        <MainHomeCategory/>
        <Accountlayout/>
    </div>
  )
}

export default Account