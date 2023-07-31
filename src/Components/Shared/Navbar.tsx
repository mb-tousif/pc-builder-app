import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillCpuFill, BsFillMotherboardFill, BsBuildingAdd } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPower } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import { LuHardDrive } from "react-icons/lu";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [openCategory, setOpenCategory] = useState(false);

  const categories = [
    {
      id: 1,
      name: "CPU/Processor",
      link: "/cpu",
      logo: <BsFillCpuFill />,
    },
    {
      id: 2,
      name: "Motherboard",
      link: "/motherboard",
      logo: <BsFillMotherboardFill />,
    },
    {
      id: 3,
      name: "RAM",
      link: "/ram",
      logo: <CgSmartphoneRam />,
    },
    {
      id: 4,
      name: "Power Supply Unit",
      link: "/psu",
      logo: <ImPower />,
    },
    {
      id: 5,
      name: "Storage Device",
      link: "/storage",
      logo: <LuHardDrive />,
    },
    {
      id: 6,
      name: "Monitor",
      link: "/monitor",
      logo: <FiMonitor />,
    },
    {
      id: 7,
      name: "Other",
      link: "/others",
      logo: <BsBuildingAdd />,
    },
  ];

  return (
    <nav className="mx-auto relative bg-neutral-700">
      <div className="mx-auto flex max-w-7xl items-center justify-between pb-3 ">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="hidden sm:flex">
              <Image src={logo} alt="Logo" height={50} width={150} />
            </div>
          </Link>
        </div>
        <div className="flex mx-2 gap-x-6 lg:gap-x-12">
          <Link
            href="/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50"
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseOver={() => setOpenCategory(true)}
            onMouseOut={() => setOpenCategory(false)}
          >
            <button
              type="button"
              className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 flex justify-center items-center"
            >
              <Link href="/category" className="flex items-center">
              Categories
              <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              </Link>
            </button>
            <div
              className={`${
                openCategory ? " absolute" : "hidden"
              } -left-12 top-full z-10 max-w-md overflow-hidden rounded-3xl bg-[#6191b3] shadow-lg ring-1 ring-gray-900/5`}
            >
              <div className="p-4">
                {categories?.map((category) => {
                  const { id, name, link, logo } = category || {};
                  return (
                    <div
                      key={id}
                      className="group relative flex items-center gap-x-2 rounded-lg p-2 text-sm leading-2"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 text-xl">
                        {logo}
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={link}
                          className="block font-semibold text-gray-50"
                        >
                          {name}
                          <span className="absolute inset-0"></span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link href={"/pc-builder"}>
            <button className="p-3 m-3 bg-[#6191b3] rounded-md text-white font-bold">
              PC Builder
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
