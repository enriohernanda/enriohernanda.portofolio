'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setTheme('light');
    }
  };

  return (
    <button onClick={toggleTheme} className="cursor-pointer transition pt-2 ps-1.5">
      {theme === 'light' ? <Image src="/assets/button/button-light.svg" alt="Switch to dark mode" width={33} height={33} /> : <Image src="/assets/button/button-dark.svg" alt="Switch to light mode" width={33} height={33} />}
    </button>
  );
}
