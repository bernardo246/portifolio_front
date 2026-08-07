"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projetos" className="section-container">
      <h2 className="section-title">Projetos</h2>
      <div className="mt-12 space-y-10">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`grid items-center gap-7 rounded-3xl border border-borderSoft bg-card/70 p-6 backdrop-blur-xl lg:grid-cols-2 ${
              i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl border border-borderSoft">
              <Image
                src={project.image}
                alt={`Imagem do projeto ${project.title}`}
                width={1200}
                height={700}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-textSecondary">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-borderSoft px-3 py-1 text-xs text-textSecondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir GitHub do projeto ${project.title}`}
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 font-semibold text-black transition hover:bg-brandHover"
              >
                GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
