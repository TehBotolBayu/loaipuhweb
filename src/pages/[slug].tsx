import { getBlogBySlug, getBlogEntries } from "@/utils/contentful";
import { GetStaticProps } from "next";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import React from "react";

const index = ({blog}:{blog: any}) => {
  return (
    <>
    <h1></h1>
    
    </>
)
};

export default index;

export async function getStaticPaths() {
  const blogEntries = await getBlogEntries();
  console.log("blogResult", blogEntries.items[0].fields.content);

  const paths = blogEntries.items.map((singlePost) => {
    const { slug } = singlePost.fields;
    return {params: { slug }}
  });

  console.log("paths", paths)

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context : any) {
 const slug = context.params.slug;
 const blog : any = await getBlogBySlug(slug);
 console.log("blog disini", blog)
 return {
    props: {    
        blog: blog.items[0]
    }
 }
}
