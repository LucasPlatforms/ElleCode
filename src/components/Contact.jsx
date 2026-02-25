"use client";
import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // TODO: sostituire con EmailJS o una Next.js Server Action
      // Esempio Server Action: await sendContactEmail(data)
      console.log("Form data:", data);

      // Simula risposta positiva
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contatti" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Contatti<span className="text-violet-500">.</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Hai un progetto in mente? Parliamone senza impegno.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-12">
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
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
                  autoComplete="name"
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
                  autoComplete="email"
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

            {/* Feedback messaggi */}
            {status === "success" && (
              <p role="status" className="text-green-400 text-sm font-medium">
                ✓ Messaggio inviato! Ti rispondo al più presto.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="text-red-400 text-sm font-medium">
                Si è verificato un errore. Riprova o scrivimi direttamente via
                email.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              aria-label="Invia il messaggio di contatto"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:-translate-y-1"
            >
              {status === "loading" ? "Invio in corso..." : "Invia messaggio"}
              <Send
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-zinc-400">
                <Mail className="w-5 h-5 text-violet-500" aria-hidden="true" />
                <a
                  href="mailto:info@ellecode.it"
                  className="hover:text-white transition-colors"
                >
                  info@ellecode.it
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profilo GitHub di Ellecode"
                  className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all hover:-translate-y-1"
                >
                  <Github
                    className="w-5 h-5 text-zinc-300"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profilo LinkedIn di Ellecode"
                  className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all hover:-translate-y-1"
                >
                  <Linkedin
                    className="w-5 h-5 text-zinc-300"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-zinc-500 text-sm">
            Progetto supportato da TEMA Telecomunicazioni &mdash; P.IVA
            09330850158
          </p>
          <p className="text-zinc-600 text-xs mt-2">
            &copy; {new Date().getFullYear()} Tutti i diritti riservati
          </p>
        </footer>
      </div>
    </section>
  );
}
