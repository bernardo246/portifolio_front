"use client";

import { motion } from "framer-motion";
import { interestAreas } from "@/lib/data";

export default function Interests() {
  return (
    <section className="section-container">
      <h2 className="section-title">Áreas de Interesse</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {interestAreas.map((area, i) => (
          <motion.article
            key={area}
            className="glass-card rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{
              rotateX: -6,
              rotateY: i % 2 === 0 ? 6 : -6,
              scale: 1.03,
              boxShadow: "0 0 50px rgba(110,231,183,0.25)"
            }}
          >
            <h3 className="text-xl font-semibold">{area}</h3>
            <p className="mt-3 text-sm text-textSecondary">
              Foco em profundidade técnica, soluções escaláveis e evolução
              contínua.
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
