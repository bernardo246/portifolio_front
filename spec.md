# Portfólio/Currículo Web - Especificação

## Objetivo

Desenvolver um portfólio pessoal premium utilizando **Next.js 15 (App Router)**, **React**, **TypeScript**, **TailwindCSS**, **Framer Motion**, **GSAP (ScrollTrigger)**, **Lucide React** e **next/image**, com foco em performance, SEO, acessibilidade e animações modernas.

O site deve transmitir profissionalismo, inovação, curiosidade, atenção aos detalhes e paixão por tecnologia. A experiência deve lembrar os sites da **Apple**, **Supabase**, **Vercel**, **Stripe** e **Linear**, utilizando efeitos 3D, parallax, profundidade, glow e transições cinematográficas durante o scroll.

---

# Identidade Visual

## Estilo

- Minimalista
- Premium
- Futurista
- Elegante
- Escuro
- Muito fluido
- Aparência tridimensional utilizando apenas CSS e animações (não utilizar Three.js, salvo pequenos detalhes decorativos).

## Paleta

Fundo Principal → `#050505`

Fundo Secundário → `#0B0B0B`

Cards → `#141414`

Bordas → `#252525`

Texto Principal → `#FFFFFF`

Texto Secundário → `#BDBDBD`

Verde Principal (Supabase) → `#3ECF8E`

Verde Hover → `#2EB67D`

Glow Verde → `#6EE7B7`

O preto deve dominar aproximadamente 95% da interface, enquanto o verde deve aparecer apenas para destacar elementos importantes (botões, links, títulos, ícones, indicadores, hover e efeitos de iluminação).

Utilizar Glassmorphism, sombras suaves, glow verde, gradientes discretos e bastante espaço em branco.

---

# Estrutura

Navbar

↓

Hero

↓

Sobre Mim

↓

Áreas de Interesse

↓

Tecnologias

↓

Projetos

↓

Experiência Internacional

↓

Timeline

↓

Contato

↓

Footer

---

# Navbar

- Transparente inicialmente.
- Fixa no topo.
- Ao rolar:
  - fundo escurece;
  - blur aumenta;
  - transição suave.
- Links:
  - Sobre
  - Tecnologias
  - Projetos
  - Contato

---

# Hero

Tela inteira (100vh).

Layout dividido em duas colunas.

## Esquerda

Título

**Bernardo Cavalcanti Carneiro Leão**

Subtítulo

Estudante de Ciência da Computação • Desenvolvedor Full Stack • Futuro Engenheiro de Software

Descrição

Sou estudante de Ciência da Computação na CESAR School e apaixonado por transformar ideias em soluções através da tecnologia. Tenho interesse por Engenharia de Software, Desenvolvimento Web, Engenharia de Dados, Cloud Computing e Arquitetura de Sistemas, buscando constantemente aprender novas tecnologias e enfrentar desafios.

Botões

- Entrar em Contato
- Conhecer Projetos

O botão "Entrar em Contato" deve abrir um modal contendo:

- GitHub
- LinkedIn
- Email
- WhatsApp
- Telefone

## Direita

Foto profissional.

A foto deve ficar em um card de vidro (Glassmorphism), com glow verde, fundo com grid, partículas e animação de flutuação.

Ao mover o mouse, a foto acompanha levemente o cursor.

---

# Sobre Mim

Título

Quem sou eu

Texto

Meu nome é **Bernardo Cavalcanti Carneiro Leão** e atualmente curso Ciência da Computação na CESAR School.

Tenho boa lógica de programação, sou extremamente curioso e gosto de entender como as tecnologias funcionam internamente.

Já explorei diferentes áreas da Tecnologia da Informação por meio de projetos envolvendo desenvolvimento web, análise de dados, APIs, bancos de dados e engenharia de software.

Além das habilidades técnicas, desenvolvi soft skills como comunicação, trabalho em equipe, organização, autonomia, adaptação e resolução de problemas.

Minha experiência internacional em Liverpool fortaleceu minha independência, comunicação intercultural e fluência em inglês.

Tenho interesse principalmente nas áreas de:

- Engenharia de Software
- Desenvolvimento Full Stack
- Engenharia de Dados
- Cloud Computing
- Arquitetura de Sistemas
- DevOps
- Inteligência Artificial

Meu objetivo é construir soluções modernas, escaláveis e de qualidade, sempre aprendendo novas tecnologias.

---

# Áreas de Interesse

Criar grandes cards animados para:

- Engenharia de Software
- Cloud Computing
- Engenharia de Dados
- Arquitetura de Sistemas
- Desenvolvimento Web
- Inteligência Artificial

