'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Container from './layout/Container';

export default function Contact() {
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(type);
          setTimeout(() => setCopied(null), 2000);
        })
        .catch((err) => console.error('Copy failed:', err));
    }
  };

  return (
    <section id="contact" className="w-full py-24 bg-[#030712] transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-indigo-400 mb-4 px-4 py-1 bg-indigo-900/30 rounded-full"
          >
            Get in touch
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6 text-center leading-tight"
          >
            Ready to start <br className="md:hidden" /> a project together?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-slate-400 max-w-xl text-lg"
          >
            Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          {/* Email Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card flex-1 w-full p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-indigo-500/30 transition-all group"
          >
            <div className="p-4 rounded-2xl bg-indigo-900/20 text-indigo-400 group-hover:scale-110 transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
            </div>
            <h4 className="text-xl font-bold text-white">Email Me</h4>
            <div className="flex items-center gap-3">
               <span className="text-lg md:text-xl font-medium text-slate-300">enriohernanda@gmail.com</span>
               <motion.button 
                whileTap={{ scale: 0.9 }} 
                onClick={() => copyToClipboard('enriohernanda@gmail.com', 'email')}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer relative"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                 </svg>
                 <AnimatePresence>
                  {copied === 'email' && (
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-indigo-600 text-white text-[10px] rounded pointer-events-none"
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
               </motion.button>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card flex-1 w-full p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-emerald-500/30 transition-all group"
          >
            <div className="p-4 rounded-2xl bg-emerald-900/20 text-emerald-400 group-hover:scale-110 transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
               </svg>
            </div>
            <h4 className="text-xl font-bold text-white">Call Me</h4>
            <div className="flex items-center gap-3">
               <span className="text-lg md:text-xl font-medium text-slate-300">+62 877 7350 7317</span>
               <motion.button 
                whileTap={{ scale: 0.9 }} 
                onClick={() => copyToClipboard('+62 87773507317', 'phone')}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer relative"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                 </svg>
                 <AnimatePresence>
                  {copied === 'phone' && (
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-emerald-600 text-white text-[10px] rounded pointer-events-none"
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
               </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Social Links Group */}
        <div className="mt-20 flex flex-col items-center gap-8">
           <p className="text-sm font-bold tracking-widest uppercase text-slate-500">Find me on</p>
           <div className="flex items-center gap-6 p-3 rounded-2xl glass-card">
              {[
                {
                  href: 'https://github.com/enriohernanda',
                  icon: '/assets/icon/icon-githubDark.svg',
                  alt: 'GitHub',
                },
                {
                  href: 'https://www.linkedin.com/in/enriohernanda',
                  icon: '/assets/icon/icon-linkedinDark.svg',
                  alt: 'LinkedIn',
                },
                {
                  href: 'https://instagram.com/enriohernandaa',
                  icon: '/assets/icon/icon-instagramDark.svg',
                  alt: 'Instagram',
                },
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ y: -5, scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }} 
                  className="p-3 bg-slate-800 rounded-xl shadow-sm border border-slate-700 transition-all hover:border-indigo-500"
                >
                  <Image src={social.icon} alt={social.alt} width={24} height={24} />
                </motion.a>
              ))}
           </div>
        </div>
      </Container>
    </section>
  );
}
