export interface Specification {
  label: string;
  value: string;
}

export interface Variant {
  name: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  image: string;
  category: string;
  price: number;
  specs: Specification[];
  details: string;
  usage: string;
  images?: string[];
  variants?: Variant[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Carvão Premium",
    shortDescription: "Carvão vegetal de alta qualidade, com maior durabilidade e calor intenso para o churrasco perfeito.",
    description: "Nosso carvão premium é cuidadosamente selecionado e processado para garantir a melhor performance em suas churrasqueiras. Com alta concentração de carbono, oferece queima prolongada e calor constante, ideal para profissionais e amadores que buscam excelência.",
    details: "Fabricado a partir de madeira nobre selecionada, este carvão vegetal passa por rigoroso controle de qualidade. Seu poder calorífico é incomparável, mantendo temperatura estável por mais tempo. Perfeito para churrascarias, restaurantes e eventos em geral.",
    usage: "Ideal para churrasqueiras com grelha móvel, churrasqueiras de tambor, fornos de pizza e lareiras. Use aproximadamente 2-3 kg para uma sessão de churrasco de 4 pessoas.",
    benefits: ["Longa duração (até 3 horas)", "Calor intenso e uniforme", "Baixa produção de fumaça", "Sem aditivos químicos", "Sustentável e ecológico"],
    image: "/carvao/principal.jpg",
    images: ["/carvao/principal.jpg", "/carvao/detalhe1.jpg", "/carvao/detalhe2.jpg", "/carvao/detalhe3.jpg"],
    category: "carvao",
    price: 49.90,
    specs: [
      { label: "Peso", value: "4 kg" },
      { label: "Material", value: "Carvão vegetal 100%" },
      { label: "Poder Calorífico", value: "8000 kcal/kg" },
      { label: "Origem", value: "Brasil" },
      { label: "Apresentação", value: "Saco de 4 kg" }
    ]
  },
  {
    id: 2,
    name: "Lenha Shoda",
    shortDescription: "Lenha de primeira qualidade, seca e pronta para uso, ideal para fornos e churrasqueiras.",
    description: "Lenha premium 100% seca, selecionada manualmente para garantir máxima qualidade. Ideal para fornos de pizza, churrasqueiras abertas e lareiras. Oferece aroma especial e queima uniforme, elevando a experiência do seu churrasco.",
    details: "Proveniente de reflorestamento sustentável, nossa lenha passa por secagem natural em ambiente controlado. Cada tora é inspecionada para garantir uniformidade e qualidade. O teor de umidade é inferior a 18%, garantindo queima eficiente.",
    usage: "Use em fornos de pizza, churrasqueiras abertas e lareiras. Para um forno de pizza, recomendamos começar com 3-4 toras. Mantenha a lenha em local seco e coberto.",
    benefits: ["Secagem natural", "Queima uniforme", "Aroma tradicional", "Sem tratamento químico", "Sustentável"],
    image: "/lenha/shoda.jpg",
    category: "lenha",
    price: 89.90,
    specs: [
      { label: "Tipo de Madeira", value: "Eucalipto/Aroeira" },
      { label: "Peso", value: "10 kg" },
      { label: "Comprimento", value: "30-40 cm" },
      { label: "Teor de Umidade", value: "< 18%" },
      { label: "Apresentação", value: "Feixe de 10 kg" }
    ]
  },

