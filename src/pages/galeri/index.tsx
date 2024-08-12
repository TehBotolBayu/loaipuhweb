import {
  getGalleryBySlug,
  renderOptions,
} from "@/utils/contentful.tsx";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import util from "util";
import React from "react";

const index = ({
  blog,
  title,
}: {
  blog: any;
  title: string;
}) => {
  return (
    <div className="bg-[#f8fafc] w-full text-black mt-20">
    <div className="flex min-h-screen flex-col p-24 gap-y-8 max-w-screen-md lg:px-0 mx-auto">
        <h1 className="text-center">Galeri Kelurahan Loa Ipuh</h1>
      {documentToReactComponents(blog.fields.content, renderOptions)}
    </div>
    </div>
  );
};

export default index;

export async function getServerProps(context: any) {
  const slug = 'main';
  const blog: any = await getGalleryBySlug(slug);
  return {
    props: {
      blog: blog.items[0],
      title: blog.items[0].fields.title,
    },
  };
}
