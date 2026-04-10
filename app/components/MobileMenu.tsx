'use client';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const menuLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificate', href: '#certificate' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/20 dark:bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Sidebar Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[300px] bg-white/90 dark:bg-[#030712]/90 backdrop-blur-2xl z-[70] shadow-2xl border-l border-white/20 dark:border-white/5 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-8">
              <h2 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
                ENRIO<span className="text-indigo-600">.</span>
              </h2>
              <button 
                onClick={onClose} 
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:scale-110 active:scale-95 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex-1 px-8 py-10">
              <ul className="flex flex-col gap-6">
                {menuLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="text-2xl font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors block"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer Items */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-8 py-10 space-y-8 border-t border-slate-100 dark:border-slate-800"
            >
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Theme</span>
                <ThemeToggle />
              </div>

              <a
                href="/cv/CV_Enrio_Hernanda.pdf"
                download="CV_Enrio_Hernanda.pdf"
                className="block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-bold shadow-xl hover:shadow-indigo-500/20 active:scale-95 transition-all"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
