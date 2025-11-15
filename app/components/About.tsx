'use client';
import { motion } from 'framer-motion';
import Container from './layout/Container';

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-[#F9FAFB] dark:bg-[#111827] transition-colors duration-300">
      <Container>
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex justify-center mb-8">
          <h3 className="text-[#4B5563] dark:text-[#D1D5DB] rounded-3xl py-1 px-4 bg-[#E5E7EB] dark:bg-[#374151]">About me</h3>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold mb-6 text-start text-black dark:text-white"
        >
          Curious about me? Here you have it:
        </motion.h2>

        {/* Paragraphs */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="space-y-4 text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
          <p>
            Hi, I’m Enrio Hernanda — a passionate Web Developer with a strong focus on frontend development. I recently graduated with a Bachelor of Computer Science from Universitas YARSI (GPA 3.73/4.00), where I developed a deep interest
            in building modern and user-friendly digital experiences.
          </p>
          <p>
            My journey began with the fundamentals — HTML, CSS, and JavaScript — and has grown into hands-on experience using modern tools like React.js, Next.js, Tailwind CSS, and Laravel. I enjoy turning ideas and UI designs into fully
            functional, responsive, and accessible web applications.
          </p>
          <p>
            Throughout academic projects, independent learning, and practical experience, I’ve learned the importance of clean code, performance, and creating interfaces that work smoothly across devices. I also have experience in RESTful
            API integration, version control with Git/GitHub, manual testing, and working in collaborative environments.
          </p>
          <p>I’m a continuous learner who loves exploring new technologies and improving my skills. For me, web development is not just about coding — it’s about solving problems, understanding users, and building meaningful solutions.</p>
          <p>Finally, some quick bits about me.</p>
        </motion.div>

        {/* Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-[#4B5563] dark:text-[#D1D5DB]"
        >
          <ul className="list-disc list-inside space-y-2">
            <li>Bachelor of Computer Science, Universitas YARSI (GPA 3.73/4.00)</li>
            <li>Skilled in React.js, Next.js, Tailwind CSS, JavaScript, HTML/CSS, PHP, and Laravel</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Passionate about frontend development and building scalable web applications</li>
            <li>Open to collaboration and eager to grow in a professional environment</li>
          </ul>
        </motion.div>

        {/* Closing */}
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }} className="mt-8 text-[#4B5563] dark:text-[#D1D5DB]">
          I’m always excited to connect, collaborate on impactful projects, and continue growing as a developer. Feel free to reach out — I’d be happy to chat!
        </motion.p>
      </Container>
    </section>
  );
}
