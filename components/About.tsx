"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Quem sou eu
      </motion.h2>
      <motion.p
        className="mt-8 max-w-4xl text-lg leading-relaxed text-textSecondary"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Meu nome é <strong className="text-white">Bernardo Cavalcanti Carneiro Leão</strong> e atualmente
        curso Ciência da Computação na CESAR School. Tenho boa lógica de programação, sou extremamente
        curioso e gosto de entender como as tecnologias funcionam internamente. Já explorei diferentes áreas
        da Tecnologia da Informação por meio de projetos envolvendo desenvolvimento web, análise de dados,
        APIs, bancos de dados e engenharia de software. Além das habilidades técnicas, desenvolvi soft skills
        como comunicação, trabalho em equipe, organização, autonomia, adaptação e resolução de problemas.
        Minha experiência internacional em Liverpool fortaleceu minha independência, comunicação intercultural
        e fluência em inglês.
      </motion.p>
      <motion.p
        className="mt-6 max-w-4xl text-lg leading-relaxed text-textSecondary"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Meu objetivo é construir soluções modernas, escaláveis e de qualidade, sempre aprendendo novas
        tecnologias.
      </motion.p>
    </section>
  );
}
