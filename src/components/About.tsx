import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import izohWorkingImage from '../assets/images/izohProfessional.webp';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const expertise = [
    'African / Type 4',
    'Caucasian / European',
    'South Asian',
    'Middle Eastern',
    'Curly / Mixed',
    'Braids & Locs',
    'Colour & Balayage',
    'Beard Design',
  ];

  return (
    <section id="about" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />
              <img
                src={izohWorkingImage}
                alt="Isaac Mayiaka - Professional Barber"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-500/20 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="text-amber-500 tracking-widest uppercase text-sm">About Me</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              13 Years. Every Texture.
              <br />
              <span className="text-amber-500">One Standard.</span>
            </h2>

            <div className="space-y-4 text-zinc-300 mb-8">
              <p>
                I began my journey in hairdressing with one goal. <span className="text-amber-500">To master the craft properly.</span> Over the past 13 years I have built my reputation on consistency, attention to detail and respect for every client who sits in my chair.  With 13 years of professional experience in barbering and hair styling, I've built a career on one principle: never settle for less than the best result possible.
              </p>

              {/* <p className="italic text-zinc-400">
                "100% hard work. Never settling for less." <a
                href="https://instagram.com/izohthebarber"
                target="_blank"
                rel="noopener noreferrer"
                className="space-x-2 text-zinc-300 hover:text-amber-500 transition-colors duration-200"
              >
            <span>@izohthebarber</span>
            </a>
              </p> */}

              <p>
                Working in one of Nairobi’s busiest retail destinations has allowed me to refine my skills across all hair types and cultures. From precision fades and structured scissor cuts to balayage, dreadlock installation and intricate braiding, I approach every service with the same level of care and professionalism.
              </p>

              <p>
                My journey includes extensive experience at I believe great styling is not just about technique. It is about consultation, understanding lifestyle and delivering results that clients can maintain confidently between visits.
              </p>

              <p>
                My standard remains the same regardless of texture, background or style request. <span className="text-amber-500">clean work, strong technique and satisfied clients.</span>
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-2 gap-3">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="flex items-center space-x-2"
                >
                  <Check size={18} className="text-amber-500 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}