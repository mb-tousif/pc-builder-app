import Image from "next/image";

export default function Card() {
  return (
    <div className="flex flex-col text-gray-50 rounded-lg shadow-xl bg-neutral-700 md:max-w-xl md:flex-row">
      <Image
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        width={384}
        height={384}
        src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
        alt=""
      />
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium">
          Card title
        </h5>
        <p className="mb-4 text-base">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="text-xs">
          Last updated 3 mins ago
        </p>
      </div>
    </div>
  );
}
