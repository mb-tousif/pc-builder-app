import RootLayout from "@/Layout/RootLayout";
import { TProducts } from "@/Types";
import Image from "next/image";
import React from "react";

export default function ProductDetails({ product }: { product: TProducts }) {
  return (
    <RootLayout>
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
            <p className="text-base">Rating: {product?.rating}</p>
            <ol>
              <h1 className="text-lg text-center">Key Features</h1>
              {product.keyFeatures.map((feature, index) => (
                <li key={index}>* {feature}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      </div>
    </RootLayout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://pc-builder-three.vercel.app/products");
  const data = await res.json();
  const paths = data.map((product: TProducts) => ({
    params: { productId: product?._id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/products/${productId}`
    );
    if (!res.ok) {
      console.error(`Error fetching product with ID: ${productId}`);
      return {
        notFound: true,
      };
    }
    const data = await res.json();
    return {
      props: {
        product: data,
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      notFound: true,
    };
  }
}
