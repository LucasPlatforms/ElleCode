//import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Hero />
      <About />
      <Services />
      <Projects />
      <FAQ />
      <Contact />
    </main>
  );
}
