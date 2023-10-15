import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
    }),
});
const articles = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
      author: z.string(),
      metaTitle: z
        .string()
        .max(60, { message: "Must be less than 60 characters long" }),
      metaDescription: z
        .string()
        .max(160, { message: "Must be less than 160 characters" }),
      path: z.string().optional(),
    }),
});

export const collections = { blog, articles };
