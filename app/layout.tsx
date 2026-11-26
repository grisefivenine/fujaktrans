import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://fujaktrans.hu"),
  title: {
    default: "Fuják Trans | Költöztetés, fuvarozás, áruszállítás",
    template: "%s | Fuják Trans",
  },
  description: "Költöztetés, fuvarozás, áruszállítás és lomtalanítás Nyíregyházáról indulva, országosan és nemzetközi viszonylatban. Kérjen személyre szabott ajánlatot a Fuják Trans csapatától!",
  keywords: [
    "költöztetés", "fuvarozás", "lomtalanítás", "költöztetés Nyíregyháza",
    "bútorszállítás", "költöztető cég", "költöztetés Magyarország", "csomagolás", "fóliázás",
    "raklapos áruszállítás", "tehertaxi", "teherautó bérlés sofőrrel",
  ],
  openGraph: {
    title: "Fuják Trans – Költöztetés és fuvarozás",
    description: "Gyors, biztonságos és szervezett költöztetés, fuvarozás és áruszállítás.",
    url: "https://fujaktrans.hu",
    siteName: "Fuják Trans",
    locale: "hu_HU",
    type: "website",
    images: [{ url: "/images/hero-truck.webp", width: 1200, height: 630, alt: "Fuják Trans költöztető jármű" }],
  },
  twitter: { card: "summary_large_image", title: "Fuják Trans", description: "Költöztetés, fuvarozás, áruszállítás és lomtalanítás.", images: ["/images/hero-truck.webp"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="hu" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-[#fbf9f8] text-[#211719] antialiased">
        <Header />
        {children}
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
