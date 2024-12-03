"use client";
import { Rating, Star } from "@smastrom/react-rating";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import "@smastrom/react-rating/style.css";
export const customStyles = {
  itemShapes: Star,
  activeFillColor: "#FFCF11",
  inactiveFillColor: "#E5E5E5",
};

const ViewProductInformation = () => {
  const sizes = ["S", "M", "L", "XL"];
  const colors = [
    { name: "Off White", colorCode: "#f8f9fa" },
    { name: "Black", colorCode: "#000000" },
  ];

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <div className=" space-y-2  md:space-y-3 2xl:space-y-5">
        <h1 className=" px-8 py-2 rounded-md bg-[#028355] text-white inline-block">
          New Arrival
        </h1>
        <h1 className=" font-medium text-2xl text-slate-900">
          Fiddle Leaf Fig
        </h1>
        <div className=" flex items-center gap-2 text-lg">
          <div className=" flex items-center gap-1">
            <Rating
              style={{ maxWidth: 120 }}
              value={4}
              readOnly
              itemStyles={customStyles} // Pass custom styles
            />
            <h1>(4.0)</h1>
          </div>
          <h1 className=" primaryColor">121 reviews</h1>
        </div>
        <h1 className=" font-semibold vigaRegular text-2xl">BDT 2500</h1>
        <div className=" border border-b border-dashed w-full"></div>
        <div className=" grid grid-cols-12">
          <div className=" md:col-span-6 col-span-12 ">
            <h1 className="font-medium text-gray-900 mb-2 text-lg">
              Available Sizes
            </h1>
            <div className="flex space-x-4">
              {sizes.map((size) => (
                <div
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`h-10 w-10 flex items-center justify-center rounded-md cursor-pointer  ${
                    selectedSize === size
                      ? "border border-[#8f71e1] secondaryColor"
                      : "secondaryColor"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className=" md:col-span-6 col-span-12 ">
            <h1 className="font-medium text-gray-900 text-lg mb-2">
              Available Colors
            </h1>
            <div className="flex items-center space-x-4">
              {colors.map((color) => (
                <div
                  key={color.name}
                  onClick={() => handleColorSelect(color.name)}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <div
                    className={`h-8 w-8 rounded-full border-1 ${
                      selectedColor === color.name
                        ? "border-[#028355]"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.colorCode }}
                  ></div>
                  <span className=" text-base">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" border border-b border-dashed w-full"></div>
        <div className="">
          <h1 className="font-medium text-gray-900 text-lg mb-2">Quantity</h1>
          <div className=" w-44 flex justify-center items-center space-x-8 secondaryColor rounded-full px-4 py-2 ">
            <button
              onClick={() => setQuantity(quantity - 1)}
              className=" flex items-center justify-center"
            >
              <Minus className="w-4 h-4 text-gray-700" />
            </button>
            <span className="text-lg font-medium text-gray-900">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="flex items-center justify-center "
            >
              <Plus className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row items-center gap-4 md:gap-12 md:pt-0 pt-4">
          <button className="w-full bg-[#028355] text-white text-center text-lg py-2 rounded-full">
            Buy Now
          </button>
          <button className="w-full border border-[#028355] text-[#028355] text-center text-lg rounded-full py-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProductInformation;
