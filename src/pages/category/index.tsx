import Feature from "@/Components/UI/Feature";
import { TProducts } from "@/Types/index";
import React from "react";

export default function Category({ products }: { products: TProducts[] }) {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-2xl sm:text-4xl text-center p-3 sm:font-bold text-gray-50">
        Products
      </h1>
      <div className="container px-5 py-4 mx-auto">
        <div className="p-2 grid grid-cols-1 pb-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {products.map((product) => (
            <Feature key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://pc-builder-three.vercel.app/products");
    if (!res.ok) {
      throw new Error("Fetch failed");
    }
    const data: TProducts[] = await res.json();
    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}
