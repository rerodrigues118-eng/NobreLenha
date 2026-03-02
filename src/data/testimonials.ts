export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Eduardo",
    role: "Churrasqueiro Profissional",
    content: "A Nobre Lenha revolucionou meu trabalho. O carvão é de qualidade excepcional e a entrega é sempre pontual. Meus clientes notaram a diferença!",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200"
  },
  {
    id: 2,
    name: "Marcelo Santos",
    role: "Entusiasta de Churrasco",
    content: "Compro sempre com a Nobre Lenha. Os produtos são premium mesmo, não tem comparação. O sal temperado é sensacional!",
    rating: 5,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200"
  },
  {
    id: 3,
    name: "Roberto Almeida",
    role: "Dono de Restaurante",
    content: "Uso os briquetes no meu restaurante há mais de um ano. Economia e qualidade garantidas. Atendimento nota 10!",
    rating: 5,
    image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200&h=200"
  },
  {
    id: 4,
    name: "André Ferreira",
    role: "Cliente Residencial",
    content: "Meu churrasco de fim de semana nunca foi o mesmo depois que conheci a Nobre Lenha. Produtos de primeira e preço justo!",
    rating: 5,
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200"
  },
  {
    id: 5,
    name: "Paulo Henrique",
    role: "Chef de Cozinha",
    content: "A lenha selecionada faz toda diferença no sabor. Recomendo para todos os profissionais da área!",
    rating: 5,
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200"
  },
  {
    id: 6,
    name: "Ricardo Lima",
    role: "Churrasqueiro de Fim de Semana",
    content: "Excelente custo-benefício. A qualidade é superior e a entrega sempre no prazo. Virei cliente fiel!",
    rating: 5,
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=200&h=200"
  }
];
