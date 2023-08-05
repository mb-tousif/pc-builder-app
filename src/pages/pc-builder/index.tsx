import { cleanBuilder, removeProduct } from "@/Redux/app/features/builderSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { BsBuildingAdd, BsFillCpuFill, BsFillMotherboardFill } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { FiMonitor } from "react-icons/fi";
import { ImPower } from "react-icons/im";
import { LuHardDrive } from "react-icons/lu";

export default function PcBuilder() {
  const buildProducts = useAppSelector(
    (state) => state.pcBuilder.chooseProduct
  );
  const dispatch = useAppDispatch();
  const handleRemove = (category:string) => {
    // dispatch(cleanBuilder());
    dispatch(removeProduct(category));
    toast.info("Product removed from build");
  };
  const isBuildComplete = Object.keys(buildProducts).length >=5;
  const categories = [
    {
      id: 1,
      name: "CPU",
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
    {
      id: 7,
      name: "Other",
      link: "/others",
      logo: <BsBuildingAdd className="mx-auto h-8 w-12 mb-3" />,
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
              <div className="border-r-2 pr-3">
                <div className="mx-auto my-auto max-h-20" />
                {category.logo}
              </div>
              <div className="flex-1">
                <div className="ml-3 space-y-1 border-r-2 text-center">
                  <div className="text-base font-normal">
                    <p>{category.name}</p>
                    {buildProducts[category.name] && (
                    <Image className="mx-auto h-20" src={`${buildProducts[category.name]?.images}`} alt="Logo" width={120} height={30}/>
                    )}
                  </div>
                </div>
              </div>
              {buildProducts[category.name] ? (
                <div className="flex-1">
                  <div className="ml-3 space-y-1 pr-3 text-center">
                    <button
                      onClick={()=> handleRemove(category.name)} 
                      className="text-sm font-normal">
                        Remove
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex-1">
                  <div className="ml-3 space-y-1 pr-3 text-center">
                    <Link href={category.link} className="text-sm font-normal">
                      Choose
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col pb-4 justify-center items-center">
        <button disabled={!isBuildComplete} onClick={()=> dispatch(cleanBuilder())} className={`text-white font-bold py-2 px-4 rounded-full ${isBuildComplete ? "bg-green-500 hover:bg-green-700": "bg-red-500 hover:bg-red-700"}`}>
          Complete Build
        </button>
      </div>
    </>
  );
}
