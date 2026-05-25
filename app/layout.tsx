import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://fujaktrans.hu"),

  title: {
    default: "Fuják Trans | Költöztetés, Fuvarozás, Lomtalanítás",
    template: "%s | Fuják Trans",
  },

  description:
    "Költöztetés, fuvarozás és lomtalanítás Magyarország egész területén. Gyors, biztonságos és megbízható szolgáltatás. Ingyenes helyszíni felmérés Nyíregyháza körzetében.",

  keywords: [
    "költöztetés",
    "fuvarozás",
    "lomtalanítás",
    "költöztetés Nyíregyháza",
    "bútorszállítás",
    "költöztető cég",
    "költöztetés Magyarország",
    "motor szállítás",
    "raklapos szállítás",
    "teherautó bérlés sofőrrel"
  ],

  openGraph: {
    title: "Fuják Trans",
    description:
      "Költöztetés, fuvarozás és lomtalanítás Magyarország egész területén.",

    url: "https://fujaktrans.hu",

    siteName: "Fuják Trans",

    locale: "hu_HU",

    type: "website",

    images: [
      {
        url: "/images/hero-truck.webp",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fuják Trans",
    description:
      "Költöztetés, fuvarozás és lomtalanítás",
    images: ["/images/hero-truck.webp"],
  },

  robots: {
    index: true,
    follow: true,
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