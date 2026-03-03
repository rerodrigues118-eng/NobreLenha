import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            O Que Dizem Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Clientes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A satisfação de quem confia na Nobre Lenha
          </p>
        </div>

        <div className="relative group/carousel">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: '!bg-yellow-500 !opacity-100',
              bulletClass: 'swiper-pagination-bullet !bg-zinc-600 !opacity-50 hover:!opacity-80 transition-opacity',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="h-full group bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 relative">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="swiper-button-prev-custom absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 backdrop-blur-sm group-hover/carousel:translate-x-4 lg:group-hover/carousel:translate-x-0 opacity-0 group-hover/carousel:opacity-100 hidden sm:flex">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next-custom absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 backdrop-blur-sm group-hover/carousel:-translate-x-4 lg:group-hover/carousel:-translate-x-0 opacity-0 group-hover/carousel:opacity-100 hidden sm:flex">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
        }
      `}} />
    </section>
  );
}
