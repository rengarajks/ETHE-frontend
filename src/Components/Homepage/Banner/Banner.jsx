import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const imageData = [
   'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1e5f2e97e448cee0.jpg?q=20',
   'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/7107ebd503f6bccf.jpg?q=20',
   'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/d9290fb51138d286.png?q=20',
   'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/7107ebd503f6bccf.jpg?q=20'
];

const bannerImagesForMobile = [
  'img0.jpg',
  'img0.jpg',
  'img0.jpg'
];

const Banner = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  // Controls to navigate manually
  const handlePrevious = () => {
    setDirection(-1); // Going backward
    setActive((prevIndex) => (prevIndex === 0 ? imageData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1); // Going forward
    setActive((prevIndex) => (prevIndex === imageData.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative h-[50vh] md:pt-0 w-full overflow-hidden md:block md:visible hidden">
      {/* Controls */}
      <div className="absolute h-full w-full flex items-center justify-between z-10">
        <div
          onClick={handlePrevious}
          className="px-1 pr-2 rounded-r shadow-md py-4 bg-white hover:bg-gray-100 cursor-pointer"
        >
          <FaAngleLeft size="2rem" />
        </div>
        <div
          onClick={handleNext}
          className="px-1 pl-2 rounded-l shadow-md py-4 bg-white hover:bg-gray-100 cursor-pointer"
        >
          <FaAngleRight size="2rem" />
        </div>
      </div>

      {/* Current Image */}
      <motion.div
        key={`current-${active}`}
        initial={{ x: 0 }} // Start at the center
        animate={{ x: direction === 1 ? '-100%' : '100%' }} // Slide out left or right
        exit={{ x: direction === 1 ? '100%' : '-100%' }} // Slide out to the opposite side
        transition={{ type: 'spring', stiffness: 700, damping: 100 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <img
          src={imageData[active]}
          alt={`Image ${active}`}
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Next Image (Initially hidden and moves in) */}
      <motion.div
        key={`next-${active}`}
        initial={{ x: direction === 1 ? '100%' : '-100%' }} // Start off screen (right or left)
        animate={{ x: 0 }} // Slide to the center
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <img
          src={imageData[(active + direction + imageData.length) % imageData.length]}
          alt={`Image ${(active + direction + imageData.length) % imageData.length}`}
          className="w-full h-full object-cover"
        />
      </motion.div>
      </div>

      {/* MOBILE */}
      <div className="relative h-[20vh] top-14 md:pt-0 w-full overflow-hidden md:hidden">
      {/* Controls */}
      <div className="absolute h-full w-full flex items-center justify-between z-10">
        <div
          onClick={handlePrevious}
          className="pr-2 rounded-l rounded-full shadow-md py-4 bg-white hover:bg-gray-100 cursor-pointer"
        >
          <FaAngleLeft size="1rem" />
        </div>
        <div
          onClick={handleNext}
          className="pl-2 rounded-r rounded-full shadow-md py-4 bg-white hover:bg-gray-100 cursor-pointer"
        >
          <FaAngleRight size="1rem" />
        </div>
      </div>

      {/* Current Image */}
      <motion.div
        key={`current-${active}`}
        initial={{ x: 0 }} // Start at the center
        animate={{ x: direction === 1 ? '-100%' : '100%' }} // Slide out left or right
        exit={{ x: direction === 1 ? '100%' : '-100%' }} // Slide out to the opposite side
        transition={{ type: 'spring', stiffness: 700, damping: 100 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <img
          src={imageData[active]}
          alt={`Image ${active}`}
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Next Image (Initially hidden and moves in) */}
      <motion.div
        key={`next-${active}`}
        initial={{ x: direction === 1 ? '100%' : '-100%' }} // Start off screen (right or left)
        animate={{ x: 0 }} // Slide to the center
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <img
          src={imageData[(active + direction + imageData.length) % imageData.length]}
          alt={`Image ${(active + direction + imageData.length) % imageData.length}`}
          className="w-full h-full object-cover"
        />
      </motion.div>
      </div>
    </div>
  );
};

export default Banner;
