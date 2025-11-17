// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const experienceCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    company: z.string(),
    industry: z.string(),
    position: z.string(),
    techstack: z.string(),
    duration: z.string(),
    summary: z.array(z.string()),
  })),
});

const linksCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    url: z.string(),
    description: z.string(),
  })),
});

const personalCollection = defineCollection({
    type: 'data',
    schema: z.object({
        resume_name: z.string(),
        resume_title: z.string(),
        resume_email: z.string(),
        resume_contact: z.string(),
        resume_introduction: z.string(),
        resume_looking_for_work: z.string(),
        resume_avatar: z.string(),
    }),
});

const skillsCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    category: z.string(),
    skills: z.string(),
  })),
});

const socialsCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    url: z.string(),
    icon: z.string(),
  })),
});

const summaryCollection = defineCollection({
    type: 'data',
    schema: z.object({
        summary: z.string(),
    }),
});

export const collections = {
  experience: experienceCollection,
  links: linksCollection,
  personal: personalCollection,
  skills: skillsCollection,
  socials: socialsCollection,
  summary: summaryCollection,
};
