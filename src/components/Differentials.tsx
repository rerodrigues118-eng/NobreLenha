import { Award, Truck, Star, HeartHandshake, Flame, Shield, Store, CheckCircle2, ChevronRight } from 'lucide-react';

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
    <section id="diferenciais" className="py-20 bg-black relative overflow-hidden">
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

        {/* Balão B2B - Comércios e Distribuidoras */}
        <div className="mt-24 relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/20 shadow-2xl shadow-yellow-500/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 w-full text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-yellow-500/20">
                <Store className="w-4 h-4" />
                Para Comércios e Distribuidoras
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Você vende carvão no seu comércio?
              </h3>

              <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                Então você precisa de um fornecedor que entregue <strong className="text-white font-semibold">produto que gira</strong>, não que fica parado no estoque.
              </p>

              <div className="space-y-4 mb-8 text-left inline-flex flex-col">
                <p className="text-gray-400 mb-2">A Nobre Lenha abastece supermercados, postos, churrascarias e distribuidoras há mais de 13 anos com:</p>
                {[
                  "Carvão de alta qualidade",
                  "Produto com recompra constante",
                  "Preço competitivo",
                  "Entrega no prazo"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-200 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl mb-10 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                <p className="text-xl text-white font-medium mb-1">Seu cliente já compra churrasco.</p>
                <p className="text-yellow-500 font-bold text-2xl">Garanta que ele compre de você.</p>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-4">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 w-full sm:w-auto"
                >
                  Fale com a Nobre Lenha
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  👉 Abasteça seu estoque com quem entende do mercado.
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:w-1/3">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 relative shadow-2xl shadow-yellow-500/10">
                <img
                  src="/b2b-banner.jpg"
                  alt="Carvão Premium Nobre Lenha para revenda"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-8">
                  <div className="text-center w-full bg-black/60 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-4">
                    <div className="text-4xl font-black text-yellow-500 mb-1">+13 Anos</div>
                    <div className="text-white font-medium uppercase tracking-wider text-xs">Abastecendo o Mercado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
