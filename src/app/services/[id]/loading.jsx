import React from "react";

const loading = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* image skeleton */}
        <div className="w-full h-[400px] bg-gray-300 rounded-xl"></div>

        {/* text skeleton */}
        <div className="space-y-6">
          <div className="h-10 w-2/3 bg-gray-300 rounded"></div>

          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>

          <div className="h-8 w-40 bg-gray-300 rounded"></div>

          <div className="bg-gray-200 p-6 rounded-xl space-y-3">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>

          <div className="flex gap-4 pt-4">
            <div className="h-12 w-32 bg-gray-300 rounded"></div>
            <div className="h-12 w-32 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
