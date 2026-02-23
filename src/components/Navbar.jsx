"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hook per intercettare lo scroll e cambiare lo sfondo della Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funzione per chiudere il menu mobile quando l'utente clicca su una voce
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-zinc-800/50 py-4"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          aria-label="Torna all'inizio della pagina"
          className="text-2xl font-bold tracking-tight text-zinc-100 cursor-pointer"
          onClick={handleLinkClick}
        >
          <Image
            src="/ellecode-logo.svg"
            alt="Logo Ellecode"
            width={2835}
            height={462}
            priority
            className="h-6 w-auto hover:opacit-80 transition-opacity"
          />
        </Link>

        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-zinc-400">
          <Link
            href="#chi-siamo"
            className="hover:text-zinc-100 transition-colors"
          >
            Chi Siamo
          </Link>
          <Link
            href="#servizi"
            className="hover:text-zinc-100 transition-colors"
          >
            Servizi
          </Link>
          <Link
            href="#progetti"
            className="hover:text-zinc-100 transition-colors"
          >
            Progetti
          </Link>
          <Link
            href="#contatti"
            className="bg-violet-600/10 text-violet-500 hover:bg-violet-600 hover:text-white px-4 py-2 rounded-md transition-all duration-300"
          >
            Contattami
          </Link>
        </div>
        <button
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE: Sostituiti i bottoni e aggiunto l'onClick per chiudere la tendina */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 py-4 px-6 flex flex-col gap-4 shadow-xl">
          <Link
            href="#chi-siamo"
            onClick={handleLinkClick}
            className="text-left text-zinc-300 py-2 border-b border-zinc-800"
          >
            Chi Siamo
          </Link>
          <Link
            href="#servizi"
            onClick={handleLinkClick}
            className="text-left text-zinc-300 py-2 border-b border-zinc-800"
          >
            Servizi
          </Link>
          <Link
            href="#progetti"
            onClick={handleLinkClick}
            className="text-left text-zinc-300 py-2 border-b border-zinc-800"
          >
            Progetti
          </Link>
          <Link
            href="#contatti"
            onClick={handleLinkClick}
            className="text-left text-violet-400 py-2 font-medium"
          >
            Contattami
          </Link>
        </div>
      )}
    </nav>
  );
}
