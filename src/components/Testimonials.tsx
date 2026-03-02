import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            O Que Dizem Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Clientes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A satisfação de quem confia na Nobre Lenha
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-yellow-500/20 group-hover:text-yellow-500/30 transition-colors" />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500/50"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
