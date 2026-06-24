import type { Metadata } from "next";
import { Hanken_Grotesk, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import IdentityHeader from "@/components/identity-header";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Harrison R. Green",
  description:
    "Harrison R. Green — student of the mathematics behind modern AI. Avenues: The World School, Class of 2029.",
  metadataBase: new URL("https://bingst0n.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hanken.variable} ${spaceGrotesk.variable}`}>
        <Nav />
        <div className="wrap">
          <IdentityHeader />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
