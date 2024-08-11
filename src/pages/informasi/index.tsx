import {
  getInfoEntries,
  renderOptions,
} from "@/utils/contentful.tsx";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import util from "util";
import React from "react";

const index = ({
  content,
}: {
  content: any;
}) => {
  return (
    <div className="bg-[#f8fafc] w-full text-black mt-0">
      <div className="flex min-h-screen flex-col p-24 gap-y-8 max-w-screen-md lg:px-0 mx-auto">
        <h1 className="text-center">Informasi Kelurahan Loa Ipuh</h1>
        {
          content.items.slice(0).reverse().map((e:any, i:number) => {
            return (
              <div key={i}>
                <h1>{e.fields.title}</h1>
      <div className="flex flex-col gap-y-8  lg:px-0 mx-auto">

                {

                  documentToReactComponents(e.fields.content, renderOptions)
                }
              </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default index;

export async function getStaticProps(context: any) {
  const content: any = await getInfoEntries();
  return {
    props: {
      content
    },
  };
}
