import {
  Globe,
  Target,
  Sparkles,
  Search,
  Code2,
  Gauge,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Siti Web Vetrina ad Alte Prestazioni",
    description:
      "Progettazione di siti veloci, curati nel design e ottimizzati per i motori di ricerca. Perfetti per presentare la tua attività nel modo giusto, su qualsiasi dispositivo.",
  },
  {
    icon: Target,
    title: "Landing Page per Prodotti/Servizi",
    description:
      "Una pagina singola, focalizzata e senza distrazioni. Ideale per lanciare un prodotto, una campagna o raccogliere contatti in modo efficace.",
  },
  {
    icon: Sparkles,
    title: "Restyling di un Sito Esistente",
    description:
      "Il tuo sito esiste già ma non ti rappresenta più. Rinnoviamo l'interfaccia per renderla veloce, in linea con i nuovi standard del web e piacevole da usare — senza ripartire da zero.",
  },
];

const workflowSteps = [
  {
    icon: Search,
    title: "Ascolto e analisi",
    description:
      "Capiamo la tua attività, il tuo pubblico e cosa deve comunicare il sito.",
  },
  {
    icon: Code2,
    title: "Sviluppo e anteprima",
    description:
      "Lavoriamo su un link privato che puoi seguire in tempo reale. Niente viene pubblicato senza la tua approvazione.",
  },
  {
    icon: Gauge,
    title: "Test e ottimizzazione",
    description:
      "Prima del lancio verifichiamo velocità, struttura SEO e resa su ogni dispositivo.",
  },
  {
    icon: Rocket,
    title: "Lancio e assistenza",
    description:
      "Messa online e monitoraggio costante. Referente sempre raggiungibile.",
  },
];

export default function Services() {
  return (
    <section
      id="servizi"
      className="scroll-anchor py-24 px-6 bg-zinc-950"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* 
          Usato <header> semantico per la sezione intestazione.
          Rimpiazzato <header> errato nella sezione workflow con <div>.
        */}
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6"
          >
            Servizi
            <span className="text-violet-500" aria-hidden="true">
              .
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Siti web su misura, con focus su prestazioni e affidabilità.
          </p>
        </div>

        {/* Lista servizi — <ul>/<li> invece di div per semantica corretta */}
        <ul className="grid md:grid-cols-3 gap-8" role="list">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li
                key={service.title}
                className="group p-8 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/10"
              >
                <div
                  className="w-14 h-14 bg-violet-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors"
                  aria-hidden="true"
                >
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

      {/* Sezione workflow */}
      <div className="my-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
          Il metodo di lavoro
          <span className="text-violet-500" aria-hidden="true">
            .
          </span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Quattro passaggi chiari e tempi definiti. Gestisco il progetto in 4
          step chiari.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Linea decorativa orizzontale */}
        <div
          className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-zinc-800"
          aria-hidden="true"
        />

        <ol
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
          aria-label="Fasi del processo di lavoro"
        >
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            const stepNumber = index + 1;

            return (
              <li key={step.title} className="relative group">
                <div className="w-16 h-16 bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:border-violet-500 transition-colors mx-auto md:mx-0">
                  <Icon
                    className="text-zinc-400 group-hover:text-violet-400 transition-colors"
                    size={24}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -top-3 -right-3 w-6 h-6 bg-violet-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg"
                    aria-hidden="true"
                  >
                    {stepNumber}
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-zinc-100 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
