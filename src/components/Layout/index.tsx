import LandingNavbar from "../Navbar/landing";
import Navbar from "../Navbar";

import React from "react";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      {pathName === "/" ? <LandingNavbar /> : <Navbar />}
      <main>{children}</main>
    </>
  );
}
