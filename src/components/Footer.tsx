import { Instagram, Phone, MapPin } from 'lucide-react';
import exactliLogo from '../assets/exactli-logo.png';
import barberShopWide from '../assets/barber-shop-wide.jpg';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={barberShopWide} 
          alt="Barber shop" 
          className="w-full h-full object-cover opacity-5"
          style={{ opacity: '3%'}}
        />
        <div className="absolute inset-0 bg-zinc-950/80"></div>
      </div>

      {/* Background IZOH Text */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{
          fontSize: 'clamp(80px, 18vw, 220px)',
          fontWeight: 900,
          color: 'rgba(201, 168, 76, 0.05)',
          letterSpacing: '20px',
        }}
      >
        IZOH
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4">IZOH</h3>
            <p className="text-zinc-400 text-sm">
              Senior Stylist & Barber
              <br />
              13 Years Experience
              <br />
              All Hair Textures
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-zinc-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-zinc-300 mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/izohthebarber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-zinc-400 hover:text-amber-500 transition-colors text-sm"
                >
                  <Instagram size={16} />
                  <span>@izohthebarber</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+254724336408"
                  className="flex items-center space-x-2 text-zinc-400 hover:text-amber-500 transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>+254 724 336 408</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Spritz+Hair+Studio+Runda+Mall+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-zinc-400 hover:text-amber-500 transition-colors text-sm"
                >
                  <MapPin size={16} className="flex-shrink-0 mt-1" />
                  <span>Spritz Hair Studio, Runda Mall</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 text-center">
          <p className="text-zinc-500 text-sm">
            © 2026 Isaac Mayiaka — IZOH The Barber · Spritz Hair Studio, Runda Mall · @izohthebarber ·
          </p>
          <div className="flex flex-row items-center justify-center gap-2 text-zinc-800 text-[10px] mt-3">
            <span>Built with passion by __ </span>
            {' '}
            <span> {' '}</span>
            <a 
              href="https://alexanderchepkiyeng.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-600 transition-colors ml-1"
            >
              Lex
            </a>
            <span>@</span>
            <a 
              href="https://exactli.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-70 transition-opacity"
            >
              <img 
                src={exactliLogo} 
                alt="Exactli.io" 
                className="h-8 object-contain"
                style={{ height: '12px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
