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
    <section id="contact" className="w-full py-20 bg-white dark:bg-black transition-colors duration-300">
      <Container>
        {/* Heading */}
        <div className="flex justify-center mb-6">
          <h3 className="text-[#4B5563] dark:text-[#D1D5DB] rounded-3xl py-1 px-4 bg-[#E5E7EB] dark:bg-[#374151]">Get in touch</h3>
        </div>

        {/* Subheading */}
        <p className="text-center text-[#4B5563] dark:text-[#D1D5DB] mb-10 text-lg md:w-1/2 mx-auto">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-6">
          {/* Email */}
          <div className="flex items-center gap-4">
            <Image src="/assets/icon/icon-mailLight.svg" alt="Email" width={30} height={30} className="dark:hidden" />
            <Image src="/assets/icon/icon-mailDark.svg" alt="Email" width={30} height={30} className="hidden dark:block" />
            <span className="text-[#4B5563] dark:text-[#D1D5DB] text-lg md:text-3xl font-semibold">enriohernanda@gmail.com</span>

            {/* Copy Button with bounce */}
            <motion.button whileTap={{ scale: 0.8, rotate: -10 }} onClick={() => copyToClipboard('enriohernanda@gmail.com', 'email')} className="flex items-center cursor-pointer">
              <Image src="/assets/button/button-copyLight.svg" alt="Copy Email" width={24} height={24} className="dark:hidden" />
              <Image src="/assets/button/button-copyDark.svg" alt="Copy Email" width={24} height={24} className="hidden dark:block" />
            </motion.button>

            {/* Animated Copied Message */}
            <AnimatePresence>
              {copied === 'email' && (
                <motion.span key="copied-email" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.3 }} className="text-green-500 text-sm ml-2">
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Image src="/assets/icon/icon-telephoneLight.svg" alt="Phone" width={30} height={30} className="dark:hidden" />
            <Image src="/assets/icon/icon-telephoneDark.svg" alt="Phone" width={30} height={30} className="hidden dark:block" />
            <span className="text-[#4B5563] dark:text-[#D1D5DB] text-lg md:text-3xl font-semibold">+62 87773507317</span>

            {/* Copy Button with bounce */}
            <motion.button whileTap={{ scale: 0.8, rotate: -10 }} onClick={() => copyToClipboard('+62 87773507317', 'phone')} className="flex items-center cursor-pointer">
              <Image src="/assets/button/button-copyLight.svg" alt="Copy Phone" width={24} height={24} className="dark:hidden" />
              <Image src="/assets/button/button-copyDark.svg" alt="Copy Phone" width={24} height={24} className="hidden dark:block" />
            </motion.button>

            {/* Animated Copied Message */}
            <AnimatePresence>
              {copied === 'phone' && (
                <motion.span key="copied-phone" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.3 }} className="text-green-500 text-sm ml-2">
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        <p className="text-center text-[#4B5563] dark:text-[#D1D5DB] mt-10 text-lg md:w-1/2 mx-auto">You may also find me on these platforms!</p>
        {/* Social Icons with hover + tap animation */}
        <div className="flex justify-center gap-6 mt-10">
          {[
            {
              href: 'https://github.com/enriohernanda',
              light: '/assets/icon/icon-githubLight.svg',
              dark: '/assets/icon/icon-githubDark.svg',
              alt: 'GitHub',
            },
            {
              href: 'https://www.linkedin.com/in/enriohernanda',
              light: '/assets/icon/icon-linkedinLight.svg',
              dark: '/assets/icon/icon-linkedinDark.svg',
              alt: 'LinkedIn',
            },
            {
              href: 'https://instagram.com/enriohernandaa',
              light: '/assets/icon/icon-instagramLight.svg',
              dark: '/assets/icon/icon-instagramDark.svg',
              alt: 'Instagram',
            },
          ].map((social, i) => (
            <motion.a key={i} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9, rotate: -10 }} className="inline-block">
              <Image src={social.light} alt={social.alt} width={30} height={30} className="dark:hidden" />
              <Image src={social.dark} alt={social.alt} width={30} height={30} className="hidden dark:block" />
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
