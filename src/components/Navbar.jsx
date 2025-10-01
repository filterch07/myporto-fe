import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [debug, setDebug] = useState(true);
  const [debugInfo, setDebugInfo] = useState({ lastClicked: null, top: null, navHeight: null });

  const navLinks = [
    { id: 'about', title: 'About' },
    { id: 'work', title: 'Work' },
    { id: 'contact', title: 'Contact' },
  ];

  const scrollToSection = (id) => {
    console.debug('[Navbar] scrollToSection called for:', id);
    const el = document.getElementById(id);
    if (!el) {
      console.warn(`[Navbar] No element found with id=${id}`);
      setDebugInfo({ lastClicked: id, top: null, navHeight: null });
      return;
    }
    try {
      // Try scrollIntoView first — this will work with nested/scrollable containers
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.debug('[Navbar] Used scrollIntoView for', id);
    } catch (e) {
      console.debug('[Navbar] scrollIntoView failed, falling back to window.scrollTo', e);
      const nav = document.querySelector('nav');
      const navHeight = nav ? nav.offsetHeight : 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    // Also always try an offset-aware window scroll to account for fixed header
    const nav = document.querySelector('nav');
    const navHeight = nav ? nav.offsetHeight : 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    setDebugInfo({ lastClicked: id, top, navHeight });
    window.setTimeout(() => {
      window.scrollTo({ top, behavior: 'smooth' });
      console.debug('[Navbar] window.scrollTo applied for', id, 'top=', top);
    }, 50);
  };

  return (
    <nav className="fixed w-full flex items-center py-5 top-0 z-20 nav-gradient">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4">
        <button
          type="button"
          onClick={() => { setActive(''); scrollToSection('hero'); }}
          onKeyDown={(e) => { if (e.key === 'Enter') { setActive(''); scrollToSection('hero'); } }}
          className="text-white text-[18px] font-bold cursor-pointer flex bg-transparent border-none p-0"
          aria-label="Go to top"
        >
          My Portfolio
        </button>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <button
                type="button"
                onClick={() => { setActive(link.title); scrollToSection(link.id); }}
                onKeyDown={(e) => { if (e.key === 'Enter') { setActive(link.title); scrollToSection(link.id); } }}
                className="inline-block text-inherit bg-transparent border-none p-0 cursor-pointer"
              >
                {link.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[28px] h-[28px] cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            {/* Hamburger icon */}
            <div className={`w-full h-0.5 bg-white transition-all ${toggle ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-full h-0.5 bg-white my-2 transition-all ${toggle ? 'opacity-0' : ''}`} />
            <div className={`w-full h-0.5 bg-white transition-all ${toggle ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>

          <motion.div
            className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                    // small timeout to allow menu close animation then scroll
                    setTimeout(() => scrollToSection(link.id), 50);
                  }}
                >
                  <span className="inline-block">{link.title}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      {/* Debug overlay - temporary */}
      {debug && (
        <div className="fixed right-4 bottom-4 z-50 bg-black/60 text-white p-3 rounded-lg text-sm w-64">
          <div className="flex justify-between items-center mb-2">
            <strong>Navbar Debug</strong>
            <button
              className="text-xs underline"
              onClick={() => setDebug(false)}
            >
              hide
            </button>
          </div>
          <div>Last: <span className="font-mono">{debugInfo.lastClicked ?? '—'}</span></div>
          <div>Top: <span className="font-mono">{debugInfo.top ?? '—'}</span></div>
          <div>Nav H: <span className="font-mono">{debugInfo.navHeight ?? '—'}</span></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;