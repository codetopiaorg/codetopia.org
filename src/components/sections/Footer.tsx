"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaCheck,
  FaCopy,
  // FaGithub,
  FaBluesky,
  FaInstagram,
  FaLinkedin,
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
  { label: "YouTube", icon: FaYoutube, href: "https://youtube.com/@codetopiaorg" },
  { label: "Bluesky", icon: FaBluesky, href: "https://bsky.app/profile/codetopiaorg.bsky.social" },
  // { label: "GitHub", icon: FaGithub, href: "https://github.com/codetopia" },
];

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black pt-20 md:pt-32 pb-12 px-6 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-10">
          <div className="space-y-5">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white">
              Get in touch.
            </h2>
            <CopyEmail email="hello@codetopia.org" />
          </div>

          <div className="flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-zinc-900 bg-zinc-950 text-zinc-600 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 transition-all"
              >
                <social.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <Image
            src={logo}
            alt="Codetopia"
            width={140}
            height={44}
            className="w-auto h-8 object-contain brightness-0 invert opacity-30"
          />
          <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.4em]">
            © 2026 Codetopia · Built in Ghana
          </p>
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
    <div className="flex items-center gap-3">
      <span className="text-sm font-normal tracking-tighter text-zinc-400 hover:text-white transition-colors">
        {email}
      </span>
      <button
        type="button"
        onClick={handleCopy}
        className="p-2 bg-zinc-900/50 border border-zinc-900 text-zinc-600 hover:text-white hover:border-zinc-700 transition-all active:scale-95"
        title="Copy Email"
      >
        {copied ? (
          <FaCheck className="w-3 h-3 text-white" />
        ) : (
          <FaCopy className="w-3 h-3" />
        )}
      </button>
      {copied && (
        <span className="text-[10px] font-bold text-white uppercase tracking-widest animate-fade-in">
          Copied
        </span>
      )}
    </div>
  );
};
