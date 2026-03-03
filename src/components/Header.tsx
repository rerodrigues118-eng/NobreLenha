import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#inicio' },
        { name: 'Produtos', href: '#produtos' },
        { name: 'Quem Somos', href: '#quem-somos' },
        { name: 'Diferenciais', href: '#diferenciais' },
        { name: 'Depoimentos', href: '#depoimentos' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        const targetElement = document.querySelector(href);
        if (targetElement) {
            // Offset for the fixed header
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-black/50 py-3 border-b border-zinc-800'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center relative">
                    {/* Logo */}
                    <a
                        href="#inicio"
                        onClick={(e) => handleNavClick(e, '#inicio')}
                        className="flex-shrink-0 flex items-center gap-2 group relative z-10"
                    >
                        <img
                            src="/logo.png"
                            alt="Nobre Lenha"
                            className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'} w-auto`}
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex absolute inset-0 items-center justify-center gap-8 pointer-events-none">
                        <div className="pointer-events-auto flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-gray-300 hover:text-yellow-500 font-medium text-sm lg:text-base transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Mobile Menu Button - Using relative z-10 to stay clickable above the absolute nav */}
                    <div className="md:hidden flex items-center relative z-10">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-yellow-500 transition-colors p-2"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-7 h-7" />
                            ) : (
                                <Menu className="w-7 h-7" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-4 shadow-2xl shadow-yellow-500/10' : 'max-h-0 opacity-0 py-0'
                    }`}
            >
                <div className="flex flex-col space-y-4 px-4 sm:px-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-gray-300 hover:text-yellow-500 font-medium text-lg py-2 border-b border-zinc-800/50"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
