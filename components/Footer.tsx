export default function Footer() {
  return (
    <footer className="border-t border-borderSoft py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-textSecondary md:flex-row md:items-center md:justify-between md:px-10">
        <p>Bernardo Cavalcanti Carneiro Leão</p>
        <p>{new Date().getFullYear()} • Next.js 16 • TypeScript • TailwindCSS • Framer Motion • GSAP</p>
      </div>
    </footer>
  );
}