  {
    id: 4,
    name: "Sais Temperados Especiais",
    shortDescription: "Blends exclusivos de sais com temperos selecionados para realçar o sabor da sua carne.",
    description: "Misturas refinadas de sal marinho com especiarias selecionadas manualmente. Fórmulas exclusivas Nobre Lenha que realçam o sabor natural das carnes, criando uma crosta perfeita e suculenta.",
    details: "Nossos sais temperados combinam sal marinho grão grosso com temperos naturais de primeira qualidade. Sem conservantes ou aditivos artificiais. Cada blend é calibrado para potencializar o sabor sem exagero.",
    usage: "Aplique generosamente sobre a carne cerca de 30 minutos antes de colocar na grelha. Ideal para picanha, costela, alcatra e cortes especiais.",
    benefits: ["Receitas exclusivas Nobre Lenha", "Ingredientes naturais premium", "Variedade de sabores", "Sabor profissional garantido", "Sem MSG ou conservantes"],
    image: "/sais/principal_v2.jpg",
    images: ["/sais/principal_v2.jpg", "/sais/detalhe_v2.jpg"],
    category: "sal",
    price: 29.90,
    specs: [
      { label: "Peso", value: "500g (cada)" },
      { label: "Tipo", value: "Sais marinhos temperados" },
      { label: "Opções", value: "Puro, Pimenta, Ervas Finas, Chimichurri, Alho, Defumado" },
      { label: "Validade", value: "24 meses" },
      { label: "Apresentação", value: "Stand-up Pouch 500g" }
    ],
    variants: [
      { name: "Sal Parrilla", description: "Sal de parrilla puro, o clássico indispensável para o churrasco perfeito." },
      { name: "Sal com Pimenta", description: "Mistura balanceada que traz a picância ideal para realçar o sabor da carne." },
      { name: "Sal com Chimichurri", description: "Inspirado no tradicional molho argentino, trazendo frescor e complexidade herbal." },
      { name: "Sal com Alho", description: "O toque aromático do alho selecionado, perfeito para cortes bovinos e suínos." },
      { name: "Sal Defumado", description: "Proporciona um sabor defumado natural e profundo, elevando a experiência gourmet." },
      { name: "Sal com Ervas Finas", description: "Leve e aromático, ideal para carnes brancas, peixes ou vegetais na brasa." }
    ]
  },
  {
    id: 5,
    name: "Tábua de Carne Artesanal",
    shortDescription: "Tábuas de madeira nobre, perfeitas para servir e apresentar suas carnes com elegância.",
    description: "Tábua artesanal confeccionada em madeira nobre, com acabamento premium e design exclusivo. Perfeita para servir carnes e alimentos de forma sofisticada, agregando valor à sua apresentação.",
    details: "Cada tábua é confeccionada individualmente em madeira de eucalipto tratado. Acabamento natural com óleo de castanha do Brasil, que além de proteger a madeira, oferece brilho e sofisticação. Possui canaleta para escoamento de líquidos.",
    usage: "Antes de usar pela primeira vez, limpe com água morna e seque bem. Para manutenção, limpe após cada uso e hidrate a madeira com óleo mineral a cada 3 meses. Não submergir em água.",
    benefits: ["Madeira nobre resistente", "Acabamento premium artesanal", "Durabilidade excepcional", "Design exclusivo", "Suporta peso variado"],
    image: "/tabuas/principal.jpg",
    images: ["/tabuas/principal.jpg", "/tabuas/detalhe1.jpg", "/tabuas/detalhe2.jpg"],
    category: "tabua",
    price: 199.90,
    specs: [
      { label: "Material", value: "Eucalipto tratado" },
      { label: "Dimensões", value: "60 x 40 x 2 cm" },
      { label: "Peso", value: "3,5 kg" },
      { label: "Acabamento", value: "Óleo de castanha do Brasil" },
      { label: "Apresentação", value: "Unidade com canaleta" }
    ]
  },
  {
    id: 6,
    name: "Churrasqueira Premium",
    shortDescription: "Churrasqueiras de alta qualidade com design moderno e funcionalidade superior.",
    description: "Churrasqueira premium fabricada em aço carbono de alta espessura com design sofisticado. Distribui calor uniformemente para cozimento perfeito. Ideal para profissionais e amadores exigentes.",
    details: "Construída com aço carbono 3mm, oferece durabilidade e resistência. Possui grelha regulável em altura, permitindo controle preciso de temperatura. Sistema de ventilação otimizado mantém o calor constante.",
    usage: "Pré-aqueça por 10-15 minutos antes de usar. Mantenha a limpeza regular com escova de aço. Para maior durabilidade, cubra quando não utilizar. Ideal para churrascos domésticos e eventos profissionais.",
    benefits: ["Distribuição uniforme de calor", "Grelha regulável em altura", "Design moderno e robusto", "Fácil limpeza", "Construção durável"],
    image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "churrasqueira",
    price: 1299.90,
    specs: [
      { label: "Material", value: "Aço carbono 3mm" },
      { label: "Dimensões", value: "100 x 60 x 90 cm" },
      { label: "Área de Grelha", value: "0,6 m²" },
      { label: "Peso", value: "45 kg" },
      { label: "Apresentação", value: "Unidade completa com grelhas" }
    ]
  },
  {
    id: 7,
    name: "Kit Espetos Profissionais",
    shortDescription: "Espetos em aço inox de alta qualidade, resistentes e duráveis para uso intenso.",
    description: "Kit completo com 6 espetos em aço inoxidável 304, resistente à corrosão e ao calor extremo. Ideais para assados profissionais e churrascos familiares de grande porte.",
    details: "Fabricados em aço inoxidável de alta qualidade, cada espeto mede 85cm de comprimento. Alça ergonômica em madeira tratada oferece conforto e segurança. Pontas aguçadas facilitam a perfuração de carnes.",
    usage: "Pré-aqueça os espetos antes de usar para melhor resultado. Distribua a carne uniformemente para cozimento perfeito. Mantenha a rotação constante durante o cozimento. Ideal para picanha, frango e carnes vermelhas.",
    benefits: ["Aço inoxidável 304", "Resistente ao calor extremo", "Alça ergonômica confortável", "Kit com 6 unidades", "Durabilidade garantida"],
    image: "/espetos/principal.jpg",
    images: ["/espetos/principal.jpg", "/espetos/detalhe1.jpg"],
    category: "espeto",
    price: 159.90,
    specs: [
      { label: "Material", value: "Aço inoxidável 304" },
      { label: "Comprimento", value: "85 cm" },
      { label: "Alça", value: "Madeira de lei tratada" },
      { label: "Quantidade", value: "6 unidades" },
      { label: "Apresentação", value: "Kit com 6 espetos" }
    ]
  }
];
