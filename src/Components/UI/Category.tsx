import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsBuildingAdd,
  BsFillCpuFill,
  BsFillMotherboardFill,
} from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { FiMonitor } from "react-icons/fi";
import { ImPower } from "react-icons/im";
import { LuHardDrive } from "react-icons/lu";

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

export default function Category() {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl text-center p-3 sm:font-bold text-gray-50">
        Featured Categories
      </h1>
      <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {categories?.map((category) => {
          return (
            <Link key={category.id} href={category.link}>
              <div className="p-2 text-center bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678] rounded-2xl  hover:text-gray-50 text-[#523d03]">
                <div className="mx-auto m-3">{category.logo}</div>
                <p className="text-2xl font-medium">{category.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link href="/others">
          <div className="p-2 w-[310px] sm:w-[400px] mb-4 text-center bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678] rounded-2xl text-[#523d03] hover:text-gray-50">
            <div className="mx-auto m-3">
              <BsBuildingAdd className="mx-auto h-8 w-12 mb-3" />
            </div>
            <p className="text-2xl font-medium">Others</p>
          </div>
        </Link>
      </div>
    </>
  );
}
