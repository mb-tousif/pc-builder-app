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

const otherImage = "https://img.freepik.com/free-photo/flat-lay-keyboard-headphones-with-copy-space_23-2148397826.jpg"

const categories = [
  {
    id: 1,
    name: "CPU/Processor",
    image:
        "https://img.freepik.com/premium-vector/computer-processor-isolated-white_169241-946.jpg",
    link: "/cpu",
    logo: <BsFillCpuFill className="mx-auto h-8 w-12 mb-3" />,
  },
  {
    id: 2,
    name: "Motherboard",
    image:
        "https://img.freepik.com/premium-photo/electronic-circuit-computer-ai-generated_154515-11964.jpg",
    link: "/motherboard",
    logo: <BsFillMotherboardFill className="mx-auto h-8 w-12 mb-3" />,
  },
  {
    id: 3,
    name: "RAM",
    image:
        "https://img.freepik.com/premium-photo/electronic-collection-computer-random-access-memory-ram-modules-isolated-white-background_486684-147.jpg",
    link: "/ram",
    logo: <CgSmartphoneRam className="mx-auto h-8 w-12 mb-3" />,
  },
  {
    id: 4,
    name: "Power Supply Unit",
    image:
        "https://img.freepik.com/free-photo/close-up-computer-motherboard_1161-106.jpg",
    link: "/psu",
    logo: <ImPower className="mx-auto h-8 w-12 mb-3" />,
  },
  {
    id: 5,
    name: "Storage Device",
    image:
        "https://img.freepik.com/premium-vector/various-kinds-digital-storage-devices_173125-73.jpg",
    link: "/storage",
    logo: <LuHardDrive className="mx-auto h-8 w-12 mb-3" />,
  },
  {
    id: 6,
    name: "Monitor",
    image:
        "https://img.freepik.com/free-psd/realistic-monitor-presentation_1310-18.jpg",
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
              <div className="rounded-lg h-28 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center min-h-full w-full"
                  src={category.image}
                  width={600}
                  height={600}
                />
              </div>
                <div className="mx-auto m-3">{category.logo}</div>
                <p className="text-2xl font-medium">{category.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link href="/others ">
          <div className="p-2 w-[310px] sm:w-[400px] mb-4 text-center bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678] rounded-2xl text-[#523d03] hover:text-gray-50">
          <div className="rounded-lg h-28 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center min-h-full w-full"
                  src={otherImage}
                  width={600}
                  height={600}
                />
              </div>
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
