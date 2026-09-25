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
];

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#080808] px-6 md:px-12 pt-24 md:pt-32 pb-10 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="font-display font-medium text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-[-0.04em] text-white">
              Enquiries.
            </h2>
            <p className="mt-6 max-w-md text-zinc-400 leading-relaxed">
              Partnerships, press and institutional matters.
            </p>
            <div className="mt-10">
              <CopyEmail email="hello@codetopia.org" />
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-10 lg:pt-14">
            <div>
              <p className="text-sm text-zinc-600 mb-5">Site</p>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm text-zinc-600 mb-5">Elsewhere</p>
              <ul className="space-y-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-zinc-300 hover:text-white transition-colors"
                    >
                      <social.icon className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-[max(8rem,14vw)] flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <Image
            src={logo}
            alt="Codetopia"
            width={140}
            height={44}
            className="w-auto h-9 object-contain object-left brightness-0 invert opacity-70"
          />
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Codetopia. Built in Ghana.
          </p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="font-display pointer-events-none absolute inset-x-0 bottom-0 z-0 text-center leading-none font-bold tracking-tight text-white/10 uppercase select-none"
        style={{ fontSize: "19vw" }}
      >
        Codetopia
      </p>
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
      className="group inline-flex items-center gap-4 w-fit"
      title="Copy Email"
    >
      <span className="text-xl md:text-2xl text-white">{email}</span>
      <span className="ml-1 text-zinc-600 group-hover:text-white transition-colors">
        {copied ? (
          <FaCheck className="w-3 h-3 text-white" />
        ) : (
          <FaCopy className="w-3 h-3" />
        )}
      </span>
      {copied && (
        <span className="text-xs text-zinc-400 animate-fade-in">Copied</span>
      )}
    </button>
  );
};
