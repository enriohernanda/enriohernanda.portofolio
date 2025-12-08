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
    <section id="hero" className="min-h-screen flex items-center py-20">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Image */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex justify-center md:justify-end md:order-last md:flex-1 self-stretch">
            <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
              <Image src="/assets/enrio.svg" alt="Enrio" fill className="absolute z-10 object-cover rounded-xl border-4 border-[#D1D5DB] dark:border-[#4B5563]" priority />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-1 flex-col justify-center gap-4 text-left self-stretch">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-bold">Hi, I’m Enrio Hernanda</h1>
              <p className="text-lg md:text-xl text-[#4B5563] dark:text-[#D1D5DB]">Web Developer | React.js | Next.js | Laravel</p>
            </div>

            {/* Location + Status */}
            <div className="flex flex-col items-start gap-3 mt-5 mb-5">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex items-center gap-2">
                <Image src={theme === 'light' ? '/assets/icon/icon-locationLight.svg' : '/assets/icon/icon-locationDark.svg'} alt="Location" width={20} height={20} />
                <span className="text-[#4B5563] dark:text-[#D1D5DB]">Jakarta, Indonesia</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <span className="text-[#4B5563] dark:text-[#D1D5DB] text-sm md:text-base">Available for new projects</span>
              </motion.div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a className="hover:scale-110 transition-transform" href="https://www.linkedin.com/in/enriohernanda" target="_blank" rel="noopener noreferrer">
                <Image src={theme === 'light' ? '/assets/icon/icon-linkedinLight.svg' : '/assets/icon/icon-linkedinDark.svg'} alt="LinkedIn" width={28} height={28} />
              </a>
              <a className="hover:scale-110 transition-transform" href="https://github.com/enriohernanda" target="_blank" rel="noopener noreferrer">
                <Image src={theme === 'light' ? '/assets/icon/icon-githubLight.svg' : '/assets/icon/icon-githubDark.svg'} alt="GitHub" width={28} height={28} />
              </a>
              <a className="hover:scale-110 transition-transform" href="https://instagram.com/enriohernandaa" target="_blank" rel="noopener noreferrer">
                <Image src={theme === 'light' ? '/assets/icon/icon-instagramLight.svg' : '/assets/icon/icon-instagramDark.svg'} alt="Instagram" width={28} height={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
