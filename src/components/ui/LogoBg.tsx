import Image from "next/image";
import blackLogo from "@/assets/images/logos/codetopia-logo-black.png";

interface Props {
  invert?: boolean;
  opacity?: number;
}

export const LogoBg = ({ invert = false, opacity = 0.06 }: Props) => (
  <>
    <Image
      src={blackLogo}
      alt=""
      aria-hidden="true"
      width={1800}
      height={540}
      className={`hidden md:block absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[46%] w-[62vw] max-w-none h-auto object-contain select-none pointer-events-none${invert ? " invert" : ""}`}
      style={{ opacity }}
    />
    <Image
      src={blackLogo}
      alt=""
      aria-hidden="true"
      width={1800}
      height={540}
      className={`hidden md:block absolute top-1/2 -translate-y-1/2 right-0 translate-x-[46%] w-[62vw] max-w-none h-auto object-contain select-none pointer-events-none${invert ? " invert" : ""}`}
      style={{ opacity }}
    />
  </>
);
