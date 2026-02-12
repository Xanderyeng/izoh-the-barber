import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Instagram, Mail } from 'lucide-react';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Instagram,
      label: '@izohthebarber',
      href: 'https://instagram.com/izohthebarber',
    },
    {
      icon: Phone,
      label: '+254 724 336 408',
      href: 'tel:+254724336408',
    },
    {
      icon: Mail,
      label: 'Izohthebarber',
      href: 'mailto:contact@izohthebarber.com',
    },
    {
      icon: MapPin,
      label: 'Spritz Hair Studio, Runda Mall, Nairobi',
      href: 'https://maps.google.com/?q=Spritz+Hair+Studio+Runda+Mall+Nairobi',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-amber-500 tracking-widest uppercase text-sm">Get In Touch</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Book a Session
              <br />
              <span className="text-amber-500">or Enquire</span>
            </h2>

            <p className="text-zinc-300 mb-12 text-lg">
              Whether you want to book a session, discuss a collaboration, or you're an employer looking to connect — I'd love to hear from you. Currently based at Spritz Hair Studio, Runda Mall, Nairobi and open to opportunities.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                    <item.icon size={20} className="text-amber-500 group-hover:text-zinc-950 transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-zinc-300 group-hover:text-amber-500 transition-colors duration-300">
                      {item.label}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject (e.g. Booking, Job Offer, Collab)"
                  required
                  className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-amber-500 text-zinc-950 hover:bg-amber-400'
                }`}
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
