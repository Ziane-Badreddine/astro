import { blogCollection, docs } from "@/.source";
import { type InferPageType, loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx/runtime/next";
import { icons } from "lucide-react";
import { createElement } from "react";
import { reactIcons } from "./react-icons";

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  icon(icon) {
    if (!icon) {
      return;
    }

    // Vérifier d'abord react-icons
    if (icon in reactIcons) {
      return createElement(reactIcons[icon as keyof typeof reactIcons]);
    }

    // Puis les icônes Lucide
    if (icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }
  },
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});

export const blogs = loader({
  baseUrl: "/blogs",
  source: createMDXSource(blogCollection),
});
export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `/og/docs/${segments.join("/")}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title} (${page.url})

${processed}`;
}
