"use client"; // Obbligatorio perché usiamo useState per aprire/chiudere le tendine

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// 1. Estraiamo i dati per mantenere il codice pulito e generare lo schema SEO dinamicamente
const faqs = [
    {
        q: "Il sito sarà di mia proprietà o sarò vincolato a voi?",
        a: "La trasparenza è uno dei nostri valori cardine: il sito è tuo. Una volta ultimato il saldo, ti consegniamo le chiavi di tutto. Non usiamo sistemi chiusi per \"intrappolare\" i clienti. Se decidi di restare con noi per la manutenzione e l'hosting è perché sei soddisfatto del servizio, non perché sei obbligato."
    },
    {
        q: "Cosa succede se ho un problema tecnico tra sei mesi?",
        a: "Questo è esattamente il motivo per cui non siamo una \"web agency\" anonima. Avrai un referente unico e diretto. Con il nostro pacchetto di monitoraggio costante, controlliamo il tuo sito 24/7. Se qualcosa non va, interveniamo immediatamente. Non verrai mai lasciato solo dopo la consegna."
    },
    {
        q: "Cosa devo fare io concretamente per iniziare il progetto?",
        a: "Il tuo compito è solo quello di raccontarci la tua attività. Al resto pensiamo noi con la nostra formula \"Chiavi in mano\". Ti guideremo nella scelta dei contenuti e delle immagini necessarie. Una volta approvata la strategia, gestiamo noi tutta la parte tecnica, la configurazione dei server e la messa online, consegnandoti il lavoro finito e pronto a correre."
    },
    {
        q: "Chi gestisce la fatturazione?",
        a: "Per la parte amministrativa e fiscale ci appoggiamo alla nostra struttura aziendale consolidata nel settore tech. Riceverai una fattura elettronica regolare da TEMA TELECOMUNICAZIONI, con tutta la trasparenza e la garanzia di una società reale e presente sul territorio."
    }
];

export default function FAQ() {
    const [openFaq, setOpenFaq] = useState(null);

    // 2. Generiamo lo Schema JSON-LD per i Rich Snippets di Google
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
            {/* 3. Iniettiamo lo script SEO invisibile nell'HTML */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <header className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
                    Domande Frequenti<span className="text-violet-500">.</span>
                </h2>
                <p className="text-zinc-400 text-lg">
                    Le risposte alle domande più comuni per iniziare senza dubbi.
                </p>
            </header>

            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;

                    return (
                        <div
                            key={index}
                            className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden transition-colors hover:border-zinc-700"
                        >
                            <button
                                onClick={() => setOpenFaq(isOpen ? null : index)}
                                // 4. Accessibilità (ARIA): Colleghiamo il bottone al contenuto che apre
                                aria-expanded={isOpen}
                                aria-controls={`faq-answer-${index}`}
                                id={`faq-question-${index}`}
                                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                            >
                                <h3 className="text-lg font-bold text-zinc-100 pr-8">{faq.q}</h3>
                                <ChevronDown
                                    className={`text-violet-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                    size={20}
                                    aria-hidden="true"
                                />
                            </button>

                            <div
                                id={`faq-answer-${index}`}
                                role="region"
                                aria-labelledby={`faq-question-${index}`}
                                // 5. Nascondiamo il testo agli screen reader quando è chiuso
                                aria-hidden={!isOpen}
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-zinc-400 leading-relaxed text-sm border-t border-zinc-800/50 pt-4">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}