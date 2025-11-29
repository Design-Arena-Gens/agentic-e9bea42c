import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buzzworthy ? Creative Studio (Clone)",
  description:
    "A bold, high-contrast agency site clone inspired by buzzworthystudio.com. Built with Next.js and Tailwind CSS.",
  metadataBase: new URL("https://agentic-e9bea42c.vercel.app"),
  openGraph: {
    title: "Buzzworthy ? Creative Studio (Clone)",
    description:
      "A bold, high-contrast agency site clone inspired by buzzworthystudio.com.",
    url: "https://agentic-e9bea42c.vercel.app",
    siteName: "Buzzworthy (Clone)",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Buzzworthy Clone",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzzworthy ? Creative Studio (Clone)",
    description:
      "A bold, high-contrast agency site clone inspired by buzzworthystudio.com.",
    images: ["/og.svg"],
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-white selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
