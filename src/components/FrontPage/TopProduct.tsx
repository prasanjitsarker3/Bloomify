/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useGetTopProductQuery } from "../Redux/Api/productApi";
import Marquee from "react-fast-marquee";
import { Rating } from "@smastrom/react-rating";
import { customStyles } from "../Common/ViewProductInformation";
import Link from "next/link";

const TopProductBanner = () => {
  const { data, isLoading } = useGetTopProductQuery({});
  if (isLoading) {
    return (
      <div className="pt-12 w-full flex justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  const topProduct = data?.data;
  console.log("Top Product Data", topProduct);

  return (
    <div className="w-full container mx-auto md:px-0 px-4">
      <h1 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-text">
        Plant Lovers' Favorites 🍂
      </h1>

      <Marquee speed={25} pauseOnHover={true} gradient={true}>
        <div className="flex gap-6">
          {topProduct.map((product: any) => (
            <div
              key={product.id}
              className="relative flex-shrink-0 h-72  w-80 2xl:w-96 overflow-hidden rounded-lg group"
            >
              <Image
                src={
                  product.photo[0]?.img ||
                  "https://img.freepik.com/premium-photo/close-up-potted-plant-table_1048944-14981016.jpg?ga=GA1.1.1524916337.1735299616&semt=ais_hybrid"
                }
                alt="Top Product"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
              {/* Overlay */}
              <Link
                href={`/product/${product.id}`}
                className="absolute inset-0 cursor-pointer bg-black bg-opacity-60 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p className="mt-2">${product.price}</p>
                <p>{}</p>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={3}
                  readOnly
                  itemStyles={customStyles}
                />
              </Link>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TopProductBanner;
