import { MessageCircle, ShoppingCart } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = "5511999999999";
  const mercadoLivreUrl = "https://www.mercadolivre.com.br";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero_bg3.jpg')] bg-cover bg-center opacity-30"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="inline-block mb-2">
          <img src="/logo.png" alt="Nobre Lenha Logo" className="w-40 h-auto drop-shadow-[0_0_10px_rgba(234,179,8,0.2)] hover:scale-105 transition-transform duration-300" />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Carvão e Acessórios <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Premium</span>
          <br />para Seu Churrasco Perfeito
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
          Qualidade superior, entrega rápida e produtos selecionados para transformar seu churrasco em uma experiência inesquecível
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={mercadoLivreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <ShoppingCart className="w-6 h-6" />
            Comprar no Mercado Livre
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold text-lg rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: "Qualidade Premium", value: "100%" },
            { label: "Entrega Rápida", value: "24h" },
            { label: "Clientes Satisfeitos", value: "+1000" },
            { label: "Anos de Experiência", value: "10+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent"></div>
    </section>
  );
}
