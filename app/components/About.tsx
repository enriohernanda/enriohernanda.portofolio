'use client';
import { motion } from 'framer-motion';
import Container from './layout/Container';

export default function About() {
  return (
    <section id="about" className="w-full py-24 bg-white dark:bg-[#030712] transition-colors duration-300">
      <Container>
         {/* Heading */}
         <div className="flex flex-col items-center mb-16 px-4">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-4 px-4 py-1 bg-indigo-50 dark:bg-indigo-900/30 rounded-full"
          >
            Behind the code
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 text-center"
          >
            Curious about me?
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
          {/* Paragraphs */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-600 first-letter:mr-3 first-letter:float-left">
              I’m <span className="text-slate-900 dark:text-white font-semibold">Enrio Hernanda</span> — a passionate Web Developer with a strong focus on frontend development. I recently graduated with a Bachelor of Computer Science from Universitas YARSI (GPA 3.73/4.00), where I developed a deep interest in building modern and user-friendly digital experiences.
            </p>
            <p>
              My journey began with the fundamentals — HTML, CSS, and JavaScript — and has grown into hands-on experience using modern tools like <span className="text-indigo-600 dark:text-indigo-400 font-medium">React.js, Next.js, and Tailwind CSS</span>. I enjoy turning complex designs into fully functional, responsive, and accessible web applications.
            </p>
            <p>
              I believe that great web development is about more than just code; it's about solving problems and crafting meaningful solutions that users love. I’m a continuous learner, always exploring new technologies to sharpen my skills.
            </p>
            
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
               <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 underline decoration-indigo-500/30 decoration-4 underline-offset-4">Quick facts about me:</h4>
               <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                    <p className="text-base font-medium">Bachelor of Computer Science (GPA 3.73/4.00)</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                    <p className="text-base font-medium">Next.js & React ecosystem specialist</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                    <p className="text-base font-medium">Passionate about clean code & UI/UX</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                    <p className="text-base font-medium">Eager to collaborate on impactful projects</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
