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
import dotenv from "dotenv";
import util from 'util';
dotenv.config();
import { getBlogEntries } from "@/utils/contentful";
// import Image from "next/image";
import Link from "next/link";
import { BlogQueryResult } from "@/types";
// import { createClient } from "contentful";
import React, {useEffect, useState} from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// const inter = Inter({ subsets: ["latin"] });

export default function Home({blogEntries}) {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-y-8">
      {blogEntries.items.map((singlePost) => {
        const { slug, title, date } = singlePost.fields;
        return (
          <div key={slug}>
            <Link className="group" href={`/${slug}`}>
              <h2 className="font-extrabold text-xl group-hover:text-blue-500 transition-colors">
                {title}
              </h2>

              <span>
                Posted on{" "}
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </Link>
          </div>
        );
      })}
      {/* { documentToReactComponents(blogEntries.items[1].fields.content) } */}
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