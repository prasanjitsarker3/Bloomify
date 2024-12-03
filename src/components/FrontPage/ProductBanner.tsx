import Image from "next/image";
import React from "react";

const ProductBanner = () => {
  return (
    <div className="w-full container mx-auto py-12">
      <div className="grid grid-cols-12 gap-8">
        {/* First Banner */}
        <div className="col-span-12 md:col-span-6 bg-gray-100 rounded-lg p-6 flex items-center justify-between">
          {/* Content Section */}
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              New Arrivals
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold primaryColor mb-4">
              House Plants
            </h2>
            <button className="primaryColorBg text-white py-2 px-6 rounded-md hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-end">
            <Image
              src="/PDB2.png"
              alt="House Plants"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Second Banner */}
        <div className="col-span-12 md:col-span-6 bg-gray-100 rounded-lg p-6 flex items-center justify-between">
          {/* Content Section */}
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Fresh Stock
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold primaryColor mb-4">
              Greenery Sale
            </h2>
            <button className="primaryColorBg text-white py-2 px-6 rounded-md hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-end">
            <Image
              src="/PDB1.png"
              alt="Greenery Sale"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
