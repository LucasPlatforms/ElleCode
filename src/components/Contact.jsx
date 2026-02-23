"use client";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  // Esempio base di gestione form (da espandere in base a cosa userai per spedire le mail)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form inviato!");
    // Qui andrà la logica di EmailJS o la Server Action di Next.js
  };

  return (
    <section id="contatti" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        {/* --- HEADER  --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Contatti<span className="text-violet-500">.</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Hai un progetto in mente? Parliamone senza impegno.
          </p>
        </div>

        {/* --- FORM --- */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-12">
          {/* Aggiunto onSubmit per gestire l'invio in React */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                  placeholder="mario@azienda.it"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
                placeholder="Raccontami del tuo progetto..."
              />
            </div>

            <button
              type="submit"
              aria-label="Invia il messaggio di contatto"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:-translate-y-1"
            >
              Invia messaggio
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-zinc-400">
                <Mail className="w-5 h-5 text-violet-500" />
                <a
                  href="mailto:info@tuodominio.it"
                  className="hover:text-white transition-colors"
                >
                  info@tuodominio.it
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profilo GitHub"
                  className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all hover:-translate-y-1"
                >
                  <Github className="w-5 h-5 text-zinc-300" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profilo LinkedIn"
                  className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5 text-zinc-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <footer className="mt-16 text-center">
          <p className="text-zinc-500 text-sm">
            Progetto supportato da TEMA Telecomunicazioni - P.IVA XXXXXXXX
          </p>
          <p className="text-zinc-600 text-xs mt-2">
            © {new Date().getFullYear()} Tutti i diritti riservati
          </p>
        </footer>
      </div>
    </section>
  );
}
