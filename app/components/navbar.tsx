'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';
import Container from './layout/Container';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener buat kasih efek background/shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`w-full sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md' : 'bg-white dark:bg-black'}`}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="text-2xl font-bold text-black dark:text-white">
              Enrio
            </motion.h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 font-medium items-center">
              {['About', 'Projects', 'Contact'].map((item, i) => (
                <motion.li key={item} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * (i + 1), duration: 0.4 }}>
                  <a href={`#${item.toLowerCase()}`} className="hover:underline">
                    {item}
                  </a>
                </motion.li>
              ))}

              <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.4 }}>
                <ThemeToggle />
              </motion.li>

              <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.4 }}>
                <a href="/cv/CV_Enrio_Hernanda.pdf" download="CV_Enrio_Hernanda.pdf" className="bg-black dark:bg-white text-white dark:text-black py-2 px-4 rounded-2xl cursor-pointer">
                  Download CV
                </a>
              </motion.li>
            </ul>

            {/* Mobile Hamburger */}
            <motion.button
              onClick={() => setIsOpen(true)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </Container>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
