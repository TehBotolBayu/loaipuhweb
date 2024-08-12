
import { BlogQueryResult } from "@/types";
import React from "react";
import { getBlogEntries } from "@/utils/contentful.tsx";
import Artikel from "@/components/Artikel";

export default function Home({
  blogEntries,
}: {
  blogEntries: BlogQueryResult;
}) {
  return (
    <article className="flex min-h-screen bg-white flex-col p-24 gap-y-8">
      <Artikel blogEntries={blogEntries} />
    </article>
  );
}

export async function getServerSideProps() {
  const blogEntries = await getBlogEntries();

  return {
    props: {
      blogEntries,
    },
  };
}
