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
          <p>Hi, I’m Enrio Hernanda — a passionate Frontend Developer and fresh graduate in Computer Science from Universitas YARSI. I have a strong enthusiasm for crafting modern, responsive, and user-friendly web applications.</p>
          <p>
            My journey in web development started during my university years, where I explored the foundations of the web — HTML, CSS, and JavaScript. Over time, I grew more interested in bringing interfaces to life, which led me to dive
            deeper into React.js, Next.js, and Tailwind CSS. Through academic projects and personal explorations, I’ve built hands-on experience turning design ideas into fully functional applications.
          </p>
          <p>
            What excites me the most is the process of creating digital products that feel smooth, efficient, and delightful to use. I value clean code, responsiveness, and accessibility, making sure every user has a seamless experience no
            matter the device.
          </p>
          <p>
            Beyond coding, I see myself as a continuous learner. I love staying updated with emerging technologies, experimenting with new tools, and challenging myself with projects that push my boundaries. To me, web development isn’t
            just about code — it’s about problem-solving, creativity, and building something meaningful.
          </p>
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
            <li>Skilled in React.js, Next.js, Tailwind CSS, JavaScript, and HTML/CSS</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Passionate about Frontend Development</li>
            <li>Open to collaboration and eager to grow in a professional environment</li>
          </ul>
        </motion.div>

        {/* Closing */}
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }} className="mt-8 text-[#4B5563] dark:text-[#D1D5DB]">
          I’m always excited to connect with like-minded people, contribute to impactful projects, and grow as a developer. Feel free to reach out — I’d be more than happy to chat!
        </motion.p>
      </Container>
    </section>
  );
}
