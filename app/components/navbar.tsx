'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import Container from './layout/Container';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificate', href: '#certificate' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-[#030712]/70 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-indigo-500/5' 
            : 'py-6 bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <motion.a 
              href="#hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-black tracking-tighter text-white group"
            >
              ENRIO<span className="text-indigo-600 group-hover:animate-pulse">.</span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-sm font-bold text-slate-400 hover:text-white transition-colors relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="h-6 w-[1px] bg-slate-800" />

              <div className="flex items-center gap-4">
                <motion.a 
                  href="/cv/CV_Enrio_Hernanda.pdf" 
                  download="CV_Enrio_Hernanda.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold shadow-lg hover:shadow-indigo-500/20 transition-all"
                >
                  Resume
                </motion.a>
              </div>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-800 text-white"
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
