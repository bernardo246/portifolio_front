import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

function SectionFallback() {
  return <div className="section-container h-28 animate-pulse rounded-2xl bg-card/60" />;
}

const Interests = dynamic(() => import("@/components/Interests"), {
  loading: () => <SectionFallback />
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <SectionFallback />
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <SectionFallback />
});
const International = dynamic(() => import("@/components/International"), {
  loading: () => <SectionFallback />
});
const Timeline = dynamic(() => import("@/components/Timeline"), {
  loading: () => <SectionFallback />
});
const ImpactQuote = dynamic(() => import("@/components/ImpactQuote"), {
  loading: () => <SectionFallback />
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <SectionFallback />
});

export default function Home() {
  return (
    <main className="bg-bg text-textPrimary">
      <Navbar />
      <Hero />
      <About />
      <Interests />
      <Skills />
      <Projects />
      <International />
      <Timeline />
      <ImpactQuote />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  );
}
