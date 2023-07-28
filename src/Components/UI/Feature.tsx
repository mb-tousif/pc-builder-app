import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Feature() {
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
          image: "https://img.freepik.com/premium-photo/electronic-collection-computer-random-access-memory-ram-modules-isolated-white-background_486684-147.jpg",
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
      return (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {featuredCategories?.map((item) => (
                <Link
                  href={`/categories/${item?.category}`}
                  key={item?.id}
                  className="p-4 w-1/2 md:w-1/5 lg:w-1/6 sm:mb-0 mb-6 hover:bg-gray-100 duration-300 rounded-lg cursor-pointer"
                >
                  <div>
                    <div className="rounded-lg h-28 overflow-hidden">
                      <Image
                        alt="content"
                        className="object-cover object-center h-full w-full"
                        src={item?.image}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h2 className="text-xl font-medium title-font text-center text-gray-900 mt-5">
                      {item?.category}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      );
    };
