import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return (
    <>
    <div className="bg-zinc-950 text-zinc-100">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    <Analytics/>
    </>
  );
}
