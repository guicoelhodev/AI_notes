// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";
var docs = defineCollection({
  name: "docs",
  directory: "../docs",
  include: "**/*.md",
  parser: "frontmatter-only",
  schema: z.object({}),
  transform: (doc) => ({
    slug: doc._meta.path
  })
});
var content_collections_default = defineConfig({
  content: [docs]
});
export {
  content_collections_default as default
};
