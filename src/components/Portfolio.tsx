import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import izohCaucasianHair from '../assets/images/izohCaucasianHair.jpeg';
import izohYouthCut from '../assets/images/izohYouthCut.jpeg';
import izohProfessional from '../assets/images/izohProfessional.webp';
import izohBeardWork from '../assets/images/izohBeardWork.jpeg';
import signal2 from '../assets/images/signal-2026-02-12-171121_002.jpeg';
import signal3 from '../assets/images/signal-2026-02-12-171121_003.jpeg';
import signal4 from '../assets/images/signal-2026-02-12-171121_004.jpeg';
import signal5 from '../assets/images/signal-2026-02-12-171121_005.jpeg';
import signal6 from '../assets/images/signal-2026-02-12-171121_006.jpeg';
import signal8 from '../assets/images/signal-2026-02-12-171121_008.jpeg';
import signal9 from '../assets/images/signal-2026-02-12-171121_009.jpeg';
import signal10 from '../assets/images/signal-2026-02-12-171121_010.jpeg';
import signal11 from '../assets/images/signal-2026-02-12-171121_011.jpeg';
import signal12 from '../assets/images/signal-2026-02-12-171121_012.jpeg';
import signal13 from '../assets/images/signal-2026-02-12-171121_013.jpeg';
import signal14 from '../assets/images/signal-2026-02-12-171121_014.jpeg';
import signal15 from '../assets/images/signal-2026-02-12-171121_015.jpeg';
import signal18 from '../assets/images/signal-2026-02-12-171121_018.jpeg';
import signal19 from '../assets/images/signal-2026-02-12-171121_019.jpeg';
import signal20 from '../assets/images/signal-2026-02-12-171121_020.jpeg';
import signal21 from '../assets/images/signal-2026-02-12-171121_021.jpeg';
import signal22 from '../assets/images/signal-2026-02-12-171121_022.jpeg';
import signal23 from '../assets/images/signal-2026-02-12-171121_023.jpeg';
import signal from '../assets/images/signal-2026-02-12-171121.jpeg';
import image1 from '../assets/images/0c11fae0fddd7d97faf94075dee8723193d699dc.png';
import image2 from '../assets/images/37b0166d6e1fb009433aedb9aa0e7a3f8e04568f.png';
import image3 from '../assets/images/3929a9dc05e7aa9f05f70d13dcefc608690874d0.png';

export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Fades', 'Cuts', 'Braids', 'Colour', 'Beard', 'Multi-Texture'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Precision Fade',
      category: 'Fades',
      image: signal2,
    },
    {
      id: 2,
      title: 'Multi-Texture Expertise',
      category: 'Cuts',
      image: izohCaucasianHair,
      featured: true,
    },
    {
      id: 3,
      title: 'Youth Styling',
      category: 'Cuts',
      image: izohYouthCut,
      featured: true,
    },
    {
      id: 4,
      title: 'Professional Cut',
      category: 'Multi-Texture',
      image: izohProfessional,
      featured: true,
    },
    {
      id: 5,
      title: 'Beard Detailing',
      category: 'Beard',
      image: izohBeardWork,
      featured: true,
    },
    {
      id: 6,
      title: 'Skin Fade',
      category: 'Fades',
      image: signal3,
    },
    {
      id: 7,
      title: 'Precision Scissor Cut',
      category: 'Cuts',
      image: signal4,
    },
    {
      id: 8,
      title: 'Afro Taper Fade',
      category: 'Fades',
      image: signal5,
    },
    {
      id: 9,
      title: 'Modern Pompadour',
      category: 'Cuts',
      image: signal6,
    },
    {
      id: 10,
      title: 'Braids with Fade',
      category: 'Braids',
      image: signal8,
    },
    {
      id: 11,
      title: 'Colour & Styling',
      category: 'Colour',
      image: signal9,
    },
    {
      id: 12,
      title: 'Beard Grooming',
      category: 'Beard',
      image: signal10,
    },
    {
      id: 13,
      title: 'Taper Fade',
      category: 'Fades',
      image: signal11,
    },
    {
      id: 14,
      title: 'Classic Cut',
      category: 'Cuts',
      image: signal12,
    },
    {
      id: 15,
      title: 'Cornrows',
      category: 'Braids',
      image: signal13,
    },
    {
      id: 16,
      title: 'Vibrant Colour',
      category: 'Colour',
      image: signal14,
    },
    {
      id: 17,
      title: 'Styled Beard',
      category: 'Beard',
      image: signal15,
    },
    {
      id: 18,
      title: 'High Top Fade',
      category: 'Fades',
      image: signal18,
    },
    {
      id: 19,
      title: 'Curly Cut',
      category: 'Cuts',
      image: signal19,
    },
    {
      id: 20,
      title: 'Box Braids',
      category: 'Braids',
      image: signal20,
    },
    {
      id: 21,
      title: 'Subtle Highlights',
      category: 'Colour',
      image: signal21,
    },
    {
      id: 22,
      title: 'Full Beard Trim',
      category: 'Beard',
      image: signal22,
    },
    {
      id: 23,
      title: 'Creative Cut',
      category: 'Cuts',
      image: signal23,
    },
    {
      id: 24,
      title: 'Sharp Fade',
      category: 'Fades',
      image: signal,
    },
    {
      id: 25,
      title: 'Design',
      category: 'Cuts',
      image: image1,
    },
    {
      id: 26,
      title: 'Kids Cut',
      category: 'Cuts',
      image: image2,
    },
    {
      id: 27,
      title: 'Long Hair Trim',
      category: 'Cuts',
      image: image3,
    },
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="text-amber-500 tracking-widest uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              The Work
            </h2>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-amber-500 text-zinc-950'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <span className="text-amber-500 text-sm">{item.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}