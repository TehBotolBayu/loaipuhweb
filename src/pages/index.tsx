import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Service from "@/components/Service";
import Artikel from "@/components/Artikel";
import GallerySection from "@/components/Gallery";
import MapSection from "@/components/Map/Landing";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="leading-normal tracking-normal text-white gradient absolute w-screen z-[-1]">
    <Navbar />
    <Hero />
    {/* kata */}
    <Introduction />
    {/* layanan */}
    <Service />
    {/* Aartikel */}
    <Artikel />
    {/* Galeri */}
    <GallerySection />
    {/* Map */}
    <MapSection />
    {/* Footer */}
    <Footer />
  </div>
  )
}
