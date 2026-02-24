"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // 1. Ottimizzazione Scroll con RequestAnimationFrame (evita Reflow forzati)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Click Outside (ottimizzato)
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
      // Blocca lo scroll del corpo quando il menu è aperto (opzionale ma consigliato)
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <nav
      ref={navRef}
      // 3. Usa height fissa invece di cambiare padding (py-4/py-8) per evitare il Reflow
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 will-change-transform ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 h-16"
          : "bg-transparent h-24"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 h-full flex justify-between items-center">
        <Link
          href="/"
          aria-label="Torna all'inizio della pagina"
          className="relative z-50"
          onClick={handleLinkClick}
        >
          <Image
            src="/ellecode-logo.svg"
            alt="Logo Ellecode"
            width={150} // Dimensioni esatte per prevenire Layout Shift
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
          className="md:hidden relative z-50 p-2 text-zinc-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 4. MENU MOBILE: Animato con Opacity e Y-Translate invece di Height */}
      <div
        className={`md:hidden fixed inset-0 bg-zinc-950/98 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl font-semibold">
          {["Chi Siamo", "Servizi", "Progetti", "FAQ", "Contatti"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={handleLinkClick}
                className="text-zinc-100 hover:text-violet-500 transition-colors"
              >
                {item}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
