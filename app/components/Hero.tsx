'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Container from './layout/Container';

export default function Hero() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains('dark')) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />


      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 text-center lg:text-left mt-20">
          
           {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="flex-1 space-y-8 flex flex-col items-center lg:items-start"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800"
              >
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
                  </span>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Available for hire</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I’m <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">Enrio Hernanda</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                A passionate <span className="text-slate-900 dark:text-white font-semibold">Frontend Developer</span> specializing in crafting exceptional digital experiences with modern web technologies.
              </p>
            </div>

            {/* Location */}
            <div className="flex flex-wrap gap-6 text-slate-600 dark:text-slate-400">
               <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4 }} 
                className="flex items-center gap-2"
              >
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                   <Image src={theme === 'light' ? '/assets/icon/icon-locationLight.svg' : '/assets/icon/icon-locationDark.svg'} alt="Location" width={20} height={20} />
                </div>
                <span className="font-medium">Jakarta, Indonesia</span>
              </motion.div>
            </div>

            {/* Social Media & CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <div className="flex gap-4 p-2 rounded-2xl glass-card">
                <a className="p-2 hover:bg-white dark:hover:bg-white/10 rounded-xl transition-all hover:scale-110 active:scale-95 shadow-sm" href="https://www.linkedin.com/in/enriohernanda" target="_blank" rel="noopener noreferrer">
                  <Image src={theme === 'light' ? '/assets/icon/icon-linkedinLight.svg' : '/assets/icon/icon-linkedinDark.svg'} alt="LinkedIn" width={24} height={24} />
                </a>
                <a className="p-2 hover:bg-white dark:hover:bg-white/10 rounded-xl transition-all hover:scale-110 active:scale-95 shadow-sm" href="https://github.com/enriohernanda" target="_blank" rel="noopener noreferrer">
                  <Image src={theme === 'light' ? '/assets/icon/icon-githubLight.svg' : '/assets/icon/icon-githubDark.svg'} alt="GitHub" width={24} height={24} />
                </a>
                <a className="p-2 hover:bg-white dark:hover:bg-white/10 rounded-xl transition-all hover:scale-110 active:scale-95 shadow-sm" href="https://instagram.com/enriohernandaa" target="_blank" rel="noopener noreferrer">
                  <Image src={theme === 'light' ? '/assets/icon/icon-instagramLight.svg' : '/assets/icon/icon-instagramDark.svg'} alt="Instagram" width={24} height={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="flex-1 flex justify-center lg:justify-end"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[320px] w-[300px] md:h-[420px] md:w-[380px]"
            >
              {/* Decorative elements behind photo */}
              <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-500 rounded-3xl rotate-6 -z-10 opacity-20 blur-sm" />
              <div className="absolute inset-0 border-2 border-indigo-600/30 dark:border-indigo-400/30 rounded-3xl -rotate-3 -z-10 transition-transform duration-500 group-hover:rotate-0" />
              
              <Image 
                src="/assets/enrio.svg" 
                alt="Enrio" 
                fill 
                className="object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800 z-10" 
                priority 
              />
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
