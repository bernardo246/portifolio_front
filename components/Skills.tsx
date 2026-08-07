"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="tecnologias" className="section-container">
      <h2 className="section-title">Tecnologias</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            className="glass-card rounded-xl p-4 text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            whileHover={{ scale: 1.04, borderColor: "#3ECF8E" }}
          >
            <p className="font-medium">{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
