import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage';
import { MainHomeCategory } from './Components/MainCategory/MainHomeCategory';
import { Route, Routes } from 'react-router';
import Productpage from './Pages/Productpage';
import Search from './Pages/Search';
import Auth from './Pages/Auth';

const Home = () => {
  const [authEnable, setAuthEnable] = useState(true);

  console.log("authEnable state:", authEnable); // Debugging

  return (
    <div>
      <Navbar authEnable={authEnable} setAuthEnable={setAuthEnable} />
      <MainHomeCategory />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<Homepage />} />
        <Route path="/product/:id" element={<Productpage />} />
        <Route path="/search/:term" element={<Search />} />
      </Routes>

      {authEnable && <Auth setAuthEnable={setAuthEnable} />}
    </div>
  );
};

export default Home;
