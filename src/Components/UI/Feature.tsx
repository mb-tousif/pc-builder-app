import Image from "next/image";
import Link from "next/link";
import React from "react";

const featuredCategories = [
  {
    id: "101",
    category: "CPU - Processor",
    image:
      "https://img.freepik.com/premium-vector/computer-processor-isolated-white_169241-946.jpg",
  },
  {
    id: "102",
    category: "Motherboard",
    image:
      "https://img.freepik.com/premium-photo/electronic-circuit-computer-ai-generated_154515-11964.jpg",
  },
  {
    id: "103",
    category: "RAM",
    image:
      "https://img.freepik.com/premium-photo/electronic-collection-computer-random-access-memory-ram-modules-isolated-white-background_486684-147.jpg",
  },
  {
    id: "104",
    category: "Power Supply Unit",
    image:
      "https://img.freepik.com/free-photo/close-up-computer-motherboard_1161-106.jpg",
  },
  {
    id: "105",
    category: "Storage Device",
    image:
      "https://img.freepik.com/premium-vector/various-kinds-digital-storage-devices_173125-73.jpg",
  },
  {
    id: "106",
    category: "Monitor",
    image:
      "https://img.freepik.com/free-psd/realistic-monitor-presentation_1310-18.jpg",
  },
];

export default function Feature() {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-2xl sm:text-4xl text-center p-3 sm:font-bold text-gray-50">
        Featured Products
      </h1>
      <div className="container px-5 py-4 mx-auto">
        <div className="p-2 grid grid-cols-1 pb-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {featuredCategories?.map((item) => (
            <div
              key={item?.id}
              className="bg-gradient-to-r from-[#3A8678] to-[#ADCDED] hover:from-[#523d03] duration-300 rounded-lg cursor-pointer"
            >
              <div className="rounded-lg h-28 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center min-h-full w-full"
                  src={item?.image}
                  width={600}
                  height={600}
                />
              </div>
              <h2 className="text-xl mb-3 font-medium title-font text-center text-gray-50 mt-5">
                {item?.category}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
