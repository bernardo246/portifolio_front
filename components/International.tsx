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
            Minha experiência internacional fortaleceu minha fluência em inglês, autonomia,
            adaptação, comunicação intercultural e capacidade de resolver problemas em diferentes contextos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
