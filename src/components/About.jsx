import { Phone, Code, Target } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Phone,
    title: "Background Telecomunicazioni",
    description:
      "Esperienza nel settore che conta: capisco processi aziendali e infrastrutture.",
  },
  {
    id: 2,
    icon: Code,
    title: "Sviluppo Pragmatico",
    description:
      "Niente soluzioni esotiche. Tecnologie solide e collaudate per risultati certi.",
  },
  {
    id: 3,
    icon: Target,
    title: "Focus sui Risultati",
    description:
      "Il codice è un mezzo. L'obiettivo è far crescere il tuo business.",
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
                Vengo dal mondo delle telecomunicazioni. Ho visto come
                funzionano davvero le aziende, con le loro sfide quotidiane e la
                necessità di strumenti che funzionino subito.
              </p>
              <p>
                Non sono un "nerd in cameretta". Sono uno che capisce il tuo
                business e lo trasforma in soluzioni digitali concrete. Zero
                tecnicismi inutili, solo risultati.
              </p>
              <p>
                Il mio punto di forza?{" "}
                <span className="text-violet-400 font-semibold">
                  L'affidabilità
                </span>
                . Costruisco strumenti che funzionano, punto.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.id}
                  className="group p-6 bg-zinc-800/50 border border-zinc-700/50 rounded-xl hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-8 h-8 text-violet-500 mb-4" />
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
