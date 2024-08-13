import {
  getBlogBySlug,
  getBlogEntries,
  renderOptions,
} from "@/utils/contentful.tsx";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import util from "util";
import React from "react";

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
    <div className="bg-[#f8fafc] w-full text-black mt-20">
    <div className="flex min-h-screen flex-col lg:p-24 p-4 gap-y-8 max-w-screen-md lg:px-0 mx-auto">
      <h1>{title}</h1>
      {cover && <img src={`https:${cover}`} />}
      {documentToReactComponents(blog.fields.content, renderOptions)}
    </div>
    </div>
  );
};

export default index;

// export async function getStaticPaths() {
//   const blogEntries = await getBlogEntries();

//   const paths = blogEntries.items.map((singlePost) => {
//     const { slug } = singlePost.fields;
//     return { params: { slug } };
//   });


//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps(context: any) {
  const slug = context.params.slug;
  const blog: any = await getBlogBySlug(slug);

  return {
    props: {
      blog: blog.items[0],
      title: blog.items[0].fields.title,
      cover: blog.items[0].fields?.cover?.fields.file.url || "",
    }
  };
}
