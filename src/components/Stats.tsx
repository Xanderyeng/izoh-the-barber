import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { number: '13', label: 'Years Experience' },
    { number: '4', label: 'Hair Textures' },
    { number: '1', label: 'Standard: Excellence' },
  ];

  return (
    <section id="stats" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-amber-500 mb-4">
                {stat.number}
              </div>
              <div className="text-lg sm:text-xl text-zinc-400 tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
