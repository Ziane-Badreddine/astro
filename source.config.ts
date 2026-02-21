import { remarkMdxMermaid } from "fumadocs-core/mdx-plugins";
import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";
import { transformerTwoslash } from "fumadocs-twoslash";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { createFileSystemTypesCache } from "fumadocs-twoslash/cache-fs";
// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid],
    rehypeCodeOptions: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash({
          typesCache: createFileSystemTypesCache(),
        }),
      ],
    },
  },
});

export const blogCollection = defineCollections({
  type: "doc",
  dir: "./content/blogs",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    authors: z.array(
      z.object({
        name: z.string(),
        avatar: z.string(),
        twitter: z.string().optional(),
      })
    ),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});
