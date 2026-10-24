import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Playfair_Display, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marelle-home.fr"),
  title: {
    default: "Marelle — Conciergerie Immobilière Côte d'Azur",
    template: "%s | Marelle Home",
  },
  description:
    "Conciergerie Immobilière sur la Côte d'Azur. Gestion complète de votre gestion locative à Nice, Cannes, Antibes, Saint-Tropez. Commission 20 %, sans frais fixes.",
  keywords: [
    "Marelle Home", "conciergerie Airbnb", "conciergerie immobilière Côte d'Azur", "gestion locative Côte d'Azur", "gestion locative Nice", "gestion locative Cannes", "gestion locative Antibes", "gestion locative Saint-Tropez", "gestion locative Menton", "conciergerie Airbnb Nice", "conciergerie Airbnb Cannes", "location saisonnière Côte d'Azur", "meublé de tourisme Côte d'Azur", "gestion Airbnb Riviera", "LMNP Côte d'Azur",
  ],
  authors: [{ name: "Marelle Home" }],
  creator: "Marelle Home",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://marelle-home.fr",
    siteName: "Marelle Home",
    title: "Marelle — Conciergerie Immobilière Côte d'Azur",
    description:
      "Gestion complète de votre gestion locative à Nice, Cannes, Antibes, Saint-Tropez. Commission 20 %, sans frais fixes.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Marelle — Vue panoramique Côte d'Azur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marelle — Conciergerie Immobilière Côte d'Azur",
    description:
      "Gestion complète de votre gestion locative sur la Côte d'Azur. Commission 20 %, sans frais fixes.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://marelle-home.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#2B2620" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Marelle Home",
              description:
                "Conciergerie Immobilière sur la Côte d'Azur — gestion complète de locations saisonnières à Nice, Cannes, Antibes, Saint-Tropez.",
              url: "https://marelle-home.fr",
              email: "contact@marelle-home.fr",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nice",
                addressRegion: "Provence-Alpes-Côte d'Azur",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "43.7102",
                longitude: "7.2620",
              },
              areaServed: ["Nice", "Cannes", "Antibes", "Saint-Tropez", "Menton"],
              priceRange: "20% commission",
            }),
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${playfair.variable} ${josefin.variable} antialiased`}
      >
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
