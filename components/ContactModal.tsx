"use client";

import { AnimatePresence, motion } from "framer-motion";
import { contactLinks } from "@/lib/data";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glass-card w-full max-w-md rounded-2xl p-6 shadow-glow"
            initial={{ y: 30, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold">Entrar em Contato</h3>
            <div className="mt-5 space-y-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={item.label}
                  className="focus-ring block rounded-lg border border-borderSoft bg-white/5 px-4 py-3 transition hover:border-brand hover:bg-brand/10"
                >
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-sm text-textSecondary">{item.value}</p>
                </a>
              ))}
            </div>
            <button
              onClick={onClose}
              aria-label="Fechar modal"
              className="focus-ring mt-5 w-full rounded-lg border border-borderSoft bg-white/5 px-4 py-2 text-sm transition hover:border-brand hover:text-brand"
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
