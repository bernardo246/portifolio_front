"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 140, damping: 18 });
  const sy = useSpring(my, { stiffness: 140, damping: 18 });
  const rotateY = useTransform(sx, [-20, 20], [8, -8]);
  const rotateX = useTransform(sy, [-20, 20], [-8, 8]);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(62,207,142,0.1),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(62,207,142,0.08),transparent_30%)]" />
      <div className="section-container relative grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Bernardo Cavalcanti Carneiro Leão
          </h1>
          <p className="mt-5 text-lg text-brand">
            Estudante de Ciência da Computação • Desenvolvedor Full Stack • Futuro Engenheiro de Software • Engenheiro de Dados
          </p>
          <p className="mt-6 max-w-2xl text-textSecondary">
            Sou estudante de Ciência da Computação na CESAR School e apaixonado
            por transformar ideias em soluções através da tecnologia. Tenho
            interesse por Engenharia de Software, Desenvolvimento Web, Engenharia
            de Dados, Cloud Computing e Arquitetura de Sistemas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setOpenModal(true)}
              aria-label="Entrar em Contato"
              className="focus-ring rounded-xl bg-brand px-6 py-3 font-semibold text-black transition hover:bg-brandHover"
            >
              Entrar em Contato
            </button>
            <a
              href="#projetos"
              aria-label="Conhecer Projetos"
              className="focus-ring rounded-xl border border-borderSoft bg-white/5 px-6 py-3 font-semibold transition hover:border-brand hover:text-brand"
            >
              Conhecer Projetos
            </a>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto w-full max-w-md [perspective:1000px]"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
            mx.set(x);
            my.set(y);
          }}
          onMouseLeave={() => {
            mx.set(0);
            my.set(0);
          }}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="glass-card relative overflow-hidden rounded-3xl p-4 shadow-glow"
          >
            <div className="absolute inset-0 bg-grid bg-[size:24px_24px] opacity-20" />
            <div className="absolute -left-16 -top-20 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
            <div className="relative animate-float">
              <Image
                src="/images/profile.svg"
                alt="" // AQUI É A DESCRIÇÃO DA FOTO
                width={520}
                height={620}
                priority
                className="h-auto w-full rounded-2xl border border-borderSoft object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
}
