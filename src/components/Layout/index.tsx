import LandingNavbar from "../Navbar/landing";
import Navbar from "../Navbar/index";

import React from "react";
import { usePathname } from "next/navigation";
import Footer from "../Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  return (
    <div className="leading-normal tracking-normal text-white gradient absolute w-screen z-[-1]">
      {pathName === "/" ? <LandingNavbar /> : <Navbar />}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
