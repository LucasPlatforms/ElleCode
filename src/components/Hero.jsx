import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

/*
  NOTA: questo componente è un Server Component (nessun "use client").
  Lo smooth scroll degli anchor link è gestito dalla Navbar via JS.
  Il flash bianco è risolto in globals.css con contain: paint sulle section.
*/

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-anchor min-h-dvh bg-linear-to-b from-zinc-950 to-zinc-900 flex items-center justify-center px-6 relative overflow-hidden"
      aria-label="Sezione introduttiva"
    >
      {/* Glow decorativo — pointer-events-none e will-change per GPU layer dedicato */}
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[500px] bg-violet-600/30 blur-3xl md:blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{ willChange: "transform" }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 mb-8 transition-all hover:border-violet-500/50">
          <Zap className="w-4 h-4 text-violet-500" aria-hidden="true" />
          <span className="text-sm text-zinc-300">
            Soluzioni web veloci e concrete
          </span>
        </div>

        {/*
          H1 ottimizzato SEO: parola chiave principale "siti web" in posizione
          prominente, senza sacrificare la leggibilità.
        */}
        <h1 className="text-4xl md:text-7xl font-bold text-zinc-100 mb-6 leading-tight">
          Siti web semplici, solidi e pronti a far crescere la tua attività
          <span className="text-violet-500" aria-hidden="true">
            .
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Soluzioni web chiavi in mano: prestazioni elevate, cura del dettaglio
          e gestione scadenze.
        </p>

        <div className="opacity-0 animate-fade-in-up animate-stagger-1 mt-8">
          {/*
            Link ancora verso #contatti — lo smooth scroll è gestito dalla Navbar.
            Qui usiamo href diretto che funziona anche senza JS (progressive enhancement).
          */}
          <Link
            href="#contatti"
            aria-label="Vai alla sezione contatti per parlare del tuo progetto"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Parliamo del tuo progetto
            <ArrowRight
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}
