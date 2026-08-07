"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <a
      href="#contato"
      aria-label="Ir para seção de contato"
      className="focus-ring fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 font-semibold text-black shadow-glow transition hover:bg-brandHover"
    >
      <MessageCircle size={18} />
      Contato
    </a>
  );
}
