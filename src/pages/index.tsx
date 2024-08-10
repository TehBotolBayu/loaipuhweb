import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/landing";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Service from "@/components/Service";
import Artikel from "@/components/Artikel/Landing";
import GallerySection from "@/components/Gallery";
import MapSection from "@/components/Map/Landing";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getBlogEntries } from "@/utils/contentful.tsx";
import { BlogQueryResult } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  blogEntries,
}: {
  blogEntries: BlogQueryResult;
}) {
  return (
    <div className="leading-normal tracking-normal text-white gradient absolute w-screen z-[-1]">
      <SEO
        title="Website Desa Loa Ipuh Kutai Kartanegara Kalimantan Timur"
        description="Dapatkan informasi dan layanan publik apapun seputar Desa Loa Ipuh melalui website ini."
      />
      <Navbar />
      <Hero />
      {/* kata */}
      <Introduction />
      {/* layanan */}
      <Service />
      {/* Aartikel */}
      <Artikel blogEntries={blogEntries} />
      {/* Galeri */}
      <GallerySection />
      {/* Map */}
      <MapSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const blogEntries = await getBlogEntries();
  // console.log("blogResult", blogEntries.items[0].fields.content);

  return {
    props: {
      blogEntries,
    },
  };
}
