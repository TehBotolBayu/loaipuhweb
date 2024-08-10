import {
  getBlogBySlug,
  getBlogEntries,
  renderOptions,
} from "@/utils/contentful.tsx";
import { GetStaticProps } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import util from "util";
import React from "react";

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

const index = ({
  blog,
  title,
  cover,
}: {
  blog: any;
  title: string;
  cover: string;
}) => {
  return (
    <div className="flex min-h-screen flex-col p-24 gap-y-8 max-w-screen-md lg:px-0 mx-auto">
      <h1>{title}</h1>
      {cover && <img src={`https:${cover}`} />}
      {documentToReactComponents(blog.fields.content, renderOptions)}
    </div>
  );
};

export default index;

export async function getStaticPaths() {
  const blogEntries = await getBlogEntries();
  // console.log("blogResult", blogEntries.items[0].fields.content);

  const paths = blogEntries.items.map((singlePost) => {
    const { slug } = singlePost.fields;
    return { params: { slug } };
  });

  // console.log("paths", paths)

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;
  const blog: any = await getBlogBySlug(slug);
  // console.log("blog: ", blog.items[0].fields.cover.fields.file.url);

  //  console.log(util.inspect(blog.items[0].fields.content.content[1].data.target.fields.file.url))
  console.log(util.inspect(blog.items[0].fields.content.content[1]));
  return {
    props: {
      blog: blog.items[0],
      title: blog.items[0].fields.title,
      cover: blog.items[0].fields?.cover?.fields.file.url || "",
    },
  };
}
