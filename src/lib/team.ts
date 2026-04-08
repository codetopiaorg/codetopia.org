import type { StaticImageData } from "next/image";

export type SocialHandle = {
  platform: "twitter" | "linkedin" | "github" | "instagram";
  url: string;
  handle: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  /** Extended bio shown on the individual profile page */
  fullBio: string[];
  photo: string | StaticImageData;
  socials: SocialHandle[];
};

// Replace photo values with per-member imports when available.
// All members currently share the placeholder image — swap individually as photos come in.
import profilePlaceholder from "@/assets/images/profile-pics/profile.jpg";

export const team: TeamMember[] = [
  {
    slug: "seth-mensah",
    name: "Seth Mensah",
    role: "Founder",
    bio: "Building Codetopia from the ground up — the organization behind Africa's growing technology ecosystem.",
    fullBio: [
      "Seth founded Codetopia with a clear conviction: the technology talent gap across Africa is not a talent problem — it is a platform problem. Engineers, designers, and builders exist. What is missing is the infrastructure around them.",
      "His approach is methodical. Rather than launching a single product and hoping it covers every gap, he builds focused initiatives — each purpose-built for a specific problem. Community. Content. Innovation. Access. Each gets its own entity, its own identity, and its own operating model.",
      "Codetopia is the result of that thinking. A network of initiatives that are independent enough to go deep, and connected enough to reinforce each other.",
    ],
    photo: profilePlaceholder,
    socials: [
      {
        platform: "twitter",
        url: "https://twitter.com/",
        handle: "@sethmensah",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/",
        handle: "Seth Mensah",
      },
    ],
  },
  {
    slug: "akua-boateng",
    name: "Akua Boateng",
    role: "Head of Community",
    bio: "Leading Codetopia Community — the initiative building the most connected technology community in Ghana.",
    fullBio: [
      "Akua leads Codetopia Community, the first and most active initiative in the Codetopia network. Her mandate is simple: close the community gap in Ghana's technology ecosystem.",
      "That means creating the spaces, events, and connections that push technologists further. Online and offline. Beginner and senior. She believes that the strength of a technology ecosystem is measured not just by the individuals inside it, but by how well they are connected to each other.",
      "Under her leadership, Codetopia Community has become the reference point for technology community in Ghana.",
    ],
    photo: profilePlaceholder,
    socials: [
      {
        platform: "twitter",
        url: "https://twitter.com/",
        handle: "@akuaboateng",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/",
        handle: "Akua Boateng",
      },
    ],
  },
  {
    slug: "kwame-asante",
    name: "Kwame Asante",
    role: "Lead Engineer",
    bio: "Architecting the technical foundation across every Codetopia initiative and platform.",
    fullBio: [
      "Kwame is the engineering force behind Codetopia's growing digital footprint. He is responsible for the technical architecture that ties the network of initiatives together — building platforms that are fast, reliable, and designed to scale.",
      "His work spans every initiative: the infrastructure behind Codetopia Community, the platforms powering future initiatives, and the internal tools that keep the organization running.",
      "He operates with a bias toward building things that last — systems that can carry the organization forward as the network grows.",
    ],
    photo: profilePlaceholder,
    socials: [
      { platform: "github", url: "https://github.com/", handle: "kwameasante" },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/",
        handle: "Kwame Asante",
      },
    ],
  },
  {
    slug: "ama-owusu",
    name: "Ama Owusu",
    role: "Head of Content",
    bio: "Documenting Africa's technology story and building the content layer that the ecosystem has been missing.",
    fullBio: [
      "Ama leads Codetopia's content strategy — the initiative building the media layer for Africa's technology ecosystem. Her work is about documentation and amplification: making the stories, insights, and progress of African technologists visible to the world.",
      "She approaches content as infrastructure. It is not decoration. It is how an ecosystem signals its existence, attracts talent, builds credibility, and sustains momentum. Without it, growth happens in silence.",
      "The content gap is real. Ama's job is to close it.",
    ],
    photo: profilePlaceholder,
    socials: [
      { platform: "twitter", url: "https://twitter.com/", handle: "@amaowusu" },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/",
        handle: "Ama Owusu",
      },
    ],
  },
  {
    slug: "nana-adjei",
    name: "Nana Adjei",
    role: "Head of Foundation",
    bio: "Driving Codetopia's social impact work — scholarships, donations, school outreach, and access programs.",
    fullBio: [
      "Nana leads Codetopia Foundation, the initiative responsible for Codetopia's social impact mandate. His work covers the access gap: the students, schools, and communities that technology has not yet reached — and making sure it does.",
      "That means scholarships, donations, school outreach programs, and access initiatives designed to remove the barriers that keep people out of the technology ecosystem before they even get started.",
      "His belief is that talent is equally distributed. Opportunity is not. The Foundation exists to correct that imbalance.",
    ],
    photo: profilePlaceholder,
    socials: [
      {
        platform: "twitter",
        url: "https://twitter.com/",
        handle: "@nanaadjei",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/",
        handle: "Nana Adjei",
      },
    ],
  },
  {
    slug: "abena-sarpong",
    name: "Abena Sarpong",
    role: "Head of Academy",
    bio: "Building the structured learning paths and real-world training programs that develop the next generation of African technologists.",
    fullBio: [
      "Abena leads Codetopia Academy, the initiative built to close the talent development gap. Her work is about creating the structured learning infrastructure that the ecosystem needs — pathways from beginner to professional that are rigorous, relevant, and accessible.",
      "She is skeptical of surface-level education. The Academy is not about certificates. It is about developing technologists who can build real things, solve real problems, and compete at any level.",
      "The training gap is one of the clearest gaps in the ecosystem. Abena's mandate is to make it disappear.",
    ],
    photo: profilePlaceholder,
    socials: [
      {
        platform: "twitter",
        url: "https://twitter.com/",
        handle: "@abenasarpong",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/",
        handle: "Abena Sarpong",
      },
    ],
  },
];
