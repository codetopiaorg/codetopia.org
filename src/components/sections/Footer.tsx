"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaBluesky,
  FaCheck,
  FaCopy,
  FaInstagram,
  FaLinkedin,
  FaMastodon,
  FaThreads,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

const socials = [
  { label: "X", icon: FaXTwitter, href: "https://x.com/codetopiaorg" },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/company/codetopiaorg/",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/codetopiaorg",
  },
  {
    label: "Threads",
    icon: FaThreads,
    href: "https://www.threads.com/@codetopiaorg",
  },
  {
    label: "YouTube",
    icon: FaYoutube,
    href: "https://youtube.com/@codetopiaorg",
  },
  {
    label: "Bluesky",
    icon: FaBluesky,
    href: "https://bsky.app/profile/codetopiaorg.bsky.social",
  },
  {
    label: "Mastodon",
    icon: FaMastodon,
    href: "https://mastodon.social/@codetopiaorg",
  },
];

const columns = [
  {
    title: "Initiatives",
    links: [
      { label: "Community", href: "https://community.codetopia.org" },
      { label: "Academy", href: "https://academy.codetopia.org" },
      { label: "Labs", href: "https://labs.codetopia.org" },
      { label: "All initiatives", href: "/initiatives" },
    ],
  },
  {
    title: "Codetopia",
    links: [
      { label: "About", href: "/about" },
      { label: "Partners", href: "/partners" },
      { label: "Blog", href: "/blog" },
      { label: "The Dispatch", href: "/#dispatch" },
    ],
  },
];

// Linear-style footer: logo and contact on the left, plain link columns on the right
export const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-white pt-16 md:pt-20 pb-10 scroll-mt-16"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-2 md:col-span-6">
            <Image
              src={logo}
              alt="Codetopia"
              width={140}
              height={44}
              className="w-auto h-8 object-contain object-left brightness-0"
            />
            <p className="mt-6 max-w-xs text-sm text-zinc-500 leading-relaxed">
              Partnerships, press and institutional matters.
            </p>
            <div className="mt-3">
              <CopyEmail email="hello@codetopia.org" />
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="md:col-span-2">
              <p className="text-sm font-medium text-black">{column.title}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-500 hover:text-black transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-500 hover:text-black transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <p className="text-sm font-medium text-black">Follow</p>
            <ul className="mt-4 space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-sm text-zinc-500 hover:text-black transition-colors"
                  >
                    <social.icon className="w-3.5 h-3.5" />
                    {social.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-[max(10rem,17vw)] text-xs text-zinc-500">
          © {new Date().getFullYear()} Codetopia. Built in Ghana.
        </p>
      </div>

      <RisingWordmark />
    </footer>
  );
};

// The giant wordmark rises out of the footer's bottom edge as the page is
// scrolled to the end, landing in place exactly when the bottom is reached.
const RisingWordmark = () => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    const footer = el?.parentElement;
    if (!el || !footer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = footer.getBoundingClientRect();
      // 0 while the footer's last 60% is still below the fold, 1 at the very bottom.
      const remaining = rect.bottom - window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, 1 - remaining / (rect.height * 0.6)),
      );
      el.style.transform = `translateY(${(1 - progress) * 100}%)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <p
      ref={ref}
      aria-hidden="true"
      className="font-display pointer-events-none absolute inset-x-0 -bottom-[0.18em] z-0 text-center leading-none font-bold tracking-[-0.04em] uppercase select-none will-change-transform bg-gradient-to-b from-zinc-200 to-white bg-clip-text text-transparent"
      style={{ fontSize: "19vw" }}
    >
      Codetopia
    </p>
  );
};

const CopyEmail = ({ email }: { email: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group inline-flex items-center gap-2 w-fit"
      title="Copy Email"
    >
      <span className="text-sm text-black underline underline-offset-4 decoration-zinc-300">
        {email}
      </span>
      <span className="text-zinc-400 group-hover:text-black transition-colors">
        {copied ? (
          <FaCheck className="w-3 h-3 text-black" />
        ) : (
          <FaCopy className="w-3 h-3" />
        )}
      </span>
      <output className="text-xs text-zinc-500 animate-fade-in">
        {copied ? "Copied" : ""}
      </output>
    </button>
  );
};
