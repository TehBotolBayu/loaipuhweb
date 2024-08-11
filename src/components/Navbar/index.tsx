import { useState, useEffect } from "react";
import logo from "/public/Lambang_Kab._Kutai_Kertanegara.png";
import logo_i from "/public/Lambang_Kab._Kutai_Kertanegara.png";
import Link from "next/link";
import { navigasiData } from "@/constant/artikel";

const Navbar = () => {
  const [openNavBar, setopenNavBar] = useState(false);

  return (
    <nav id="header" className={`fixed w-full z-30 top-0 text-white bg-white`}>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link
            className={`toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl
              flex items-center`}
            href="/"
          >
            <img src={logo_i.src} alt="" className="w-14" />
            <p className="ml-4">LOAIPUH DARAT</p>
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onClick={() => setopenNavBar((p) => !p)}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={` w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20
              ${openNavBar ? "" : "hidden"}
              `}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            {
              navigasiData.map((e:any, i:number) =>
                <div className="mr-3" key={i}>
                  <Link
                    className="inline-block py-2 px-4 text-black no-underline hover:text-gray-800 hover:text-underline"
                    href={e.url}
                  >
                    {e.nama}
                  </Link>
                </div>
              )
            }
          </ul>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Navbar;
