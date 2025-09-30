import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Loading from './components/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Prevent scrolling when loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  // Show loading screen
  if (loading) {
    return <Loading />;
  }

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