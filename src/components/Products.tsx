import { MessageCircle, ShoppingCart, Check, Eye } from 'lucide-react';
import { products } from '../data/products';

interface ProductsProps {
  onProductClick: (productId: number) => void;
}

export default function Products({ onProductClick }: ProductsProps) {
  const whatsappNumber = "5511999999999";
  const mercadoLivreUrl = "https://www.mercadolivre.com.br";

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Produtos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Seleção premium de produtos para elevar seu churrasco a outro nível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 border border-zinc-800 hover:border-yellow-500/50"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  R$ {product.price.toFixed(2)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                  {product.name}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed line-clamp-2">
                  {product.shortDescription}
                </p>

                <div className="space-y-2 mb-6">
                  {product.benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => onProductClick(product.id)}
                    className="flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  >
                    <Eye className="w-5 h-5" />
                    Ver Detalhes
                  </button>

                  <a
                    href={mercadoLivreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 px-4 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Comprar
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Olá! Tenho interesse no produto: ${product.name} - R$ ${product.price.toFixed(2)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold py-3 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
