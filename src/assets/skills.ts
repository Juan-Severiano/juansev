export const skills = [
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Biblioteca JavaScript para construção de interfaces de usuário interativas e componentes reutilizáveis.",
  },
  {
    name: "Next.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
    description: "Framework React para produção com SSR, SSG e otimizações automáticas para performance.",
  },
  {
    name: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Superset do JavaScript que adiciona tipagem estática para maior segurança e produtividade.",
  },
  {
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "Runtime JavaScript server-side para construção de APIs robustas e aplicações backend.",
  },
  {
    name: "React Native",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Framework para desenvolvimento de aplicações mobile nativas usando React.",
  },
  {
    name: "Swift",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    description: "Linguagem de programação da Apple para desenvolvimento iOS e macOS nativo.",
  },
  {
    name: "SwiftUI",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    description: "Framework declarativo da Apple para construção de interfaces de usuário em todas as plataformas.",
  },
  {
    name: "NestJS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
    description: "Framework progressivo Node.js para construir aplicações server-side eficientes e escaláveis.",
  },
  {
    name: "Vite",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    description: "Ferramenta de build front-end de próxima geração que oferece uma experiência de desenvolvimento rápida.",
  },
  {
    name: "Remix",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/remix/remix-original.svg",
    description: "Framework web full-stack focado em performance e experiência do desenvolvedor.",
  },
  {
    name: "React Router Dom",
    image: "https://reactrouter.com/_brand/react-router-mark-color.svg",
    description: "Biblioteca de roteamento declarativo para aplicações React.",
  },
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description: "Sistema de controle de versão distribuído para gerenciamento de código.",
  },
  {
    name: "Docker",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: "Plataforma de containerização para deploy e isolamento de aplicações.",
  },
  {
    name: "DDD (Domain-Driven Design)",
    image: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/domain.png",
    description: "Abordagem de desenvolvimento de software focada na modelagem do domínio de negócio.",
  },
  {
    name: "Toastify",
    image: "https://avatars.githubusercontent.com/u/6847776?s=200&v=4",
    description: "Biblioteca para exibir notificações toast personalizáveis em aplicações web.",
  },
  {
    name: "Publicação (App Store)",
    image: "https://img.icons8.com/ios-filled/50/apple-app-store.png",
    description: "Experiência no processo de publicação de aplicativos na Apple App Store.",
  },
  {
    name: "Publicação (Google Play)",
    image: "https://img.icons8.com/color/48/google-play.png",
    description: "Experiência no processo de publicação de aplicativos na Google Play Store.",
  },
];

export const tools = [
  {
    name: "VS Code",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    description: "Editor de código principal com extensões para produtividade e debugging.",
  },
  {
    name: "Xcode",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/67/c9/6c/67c96c86-06f3-1da3-5127-b29ca02c23e9/Xcode-85-220-0-4-0-0-2x-sRGB-0-0.png/1200x630bb.png",
    description: "IDE oficial da Apple para desenvolvimento iOS e macOS com Swift e Objective-C.",
  },
  {
    name: "Figma",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    description: "Ferramenta de design colaborativo para criação de protótipos e interfaces.",
  },
  {
    name: "Postman",
    image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    description: "Ferramenta para teste e documentação de APIs REST e GraphQL.",
  },
  {
    name: "GitHub",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    description: "Plataforma de hospedagem de código com controle de versão e colaboração.",
  },
  {
    name: "Ubuntu",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
    description: "Distribuição Linux popular entre desenvolvedores, com suporte robusto a ferramentas modernas.",
  },
  {
    name: "Terminal (Shell)",
    image: "https://img.icons8.com/ios-filled/50/console.png",
    description: "Interface de linha de comando essencial para automação, Git, build e gerenciamento de projetos.",
  },
  {
    name: "CodeEdit",
    image: "https://www.codeedit.app/_next/image?url=%2Fproduct-icon.png&w=64&q=75",
    description: "Editor de código nativo para macOS, open-source e rápido, como alternativa ao VS Code.",
  },
];

interface Certification {
  name: string
  description: string
  image: string
  link?: string
  pdf?: string
  professor?: string
}

export const mockCertifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    description:
      "Certificação profissional em arquitetura de soluções na AWS, validando a capacidade de projetar sistemas escaláveis e seguros.",
    image: "/placeholder.svg?height=300&width=200",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    pdf: "/mock-pdfs/aws_solutions_architect.pdf", // Exemplo de link para PDF mockado
    professor: "AWS Training and Certification",
  },
  {
    name: "Google Cloud Professional Cloud Developer",
    description:
      "Certificação em desenvolvimento e deploy de aplicações na Google Cloud Platform, cobrindo serviços como App Engine, Cloud Functions e Kubernetes Engine.",
    image: "/placeholder.svg?height=300&width=200",
    link: "https://cloud.google.com/certification/cloud-developer",
    pdf: "/mock-pdfs/gcp_cloud_developer.pdf",
    professor: "Google Cloud Training",
  },
  {
    name: "Meta React Developer Professional Certificate",
    description:
      "Certificação profissional em desenvolvimento React pela Meta, focada em melhores práticas e padrões de projeto para aplicações web modernas.",
    image: "/placeholder.svg?height=300&width=200",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    pdf: "/mock-pdfs/meta_react_developer.pdf",
    professor: "Meta (Coursera)",
  },
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    description:
      "Fundamentos em cloud computing e serviços Azure, abordando conceitos de nuvem, serviços principais do Azure, segurança, privacidade, conformidade e suporte.",
    image: "/placeholder.svg?height=300&width=200",
    link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    pdf: "/mock-pdfs/azure_fundamentals.pdf",
    professor: "Microsoft Learn",
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    description:
      "Certificação que valida a capacidade de projetar, construir, configurar e expor aplicações nativas da nuvem para Kubernetes.",
    image: "/placeholder.svg?height=300&width=200",
    link: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/",
    pdf: "/mock-pdfs/ckad.pdf",
    professor: "Linux Foundation",
  },
  {
    name: "Scrum Master Certified (SMC)",
    description:
      "Certificação que valida o conhecimento e a compreensão do framework Scrum e a capacidade de atuar como Scrum Master.",
    image: "/placeholder.svg?height=300&width=200",
    link: "https://www.scrumstudy.com/scrum-master-certified",
    pdf: "/mock-pdfs/smc.pdf",
    professor: "SCRUMstudy",
  },
]

