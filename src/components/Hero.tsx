import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import barberShop1 from '../assets/barber-shop.jpg';
import barberShop2 from '../assets/barber-shop-wide.jpg';
import barberShop3 from '../assets/barber-kit.jpg';

export function Hero() {
  const scrollToStats = () => {
    const element = document.querySelector('#stats');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950 z-10" />
        <div className="flex h-full">
          <div className="flex-1 overflow-hidden">
            <img
              src={barberShop1}
              alt="Barber shop interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={barberShop2}
              alt="Professional barber setup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={barberShop3}
              alt="Barber tools and equipment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="text-zinc-400 tracking-widest uppercase text-sm">Precision Cutting</span>
            <span className="text-zinc-600 mx-3">·</span>
            <span className="text-zinc-400 tracking-widest uppercase text-sm">Multicultural Experience</span>
            <span className="text-zinc-600 mx-3">·</span>
            <span className="text-zinc-400 tracking-widest uppercase text-sm">Salon Leadership</span>
          </div>

          <h1 className="mb-4">
            <span className="block text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-amber-500 mb-2">
              ISAAC
            </span>
            <span className="block text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter">
              MAYIAKA
            </span>
          </h1>

          <div className="text-zinc-400 mb-8">
             <a
                href="https://instagram.com/izohthebarber"
                target="_blank"
                rel="noopener noreferrer"
                className="space-x-2 text-zinc-300 hover:text-amber-500 transition-colors duration-200"
              >
            <span className="text-lg">@izohthebarber</span>
            </a>
          </div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 italic mb-12 max-w-3xl mx-auto"
          >
            "100% hard work. Never settling for less."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300 min-w-[200px]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors duration-300 min-w-[200px]"
            >
              Book / Enquire
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToStats}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-amber-500 hover:text-amber-400 transition-colors"
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
}
