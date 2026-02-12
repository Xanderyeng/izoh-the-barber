import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const testimonials = [
    {
      quote: "Isaac consistently delivers clean, precise cuts and understands exactly what I ask for.",
      author: "Professional Client",
    },
    {
      quote: "Professional, detailed and always maintains high hygiene standards.",
      author: "Returning Client",
    },
    {
      quote: "His ability to work with different hair textures is impressive.",
      author: "International Client",
    },
  ];

  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-amber-500 tracking-widest uppercase text-sm">What Clients Say</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">
            Client Feedback
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-zinc-800 p-8 rounded-lg relative"
            >
              <Quote className="text-amber-500/20 absolute top-4 left-4" size={48} />
              <div className="relative z-10 pt-8">
                <p className="text-zinc-300 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="text-amber-500 font-medium">
                  — {testimonial.author}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
