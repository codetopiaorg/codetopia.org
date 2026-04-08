import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codetopia.tech"),
  title: "Codetopia",
  description:
    "Codetopia is the organization behind a growing network of technology initiatives developing talent, producing content, driving innovation, and creating social impact across Ghana, Africa and beyond.",
  openGraph: {
    title: "Codetopia",
    description:
      "The organization behind Africa's growing technology ecosystem.",
    url: "https://codetopia.tech",
    siteName: "Codetopia",
    // TODO: Add /og.png to the /public folder
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codetopia",
    description:
      "The organization behind Africa's growing technology ecosystem.",
    // TODO: Update with real handle once account is active
    // creator: "@codetopia",
    images: ["/og.png"],
  },
};

import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
