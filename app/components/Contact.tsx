'use client';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Container from './layout/Container';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 bg-white dark:bg-black transition-colors duration-300">
      <Container>
        {/* Heading */}
        <div className="flex justify-center mb-6">
          <h3 className="text-[#4B5563] dark:text-[#D1D5DB] rounded-3xl py-1 px-4 bg-[#E5E7EB] dark:bg-[#374151]">Contact Me</h3>
        </div>

        {/* FORM SECTION - Web3Forms */}
        <motion.form
          action="https://api.web3forms.com/submit"
          method="POST"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto bg-[#F9FAFB] dark:bg-[#111827] p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          {/* ACCESS KEY */}
          <input type="hidden" name="access_key" value="6450f781-7097-455d-8b2a-ac94b13fc31e" />

          {/* Name */}
          <label className="block mb-4">
            <span className="text-[#4B5563] dark:text-[#D1D5DB]">Name</span>
            <input type="text" name="name" required className="mt-2 w-full p-3 rounded-lg bg-white dark:bg-[#1F2937] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200" placeholder="Enter your name" />
          </label>

          {/* Email */}
          <label className="block mb-4">
            <span className="text-[#4B5563] dark:text-[#D1D5DB]">Email</span>
            <input type="email" name="email" required className="mt-2 w-full p-3 rounded-lg bg-white dark:bg-[#1F2937] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200" placeholder="Enter your email" />
          </label>

          {/* Message */}
          <label className="block mb-6">
            <span className="text-[#4B5563] dark:text-[#D1D5DB]">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full p-3 rounded-lg bg-white dark:bg-[#1F2937] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200"
              placeholder="Write your message..."
            ></textarea>
          </label>

          {/* Submit Button */}
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="w-full py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold shadow-md cursor-pointer">
            Send Message
          </motion.button>
        </motion.form>

        {/* Socials */}
        <p className="text-center text-[#4B5563] dark:text-[#D1D5DB] mt-10 text-lg md:w-1/2 mx-auto">You may also find me on these platforms!</p>

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
