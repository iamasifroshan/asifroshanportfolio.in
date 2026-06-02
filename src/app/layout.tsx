import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CosmicBackground from "@/components/CosmicBackground";
import Navbar from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asif Roshan - Futuristic Portfolio",
  description: "Full Stack & Mobile Developer | AI Enthusiast. Building Intelligent Digital Experiences For The Future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-foreground bg-transparent">
        <CosmicBackground />
        <main className="relative z-10 w-full min-h-screen pt-20">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
