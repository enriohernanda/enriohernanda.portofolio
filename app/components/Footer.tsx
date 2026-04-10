'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-10 bg-[#030712] border-t border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="flex items-center gap-2 text-sm font-bold tracking-widest text-slate-500 uppercase"
        >
          <span>Enrio Hernanda</span>
          <span className="w-1 h-1 rounded-full bg-indigo-500" />
          <span>Portfolio</span>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          viewport={{ once: true }} 
          className="text-center text-xs text-slate-600"
        >
          © {currentYear} | Built with <span className="text-white font-semibold">Next.js</span> & <span className="text-white font-semibold">Tailwind CSS</span>
        </motion.p>
      </div>
    </footer>
  );
}
