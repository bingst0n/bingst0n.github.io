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
          <header className="sticky top-0 z-20 bg-[#F7FBF8]/95 backdrop-blur-sm border-b border-[#e8efe9]">
            <nav className="mx-auto max-w-[1100px] px-5 py-4 flex items-center justify-between">
              <Link href="/" className="font-display font-extrabold text-xl tracking-tight text-[#22577A] hover:text-[#57CC99] transition-colors">
                Harrison Green
              </Link>
              <div className="flex items-center gap-5 text-sm font-semibold">
                <Link href="/about" className="text-[#0D1B1E]/70 hover:text-[#22577A] transition-colors">About</Link>
                <Link href="/projects" className="text-[#0D1B1E]/70 hover:text-[#22577A] transition-colors">Projects</Link>
                <Link href="/awards" className="text-[#0D1B1E]/70 hover:text-[#22577A] transition-colors">Awards</Link>
                <a href="/resume.pdf" className="btn">Resume</a>
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
