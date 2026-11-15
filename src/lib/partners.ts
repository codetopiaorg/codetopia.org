import type { StaticImageData } from "next/image";
import djangoGirlsKoforiduaLogo from "@/assets/images/logos/partners/django-girls-koforidua.png";
import ieeeCsLogo from "@/assets/images/logos/partners/ieee-cs.png";
import ossAfricaLogo from "@/assets/images/logos/partners/ossafrica.png";

export type Partner = {
  name: string;
  logo: StaticImageData;
  website: string;
  // Which part of Codetopia the work was with. Shown under the logo so a
  // partner of one initiative is never read as a partner of all of them.
  initiative: string;
  // the logo file is white (made for dark backgrounds), so flip it on white
  whiteLogo?: boolean;
};

// Organizations Codetopia has worked with, across every initiative.
export const partners: Partner[] = [
  {
    name: "OSSAfrica",
    logo: ossAfricaLogo,
    website: "https://ossafrica.org",
    initiative: "Community",
  },
  {
    name: "IEEE Computer Society",
    logo: ieeeCsLogo,
    website: "https://www.computer.org",
    initiative: "Community",
    whiteLogo: true,
  },
  {
    name: "Django Girls Koforidua",
    logo: djangoGirlsKoforiduaLogo,
    website: "https://djangogirls.org/en/koforidua/",
    initiative: "Community",
  },
];
