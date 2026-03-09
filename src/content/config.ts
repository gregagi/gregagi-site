import { z } from 'astro:content';

export const collections = {
  blog: {
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      author: z.string().default('GregAGI'),
    }),
  },
};
