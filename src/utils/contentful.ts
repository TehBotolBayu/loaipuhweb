import { createClient } from "contentful";
import dotenv from "dotenv";
dotenv.config();

const client = createClient({
  space: process.env.SPACE_ID! || "ntnopgihfcee",
  accessToken:
    process.env.ACCESS_TOKEN! || "DCv_ad_5KuMdJERFLbaI6s8MpavhbZ2Fx-SsWtzbAlk",
});

const getBlogEntries = async () => {
  const entries = await client.getEntries({ content_type: "loaipuhblog" });
  return entries;
};

const getBlogBySlug = async (slug: string) => {
  try {
    const result = await client.getEntries({
      content_type: "loaipuhblog", // Replace with your content type ID
      "fields.slug": slug, // Replace with the slug you're searching for
    });
    if (result.items.length > 0) {
      console.log("Entry found:", result.items[0]);
    } else {
      console.log("No entry found with that slug.");
    }
    console.log("aman", result)
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { getBlogEntries, getBlogBySlug };
