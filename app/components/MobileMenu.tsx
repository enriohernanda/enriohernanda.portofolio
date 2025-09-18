'use client';
import ThemeToggle from './ThemeToggle';

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold text-black dark:text-white">Enrio</h2>
        <button onClick={onClose} className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Menu Links */}
      <ul className="flex flex-col gap-4 px-6 py-6">
        <li>
          <a href="#about" onClick={onClose} className="hover:underline text-[#4B5563] dark:text-[#D1D5DB]">
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={onClose} className="hover:underline text-[#4B5563] dark:text-[#D1D5DB]">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={onClose} className="hover:underline text-[#4B5563] dark:text-[#D1D5DB]">
            Projects
          </a>
        </li>
        <li>
          <a href="#certificate" onClick={onClose} className="hover:underline text-[#4B5563] dark:text-[#D1D5DB]">
            Certificate
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onClose} className="hover:underline text-[#4B5563] dark:text-[#D1D5DB]">
            Contact
          </a>
        </li>
      </ul>

      {/* Theme Toggle & CV Button */}
      <div className="px-6 mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="">Switch Theme</span>
          <ThemeToggle />
        </div>

        <a href="/cv/CV_Enrio_Hernanda.pdf" download="CV_Enrio_Hernanda.pdf" className="block w-full text-center bg-black dark:bg-white text-white dark:text-black py-2 rounded-xl cursor-pointer">
          Download CV
        </a>
      </div>
    </div>
  );
}
