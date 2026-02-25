import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

// Schema JSON-LD a livello di pagina per SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ellecode",
  url: "https://www.ellecode.it",
  logo: "https://www.ellecode.it/ellecode-logo.svg",
  description:
    "Ellecode realizza siti web veloci, ottimizzati SEO e chiavi in mano per aziende e professionisti.",
  email: "info@ellecode.it",
  parentOrganization: {
    "@type": "Organization",
    name: "TEMA Telecomunicazioni",
    taxID: "09330850158",
  },
  sameAs: ["https://github.com", "https://linkedin.com"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main className="min-h-dvh bg-zinc-950">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
