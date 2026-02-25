import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ellecode | Progettazione Siti Web Professionali",
  description:
    "Ellecode realizza siti web veloci, ottimizzati SEO e chiavi in mano per aziende e professionisti. Progetto TEMA Telecomunicazioni.",
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://www.ellecode.it"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ellecode | Progettazione Siti Web Professionali",
    description:
      "Soluzioni web chiavi in mano: prestazioni elevate, cura del dettaglio e gestione scadenze.",
    url: "https://www.ellecode.it",
    siteName: "Ellecode",
    locale: "it_IT",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png" }],
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
