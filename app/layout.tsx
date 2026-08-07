import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://bernardo-portfolio.dev"),
  title: "Bernardo Cavalcanti Carneiro Leão | Portfólio",
  description:
    "Portfólio premium de Bernardo Cavalcanti Carneiro Leão, estudante de Ciência da Computação focado em Engenharia de Software, Full Stack, Dados e Cloud.",
  openGraph: {
    title: "Bernardo Cavalcanti Carneiro Leão | Portfólio",
    description:
      "Projetos, trajetória e foco em Engenharia de Software, Full Stack, Dados e Cloud.",
    url: "https://bernardo-portfolio.dev",
    siteName: "Portfólio Bernardo Leão",
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Bernardo Cavalcanti Carneiro Leão | Portfólio",
    description:
      "Portfólio premium com projetos, tecnologias e trajetória internacional."
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bernardo Cavalcanti Carneiro Leão",
  jobTitle: "Estudante de Ciência da Computação e Desenvolvedor Full Stack",
  knowsAbout: [
    "Engenharia de Software",
    "Desenvolvimento Web",
    "Engenharia de Dados",
    "Cloud Computing",
    "Arquitetura de Sistemas"
  ],
  alumniOf: "CESAR School"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
