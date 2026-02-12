import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50 shadow-xl' : 'bg-transparent backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <a href="#" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center space-x-2 group">
              <span className="text-2xl font-bold tracking-wider text-amber-500 transition-all duration-300 group-hover:text-amber-400 group-hover:scale-105">IZOH</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-zinc-300 hover:text-amber-400 transition-all duration-300 font-light hover:scale-105"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://instagram.com/izohthebarber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-zinc-300 hover:text-amber-400 transition-all duration-300 hover:scale-105"
              >
                <Instagram size={22} />
                <span className="font-light">Instagram</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-6 py-2 border outline border-amber-600 bg-transparent text-slate-900 rounded-full hover:bg-amber-400 transition-colors duration-200"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-zinc-300 hover:text-amber-500 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-40 bg-zinc-950 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl text-zinc-300 hover:text-amber-500 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://instagram.com/izohthebarber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-2xl text-zinc-300 hover:text-amber-500 transition-colors duration-200"
              >
                <Instagram size={28} />
                <span>Instagram</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-10 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 rounded-full font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 text-xl"
                style={{
                  boxShadow: '0 8px 30px rgba(251,191,36,0.3)',
                }}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
