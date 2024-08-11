// import Image from "next/image";
// import { Inter } from "next/font/google";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Introduction from "@/components/Introduction";
// import Service from "@/components/Service";
// import Artikel from "@/components/Artikel";
// import GallerySection from "@/components/Gallery";
// import MapSection from "@/components/Map/Landing";
// import Footer from "@/components/Footer";
// import SEO from "@/components/SEO";
// import dotenv from "dotenv";
import util from "util";

// import Image from "next/image";
import Link from "next/link";
import { BlogQueryResult } from "@/types";
// import { createClient } from "contentful";
import React, { useEffect, useState } from "react";
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getBlogEntries } from "@/utils/contentful.tsx";
import Artikel from "@/components/Artikel";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({
  blogEntries,
}: {
  blogEntries: BlogQueryResult;
}) {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-y-8">
      <Artikel blogEntries={blogEntries} />
    </main>
  );
}

export async function getServerSideProps() {
  const blogEntries = await getBlogEntries();
  console.log("blogResult", blogEntries.items[0].fields.content);

  return {
    props: {
      blogEntries,
    },
  };
}
