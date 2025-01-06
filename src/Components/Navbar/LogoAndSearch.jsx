import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router";

const LogoAndSearch = ({setAuthEnable,authEnable}) => {
  const [isSearch, setIsSearch] = useState(false);
  const modalRef = useRef(null); // Ref to track the modal

  // Handle clicks outside of the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsSearch(false); // Close the modal
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center gap-4">
      <Link to={'/'}>
      <div className="font-semibold text-lg">ETHE</div>
      </Link>

      <div>
        <div className="flex items-center">
          <input
            onFocus={() => setIsSearch(true)}
            placeholder="Search for products, brands and more"
            className="w-[75vh] py-1 px-2 text-black text-sm rounded-sm outline-none border-none"
          />
          <Link to='/search/iphone'><FaSearch color="#312ba6" className="-translate-x-6 h-6 bg-white" /></Link>

          {
            !authEnable&&
            <button onClick={()=>setAuthEnable(true)} className="bg-white hover:bg-gray-100 rounded-sm px-4 py-1 text-[#312ba6] text-sm font-medium">Login</button>
          }
        </div>

        {/* MODAL */}
        {isSearch && (
          <div
            ref={modalRef} // Attach the modal ref
            className="w-[75vh] bg-white border-t shadow-md rounded-sm text-black font-medium absolute"
          >
            <div className="flex items-center gap-1 hover:bg-gray-200 cursor-pointer">
              <div className="w-12 h-12">
                <img
                  src="https://inventstore.in/wp-content/uploads/2023/04/Purple-scaled.webp"
                  alt="Iphone 17 plus"
                />
              </div>
              <div className="text-[0.8rem] font-semibold">
                <h1>Iphone 17 plus</h1>
                <p className="text-[#312ba6]">in Mobiles</p>
              </div>
            </div>

            <div className="flex items-center gap-1 hover:bg-gray-200 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center">
                <IoIosSearch className="text-gray-600" size="1.4rem" />
              </div>
              <div className="text-[0.8rem] font-semibold">
                <h1>Iphone 17 plus</h1>
              </div>
            </div>

            <div className="flex items-center gap-1 hover:bg-gray-200 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center">
                <IoIosSearch className="text-gray-600" size="1.4rem" />
              </div>
              <div className="text-[0.8rem] font-semibold">
                <h1>Iphone 17 plus case</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoAndSearch;
