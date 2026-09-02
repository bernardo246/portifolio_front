export const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" }
];

export const interestAreas = [
  "Engenharia de Software",
  "Cloud Computing",
  "Engenharia de Dados",
  "Arquitetura de Sistemas",
  "Desenvolvimento Web",
  "Inteligência Artificial",
  "Ciêntista de dados"
];

export const skills = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Spring Boot",
  "Docker",
  "PostgreSQL",
  "MySQL",
  "SQL",
  "Git",
  "GitHub",
  "Pandas",
  "APIs REST",
  "Cloud",
  "Inteligência Artificial",
  "RPA",
  "n8n",
  "cloude code",
];

export const projects = [
  {
    title: "Jornal do Commercio",
    description: "Reestruturação da página do Jornal do Commercio o qual resolve o desafio de melhorar a experiência de navegação e a fidelização de leitores em um portal de notícias tradicional.",
    technologies: ["Django", "Python"],
    image: "/images/project-jc.svg",
    github: "https://github.com/ceciliasouza06/Projetos-2"
  },
  {
    title: "EcoFlux",
    description:
      "Plataforma fullstack desenvolvida para a Edenred que resolve o problema de mensurar o impacto ambiental da migração de benefícios corporativos físicos (cartões de PVC, vale-papel) para soluções digitais. Calcula emissões de CO2 evitadas, compara o resultado com benchmarks do setor e traduz os números em equivalências compreensíveis (Plataforma de análise de dados para Edenred utilizando Spring Boot, Java e Next.js).",
    technologies: ["Spring Boot", "Java 21", "Next.js","React","TypeScript"],
    image: "/images/project-ecoflux.svg",
    github: "https://github.com/joaoeaa/ecoflux"
  },
  {
    title: "CashPilot",
    description: "Planner financeiro pessoal que resolve a dificuldade de organizar receitas, despesas e hábitos de consumo em um único lugar. Permite controlar entradas e saídas, visualizar a evolução do saldo por gráficos, receber alertas ao se aproximar de limites de gastos e exportar relatórios em CSV/PDF — facilitando o planejamento orçamentário de forma prática.",
    technologies: ["Django", "Web", "Mobile","python","dashboards","visualização de dados"],
    image: "/images/project-cashpilot.svg",
    github: "https://github.com/DecoBorgess/FDS-2025.2"
  },
  {
    title: "Projeto de Análise de Dados",
    description:
      "Projeto de análise exploratória que resolve a necessidade de transformar uma base bruta de vendas em insights de negócio acionáveis. Processa e limpa os dados, e gera visualizações de faturamento por categoria, marca, região e período, apoiando decisões comerciais baseadas em dados",
    technologies: ["Python", "Pandas", "Data Analysis","NumPy","Plotly Express"],
    image: "/images/project-data.svg",
    github: "https://github.com/bernardo246/projeto_an-lise_de_dados)"
  },
  {
    title: "Projeto low code de RPA",
    description: "Projeto low-code em n8n para automatizar o processamento de boletos, realizando leitura, validação, organização e registro das informações de forma automática. A solução utiliza RPA (Robotic Process Automation), tecnologia que usa robôs de software para executar tarefas repetitivas, reduzindo erros e trabalho manual.",
    technologies: ["n8n"],
    image: "/images/RPA_BOLETO.png",
    github: "https://n8n.io/"
  },
    {
    title: "PROJETO DE C",
    description:
      "Jogo desenvolvido em C como projeto da disciplina de Estrutura de Dados (AED), no estilo endless runner aquático inspirado no Rio Capibaribe e na identidade cultural do Recife. O jogador conduz uma embarcação pelo rio, desviando de obstáculos e coletando itens, enquanto o jogo aplica estruturas de dados clássicas em sua lógica interna: fila (lista encadeada) para o fluxo de obstáculos, lista duplamente encadeada circular para o sistema de inventário, e lista encadeada ordenada por Merge Sort para o ranking de pontuações. Utiliza a biblioteca Raylib para renderização gráfica e integra a API Open-Meteo para simular condições climáticas em tempo real no jogo.",
    technologies: ["open meteo", "linguagem C","raylib","cJSON","Make"],
    image: "/images/tela_menu.png",
    github: "https://github.com/bernardo246/NaveganteTDC_capibaribe_aed"
  },
];

export const timelineEvents = [
  "Ingresso na CESAR School",
  "Intercâmbio em Liverpool",
  "Desenvolvimento dos principais projetos",
  "Futuro estágio"
];

export const contactLinks = [
  { label: "GitHub", href: "https://github.com/bernardo246", value: "bernardo246" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/-bernardo-leao-cc/", value: "Bernardo Leão" },
  {
  label: "Email",
  href: "mailto:bernardoleao23@gmail.com",
  value: "bernardoleao23@gmail.com",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5581991549888",
    value: "Conversar no WhatsApp"
  },
  { label: "Telefone", href: "tel:+55(81) 99154-9888", value: "(81) 99154-9888" }
];
