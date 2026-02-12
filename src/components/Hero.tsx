import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import barberShop1 from '../assets/barber-shop.jpg';
import barberShop2 from '../assets/barber-shop-wide.jpg';
import barberShop3 from '../assets/barber-kit.jpg';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress through the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'], // 0 at top, 1 when section scrolls out
  });

  // Each image column moves at a different parallax speed
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);   // slow
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);   // medium
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);   // in-between

  // Subtle scale-up on scroll for depth
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Content fades and drifts up as user scrolls past
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  const scrollToStats = () => {
    const element = document.querySelector('#stats');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images Grid – parallax columns */}
      <div className="absolute inset-0">
        {/* Radial gradient overlay: dark enough to flatten the busy background */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(9,9,11,0.75) 0%, rgba(9,9,11,0.85) 50%, rgba(9,9,11,0.98) 100%)',
            backdropFilter: 'blur(3px) grayscale(40%)', // Blurs details and reduces color noise
          }}
        />

        {/* Soft vignette for extra depth at the very edges */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 150px 60px rgba(9,9,11,0.8)',
          }}
        />

        <div className="flex h-full">
          {/* Column 1 – slow parallax */}
          <motion.div
            className="flex-1 overflow-hidden will-change-transform"
            style={{ y: y1, scale: scale1 }}
          >
            <img
              src={barberShop1}
              alt="Barber shop interior"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>

          {/* Column 2 – faster parallax (centre draws the eye) */}
          <motion.div
            className="flex-1 overflow-hidden will-change-transform"
            style={{ y: y2, scale: scale2 }}
          >
            <img
              src={barberShop2}
              alt="Professional barber setup"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>

          {/* Column 3 – medium parallax */}
          <motion.div
            className="flex-1 overflow-hidden will-change-transform"
            style={{ y: y3, scale: scale3 }}
          >
            <img
              src={barberShop3}
              alt="Barber tools and equipment"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>

      {/* Content with glassmorphism container – fades on scroll */}
      <motion.div
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-6 py-10 sm:px-10 sm:py-14"
        >
          {/* Tagline chips */}
          {/* <div className="mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <span className="text-zinc-400 tracking-[0.2em] uppercase text-xs sm:text-sm">
              Precision Cutting
            </span>
            <span className="text-zinc-600 hidden sm:inline">&middot;</span>
            <span className="text-zinc-400 tracking-[0.2em] uppercase text-xs sm:text-sm">
              Multicultural Experience
            </span>
            <span className="text-zinc-600 hidden sm:inline">&middot;</span>
            <span className="text-zinc-400 tracking-[0.2em] uppercase text-xs sm:text-sm">
              Salon Leadership
            </span>
          </div> */}

          {/* Brand name – visual rhythm via weight contrast */}
          <h1 className="mb-4 relative z-20">
            <span
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase text-amber-500 mb-2 leading-none"
              style={{
                letterSpacing: '0.08em',
                textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.8)',
              }}
            >
              <span className="font-extrabold text-amber-400">IZOH</span>
              <span className="font-light tracking-[0.12em] text-zinc-100 opacity-90">THE</span>
              <span className="font-semibold text-amber-500">BARBER</span>
            </span>
          </h1>

          {/* Handle */}
          <div className="text-zinc-400 mb-8">
            <a
              href="https://instagram.com/izohthebarber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-amber-500 transition-colors duration-200"
            >
              <span className="text-base sm:text-lg">@izohthebarber</span>
            </a>
          </div>

          {/* Quote – serif with generous line-height & subtle shadow */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-2xl lg:text-3xl text-zinc-300 italic mb-12 max-w-3xl mx-auto"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: 1.7,
              textShadow:
                '0 2px 12px rgba(0,0,0,0.6), 0 0px 4px rgba(0,0,0,0.3)',
            }}
          >
            "100% hard work. Never settling for less."
          </motion.blockquote>

          {/* CTA buttons */}
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
              className="px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300 min-w-[200px] font-medium"
            >
              View My Work
            </a>
            {/* <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-all duration-300 min-w-[200px] font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30"
            >
              Book / Enquire
            </a> */}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToStats}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-amber-500/80 hover:text-amber-400 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
}