Cada card deve possuir hover, glow, leve rotação e efeito 3D.

---

# Tecnologias

Exibir cards animados para:

- Java
- Python
- JavaScript
- TypeScript
- React
- Next.js
- Spring Boot
- Docker
- PostgreSQL
- MySQL
- SQL
- Git
- GitHub
- Pandas
- APIs
- Cloud
- Inteligência Artificial

---

# Projetos

Cada projeto deve possuir imagem, descrição, tecnologias utilizadas e botões para GitHub.

Projetos:

### Jornal do Commercio

Reestruturação da página utilizando Django e Python.

### EcoFlux

Plataforma de análise de dados para Edenred utilizando Spring Boot, Java e Next.js.

### CashPilot

Aplicação Web/Mobile para controle financeiro utilizando Django.

### Projeto de Análise de Dados

Análise de dados de supermercados utilizando Python e Pandas.

Os cards devem aparecer alternadamente (esquerda/direita) durante o scroll.

---

# Experiência Internacional

Criar uma seção destacando o intercâmbio em Liverpool.

Plano de fundo com mapa da Europa.

Liverpool destacado.

Texto:

Minha experiência internacional fortaleceu minha fluência em inglês, autonomia, adaptação, comunicação intercultural e capacidade de resolver problemas em diferentes contextos.

---

# Timeline

Linha do tempo vertical.

Eventos:

- Ingresso na CESAR School
- Intercâmbio em Liverpool
- Desenvolvimento dos principais projetos
- Futuro estágio

Cada item aparece quando entra na tela.

---

# Frase de Impacto

Adicionar uma seção central contendo apenas:

> "Acredito que tecnologia é muito mais do que escrever código: é entender problemas, colaborar com pessoas e construir soluções que fazem diferença."

Essa frase deve possuir animação de fade, zoom e glow verde.

---

# Contato

Grande título.

"Vamos construir algo incrível?"

Texto

Estou aberto a oportunidades de estágio, novos desafios e projetos que permitam meu crescimento profissional e a criação de soluções inovadoras.

Botões grandes:

- GitHub
- LinkedIn
- Email
- WhatsApp
- Telefone

Também deve existir um botão flutuante de contato visível durante toda a navegação.

---

# Footer

Nome completo.

Ano.

Tecnologias utilizadas na construção do site.

---

# Animações

Todas as animações devem ser suaves e cinematográficas.

Utilizar:

- Fade In
- Fade Out
- Blur
- Scale
- Rotate
- TranslateY
- TranslateZ
- Mouse Parallax
- Scroll Parallax
- Scroll Reveal
- Glow Animado
- Floating Animation
- Smooth Scroll

Cada seção deve entrar na tela conforme o usuário rola a página, criando sensação de profundidade e movimento.

---

# Responsividade

Desktop → experiência completa.

Notebook → pequenos ajustes.

Tablet → grid reduzido.

Mobile → layout em coluna, menu hambúrguer, mantendo todas as animações adaptadas.

---

# Performance

Utilizar:

- next/image
- Lazy Loading
- Dynamic Imports
- Server Components quando possível
- Suspense
- Otimização de imagens

Objetivo:

Lighthouse acima de 95 em todas as categorias.

---

# SEO

Adicionar:

- Metadata API
- Open Graph
- Twitter Cards
- robots.txt
- sitemap.xml
- Schema.org (Person)

---

# Acessibilidade

- Navegação por teclado.
- aria-label em todos os botões.
- Contraste AA.
- Focus visível.
- HTML semântico.

---

# Estrutura

```
app/
components/
hooks/
lib/
styles/
public/images/
```

Componentes:

- Navbar
- Hero
- About
- Interests
- Skills
- Projects
- International
- Timeline
- Contact
- Footer
- FloatingContact
- ContactModal

---

# Personalidade que o site deve transmitir

O visitante deve perceber imediatamente que Bernardo Cavalcanti Carneiro Leão é um estudante de Ciência da Computação apaixonado por tecnologia, curioso, com boa lógica de programação, facilidade para aprender, comunicação eficiente, espírito colaborativo e capacidade de adaptação. O site deve demonstrar interesse por Engenharia de Software, Engenharia de Dados, Cloud Computing, Arquitetura de Sistemas e Desenvolvimento Web, evidenciando uma trajetória construída por aprendizado contínuo, projetos práticos e vontade constante de evoluir. A experiência deve ser elegante, moderna e memorável, fazendo com que recrutadores enxerguem não apenas as habilidades técnicas, mas também o perfil profissional e humano do candidato.
