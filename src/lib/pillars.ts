export type Pillar = {
  label: string;
  description: string;
};

// Codetopia's core mission pillars, independent of any specific initiative.
// An initiative may serve one or more pillars, but pillars are not defined by initiatives.
export const pillars: Pillar[] = [
  {
    label: "Talent",
    description:
      "Developing the next generation of African technologists by nurturing skills, building confidence, and creating pathways to global-level careers.",
  },
  {
    label: "Content",
    description:
      "Telling Africa's technology story with quality. Producing media that educates, documents, and shifts the global narrative around African tech.",
  },
  {
    label: "Innovation",
    description:
      "Building real things that solve real problems. Engineering products, prototyping ideas, and delivering technical solutions that create measurable value.",
  },
  {
    label: "Access",
    description:
      "Removing the barriers that keep talent out. Making technology education and opportunity available regardless of geography, income, or background.",
  },
  {
    label: "Education",
    description:
      "Creating structured, credible learning pathways so that anyone serious about a career in technology has a clear, supported route to get there.",
  },
];
