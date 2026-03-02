import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = "5511999999999";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl shadow-green-500/50 hover:from-green-400 hover:to-green-500 transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale conosco!
        <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900"></div>
      </div>
    </a>
  );
}
