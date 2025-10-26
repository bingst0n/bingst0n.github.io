import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import PageTransition from "@/components/page-transition";
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
  title: "Harrison Green",
  description: "Harrison | Exploring music, AI/coding, mathematics, and Mandarin.",
  metadataBase: new URL("https://example.local"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-[#0b132b] via-[#1c2541] to-[#3a506b] text-foreground`}
      >
        <div className="relative min-h-screen">
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10"
          >
            <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(91,192,190,0.25),transparent_60%)] blur-3xl bg-blob-1" />
            <div className="absolute bottom-[-10rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(111,255,233,0.18),transparent_60%)] blur-3xl bg-blob-2" />
            <div className="absolute top-1/3 -left-28 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(91,192,190,0.16),transparent_60%)] blur-3xl bg-blob-3" />
          </div>

          <main>
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
