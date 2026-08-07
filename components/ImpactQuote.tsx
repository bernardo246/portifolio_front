"use client";

import { motion } from "framer-motion";

export default function ImpactQuote() {
  return (
    <section className="section-container">
      <motion.blockquote
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl rounded-3xl border border-brand/30 bg-gradient-to-r from-card to-bgSecondary p-10 text-center text-2xl font-medium leading-relaxed shadow-glow md:text-3xl"
      >
        &quot;Acredito que tecnologia é muito mais do que escrever código: é entender problemas,
        colaborar com pessoas e construir soluções que fazem diferença.&quot;
      </motion.blockquote>
    </section>
  );
}
