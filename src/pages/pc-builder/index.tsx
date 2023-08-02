import Link from "next/link";
import React from "react";
import { BsFillCpuFill, BsFillMotherboardFill } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { FiMonitor } from "react-icons/fi";
import { ImPower } from "react-icons/im";
import { LuHardDrive } from "react-icons/lu";

export default function PcBuilder() {
  const categories = [
    {
      id: 1,
      name: "CPU/Processor",
      link: "/cpu",
      logo: <BsFillCpuFill className="mx-auto h-8 w-12 mb-3" />,
    },
    {
      id: 2,
      name: "Motherboard",
      link: "/motherboard",
      logo: <BsFillMotherboardFill className="mx-auto h-8 w-12 mb-3" />,
    },
    {
      id: 3,
      name: "RAM",
      link: "/ram",
      logo: <CgSmartphoneRam className="mx-auto h-8 w-12 mb-3" />,
    },
    {
      id: 4,
      name: "Power Supply Unit",
      link: "/psu",
      logo: <ImPower className="mx-auto h-8 w-12 mb-3" />,
    },
    {
      id: 5,
      name: "Storage Device",
      link: "/storage",
      logo: <LuHardDrive className="mx-auto h-8 w-12 mb-3" />,
    },
    {
      id: 6,
      name: "Monitor",
      link: "/monitor",
      logo: <FiMonitor className="mx-auto h-8 w-12 mb-3" />,
    },
  ];
  return (
    <>
      <h1 className="text-2xl sm:text-4xl text-center p-3 sm:font-bold text-gray-50">
        PC Builder
      </h1>
      {categories.map((category) => (
        <div key={category.id} className="mx-auto sm:p-4 md:p-8 ">
          <div className="bg-[#1c475ac8] md:w-3/5 mx-auto border-gray-500 border rounded-sm text-gray-50 font-bold mb-0.5 h-30">
            <div className="flex p-3 border-l-8 border-yellow-600">
              <div className="space-y-1 border-r-2 pr-3">
                <div className="mx-auto my-auto max-h-20" />
                {category.logo}
              </div>
              <div className="flex-1">
                <div className="ml-3 space-y-1 border-r-2 pr-3 text-center">
                  <div className="text-base font-normal">{category.name}</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="ml-3 space-y-1 pr-3 text-center">
                <Link href={category.link} className="text-sm font-normal">
                Choose
              </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}