import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, IBM_Plex_Mono } from "next/font/google";
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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
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
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${ibmPlexMono.variable} antialiased min-h-screen bg-gradient-to-br from-[#22577A] via-[#2d6b82] to-[#38A3A5] text-foreground font-sans`}
      >
        <div className="relative min-h-screen">
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10"
          >
            <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(87,204,153,0.25),transparent_60%)] blur-3xl bg-blob-1" />
            <div className="absolute bottom-[-10rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(128,237,153,0.18),transparent_60%)] blur-3xl bg-blob-2" />
            <div className="absolute top-1/3 -left-28 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,163,165,0.16),transparent_60%)] blur-3xl bg-blob-3" />
          </div>

          <header className="sticky top-0 z-20 backdrop-blur-md supports-[backdrop-filter]:bg-[#22577A]/80 border-b border-[#57CC99]/20">
            <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
              <Link href="/" className="font-semibold tracking-tight text-white/90 hover:text-white transition-colors">
                Harrison Green
              </Link>
              <div className="flex items-center gap-4 text-sm">
                <Link href="/about" className="text-white/75 hover:text-[#80ED99] transition-colors">About</Link>
                <Link href="/projects" className="text-white/75 hover:text-[#80ED99] transition-colors">Projects</Link>
                <Link href="/awards" className="text-white/75 hover:text-[#80ED99] transition-colors">Awards</Link>
                <a href="/resume.pdf" className="rounded-full bg-[#57CC99]/15 px-3 py-1.5 text-white/90 hover:bg-[#80ED99]/20 transition-all border border-[#57CC99]/25">Resume</a>
              </div>
            </nav>
          </header>

          <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
