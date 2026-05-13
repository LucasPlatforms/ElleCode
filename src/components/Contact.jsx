"use client";

import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // "" | "sending" | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_avzlpgo",
        "template_h9kbyf7",
        form.current,
        "M_QTOGm7GRp-8EMuE",
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section
      id="contatti"
      className="scroll-anchor py-24 px-6 bg-zinc-950"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6"
          >
            Contatti
            <span className="text-violet-500" aria-hidden="true">
              .
            </span>
          </h2>
          <p className="text-xl text-zinc-400">
            Hai un progetto in mente? Parliamone senza impegno.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-12">
          <form
            className="space-y-6"
            onSubmit={sendEmail}
            noValidate
            aria-label="Modulo di contatto"
            ref={form}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Nome{" "}
                  <span
                    aria-label="campo obbligatorio"
                    className="text-violet-400"
                  >
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Email{" "}
                  <span
                    aria-label="campo obbligatorio"
                    className="text-violet-400"
                  >
                    *
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  placeholder="mario@azienda.it"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Messaggio{" "}
                <span
                  aria-label="campo obbligatorio"
                  className="text-violet-400"
                >
                  *
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                disabled={status === "sending"}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                placeholder="Racconta il tuo progetto..."
              />
            </div>

            {/* Feedback di stato */}
            {status === "success" && (
              <p
                role="alert"
                className="text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3"
              >
                ✓ Messaggio inviato! Ti risponderò il prima possibile.
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3"
              >
                ✕ Qualcosa è andato storto. Riprova o scrivimi direttamente a
                info@ellecode.it
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              aria-label="Invia il messaggio di contatto"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:-translate-y-1 disabled:hover:translate-y-0 disabled:hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
            >
              {status === "sending" ? "Invio in corso..." : "Invia messaggio"}
              <Send
                className={`w-5 h-5 ${
                  status === "sending"
                    ? "animate-pulse"
                    : "group-hover:translate-x-1 transition-transform"
                }`}
                aria-hidden="true"
              />
            </button>
          </form>

          {/* Social / email links */}
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-zinc-400">
                <Mail className="w-5 h-5 text-violet-500" aria-hidden="true" />
                <a
                  href="mailto:info@ellecode.it"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
                >
                  info@ellecode.it
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/LucasPlatforms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profilo GitHub di Ellecode (apre in nuova scheda)"
                  className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
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
                  aria-label="Profilo LinkedIn di Ellecode (apre in nuova scheda)"
                  className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
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
        <footer className="mt-16 text-center" aria-label="Footer">
          <p className="text-zinc-500 text-sm">
            ElleCode - un brand di TEMA Telecomunicazioni S.r.l.
          </p>
          <p className="text-zinc-500 text-sm">
            Via C. Girardengo 1/4 20161 Milano (MI)
          </p>
          <p className="text-zinc-500 text-sm">P.IVA 09330850158</p>
          <p className="text-zinc-600 text-xs mt-2">
            <span aria-label="Copyright">©</span> {new Date().getFullYear()}{" "}
            Tutti i diritti riservati
          </p>
        </footer>
      </div>
    </section>
  );
}
