import RootLayout from "@/Layout/RootLayout";
import { addProduct } from "@/Redux/app/features/builderSlice";
import { useAppDispatch } from "@/Redux/hooks";
import { ECategory, TProducts } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CPUPages({ products }: { products: TProducts[] }) {
  // const dispatch = useAppDispatch();
  // const handleAddToBuild = (category: string,product: TProducts) => {
  //   dispatch(addProduct({category,product}));
  // }
  return (
    <RootLayout>
      <div className="">
        <h1 className="text-2xl sm:text-4xl text-center p-3 sm:font-bold text-gray-50">
          CPU/Processor Feature Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
          {products.map((product) => (
            <div className="" key={product._id}>
              <Link href={`/product/${product?._id}`}>
                <div className="flex text-gray-50 rounded-lg shadow-xl bg-neutral-700 flex-col md:max-w-xl md:flex-row">
                  <Image
                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    width={600}
                    height={600}
                    src={product.images}
                    alt=""
                  />
                  <div className="flex flex-col justify-start p-6">
                    <h5 className="mb-2 text-xl font-medium">{product.name}</h5>
                    <p className="mb-4 text-base">
                      Category: {product.category}
                    </p>
                    <p className="text-lg">Price: {product.Price}</p>
                    <p className="text-lg text-green-700">{product.Status}</p>
                    <p className="text-base">Rating: {product.rating}</p>
                  </div>
                </div>
              </Link>
              <div className="flex justify-center p-2">
                <button className="bg-[#1c475ac8] hover:bg-[#49b3e1dd] text-gray-50 font-bold py-2 px-4 rounded-full">
                  Add to Build
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RootLayout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/products`);
    if (!res.ok) {
      throw new Error("Fetch failed");
    }
    const data: TProducts[] = await res.json();
    const products = data.filter(
      (product) => product.category === ECategory.CPU_Processor
    );
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}
