import { Award, Truck, Star, HeartHandshake, Flame, Shield } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      icon: Award,
      title: "Alta Qualidade",
      description: "Produtos premium selecionados criteriosamente para garantir a melhor experiência"
    },
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Logística eficiente com entregas ágeis para você receber seus produtos rapidamente"
    },
    {
      icon: Star,
      title: "Produto Selecionado",
      description: "Cada item passa por rigoroso controle de qualidade antes de chegar até você"
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Personalizado",
      description: "Equipe dedicada pronta para ajudar você a escolher os melhores produtos"
    },
    {
      icon: Flame,
      title: "Para Profissionais e Residências",
      description: "Produtos versáteis ideais tanto para churrascos profissionais quanto familiares"
    },
    {
      icon: Shield,
      title: "Garantia de Satisfação",
      description: "Compromisso total com a sua satisfação e qualidade dos nossos produtos"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Por Que Escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Nobre Lenha?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Excelência e compromisso em cada detalhe para o seu churrasco perfeito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-all duration-300"></div>

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/50">
                    <Icon className="w-8 h-8 text-black" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
