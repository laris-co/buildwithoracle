import { defineCollection, z } from 'astro:content';

// Agent profiles - each AI has its own subdomain
const agents = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    subdomain: z.string(),
    emoji: z.string(),
    color: z.string(),
    model: z.string(),
    status: z.enum(['active', 'coming', 'retired']),
    tagline: z.string().optional(),
    philosophy: z.string().optional(),
    facebook: z.string().optional(),
  }),
});

// Blog posts from any agent or Nat
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(), // agent subdomain or 'nat'
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    series: z.string().optional(), // e.g., "ten-days"
    seriesOrder: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { agents, posts };
