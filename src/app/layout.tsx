import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codetopia.tech"),
  title: {
    default: "Codetopia | The Technology Ecosystem",
    template: "%s | Codetopia",
  },
  description:
    "Codetopia is the organization behind a growing network of technology initiatives developing talent, producing content, driving innovation, and creating social impact across Ghana, Africa and beyond.",
  keywords: [
    "Codetopia",
    "technology ecosystem",
    "Africa tech",
    "Ghana technology",
    "tech community",
    "developer community",
    "tech education",
    "innovation",
  ],
  authors: [{ name: "Codetopia" }],
  creator: "Codetopia",
  publisher: "Codetopia",
  openGraph: {
    title: "Codetopia | The Technology Ecosystem",
    description:
      "The organization behind Africa's growing technology ecosystem.",
    url: "https://codetopia.tech",
    siteName: "Codetopia",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Codetopia - The Technology Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codetopia | The Technology Ecosystem",
    description:
      "The organization behind Africa's growing technology ecosystem.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
