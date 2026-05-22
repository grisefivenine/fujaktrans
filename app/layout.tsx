import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata = {
  title: "Fuják Trans – Költöztetés és fuvarozás Magyarországon",
  description:
    "Költöztetés, fuvarozás, bútorszállítás gyorsan és megbízhatóan. Országos szolgáltatás.",
  keywords: [
    "költöztetés",
    "fuvarozás",
    "bútorszállítás",
    "költöztető cég",
    "szállítás Magyarország"
  ],
  openGraph: {
    title: "Fuják Trans",
    description: "Költöztetés és fuvarozás profi szinten",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" data-scroll-behavior="smooth">
      <body className="bg-gray-300 text-black pb-24 md:pb-0">
        
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