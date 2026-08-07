"use client";

import { motion } from "framer-motion";
import { timelineEvents } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Timeline() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-container">
      <h2 className="section-title">Timeline</h2>
      <div className="relative mt-10 ml-3 border-l border-borderSoft pl-8">
        {timelineEvents.map((event, i) => (
          <motion.div
            key={event}
            className="relative mb-10"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-brand shadow-glow" />
            <h3 className="text-xl font-semibold">{event}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
