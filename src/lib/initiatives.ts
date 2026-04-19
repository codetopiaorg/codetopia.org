import {
  Clapperboard,
  Cpu,
  GraduationCap,
  Heart,
  type LucideIcon,
  ShoppingBag,
  Users,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import academyLogo from "@/assets/images/logos/initiative-logos/codetopia-academy.png";
import communityLogo from "@/assets/images/logos/initiative-logos/codetopia-community.png";
import foundationLogo from "@/assets/images/logos/initiative-logos/codetopia-foundation.png";
import labsLogo from "@/assets/images/logos/initiative-logos/codetopia-labs.png";
import marketLogo from "@/assets/images/logos/initiative-logos/codetopia-market.png";
import studioLogo from "@/assets/images/logos/initiative-logos/codetopia-studios.png";

export type InitiativeStatus = "Active" | "Coming Soon";

export type Initiative = {
  name: string;
  shortName: string;
  icon: LucideIcon;
  logo: StaticImageData;
  status: InitiativeStatus;
  link: string | null;
  description: string;
};

// Add new initiatives here. Cards and counts update automatically.
export const initiatives: Initiative[] = [
  {
    name: "Codetopia Community",
    shortName: "Community",
    icon: Users,
    logo: communityLogo,
    status: "Active",
    link: "https://community.codetopia.org",
    description:
      "A mentorship-driven hub where technologists collaborate on real-world projects, advance from ideas to execution, and grow into leaders.",
  },
  {
    name: "Codetopia Studio",
    shortName: "Studio",
    icon: Clapperboard,
    logo: studioLogo,
    status: "Coming Soon",
    link: null,
    description:
      "The content and production division creating tutorials, podcasts, and digital media that educate and inspire.",
  },
  {
    name: "Codetopia Labs",
    shortName: "Labs",
    icon: Cpu,
    logo: labsLogo,
    status: "Coming Soon",
    link: null,
    description:
      "The technical division that takes on real-world engineering challenges, builds products, and delivers solutions for organizations.",
  },
  {
    name: "Codetopia Foundation",
    shortName: "Foundation",
    icon: Heart,
    logo: foundationLogo,
    status: "Coming Soon",
    link: null,
    description:
      "The social impact arm focused on access and equity: school tours, scholarships, equipment donations, and STEM outreach for underserved communities.",
  },
  {
    name: "Codetopia Academy",
    shortName: "Academy",
    icon: GraduationCap,
    logo: academyLogo,
    status: "Coming Soon",
    link: null,
    description:
      "The education division delivering structured programs, courses, and certifications for the next generation of technologists.",
  },
  {
    name: "Codetopia Market",
    shortName: "Market",
    icon: ShoppingBag,
    logo: marketLogo,
    status: "Coming Soon",
    link: null,
    description:
      "The commerce platform of the Codetopia ecosystem — delivering branded merchandise, event apparel, and tech products for individuals and organizations that mean business.",
  },
];
