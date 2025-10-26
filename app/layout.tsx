import type { Metadata } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono } from "next/font/google";
import PageTransition from "@/components/page-transition";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
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
    <html lang="en">
      <body
        className={`${bricolage.variable} ${inter.variable} ${ibmMono.variable} antialiased min-h-screen`}
        style={{backgroundColor: '#F7FBF8', color: '#0D1B1E'}}
      >
        <div className="relative min-h-screen">
          <header className="sticky top-0 z-20 bg-[#22577A] border-b border-[#1b4056]">
            <nav className="mx-auto max-w-[1100px] px-5 py-4 flex items-center justify-between">
              <Link href="/" className="font-display font-extrabold text-xl tracking-tight text-[#E9FFF3] hover:text-[#80ED99] transition-colors">
                Harrison Green
              </Link>
              <div className="flex items-center gap-5 text-sm font-semibold">
                <Link href="/about" className="text-[#E9FFF3]/90 hover:text-[#80ED99] transition-colors">About</Link>
                <Link href="/projects" className="text-[#E9FFF3]/90 hover:text-[#80ED99] transition-colors">Projects</Link>
                <Link href="/awards" className="text-[#E9FFF3]/90 hover:text-[#80ED99] transition-colors">Awards</Link>
                <a href="/resume.pdf" className="btn" style={{ borderColor: '#E9FFF3', color: '#E9FFF3' }}>Resume</a>
              </div>
            </nav>
          </header>

          <main>
            <PageTransition>
              {children}
            </PageTransition>
          </main>

          <footer className="section" style={{paddingTop: '32px'}}>
            <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem', borderTop:'1px solid #e0efe5', paddingTop:'18px'}}>
              <small className="mono">© 2025 Harrison Green</small>
              <nav style={{display:'flex', gap:'.9rem'}}>
                <a className="btn" href="https://github.com/bingst0n" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="btn" href="mailto:harrison@example.com">Email</a>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
