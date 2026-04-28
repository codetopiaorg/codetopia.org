"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
import { Reveal } from "@/components/ui/Reveal";

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

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "The Dispatch", href: "/#dispatch" },
  { label: "Contact", href: "/#contact" },
];

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#080808] border-t border-white/[0.07] px-6 md:px-12 pt-24 md:pt-40 pb-12"
    >
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <Reveal>
            <div className="space-y-8">
              <p className="font-sans text-xs text-zinc-700 tracking-[0.4em] uppercase">
                Contact
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white">
                Get in touch.
              </h2>
              <CopyEmail email="hello@codetopia.org" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-12">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-semibold text-zinc-600 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div>
                <p className="font-sans text-xs text-zinc-700 tracking-[0.4em] uppercase mb-4">
                  Follow
                </p>
                <div className="flex flex-wrap gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-white/[0.07] text-zinc-600 hover:text-white hover:border-white/[0.18] hover:bg-white/[0.04] transition-all"
                    >
                      <social.icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="space-y-6">
          <div className="w-full overflow-hidden">
            <h2 className="font-display font-black tracking-[-0.04em] leading-none text-white/[0.04] select-none text-[clamp(48px,16vw,260px)] whitespace-nowrap">
              CODETOPIA
            </h2>
          </div>
          <div className="border-t border-white/[0.07] pt-6 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <Image
                src={logo}
                alt="Codetopia"
                width={140}
                height={44}
                className="w-auto h-5 object-contain brightness-0 invert opacity-40"
              />
              <span className="hidden sm:block w-px h-4 bg-white/[0.07]" />
              <p className="font-sans text-xs text-zinc-600 uppercase tracking-[0.3em]">
                The Technology Ecosystem
              </p>
            </div>
            <p className="font-sans text-xs text-zinc-700 uppercase tracking-[0.3em]">
              © 2026 · Built in Ghana
            </p>
          </div>
        </div>
      </div>
    </footer>
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
      className="group inline-flex items-center gap-3 border border-white/[0.08] px-5 py-4 hover:border-white/[0.2] transition-all w-fit"
      title="Copy Email"
    >
      <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
        {email}
      </span>
      <span className="ml-1 text-zinc-600 group-hover:text-white transition-colors">
        {copied ? (
          <FaCheck className="w-3 h-3 text-white" />
        ) : (
          <FaCopy className="w-3 h-3" />
        )}
      </span>
      {copied && (
        <span className="font-sans text-xs text-white uppercase tracking-widest animate-fade-in">
          Copied
        </span>
      )}
    </button>
  );
};
