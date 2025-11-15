// src/data/ongs.ts
export type Ong = {
  id: number;
  name: string;
  banner: string;
  logo: string;
  description: string;
  mission?: string;
  since: string;
  donations: number;
  years: number;
  impactedPeople?: number;
  volunteers?: number;
  projects?: number;
  distance: string;
};

export const ongs: Ong[] = [
  {
    id: 1,
    name: "SOS Gatinhos",
    banner:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&w=1600&q=80",
    logo:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&w=400&q=80",
    description:
      "Resgatamos, cuidamos e realojamos gatinhos abandonados. Atuamos com equipes de resgate e lares temporários.",
    mission:
      "Proteger e encontrar lares seguros para todos os gatinhos, promovendo adoção responsável e cuidados veterinários.",
    since: "2018",
    donations: 1240,
    years: 7,
    impactedPeople: 4200,
    volunteers: 85,
    projects: 18,
    distance: "1.2 km",
  },
  {
    id: 2,
    name: "Patinhas Felizes",
    banner:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&w=1600&q=80",
    logo:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&w=400&q=80",
    description:
      "Acolhemos cães e gatos, oferecendo abrigo, tratamentos e programas de adoção.",
    mission:
      "Reduzir o abandono e ampliar o número de adoções por meio de campanhas de conscientização e apoio veterinário.",
    since: "2015",
    donations: 980,
    years: 10,
    impactedPeople: 3500,
    volunteers: 62,
    projects: 12,
    distance: "2.6 km",
  },
  {
    id: 3,
    name: "Casa do Bem",
    banner:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&w=1600&q=80",
    logo:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&w=400&q=80",
    description:
      "Apoiamos famílias em situação de vulnerabilidade com cestas básicas, cursos e assistência social.",
    mission:
      "Gerar oportunidades e fortalecer redes locais de apoio para famílias em situação de risco.",
    since: "2012",
    donations: 2040,
    years: 12,
    impactedPeople: 12000,
    volunteers: 120,
    projects: 32,
    distance: "3.1 km",
  },
  {
    id: 4,
    name: "Ação Solidária",
    banner:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&w=1600&q=80",
    logo:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&w=400&q=80",
    description:
      "Coletamos e distribuímos doações para campanhas emergenciais e programas contínuos.",
    mission:
      "Mobilizar a sociedade para ações rápidas e sustentáveis em momentos de crise.",
    since: "2010",
    donations: 1522,
    years: 14,
    impactedPeople: 8700,
    volunteers: 220,
    projects: 40,
    distance: "4.0 km",
  },
  {
    id: 5,
    name: "Mãos que Ajudam",
    banner:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&w=1600&q=80",
    logo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&w=400&q=80",
    description:
      "Projetos comunitários com foco em distribuição de alimentos e inclusão social.",
    mission:
      "Estabelecer redes locais para garantir acesso a alimentos e oportunidades de desenvolvimento.",
    since: "2016",
    donations: 970,
    years: 8,
    impactedPeople: 5400,
    volunteers: 48,
    projects: 9,
    distance: "5.2 km",
  },
  {
    id: 6,
    name: "Projeto Nutrir",
    banner:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&w=1600&q=80",
    logo:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&w=400&q=80",
    description:
      "Fornecemos refeições nutritivas e apoio nutricional a comunidades vulneráveis.",
    mission:
      "Combater a fome por meio de alimentação adequada e educação nutricional.",
    since: "2014",
    donations: 1880,
    years: 10,
    impactedPeople: 7600,
    volunteers: 70,
    projects: 22,
    distance: "6.3 km",
  },
  {
    id: 7,
    name: "Crianças Primeiro",
    banner:
      "https://images.unsplash.com/photo-1503457574462-bd27054394c1?auto=format&w=1600&q=80",
    logo:
      "https://images.unsplash.com/photo-1503457574462-bd27054394c1?auto=format&w=400&q=80",
    description:
      "Programas educacionais e de proteção para crianças em situação de vulnerabilidade.",
    mission:
      "Garantir acesso à educação e proteção para crianças e adolescentes.",
    since: "2013",
    donations: 720,
    years: 11,
    impactedPeople: 5400,
    volunteers: 35,
    projects: 14,
    distance: "7.4 km",
  },
  {
    id: 8,
    name: "Anjos da Rua",
    banner:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&w=1600&q=80",
    logo:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&w=400&q=80",
    description:
      "Atendimento a pessoas em situação de rua, com kits, orientação e encaminhamentos.",
    mission:
      "Oferecer suporte emergencial e caminhos para reintegração social.",
    since: "2011",
    donations: 1640,
    years: 13,
    impactedPeople: 10300,
    volunteers: 90,
    projects: 25,
    distance: "8.1 km",
  },
];
