'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-[#F9FAFB] dark:bg-[#111827] border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center text-sm text-[#4B5563] dark:text-[#D1D5DB]">
        © 2025 | Created by <span className="font-medium">Enrio Hernanda</span>
      </motion.p>
    </footer>
  );
}
