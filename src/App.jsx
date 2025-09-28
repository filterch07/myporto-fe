import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="relative z-0 bg-primary min-h-screen w-full">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <div className="w-full">
          <Navbar />
          <Hero />
          <About />
          <Work />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;