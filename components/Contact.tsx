"use client";

import { contactLinks } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contato" className="section-container">
      <h2 className="section-title">Vamos construir algo incrível?</h2>
      <p className="mt-6 max-w-3xl text-lg text-textSecondary">
        Estou aberto a oportunidades de estágio, novos desafios e projetos que permitam meu crescimento profissional
        e a criação de soluções inovadoras.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contactLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="focus-ring rounded-xl border border-borderSoft bg-card p-5 text-lg font-semibold transition hover:border-brand hover:shadow-glow"
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
