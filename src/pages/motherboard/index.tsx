import RootLayout from '@/Layout/RootLayout';
import { ECategory, TProducts } from '@/Types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Motherboard({ products }: { products: TProducts[] }) {
  return (
    <RootLayout>
      <h1 className="text-2xl sm:text-4xl text-center p-3 sm:font-bold text-gray-50">
        Motherboard Feature Products
      </h1>
      <div className="grid grid-cols-1 p-2 gap-2">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/product/${product?._id}`}
            className=" mx-auto my-auto"
          >
            <div className="flex flex-col text-gray-50 rounded-lg shadow-xl bg-neutral-700 md:max-w-xl md:flex-row">
              <Image
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                width={600}
                height={600}
                src={product.images}
                alt=""
              />
              <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-medium">{product.name}</h5>
                <p className="mb-4 text-base">Category: {product.category}</p>
                <p className="text-lg">Price: {product.Price}</p>
                <p className="text-base">Rating: {product.rating}</p>
              </div>
            </div>
          </Link>
        ))}
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
    const products = data.filter((product) => product.category === ECategory.MOTHERBOARD);
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