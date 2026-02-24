"use client";
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
    <section id="chi-siamo" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
              Chi Siamo<span className="text-violet-500">.</span>
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                <span className="text-violet-400 font-semibold">Elle</span>Code
                è un progetto TEMA Telecomunicazioni. Nasce dal mondo delle
                telecomunicazioni e dell'assistenza sul campo. Questa esperienza
                ci permette di capire subito i problemi reali di un'azienda e di
                risolverli con strumenti digitali solidi, senza intoppi tecnici.
              </p>
              <p>
                Il nostro valore aggiunto è la{" "}
                <span className="text-violet-400 font-semibold">
                  capacità di ascolto
                </span>
                . Comprendiamo le dinamiche della tua attività e le trasformiamo
                in soluzioni digitali concrete.
              </p>
              <p>
                Il nostro punto di forza è l'
                <span className="text-violet-400 font-semibold">
                  affidabilità
                </span>
                . In un settore dove spesso è difficile ricevere assistenza
                tempestiva, noi offriamo la sicurezza di un referente sempre
                presente e pronto a intervenire. Costruiamo strumenti che
                funzionano e restiamo al tuo fianco per assicurarci che
                continuino a farlo.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/about-img.svg"
              alt="Illustrazione Sezione Chi Siamo"
              width={341}
              height={305}
              priority
              className="md:h-150 w-auto "
            />
          </div>
        </div>
        <div className="md:pt-16 mt-16 md:border-t md:border-zinc-800/50">
          <h3 className="text-2xl font-bold text-zinc-100 mb-12 text-center md:text-left">
            Perché <span className="text-violet-500">Elle</span>Code?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article key={feature.id} className="">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-lg  border   text-violet-400 border-violet-500/30 bg-violet-600/10 transition-all duration-300 shrink-0">
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
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
