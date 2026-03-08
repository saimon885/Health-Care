import React from "react";

const ServiceSkeliton = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-300"></div>

      <div className="p-6 flex flex-col flex-1 space-y-4">

        {/* Title */}
        <div className="h-6 w-2/3 bg-gray-300 rounded"></div>

        {/* Description */}
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
        </div>

        {/* Bottom section */}
        <div className="flex items-center justify-between mt-auto">

          {/* Price */}
          <div className="h-5 w-20 bg-gray-300 rounded"></div>

          {/* Buttons */}
          <div className="flex gap-2">
            <div className="h-8 w-20 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ServiceSkeliton;