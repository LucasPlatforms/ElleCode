"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Click Outside per chiudere il menu mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 h-20 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50"
    >
      {/* HEADER: Aggiunto relative z-20 per tenerlo SEMPRE sopra la tendina del menu */}
      <div className="max-w-6xl mx-auto px-8 h-full flex justify-between items-center relative z-20">
        <Link
          href="/"
          aria-label="Torna all'inizio della pagina"
          onClick={handleLinkClick}
        >
          <Image
            src="/ellecode-logo.svg"
            alt="Logo Ellecode"
            width={150}
            height={24}
            priority
            className="h-6 w-auto transition-opacity hover:opacity-80"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-zinc-400">
          {["Chi Siamo", "Servizi", "Progetti", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-zinc-100 transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contatti"
            className="bg-violet-600 text-white px-5 py-2 rounded-full hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/20"
          >
            Contattami
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-zinc-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE: Ripristinato al TUO design originale (tendina sotto la navbar)
        Ma ottimizzato usando translateY e opacity invece di max-height 
      */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 px-6 py-4 shadow-xl transition-all duration-300 ease-in-out -z-10 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-4">
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
            href="#faq"
            onClick={handleLinkClick}
            className="text-left text-zinc-300 py-2 border-b border-zinc-800"
          >
            FAQ
          </Link>
          <Link
            href="#contatti"
            onClick={handleLinkClick}
            className="text-left text-violet-400 py-2 font-medium"
          >
            Contattami
          </Link>
        </div>
      </div>
    </nav>
  );
}
