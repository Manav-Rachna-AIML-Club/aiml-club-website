import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "MRAC",
  description: "Manav Rachna AIML Club. A club for machine learning enthusiasts, as well as beginners. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navbar/>
        {children}
        <SanityLive/>
      </body>
    </html>
  );
}
