import {
  Zap,
  TrendingUp,
  CalendarCheck,
  ShieldCheck,
  Package,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: Zap,
    title: "Velocità Record",
    description: "Siti istantanei su ogni dispositivo.",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "SEO al Massimo",
    description: "Ottimizzati per scalare le ricerche Google.",
  },
  {
    id: 3,
    icon: CalendarCheck,
    title: "Scadenze Zero Pensieri",
    description: "Gestisco io server, domini e rinnovi.",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Monitoraggio 24/7",
    description: "Controllo costante che tutto sia online.",
  },
  {
    id: 5,
    icon: Package,
    title: "Tutto Incluso",
    description: "Un pacchetto chiavi in mano e trasparente.",
  },
];

export default function About() {
  return (
    <section
      id="chi-siamo"
      className="scroll-anchor py-24 px-6 bg-zinc-900"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6"
            >
              Chi Siamo
              <span className="text-violet-500" aria-hidden="true">
                .
              </span>
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                <span className="text-violet-400 font-semibold">Elle</span><strong>Code{" "}</strong>
                trasforma le aziende in realtà digitali. Lo facciamo con metodo e, soprattutto, con una visione chiara: la tecnologia deve semplificare il lavoro.
              </p>
              <p>

                Non progettiamo soluzioni generiche. Ogni portale, ogni sistema che sviluppiamo è il risultato di un'<span className="text-violet-400 font-semibold">
                  analisi e ascolto
                </span> delle dinamiche della tua organizzazione.
              </p>
              <p>


                Il nostro impegno non si esaurisce al rilascio. Garantiamo un <span className="text-violet-400 font-semibold">
                  presidio continuativo
                </span>: un referente tecnico dedicato, reattivo e sempre disponibile a intervenire.
              </p>
            </div>
          </div>

          {/* 
            Image ottimizzata: sizes aiuta il browser a scegliere 
            la risoluzione giusta, riducendo il payload su mobile.
          */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/about-img.svg"
              alt="Illustrazione team Ellecode"
              width={341}
              height={305}
              className="md:h-150 w-auto"
              priority
              sizes="(max-width: 768px) 280px, 341px"
            />
          </div>
        </div>

        <div className="md:pt-16 mt-16 md:border-t md:border-zinc-800/50">
          <h3 className="text-2xl font-bold text-zinc-100 mb-12 text-center md:text-left">
            Perché <span className="text-violet-500">Elle</span>Code?
          </h3>

          <ul
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
            role="list"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <li key={feature.id}>
                  <div className="flex items-start gap-4 group">
                    <div
                      className="p-3 rounded-lg border text-violet-400 border-violet-500/30 bg-violet-600/10 transition-all duration-300 shrink-0"
                      aria-hidden="true"
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-zinc-100 font-bold mb-1 group-hover:text-violet-100 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
