"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Chi Siamo", href: "chi-siamo" },
  { label: "Servizi", href: "servizi" },
  { label: "Progetti", href: "progetti" },
  { label: "FAQ", href: "faq" },
];

/*
  SMOOTH SCROLL VIA JS — questa è la correzione principale per il flash bianco.
  
  Il problema: scroll-behavior: smooth nel CSS fa sì che il browser crei layer
  di compositing separati per ogni sezione durante l'animazione di scroll.
  Quando incontra bg diversi (zinc-950 / zinc-900) li ridisegna uno alla volta
  causando il "flash bianco".
  
  La soluzione: scrollIntoView({ behavior: 'smooth' }) via JS opera sul
  main thread di layout senza creare layer separati di compositing,
  eliminando il flash.
*/
const NAVBAR_HEIGHT = 80; // h-20 = 80px

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  /*
    Calcolo manuale della posizione assoluta per evitare il bug con contain:paint
    che fa fermare scrollIntoView prima del target.
  */
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Effetto blur/shadow della navbar allo scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside per chiudere il menu mobile
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Blocca scroll del body quando menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    smoothScrollTo(href);
  }, []);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Navigazione principale"
      style={{
        backgroundColor: scrolled ? "#0C0911" : "transparent",
        borderBottomColor: scrolled ? "rgba(39,39,42,0.5)" : "transparent",
        boxShadow: scrolled ? "0 4px 24px 0 rgba(0,0,0,0.35)" : "none",
      }}
      className="fixed top-0 left-0 w-full z-50 h-20 border-b transition-[background-color,border-color,box-shadow] duration-500 ease-in-out"
    >
      <div className="max-w-6xl mx-auto px-8 h-full flex justify-between items-center relative z-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Torna all'inizio della pagina — Ellecode"
        >
          <Image
            src="/ellecode-logo.svg"
            alt="Logo Ellecode"
            width={150}
            height={24}
            priority
            className="h-6 w-auto transition-opacity hover:opacity-80"
          />
        </a>

        {/* Desktop Links */}
        <div
          className="hidden md:flex gap-8 items-center text-sm font-medium text-zinc-400"
          role="list"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={`#${href}`}
              role="listitem"
              onClick={(e) => handleNavClick(e, href)}
              className="hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-sm"
            >
              {label}
            </a>
          ))}
          <a
            href="#contatti"
            onClick={(e) => handleNavClick(e, "contatti")}
            className="bg-violet-600 text-white px-5 py-2 rounded-full hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Contattami
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-md"
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <X size={28} aria-hidden="true" />
          ) : (
            <Menu size={28} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu di navigazione mobile"
        aria-modal="false"
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 px-6 py-4 shadow-xl transition-all duration-300 ease-in-out -z-10 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={`#${href}`}
              onClick={(e) => handleNavClick(e, href)}
              className="text-left text-zinc-300 py-3 px-2 border-b border-zinc-800 hover:text-zinc-100 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              {label}
            </a>
          ))}
          <a
            href="#contatti"
            onClick={(e) => handleNavClick(e, "contatti")}
            className="text-left text-violet-400 py-3 px-2 font-semibold hover:text-violet-300 transition-colors"
          >
            Contattami
          </a>
        </div>
      </div>
    </nav>
  );
}
