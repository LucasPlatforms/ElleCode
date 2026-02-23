import { Globe, Target, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Siti Web Vetrina ad Alte Prestazioni",
    description:
      "Progettazione di siti veloci e ottimizzati per i motori di ricerca. Perfetti per presentare la tua attività con un design moderno che funziona perfettamente su ogni dispositivo.",
  },
  {
    icon: Target,
    title: "Landing Page per Prodotti/Servizi",
    description:
      "Devi lanciare un nuovo prodotto o una campagna? Sviluppo pagine singole mirate alla conversione e all'acquisizione di contatti, senza distrazioni.",
  },
  {
    icon: Sparkles,
    title: "Restyling Frontend",
    description:
      "Hai un sito che sente il peso degli anni? Ridisegnamo l'interfaccia visiva per renderlo moderno e in linea con i nuovi standard del web, migliorando l'esperienza utente.",
  },
];

export default function Services() {
  return (
    <section id="servizi" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Servizi<span className="text-violet-500">.</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Strumenti digitali su misura, con focus su prestazioni e
            affidabilità.
          </p>
        </header>

        <ul className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <li
                key={index}
                className="group p-8 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/10"
              >
                <div className="w-14 h-14 bg-violet-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
                  <Icon
                    className="w-7 h-7 text-violet-500"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-xl font-semibold text-zinc-100 mb-4 leading-snug">
                  {service.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