import type { Project, Link, Company } from "@/api"

const mockCompany: Company = {
  id: "comp1",
  name: "Tech Solutions Inc.",
  description: "Uma empresa líder em soluções de software.",
  startDate: "2020-01-01T00:00:00Z",
  endDate: "2023-12-31T00:00:00Z",
  responsibleName: "Jane Doe",
  responsibleRole: "CTO",
  photoId: "/placeholder.svg?height=50&width=50", // Company logo
}

const mockLinks1: Link = {
  id: "link1",
  github: "https://github.com/Juan-Severiano/toalha-dev",
  publicUrl: "https://toalha.dev",
  figma: "https://www.figma.com/file/toalha-dev",
}

const mockLinks2: Link = {
  id: "link2",
  github: "https://github.com/Juan-Severiano/ecommerce-app",
  publicUrl: "https://ecommerce-app-demo.com",
  figma: "https://www.figma.com/file/ecommerce-app",
}

const mockLinks3: Link = {
  id: "link3",
  github: "https://github.com/Juan-Severiano/dashboard-analytics",
  publicUrl: "https://dashboard-analytics-demo.com",
  figma: "https://www.figma.com/file/dashboard-analytics",
}

export const mockProjects: Project[] = [
  {
    id: "proj1",
    name: "Toalha.Dev",
    slug: "toalha-dev",
    shortDescription: "Plataforma de desafios diários de programação com sistema de ranking e gamificação completa.",
    description:
      "Toalha.Dev é uma plataforma gamificada para desenvolvedores praticarem suas habilidades de programação através de desafios diários. Inclui um sistema de ranking, conquistas e integração com APIs de código para validação automática. Desenvolvido com React no frontend, Node.js no backend e PostgreSQL como banco de dados.",
    skills: ["React", "Node.js", "PostgreSQL", "Gamificação", "APIs REST"],
    linksId: mockLinks1.id,
    companyId: mockCompany.id,
    coverId: "/placeholder.svg?height=400&width=600", // Cover image for the project card
    photoId: "/placeholder.svg?height=800&width=1200", // Larger image for detail page
    createdAt: "2023-03-15T10:00:00Z",
    updatedAt: "2024-01-20T14:30:00Z",
  },
  {
    id: "proj2",
    name: "App Mobile E-commerce",
    slug: "app-mobile-ecommerce",
    shortDescription: "Aplicativo mobile completo para e-commerce com carrinho, pagamentos e notificações push.",
    description:
      "Um aplicativo móvel de e-commerce robusto construído com React Native, oferecendo uma experiência de compra fluida. Possui funcionalidades como carrinho de compras, integração de pagamentos (Stripe), notificações push para atualizações de pedidos e um sistema de gerenciamento de produtos baseado em Firebase.",
    skills: ["React Native", "Firebase", "Redux", "Stripe", "Mobile Development"],
    linksId: mockLinks2.id,
    companyId: mockCompany.id,
    coverId: "/placeholder.svg?height=400&width=600",
    photoId: "/placeholder.svg?height=800&width=1200",
    createdAt: "2022-08-01T09:00:00Z",
    updatedAt: "2023-05-10T11:45:00Z",
  },
  {
    id: "proj3",
    name: "Dashboard Analytics Interativo",
    slug: "dashboard-analytics",
    shortDescription: "Dashboard interativo para análise de dados com gráficos e relatórios em tempo real.",
    description:
      "Um dashboard de analytics dinâmico e responsivo, desenvolvido com Next.js e TypeScript. Permite a visualização de dados em tempo real através de gráficos interativos (Chart.js) e relatórios personalizáveis. O design foi implementado com Tailwind CSS para uma interface moderna e eficiente.",
    skills: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS", "Data Visualization"],
    linksId: mockLinks3.id,
    companyId: mockCompany.id,
    coverId: "/placeholder.svg?height=400&width=600",
    photoId: "/placeholder.svg?height=800&width=1200",
    createdAt: "2023-01-10T11:00:00Z",
    updatedAt: "2023-09-05T16:00:00Z",
  },
]

export const mockLinks = [mockLinks1, mockLinks2, mockLinks3]
export const mockCompanies = [mockCompany]

// Helper function to find a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return mockProjects.find((project) => project.slug === slug)
}

// Helper function to find links by ID
export function getLinksById(id: string): Link | undefined {
  return mockLinks.find((link) => link.id === id)
}

// Helper function to find company by ID
export function getCompanyById(id: string): Company | undefined {
  return mockCompanies.find((company) => company.id === id)
}

