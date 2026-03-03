import { Target, Eye, Gem, Flame, Users, ShieldCheck, Leaf, Heart, Star } from 'lucide-react';

export default function AboutUs() {
    return (
        <section id="quem-somos" className="py-24 bg-black relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-600/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <div className="inline-block bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-yellow-500/20">
                            Nossa História
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            Mais do que lenha,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                                entregamos momentos.
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                            <p>
                                A <strong className="text-white font-semibold">Nobre Lenha</strong> nasceu em 2014, fundada por Eduardo Faria, movido pela paixão por churrasco e pela certeza de que o segredo de um grande churrasco começa na qualidade do combustível.
                            </p>
                            <p>
                                O que começou do zero, com muito trabalho e dedicação, se transformou em uma marca referência em carvão vegetal, carvão ecológico e lenha de alto desempenho. Hoje, além do combustível ideal para a brasa perfeita, oferecemos acessórios essenciais para elevar a experiência do seu churrasco.
                            </p>
                            <div className="mt-8 border-l-4 border-yellow-500 pl-6 py-4 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-r-2xl">
                                <p className="text-yellow-500 font-medium italic text-xl">
                                    "Mais do que vender produtos, entregamos qualidade, tradição e momentos que ficam na memória."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] sm:aspect-[4/4] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative">
                            <img
                                src="https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Churrasco com Nobre Lenha"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 p-6 rounded-xl flex items-center gap-5 shadow-2xl">
                                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-4 h-fit shadow-lg shadow-yellow-500/30">
                                        <Flame className="w-8 h-8 text-black" />
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black text-white mb-1">Desde 2014</div>
                                        <div className="text-yellow-500 text-sm font-bold tracking-widest uppercase">Tradição & Qualidade</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission, Vision, Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 rounded-3xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 group">
                        <div className="bg-zinc-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Target className="w-8 h-8 text-yellow-500 group-hover:text-black transition-colors" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Missão</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Fornecer carvão, lenha e acessórios de altíssima qualidade, garantindo o máximo de desempenho, muito mais sabor e total confiança para que cada churrasco seja um evento inesquecível.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 rounded-3xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 group">
                        <div className="bg-zinc-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Eye className="w-8 h-8 text-yellow-500 group-hover:text-black transition-colors" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Visão</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Ser a grande referência regional e a primeira escolha em produtos premium para churrasco, reconhecida pela qualidade superior, práticas de sustentabilidade e excelência no atendimento.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 rounded-3xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 group md:col-span-3 lg:col-span-1">
                        <div className="bg-zinc-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Gem className="w-8 h-8 text-yellow-500 group-hover:text-black transition-colors" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6">Valores</h3>
                        <ul className="space-y-4">
                            {[
                                { text: "Qualidade em primeiro lugar", icon: <Star className="w-5 h-5 text-yellow-500" /> },
                                { text: "Compromisso com o cliente", icon: <Users className="w-5 h-5 text-yellow-500" /> },
                                { text: "Honestidade e transparência", icon: <ShieldCheck className="w-5 h-5 text-yellow-500" /> },
                                { text: "Sustentabilidade", icon: <Leaf className="w-5 h-5 text-yellow-500" /> },
                                { text: "Paixão pelo que fazemos", icon: <Heart className="w-5 h-5 text-yellow-500" /> },
                            ].map((val, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-gray-300 text-lg group/item">
                                    <div className="flex-shrink-0 bg-zinc-800 p-2 rounded-lg group-hover/item:bg-yellow-500/20 transition-colors">
                                        {val.icon}
                                    </div>
                                    <span className="group-hover/item:text-white transition-colors">{val.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
