import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

const ProductInfo = ({setProduct,setSelectedSection}) => {
  const [productInfo, setProductInfo] = useState({
    name: null,
    description: null,
    mrp: null,
    sellingPrice: null,
  });
  const [highlights, setHighlights] = useState([]);
  const [highlight, setHighlight] = useState({
    type: "",
    name: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleHighlight = () => {
    const typeTrimmed = highlight.type.trim();
    const nameTrimmed = highlight.name.trim();

    if (!typeTrimmed || !nameTrimmed) {
      setErrorMessage("Both type and name are required.");
      return;
    }

    if (highlights.length >= 4) {
      setErrorMessage("You cannot add more than 4 highlights.");
      return;
    }

    const typeExists = highlights.some(
      (item) => item.type.toLowerCase() === typeTrimmed.toLowerCase()
    );

    if (typeExists) {
      setErrorMessage("This highlight type already exists.");
      return;
    }

    setHighlights((prev) => [
      ...prev,
      { type: typeTrimmed, name: nameTrimmed },
    ]);

    setHighlight({ type: "", name: "" });
    setErrorMessage("");
  };

  const deleteHighlight = (type) => {
    setHighlights((prev) => prev.filter((item) => item.type !== type));
    setErrorMessage("");
  };

  const handleNext = () => {
    if (!productInfo.name.trim()) {
      setErrorMessage("Product Name is required.");
      return;
    }

    if (!productInfo.description.trim()) {
      setErrorMessage("Product Description is required.");
      return;
    }

    if (!productInfo.mrp.trim() || isNaN(productInfo.mrp)) {
      setErrorMessage("Valid MRP is required.");
      return;
    }

    if (!productInfo.sellingPrice.trim() || isNaN(productInfo.sellingPrice)) {
      setErrorMessage("Valid Selling Price is required.");
      return;
    }

    if (highlights.length === 0) {
      setErrorMessage("At least one highlight is required.");
      return;
    }

    setErrorMessage("");
    if(productInfo.name!=null&&productInfo.description!=null&&productInfo.mrp!=null&&productInfo.sellingPrice!=null){
        setProduct((prev)=>({
            ...prev,
            name:productInfo.name,
            mrp:productInfo.mrp,
            sp:productInfo.sellingPrice,
            highlights:highlights,
            desc:productInfo.description
        }))
        setSelectedSection(3);
    }
   
    

  };

  return (
    <div className="p-4">
      <div className="flex justify-center">
        <div className="space-y-6 md:w-[30rem] w-[20rem]">
          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-600 text-center mb-2">{errorMessage}</p>
          )}

          {/* Product Name */}
          <div>
            <input
              value={productInfo.name}
              onChange={(e) =>
                setProductInfo((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Product Name"
              className="md:w-[30rem] w-[20rem] px-2 py-1 rounded-md text-gray-600 border border-black/30 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <textarea
              value={productInfo.description}
              rows={4}
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              placeholder="Description"
              className="md:w-[30rem] w-[20rem] px-2 py-1 rounded-md text-gray-600 border border-black/30 outline-none"
            />
          </div>

          {/* Pricing */}
          <div className="md:w-[30rem] w-[20rem] flex items-center gap-4">
            <input
              value={productInfo.mrp}
              onChange={(e) =>
                setProductInfo((prev) => ({ ...prev, mrp: e.target.value }))
              }
              type="number"
              placeholder="&#8377; MRP"
              className="w-full px-2 py-1 rounded-md text-gray-600 border border-black/30 outline-none"
            />
            <input
              value={productInfo.sellingPrice}
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  sellingPrice: e.target.value,
                }))
              }
              type="number"
              placeholder="&#8377; Selling Price"
              className="w-full px-2 py-1 rounded-md text-gray-600 border border-black/30 outline-none"
            />
          </div>

          {/* Highlights */}
          <div>
            <span className="text-gray-600 text-sm">Highlights:</span>
            <div className="md:w-[30rem] w-[20rem] flex items-center gap-2 mt-2">
              <input
                value={highlight.type}
                onChange={(e) =>
                  setHighlight((prev) => ({
                    ...prev,
                    type: e.target.value,
                  }))
                }
                placeholder="Type"
                className="w-full px-2 py-1 rounded-md text-gray-600 border border-black/30 outline-none"
              />
              <input
                value={highlight.name}
                onChange={(e) =>
                  setHighlight((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                placeholder="Name"
                className="w-full px-2 py-1 rounded-md text-gray-600 border border-black/30 outline-none"
              />
              <button
                onClick={handleHighlight}
                className="border px-4 py-1 rounded-md bg-green-500 text-white hover:bg-green-600 transition"
              >
                Add
              </button>
            </div>

            {/* Display Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-[30rem] py-2 text-[0.8rem] font-medium text-gray-700">
              {highlights.map((data, index) => (
                <div
                  key={index}
                  className="col-span-1 bg-gray-200 px-3 py-1 rounded-md border shadow flex items-center justify-between"
                >
                  <div>
                    <span>{data.type}</span> <span>:</span>{" "}
                    <span>{data.name}</span>
                  </div>
                  <BsTrash
                    onClick={() => deleteHighlight(data.type)}
                    className="cursor-pointer text-red-600 hover:text-red-800"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-between">
          <button
              onClick={()=>setSelectedSection(1)}
              className="bg-gray-500 px-4 py-2 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 transition"
            >
              Back
            </button>

            <button
              onClick={handleNext}
              className="bg-blue-600 px-4 py-2 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
