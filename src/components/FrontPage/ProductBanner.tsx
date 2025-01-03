"use client";
import Image from "next/image";
import React from "react";
import { useGetCategoryQuery } from "../Redux/Api/categoryApi";
import Link from "next/link";
export const plantData = [
  {
    id: 1,
    name: "Indoor Plants",
  },
  {
    id: 2,
    name: "Outdoor Plants",
  },
  {
    id: 3,
    name: "Office Plants",
  },
  {
    id: 4,
    name: "Flowering Plants",
  },
  {
    id: 5,
    name: "Succulents & Cacti",
  },
  {
    id: 6,
    name: "Plant Care Essentials",
  },
];

const ProductBanner = () => {
  const { data, isLoading } = useGetCategoryQuery({});
  if (isLoading) {
    return <h1 className=" text-center pt-12 ">Loading</h1>;
  }
  const categoryData = data?.data?.data || [];
  return (
    <div className="w-full container mx-auto md:px-0 px-4 pb-12">
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 pt-4 pb-8">
        {categoryData?.map((data: any) => (
          <Link href={`/category/${data.id}`} key={data.id}>
            <div className=" bg-gray-100 py-3 px-4 hover:bg-[#028355] hover:text-white text-slate-800 transition duration-300 ease-in-out cursor-pointer">
              <h1 className=" text-center text-base font-medium">
                {data.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default ProductBanner;
