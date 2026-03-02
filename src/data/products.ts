export interface Specification {
  label: string;
  value: string;
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
    image: "https://images.pexels.com/photos/1878885/pexels-photo-1878885.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "carvao",
    price: 49.90,
    specs: [
      { label: "Peso", value: "5 kg" },
      { label: "Material", value: "Carvão vegetal 100%" },
      { label: "Poder Calorífico", value: "8000 kcal/kg" },
      { label: "Origem", value: "Brasil" },
      { label: "Apresentação", value: "Saco de 5 kg" }
    ]
  },
  {
    id: 2,
    name: "Lenha Selecionada",
    shortDescription: "Lenha de primeira qualidade, seca e pronta para uso, ideal para fornos e churrasqueiras.",
    description: "Lenha premium 100% seca, selecionada manualmente para garantir máxima qualidade. Ideal para fornos de pizza, churrasqueiras abertas e lareiras. Oferece aroma especial e queima uniforme, elevando a experiência do seu churrasco.",
    details: "Proveniente de reflorestamento sustentável, nossa lenha passa por secagem natural em ambiente controlado. Cada tora é inspecionada para garantir uniformidade e qualidade. O teor de umidade é inferior a 18%, garantindo queima eficiente.",
    usage: "Use em fornos de pizza, churrasqueiras abertas e lareiras. Para um forno de pizza, recomendamos começar com 3-4 toras. Mantenha a lenha em local seco e coberto.",
    benefits: ["Secagem natural", "Queima uniforme", "Aroma tradicional", "Sem tratamento químico", "Sustentável"],
    image: "https://images.pexels.com/photos/3560156/pexels-photo-3560156.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    id: 3,
    name: "Briquetes de Alta Performance",
    shortDescription: "Briquetes compactados com alto poder calorífico e queima prolongada.",
    description: "Briquetes eco-friendly fabricados com serragem prensada. Oferecem desempenho superior ao carvão comum, com queima mais limpa e eficiente. Perfeitos para quem busca economia e sustentabilidade.",
    details: "Produzidos a partir de resíduos de madeira, nossos briquetes não contêm aglutinantes químicos. São compactados sob alta pressão para garantir durabilidade máxima. Ideal para churrasqueiras, fornos e aquecimento.",
    usage: "Use 1,5-2 kg de briquetes para uma sessão de 2-3 horas. Empilhe os briquetes formando pirâmide para melhor circulação de ar e queima uniforme.",
    benefits: ["Queima 50% mais tempo que carvão", "Zero resíduos tóxicos", "Econômico e sustentável", "Fácil armazenamento", "Sem poeira"],
    image: "https://images.pexels.com/photos/1709528/pexels-photo-1709528.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "briquete",
    price: 59.90,
    specs: [
      { label: "Peso", value: "8 kg" },
      { label: "Composição", value: "100% serragem de madeira" },
      { label: "Poder Calorífico", value: "9200 kcal/kg" },
      { label: "Tempo de Queima", value: "3-4 horas por unidade" },
      { label: "Apresentação", value: "Caixa com 8 kg" }
    ]
  },
  {
    id: 4,
    name: "Sal Temperado Especial",
    shortDescription: "Blend exclusivo de sal com temperos selecionados para realçar o sabor da sua carne.",
    description: "Mistura refinada de sal marinho com especiarias selecionadas manualmente. Fórmula exclusiva Nobre Lenha que realça o sabor natural das carnes, criando uma crosta perfeita e suculenta.",
    details: "Nosso sal temperado combina sal marinho grão grosso com temperos naturais de primeira qualidade. Sem conservantes ou aditivos artificiais. Cada dose é calibrada para potencializar o sabor sem exagero.",
    usage: "Aplique generosamente sobre a carne cerca de 30 minutos antes de colocar na grelha. Use aproximadamente 5-8 gramas por quilograma de carne. Ideal para picanha, costela e alcatra.",
    benefits: ["Receita exclusiva Nobre Lenha", "Ingredientes naturais premium", "Versatilidade de uso", "Sabor profissional garantido", "Sem MSG ou conservantes"],
    image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "sal",
    price: 29.90,
    specs: [
      { label: "Peso", value: "500g" },
      { label: "Tipo", value: "Sal marinho temperado" },
      { label: "Ingredientes", value: "Sal, alho, pimenta, cominho, alecrim" },
      { label: "Validade", value: "24 meses" },
      { label: "Apresentação", value: "Pote 500g" }
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
    image: "https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=800",
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
