import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  // Precarica solo i weight necessari per ridurre il payload font
  weight: ["400", "500", "600", "700"],
});

// URL base del sito — aggiorna con il tuo dominio reale
const SITE_URL = "https://www.ellecode.it";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ellecode | Progettazione Siti Web Professionali",
    template: "%s | Ellecode",
  },
  description:
    "Ellecode progetta siti web veloci, moderni e ottimizzati SEO. Soluzioni chiavi in mano: vetrina, landing page e restyling. Supporto continuo.",
  keywords: [
    "realizzazione siti web vetrina",
    "siti web per professionisti",
    "creazione sito web professionale Italia",
    "siti web per ristoranti e attività locali",
    "siti vetrina professionali",
    "realizzazione sito web per piccole imprese",
    "agenzia web affidabile piccole imprese",
    "sito web con assistenza inclusa",
    "sito web con supporto continuativo",
    "sito web gestito e monitorato",
  ],
  authors: [{ name: "Ellecode", url: SITE_URL }],
  creator: "Ellecode",
  publisher: "TEMA Telecomunicazioni",
  // Open Graph per condivisioni social
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: "Ellecode",
    title: "Ellecode | Progettazione Siti Web Professionali",
    description:
      "Siti web veloci, moderni e ottimizzati SEO. Soluzioni chiavi in mano con supporto continuo.",
    images: [
      {
        url: "/og-image.png", // crea un'immagine 1200x630 con il tuo brand
        width: 1200,
        height: 630,
        alt: "Ellecode — Progettazione Siti Web",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ellecode | Progettazione Siti Web Professionali",
    description: "Siti web veloci, moderni e ottimizzati SEO.",
    images: ["/og-image.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  // Canonical URL automatico
  alternates: {
    canonical: SITE_URL,
  },
  // Impedisce indicizzazione di pagine duplicate
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
