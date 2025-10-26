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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-[#0b1020] via-[#0a1a3a] to-[#0b254d] text-foreground`}
      >
        <div className="relative min-h-screen">
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10"
          >
            <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(64,112,255,0.25),transparent_60%)] blur-3xl" />
            <div className="absolute bottom-[-10rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,188,255,0.18),transparent_60%)] blur-3xl" />
          </div>

          <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
            <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
              <Link href="/" className="font-semibold tracking-tight text-white/90 hover:text-white transition-colors">
                Harrison Green
              </Link>
              <div className="flex items-center gap-4 text-sm">
                <Link href="/about" className="text-white/75 hover:text-white">About</Link>
                <Link href="/projects" className="text-white/75 hover:text-white">Projects</Link>
                <Link href="/music" className="text-white/75 hover:text-white">Music</Link>
                <Link href="/mathematics" className="text-white/75 hover:text-white">Mathematics</Link>
                <Link href="/mandarin" className="text-white/75 hover:text-white">Mandarin</Link>
                <Link href="/awards" className="text-white/75 hover:text-white">Awards</Link>
                <Link href="/contact" className="text-white/75 hover:text-white">Contact</Link>
                <a href="/resume.pdf" className="rounded-full bg-white/10 px-3 py-1.5 text-white/90 hover:bg-white/15 transition-colors border border-white/15">Resume</a>
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
