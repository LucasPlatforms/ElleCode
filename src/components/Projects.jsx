import Link from "next/link";
import { ExternalLink, CheckCircle2 } from "lucide-react";

const projects = [
  {
    name: "TEMA Telecomunicazioni",
    role: "Gestione e modernizzazione",
    problem:
      "Sito aziendale datato con scarsa presenza online e difficile da aggiornare.",
    solution:
      "Gestione completa del sito con continui aggiornamenti tecnologici e di contenuto per mantenere una presenza web moderna e professionale.",
    result:
      "Sito aziendale sempre aggiornato che riflette l'evoluzione dell'azienda e facilita l'acquisizione di nuovi clienti B2B.",
    tags: ["B2B", "Gestione Continua", "SEO"],
    link: "https://www.tema-ipaudio.com",
  },
  {
    name: "Sevenhead",
    role: "Sito web per palestra",
    problem:
      "Necessità di un sito veloce per acquisire nuovi iscritti con un modulo contatti efficace.",
    solution:
      "Sviluppo di un sito web performante con focus su velocità di caricamento, ottimizzazione SEO locale e form di contatto ottimizzato per conversioni.",
    result:
      "Sito velocissimo con ottima visibilità sui motori di ricerca locali e aumento delle richieste di informazioni.",
    tags: ["Performance", "SEO Locale", "Lead Generation"],
    link: "https://www.sevenhead.it/",
  },
  {
    name: "Al Posto Giusto",
    role: "Sito web per bar a Ibiza",
    problem:
      "Bar in zona turistica necessitava di un sito multilingua perfetto su mobile per clienti internazionali.",
    solution:
      "Creazione di un sito mobile-first multilingua (EN/IT/ES/DE) con estrema attenzione alla velocità su dispositivi mobili e SEO internazionale.",
    result:
      "Esperienza utente eccellente su smartphone, visibilità internazionale e aumento delle prenotazioni da turisti.",
    tags: ["Mobile-First", "Multilingua", "Turismo"],
    link: "https://al-posto-giusto.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="progetti" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Progetti<span className="text-violet-500">.</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Problemi reali, soluzioni concrete, risultati misurabili.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-zinc-950/50 border border-zinc-800 rounded-xl p-8 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-100 mb-2 flex items-center gap-3">
                    {project.link !== "#" ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:text-violet-400 transition-colors"
                        aria-label={`Visita il progetto ${project.name}`}
                      >
                        {project.name}
                        <ExternalLink className="w-5 h-5 text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ) : (
                      <>
                        {project.name}

                        <ExternalLink className="w-5 h-5 text-zinc-600" />
                      </>
                    )}
                  </h3>
                  <p className="text-violet-400 font-medium">{project.role}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs font-medium text-violet-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">
                      Problema
                    </h4>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">
                      Soluzione
                    </h4>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">
                      Risultato
                    </h4>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
