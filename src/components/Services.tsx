import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    'Skin Fades',
    'Caucasian Hair',
    'Curly Taper Fades',
    'Braids + Fade',
    'Pompadours',
    'Asian Hair',
    'Precision Cuts',
    'Beard Design',
    'Scissor Work',
    'Colour & Balayage',
    'Mixed Textures',
    'Head Shaves',
  ];

  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div ref={ref} className="relative">
        {/* Scrolling marquee */}
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
          className="flex whitespace-nowrap"
        >
          {[...services, ...services, ...services].map((service, index) => (
            <span
              key={index}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-800 mx-6"
            >
              {service}
              <span className="text-amber-500 mx-6">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
