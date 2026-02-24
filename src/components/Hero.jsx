import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-linear-to-b from-zinc-950 to-zinc-900 flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[500px] bg-violet-600/30 blur-3xl md:blur-[120px] rounded-full pointer-events-none will-change-transform" />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 mb-8 backdrop-blur-sm transition-all hover:border-violet-500/50">
          <Zap className="w-4 h-4 text-violet-500" />
          <span className="text-sm text-zinc-300">
            Soluzioni web veloci e concrete
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold text-zinc-100 mb-6 leading-tight">
          La tua attività online con soluzioni web semplici e solide
          <span className="text-violet-500">.</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Soluzioni web chiavi in mano: prestazioni elevate, cura del dettaglio
          e gestione scadenze.
        </p>

        <div className="opacity-0 animate-fade-in-up animate-stagger-1 mt-8">
          <Link
            href="#contatti"
            aria-label="Vai alla sezione contatti per parlare del tuo progetto"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:-translate-y-1"
          >
            Parliamo del tuo progetto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}
