"use client";
import ProductCart from "@/components/Common/ProductCart";
import ShoppingBag from "@/components/Common/ShoppingBag";
import DiscountBanner from "@/components/FrontPage/DiscountBanner";
import { plantData } from "@/components/FrontPage/ProductBanner";
import { useGetCategoryQuery } from "@/components/Redux/Api/categoryApi";
import { useGetProductQuery } from "@/components/Redux/Api/productApi";
import { productData } from "@/components/UtlitiFunction/ProductData";
import { Pagination } from "@nextui-org/react";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(8);

  const query: Record<string, any> = {
    searchTerm,
    page,
    limit,
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      setCategoryId("");
    }
  }, [searchTerm]);

  if (!searchTerm.length && categoryId) {
    if (categoryId) query["categoryId"] = categoryId;
  }

  const { data, isLoading, isError } = useGetProductQuery(query);
  const { data: cateDate, isLoading: categoryLoading } = useGetCategoryQuery(
    {}
  );

  if (isLoading || categoryLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError || !data?.data?.data) {
    return <h1>Something went wrong. Please try again later.</h1>;
  }

  const categoryData = cateDate?.data?.data || [];
  const productData = data?.data?.data || [];
  const metaData = data?.data?.meta;
  const total = metaData?.total || 0;
  const countPage = Math.ceil(total / limit);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  console.log("Product Data", productData);

  const handleCategoryClick = (id: string) => {
    if (id === categoryId) {
      // If the same category is clicked, clear the filter
      setCategoryId("");
    } else {
      setCategoryId(id);
      setPage(1); // Reset to the first page when category changes
    }
  };

  return (
    <div className=" 2xl:py-20 md:py-10">
      <div className="w-full container mx-auto space-y-6">
        <ShoppingBag />
        <div className=" grid grid-cols-12 gap-6 pt-8">
          <div className=" col-span-9">
            <div className=" grid grid-cols-2 md:grid-cols-6 2xl:gap-2 gap-1">
              {/* //Category Id By Filtering */}
              {categoryData?.map((data: { id: string; name: string }) => (
                <div
                  key={data.id}
                  onClick={() => handleCategoryClick(data.id)}
                  className={`bg-gray-100 2xl:py-3 2xl:px-2 px-1 py-3 hover:bg-[#028355] hover:text-white text-slate-800 transition duration-300 ease-in-out cursor-pointer rounded-full ${
                    categoryId == data.id ? " bg-[#1b8f66] text-white" : ""
                  }`}
                >
                  <h1 className=" text-center 2xl:text-sm text-xs font-medium">
                    {data.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3 flex items-center gap-4 ">
            <div className=" w-full relative">
              <input
                type="text"
                placeholder="Searching..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-200 py-2 px-4 pl-12 rounded-full focus:outline-none w-full"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                <Search className="text-gray-400" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10">
          {productData?.map((item: any) => (
            <ProductCart item={item} key={item.id} discount={true} />
          ))}
        </div>

        <div className=" w-full flex justify-center my-8">
          <Pagination
            size="lg"
            showControls
            total={countPage}
            page={page}
            onChange={handlePageChange}
            classNames={{
              item: "text-gray-800 bg-gray-100 hover:bg-gray-200",
              cursor: "bg-[#028355] text-white",
              prev: "hover:bg-[#028355] text-gray-800",
              next: "hover:bg-gray-200 text-gray-800",
            }}
          />
        </div>
        <DiscountBanner />
      </div>
    </div>
  );
};

export default ProductPage;
