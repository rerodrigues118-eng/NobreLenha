import { Flame, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-white">Nobre Lenha</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Produtos premium para seu churrasco perfeito. Qualidade, tradição e excelência em cada brasa.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-2 text-gray-400">
              <p>WhatsApp: (11) 99999-9999</p>
              <p>Email: contato@nobrelenha.com.br</p>
              <p>Horário: Segunda a Sábado, 8h às 18h</p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:bg-zinc-800 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:bg-zinc-800 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@nobrelenha.com.br"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:bg-zinc-800 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nobre Lenha. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
