import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://raymondabiola.vercel.app/sitemap.xml", // update to your final domain
  };
}
