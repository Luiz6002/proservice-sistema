export const providers = [
  {
    id: 1,
    name: 'Carlos Henrique',
    username: '@carlos.eletrica',
    city: 'Anápolis - GO',
    distance: '2,4 km',
    price: 120,
    rating: 4.9,
    jobs: 86,
    category: 'Eletricista residencial',
    description: 'Profissional especializado em instalação elétrica, troca de disjuntores, tomadas, chuveiros, luminárias e manutenção preventiva para residências e pequenos comércios.',
    skills: ['Instalação elétrica', 'Tomadas', 'Chuveiro', 'Manutenção'],
    photo: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'João Batista',
    username: '@joao.hidraulica',
    city: 'Anápolis - GO',
    distance: '3,1 km',
    price: 95,
    rating: 4.8,
    jobs: 64,
    category: 'Encanador e manutenção',
    description: 'Atendimento para vazamentos, instalação de torneiras, sifões, caixas acopladas, limpeza de encanamento e pequenos reparos hidráulicos com orçamento transparente.',
    skills: ['Vazamento', 'Torneiras', 'Pia', 'Hidráulica'],
    photo: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Rafael Martins',
    username: '@rafa.climatizacao',
    city: 'Goiânia - GO',
    distance: '12 km',
    price: 140,
    rating: 4.7,
    jobs: 51,
    category: 'Ar-condicionado',
    description: 'Instalação, higienização e manutenção de ar-condicionado split, com foco em segurança, acabamento limpo e garantia do serviço executado.',
    skills: ['Climatização', 'Instalação', 'Limpeza técnica', 'Split'],
    photo: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    name: 'Marcos Vinícius',
    username: '@marcos.reformas',
    city: 'Anápolis - GO',
    distance: '5,7 km',
    price: 180,
    rating: 4.9,
    jobs: 73,
    category: 'Pedreiro e reformas',
    description: 'Pequenas reformas, assentamento de revestimentos, pintura, reparos em paredes, acabamentos e manutenção geral para casas e lojas.',
    skills: ['Reformas', 'Pintura', 'Revestimento', 'Acabamento'],
    photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80'
  }
];

export const categories = [
  { title: 'Elétrica', icon: '⚡', count: '42 profissionais' },
  { title: 'Hidráulica', icon: '💧', count: '31 profissionais' },
  { title: 'Reformas', icon: '🧱', count: '28 profissionais' },
  { title: 'Climatização', icon: '❄️', count: '19 profissionais' },
  { title: 'Pintura', icon: '🎨', count: '24 profissionais' },
  { title: 'Jardinagem', icon: '🌿', count: '15 profissionais' }
];

export const opportunities = [
  {
    id: 1,
    title: 'Instalar ar-condicionado split 12.000 BTUs',
    customer: 'Fernanda Souza',
    location: 'Jundiaí, Anápolis - GO',
    tags: ['Instalação', 'Climatização', 'Hoje'],
    budget: 280,
    status: 'disponível'
  },
  {
    id: 2,
    title: 'Trocar resistência de chuveiro e revisar tomada',
    customer: 'Marcos Ribeiro',
    location: 'Centro, Anápolis - GO',
    tags: ['Elétrica', 'Rápido', 'Residencial'],
    budget: 110,
    status: 'disponível'
  },
  {
    id: 3,
    title: 'Consertar vazamento em pia da cozinha',
    customer: 'Juliana Moraes',
    location: 'Setor Sul, Goiânia - GO',
    tags: ['Hidráulica', 'Urgente'],
    budget: 150,
    status: 'disponível'
  },
  {
    id: 4,
    title: 'Pintura de parede interna com massa corrida',
    customer: 'Ana Paula',
    location: 'Vila Jaiara, Anápolis - GO',
    tags: ['Pintura', 'Acabamento'],
    budget: 420,
    status: 'novo'
  }
];

export const myServices = [
  { id: 1, title: 'Revisão elétrica residencial', username: '@carlos.eletrica', price: 120, status: 'Agendado', date: 'Hoje, 16:30' },
  { id: 2, title: 'Conserto de vazamento', username: '@joao.hidraulica', price: 95, status: 'Em andamento', date: 'Amanhã, 09:00' },
  { id: 3, title: 'Instalação de ar-condicionado', username: '@rafa.climatizacao', price: 280, status: 'Orçamento enviado', date: 'Sexta, 14:00' }
];

export const testimonials = [
  { name: 'Patrícia Lima', text: 'Consegui contratar um eletricista no mesmo dia. O atendimento foi rápido e o preço ficou claro antes do serviço.' },
  { name: 'Bruno Alves', text: 'A plataforma passa confiança porque mostra avaliação, localização e histórico do prestador.' }
];
