import React, { useState } from "react";

const placeholderData = Array(5).fill(""); // Placeholder for 5 empty image slots

const Images = () => {
  const [images, setImages] = useState(placeholderData); // Image state
  const [imageIndex, setImageIndex] = useState(0); // Active image index

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result; // Update the selected image slot
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = ""; // Clear the selected image slot
    setImages(updatedImages);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="col-span-5 md:w-[30rem] w-[20rem] h-[70vh] flex md:sticky left-0 pt-12 md:pt-0 md:top-14 pb-10">
        {/* Left Images Section */}
        <div className="w-[10vh]">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setImageIndex(index)}
              className={`relative w-14 h-14 ${
                imageIndex === index
                  ? "border-[#312ba6] border-[1.5px]"
                  : "border"
              }`}
            >
              {/* Show placeholder or uploaded image */}
              {image ? (
                <div className="relative w-full h-full">
                  <img
                    className="w-full h-full object-contain cursor-pointer"
                    src={image}
                    alt={`Uploaded ${index}`}
                  />
                  {/* Remove button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the image click
                      handleRemoveImage(index);
                    }}
                    className="absolute top-0 right-0 text-red-500 text-lg font-bold p-1 rounded-full"
                  >
                    &times;
                  </button>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 cursor-pointer">
                  <span className="text-gray-500">+</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Image Section */}
        <div className="w-full h-full">
          <div className="border w-full h-full flex items-center justify-center relative">
            {/* Show uploaded image or input field */}
            {images[imageIndex] ? (
              <img
                className="w-[80vh] h-full object-contain"
                src={images[imageIndex]}
                alt="Selected"
              />
            ) : (
              <div className="flex flex-col  items-center justify-center">
                <label
                  htmlFor="imageInput"
                  className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Upload Image
                </label>
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, imageIndex)}
                  className="hidden"
                />
              </div>
            )}
          </div>
        </div>

        
      </div>
      <div className="flex justify-between w-[20rem] md:w-[30rem]">
          <button
              // onClick={()=>setSelectedSection(1)}
              className="bg-gray-500 px-4 py-2 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 transition"
            >
              Back
            </button>

            <button
              // onClick={handleNext}
              className="bg-blue-600 px-4 py-2 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
    </div>
  );
};

export default Images;
