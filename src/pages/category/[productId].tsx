import { TProducts } from "@/Types";
import Image from "next/image";
import React from "react";

export default function ProductDetails({ product }: { product: TProducts }) {
  return (
    <div className="pb-6">
      <div className="mx-auto text-gray-50 w-10/12 ">
        <h1 className="text-2xl sm:text-4xl text-center p-3 sm:font-bold text-gray-50">
          Product Details
        </h1>
        <div className="rounded-lg shadow-xl grid grid-cols-1 sm:grid-cols-2 bg-neutral-700">
          <Image
            className="w-full rounded-lg object-cover"
            width={600}
            height={600}
            src={product?.images}
            alt=""
          />
          <div className="mx-auto my-auto p-6">
            <h5 className="mb-2 text-xl font-medium">{product?.name}</h5>
            <p className="text-lg">Brand: {product?.Brand}</p>
            <p className="text-lg">Price: {product?.Price}</p>
            <p className="text-lg text-green-700">{product.Status}</p>
            <p className="text-base">Category: {product?.category}</p>
            <p className="text-base">Description: {product?.description}</p>
            <button className="text-base bg-slate-500 px-1 rounded-lg">Rating: {product?.rating} out of 5</button>
            <button className="text-base block mt-2 bg-slate-500 px-1 rounded-lg">Average Rating: {product?.rating} out of 5</button>
            <ol>
              <h1 className="text-lg text-center">Key Features</h1>
              {product.keyFeatures.map((feature, index) => (
                <li key={index}>* {feature}</li>
              ))}
            </ol>
            <p className="text-base">Reviews: This {product?.category} is good.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context: { params: any; }) => {
  const { params } = context;
  const res = await fetch(`https://pc-builder-three.vercel.app/products/${params.productId}`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      product: data,
    },
  };
};
