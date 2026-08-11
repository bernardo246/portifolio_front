"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function International() {
  return (
    <section className="section-container">
      <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12">
        <Image
          src="/images/europe-map.svg"
          alt="Mapa da Europa com Liverpool destacado"
          width={1400}
          height={600}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="absolute left-[45%] top-[30%] h-4 w-4 animate-ping rounded-full bg-brand" />
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experiência Internacional</h2>
          <p className="mt-5 max-w-3xl text-lg text-textSecondary">
            Minha experiência internacional foi fundamental para desenvolver e fortalecer minhas principais soft skills. Durante meu intercâmbio em Liverpool, na Inglaterra, tive a oportunidade de vivenciar uma nova cultura, aprimorar minha fluência em inglês e desenvolver uma comunicação mais eficiente com pessoas de diferentes perfis e nacionalidades.

Além do intercâmbio, também tive a oportunidade de viajar sozinho pela França, Escócia, Holanda e Espanha. Essas experiências me fizeram sair constantemente da minha zona de conforto e desenvolver ainda mais minha autonomia, organização, capacidade de adaptação e resolução de problemas. Viajar sozinho exigiu que eu tomasse decisões de forma independente, lidasse com situações inesperadas e me adaptasse rapidamente a diferentes culturas, ambientes e formas de comunicação.

Acredito que essas experiências contribuíram diretamente para a minha formação pessoal e profissional, fortalecendo meu pensamento crítico, minha confiança e minha capacidade de lidar com desafios. Hoje, me considero uma pessoa que aprende rapidamente, se adapta bem a mudanças, consegue trabalhar com diferentes perfis e não tem receio de enfrentar situações desconhecidas em busca de soluções.

          </p>
        </motion.div>
      </div>
    </section>
  );
}
