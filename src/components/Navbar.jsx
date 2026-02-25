"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Servizi", href: "#servizi" },
  { label: "Progetti", href: "#progetti" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Chiude il menu al click esterno
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

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /**
   * FIX PRINCIPALE: smooth scroll via JS invece di CSS.
   * Il CSS `scroll-behavior: smooth` applicato globalmente causa
   * "blocchi bianchi" su alcuni browser perché combina male con
   * position:fixed, min-h-dvh e overflow. Gestirlo via JS è più
   * affidabile e permette di compensare l'altezza della navbar.
   */
  const handleAnchorClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (!target) return;

    const navbarHeight = 80; // h-20 = 80px
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top: targetTop, behavior: "smooth" });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 h-20 bg-zinc-950/90 backdrop-blur border-b border-zinc-800/50"
      aria-label="Navigazione principale"
    >
      <div className="max-w-6xl mx-auto px-8 h-full flex justify-between items-center relative z-20">
        <Link
          href="#hero"
          aria-label="Torna all'inizio della pagina"
          onClick={(e) => handleAnchorClick(e, "#hero")}
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
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="hover:text-zinc-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contatti"
            onClick={(e) => handleAnchorClick(e, "#contatti")}
            className="bg-violet-600 text-white px-5 py-2 rounded-full hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/20"
          >
            Contattami
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-zinc-300"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 px-6 py-4 shadow-xl transition-all duration-300 ease-in-out -z-10 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="text-left text-zinc-300 py-2 border-b border-zinc-800"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contatti"
            onClick={(e) => handleAnchorClick(e, "#contatti")}
            className="text-left text-violet-400 py-2 font-medium"
          >
            Contattami
          </a>
        </div>
      </div>
    </nav>
  );
}
