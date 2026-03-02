import { MessageCircle, ShoppingCart, Flame } from 'lucide-react';

export default function FinalCTA() {
  const whatsappNumber = "5511999999999";
  const mercadoLivreUrl = "https://www.mercadolivre.com.br";

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1309072/pexels-photo-1309072.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-black"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6">
          <Flame className="w-20 h-20 text-yellow-500 animate-pulse" />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Garanta Agora o <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Melhor</span> para Seu Churrasco
        </h2>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Não perca tempo. Transforme seu churrasco em uma experiência premium com os produtos Nobre Lenha
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={mercadoLivreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-xl rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <ShoppingCart className="w-7 h-7" />
            Comprar no Mercado Livre
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-transparent border-3 border-yellow-500 text-yellow-500 font-bold text-xl rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-xl flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-7 h-7" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-12 pt-12 border-t border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-yellow-500 font-bold text-lg mb-2">Entrega</div>
              <div className="text-gray-400">Rápida e segura</div>
            </div>
            <div>
              <div className="text-yellow-500 font-bold text-lg mb-2">Qualidade</div>
              <div className="text-gray-400">Produtos premium</div>
            </div>
            <div>
              <div className="text-yellow-500 font-bold text-lg mb-2">Atendimento</div>
              <div className="text-gray-400">Personalizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
