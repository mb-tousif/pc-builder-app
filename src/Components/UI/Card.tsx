import { TProducts } from "@/Types";
import Image from "next/image";
import Link from "next/link";

export default function Card({ product }: { product: TProducts }) {
  return (
    <Link href={`/category/${product?._id}`}>
      <div className="flex flex-col text-gray-50 rounded-lg shadow-xl bg-neutral-700 md:max-w-xl md:flex-row">
        <Image
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          width={384}
          height={384}
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
  );
}
