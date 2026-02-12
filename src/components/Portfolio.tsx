import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import izohCaucasianHair from '../assets/izohCaucasianHair.webp';
import izohYouthCut from '../assets/izohYouthCut.webp';
import izohProfessional from '../assets/izohProfessional.webp';
import izohBeardWork from '../assets/izohBeardWork.webp';

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
      image: 'https://images.unsplash.com/photo-1651769353067-be97458cdb2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwZmFkZSUyMGhhaXJjdXQlMjBibGFjayUyMGhhaXJ8ZW58MXx8fHwxNzcwODU1NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      image: 'https://images.unsplash.com/photo-1653758265969-b048bb0b328a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJhcmJlciUyMGZhZGUlMjBoYWlyY3V0fGVufDF8fHx8MTc3MDg1NjQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 7,
      title: 'Precision Scissor Cut',
      category: 'Cuts',
      image: 'https://images.unsplash.com/photo-1761931403671-d020a14928d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBoYWlyY3V0JTIwc2Npc3NvcnN8ZW58MXx8fHwxNzcwODU1NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 8,
      title: 'Afro Taper Fade',
      category: 'Fades',
      image: 'https://images.unsplash.com/photo-1723541104653-5e478f84e687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJvJTIwaGFpciUyMHRhcGVyJTIwZmFkZXxlbnwxfHx8fDE3NzA4NTY0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 9,
      title: 'Modern Pompadour',
      category: 'Cuts',
      image: 'https://images.unsplash.com/photo-1643166225426-527f536a6c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb21wYWRvdXIlMjBoYWlyc3R5bGV8ZW58MXx8fHwxNzcwODU1NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 10,
      title: 'Braids with Fade',
      category: 'Braids',
      image: 'https://images.unsplash.com/photo-1615754930920-ef87ac0b53ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwYnJhaWRzJTIwZmFkZXxlbnwxfHx8fDE3NzA4NTU0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 11,
      title: 'Colour & Styling',
      category: 'Colour',
      image: 'https://images.unsplash.com/photo-1636871400631-dcf00cda6421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3IlMjBiYWxheWFnZSUyMG1lbnxlbnwxfHx8fDE3NzA4NTU0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 12,
      title: 'Beard Grooming',
      category: 'Beard',
      image: 'https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBkZXRhaWxlZCUyMGJlYXJkJTIwdHJpbXxlbnwxfHx8fDE3NzA4NTY0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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