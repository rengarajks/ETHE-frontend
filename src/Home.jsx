import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage';
import { Route, Routes } from 'react-router';
import Search from './Pages/Search';
import Productpage from './Pages/Productpage';
import { MainHomeCategory } from './Components/MainCategory/MainHomeCategory';
import Auth from './Pages/Auth';
import Cart from './Pages/Cart';
import Account from './Pages/Account';
import Orders from './Pages/Orders';
import Category from './Pages/Category';
import SubCategory from './Pages/SubCategory';
import Sell from './Pages/Sell';
import Checkout from './Pages/Checkout';

const Home = () => {
  const [authEnable, setAuthEnable] = useState(true);

  console.log("authEnable state:", authEnable); // Debugging

  return (
    <div className=''>
      <Navbar authEnable={authEnable} setAuthEnable={setAuthEnable} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<Homepage />} />
        <Route path="/product/:id" element={<Productpage />} />
        <Route path="/search/:term" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:cat/:sub" element={<SubCategory/>} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/orders/:term" element={<Orders />} />

        <Route path="/checkout/:id" element={<Checkout/>} />

        <Route path="/seller" element={<Sell/>} />
      </Routes>

      {authEnable && <Auth setAuthEnable={setAuthEnable} />}
    </div>
  );
};

export default Home;
