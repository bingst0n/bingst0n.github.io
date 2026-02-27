import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "harrison green — portfolio",
  description: "harrison green — mathematician, musician, ai explorer.",
  metadataBase: new URL("https://bingst0n.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.variable} antialiased min-h-screen`}
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {children}
      </body>
    </html>
  );
}
