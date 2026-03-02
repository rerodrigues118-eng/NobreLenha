import { useState } from 'react';
import { MessageCircle, ShoppingCart, ChevronLeft, Star, Flame } from 'lucide-react';
import { products } from '../data/products';

interface ProductDetailProps {
  productId: number;
  onBack: () => void;
}

export default function ProductDetail({ productId, onBack }: ProductDetailProps) {
  const product = products.find(p => p.id === productId);
  const [mainImage, setMainImage] = useState(product?.image);
  const whatsappNumber = "5511999999999";
  const mercadoLivreUrl = "https://www.mercadolivre.com.br";

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleWhatsApp = () => {
    const message = `Olá! Tenho interesse no produto: ${product.name} - R$ ${product.price.toFixed(2)}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black">
      <button
        onClick={onBack}
        className="fixed top-20 left-4 z-50 flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors font-semibold group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Voltar
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden border border-zinc-800 aspect-square flex items-center justify-center">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-6 right-6 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
                {product.category}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setMainImage(product.image)}
                className="w-20 h-20 bg-zinc-900 rounded-lg border-2 border-zinc-800 hover:border-yellow-500 transition-colors overflow-hidden"
              >
                <img src={product.image} alt="Produto" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setMainImage(product.image)}
                className="w-20 h-20 bg-zinc-900 rounded-lg border-2 border-zinc-800 hover:border-yellow-500 transition-colors flex items-center justify-center"
              >
                <Flame className="w-8 h-8 text-yellow-500" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-block bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-bold mb-4">
                Premium Nobre Lenha
              </div>

              <h1 className="text-5xl font-bold text-white mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span className="text-gray-400">328 avaliações</span>
              </div>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-8 rounded-2xl border border-zinc-800 mb-8">
                <div className="text-gray-400 text-lg mb-2">Preço</div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  R$ {product.price.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsApp}
                className="flex-1 group px-8 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-xl hover:shadow-yellow-500/50 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Pedir no WhatsApp
              </button>

              <a
                href={mercadoLivreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-8 py-5 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold text-lg rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
              >
                <ShoppingCart className="w-6 h-6" />
                Comprar
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-2xl border border-zinc-800 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Detalhes do Produto</h2>
              <p className="text-gray-300 leading-relaxed">
                {product.details}
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-2xl border border-zinc-800">
              <h2 className="text-3xl font-bold text-white mb-6">Como Usar</h2>
              <p className="text-gray-300 leading-relaxed">
                {product.usage}
              </p>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-2xl border border-zinc-800 sticky top-32">
              <h3 className="text-2xl font-bold text-white mb-6">Especificações</h3>
              <div className="space-y-4">
                {product.specs.map((spec, index) => (
                  <div key={index} className="border-b border-zinc-700 pb-4 last:border-0">
                    <div className="text-yellow-500 font-bold text-sm mb-1">{spec.label}</div>
                    <div className="text-gray-300">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-2xl border border-zinc-800 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Principais Benefícios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mt-1">
                  <Flame className="w-4 h-4 text-black" />
                </div>
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Outros Produtos da Categoria</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map(relProduct => (
                <div
                  key={relProduct.id}
                  className="group bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20"
                >
                  <div className="relative w-full h-48 overflow-hidden bg-zinc-800">
                    <img
                      src={relProduct.image}
                      alt={relProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {relProduct.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                      {relProduct.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {relProduct.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-yellow-500">
                        R$ {relProduct.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => window.location.hash = `product-${relProduct.id}`}
                        className="bg-yellow-500 text-black p-2 rounded-lg hover:bg-yellow-400 transition-colors"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
