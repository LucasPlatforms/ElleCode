import { Globe, Target, Sparkles, Search, Code2, Gauge, Rocket } from "lucide-react";

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

const workflowSteps = [
  {
    icon: Search,
    title: 'Analisi & Strategia',
    description: 'Capiamo le tue necessità e blocchiamo i contenuti. Nessun passo falso iniziale.',
  },
  {
    icon: Code2,
    title: 'Sviluppo & Anteprima',
    description: 'Vedi il sito crescere in tempo reale su un link privato. Totale trasparenza.',
  },
  {
    icon: Gauge,
    title: 'Ottimizzazione & Test',
    description: 'Velocità record, controllo SEO e test su ogni dispositivo mobile.',
  },
  {
    icon: Rocket,
    title: 'Lancio & Supporto',
    description: 'Messa online e monitoraggio costante. Non ti lascio solo dopo la consegna.',
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

      <header className="my-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
          Il metodo di lavoro<span className="text-violet-500">.</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Tempi certi e zero sorprese. Gestisco il progetto in 4 step chiari per non farti perdere tempo.
        </p>
      </header>

      <div className="max-w-6xl mx-auto relative">

        <div
          className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-zinc-800"
          aria-hidden="true"
        />


        <ol className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            const stepNumber = index + 1;

            return (
              // 5. Ogni step diventa un elemento di lista <li>
              <li key={step.title} className="relative group">
                <div className="w-16 h-16 bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:border-violet-500 transition-colors mx-auto md:mx-0">
                  <Icon className="text-zinc-400 group-hover:text-violet-400 transition-colors" size={24} aria-hidden="true" />

                  {/* Il numeretto visivo dello step */}
                  <div
                    className="absolute -top-3 -right-3 w-6 h-6 bg-violet-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg"
                    aria-hidden="true"
                  >
                    {stepNumber}
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-zinc-100 mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
