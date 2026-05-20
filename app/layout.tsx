import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Fuják Trans",
  description: "Költöztetés és fuvarozás",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" data-scroll-behavior="smooth">
      <body className="bg-black text-white">
        
        {/* HEADER - minden oldalon */}
        <Header />

        {/* OLDAL TARTALMA */}
        <main>{children}</main>

        <CookieBanner />

        {/* FOOTER - minden oldalon */}
        <Footer />

      </body>
    </html>
  );
}