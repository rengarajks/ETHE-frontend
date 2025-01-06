import React from "react";
import { MdOutlineStar } from "react-icons/md";

export const RatingsBar = ({ ratings }) => {
  // Calculate the total number of ratings
  const totalRatings = ratings.reduce((sum, count) => sum + count, 0);

  return (
    <div className="w-full max-w-md mx-auto">
      {ratings.map((count, index) => {
        // Calculate the percentage for each star
        const percentage = ((count / totalRatings) * 100).toFixed(1);

        return (
          <div
            key={index}
            className="flex items-center mb-1" // Reduced margin between rows
          >
            {/* Star label */}
            <span className="w-12 text-sm font-medium flex items-center text-gray-700 space-x-0.5">
              <p>{index + 1}</p>
              <MdOutlineStar />
            </span>
            {/* Bar */}
            <div className="flex-1 h-2 bg-gray-200 rounded mx-1">
              <div
                className={`h-full rounded ${
                    index+1 === 4 ? "bg-[#f89c11]" : index+1 === 5 ? "bg-[#ee410d]" : "bg-[#388e3c]"
                  }`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            {/* Count */}
            <span className="w-8 text-right text-sm text-gray-500">{count}</span>
          </div>
        );
      })}
    </div>
  );
};
