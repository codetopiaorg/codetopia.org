"use client";

import Image from "next/image";
import type React from "react";
import { useState } from "react";
import {
  FaBluesky,
  FaCheck,
  FaCopy,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaThreads,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const Footer = () => {
  return (
    <footer className="bg-black pt-20 md:pt-32 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16 md:gap-20 mb-24 md:mb-32">
          <div className="space-y-8 md:space-y-12 max-w-2xl">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] md:leading-none">
                Join the <br /> <span className="text-zinc-800">Journey.</span>
              </h2>
              <p className="text-zinc-500 text-lg md:text-xl font-sans leading-relaxed tracking-tight">
                Codetopia is larger than any one division.{" "}
                <br className="hidden md:block" />
                It is a shared commitment to engineering excellence.
              </p>
              <ContactEmail email="codetopia@codetopia.tech" />
            </div>
          </div>

          <div className="grid grid-cols-4 sm:flex gap-3 md:gap-4 lg:gap-6 w-full lg:w-auto">
            <SocialLink href="#" label="X" icon={FaXTwitter} />
            <SocialLink href="#" label="LinkedIn" icon={FaLinkedin} />
            <SocialLink href="#" label="Instagram" icon={FaInstagram} />
            <SocialLink href="#" label="BlueSky" icon={FaBluesky} />
            <SocialLink href="#" label="GitHub" icon={FaGithub} />
            <SocialLink href="#" label="Threads" icon={FaThreads} />
            <SocialLink href="#" label="Facebook" icon={FaFacebook} />
            <SocialLink href="#" label="Whatsapp" icon={FaWhatsapp} />
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src={logo}
              alt="Codetopia"
              width={160}
              height={54}
              className="w-auto h-12 object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
            />
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em]">
              © 2026 Ecosystem Core
            </p>
          </div>

          <div className="flex gap-8 sm:gap-12 text-center md:text-right flex-wrap justify-center">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Brand Assets</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactEmail = ({ email }: { email: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 group/email pt-4">
      <div className="flex items-center gap-2">
        <FaEnvelope className="w-3.5 h-3.5 text-zinc-600" />
        <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-zinc-600">
          Official Inquiries
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm md:text-base font-normal tracking-tighter text-zinc-400 group-hover/email:text-white transition-colors">
          {email}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="p-2 bg-zinc-900/50 border border-zinc-900 text-zinc-600 hover:text-white hover:border-zinc-700 transition-all rounded shadow-sm relative overflow-hidden active:scale-95"
          title="Copy Email"
        >
          {copied ? (
            <FaCheck className="w-3.5 h-3.5 text-white" />
          ) : (
            <FaCopy className="w-3.5 h-3.5" />
          )}
        </button>
        {copied && (
          <span className="text-[10px] font-bold text-white uppercase tracking-widest animate-pulse">
            Copied
          </span>
        )}
      </div>
    </div>
  );
};

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) => (
  <a
    href={href}
    aria-label={label}
    className="w-full sm:w-12 h-12 flex items-center justify-center border border-zinc-900 bg-zinc-950 text-zinc-600 hover:text-white hover:border-white transition-all duration-300 transform hover:-translate-y-1 group"
  >
    <Icon className="w-5 h-5 fill-current" />
  </a>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 hover:text-white transition-colors"
  >
    {children}
  </a>
);
