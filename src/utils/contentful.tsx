import { createClient } from "contentful";
// import dotenv from "dotenv";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

// dotenv.config();

const renderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node: any, children: any) => {
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <a href={`/blog/${node.data.target.fields.slug}`}>
            {" "}
            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
  },
};

// const client = createClient({
//   space: process.env.SPACE_ID as string,
//   accessToken: process.env.ACCESS_TOKEN as string,
// });

const client = createClient({
  space: "y7encbrmq034",
  accessToken: "7Ciut6htRcwVAne08bJCgrWigNifmyg8GNLE2bbhi14",
});

const getBlogEntries = async () => {
  const entries = await client.getEntries({ content_type: "artikel" });
  return entries;
};

const getBlogBySlug = async (slug: string) => {
  try {
    const result = await client.getEntries({
      content_type: "artikel", // Replace with your content type ID
      "fields.slug": slug, // Replace with the slug you're searching for
      limit: 1,
      include: 10,
    });
    if (result.items.length > 0) {
      console.log("Entry found:", result.items[0]);
    } else {
      console.log("No entry found with that slug.");
    }
    console.log("aman", result);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { getBlogEntries, getBlogBySlug, renderOptions };
