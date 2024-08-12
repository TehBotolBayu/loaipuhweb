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
import SEO from "@/components/SEO";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="leading-normal tracking-normal text-white gradient absolute w-screen z-[-1]">
      <SEO
        title="Website Desa Loa Ipuh Darat Kutai Kartanegara Kalimantan Timur"
        description="Dapatkan informasi dan layanan publik apapun seputar Desa Loa Ipuh Darat melalui website ini."
      />
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
  );
}
