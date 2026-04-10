'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './layout/Container';

const skills = [
  { name: 'HTML', icon: '/assets/icon/icon-html.svg' },
  { name: 'CSS', icon: '/assets/icon/icon-css.svg' },
  { name: 'Javascript', icon: '/assets/icon/icon-javscript.svg' },
  { name: 'PHP', icon: '/assets/icon/icon-php.svg' },
  { name: 'Typescript', icon: '/assets/icon/icon-typescript.svg' },
  { name: 'React', icon: '/assets/icon/icon-react.svg' },
  { name: 'Next.js', icon: '/assets/icon/icon-nextjs.svg' },
  { name: 'Laravel', icon: '/assets/icon/icon-laravel.svg' },
  { name: 'Tailwindcss', icon: '/assets/icon/icon-tailwindcss.svg' },
  { name: 'Bootstrap', icon: '/assets/icon/icon-bootstrap.svg' },
  { name: 'Prisma', icon: '/assets/icon/icon-prisma-orm.svg' },
  { name: 'MySQL', icon: '/assets/icon/icon-mySql.svg' },
  { name: 'Node.js', icon: '/assets/icon/icon-nodejs.svg' },
  { name: 'Git', icon: '/assets/icon/icon-git.svg' },
  { name: 'Figma', icon: '/assets/icon/icon-figma.svg' },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 relative overflow-hidden bg-[#030712] transition-colors duration-300">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-indigo-400 mb-4 px-4 py-1 bg-indigo-900/30 rounded-full"
          >
            Capabilities
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center"
          >
            Technologies I Master
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-slate-400 max-w-2xl text-lg"
          >
            The modern tools and technologies I use to bring ideas to life with clean, efficient code.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card group flex flex-col items-center justify-center p-6 rounded-2xl hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 relative">
                 <div className="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <Image 
                  src={skill.icon} 
                  alt={skill.name} 
                  width={48} 
                  height={48} 
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" 
                />
              </div>
              <span className="text-sm font-semibold tracking-wide text-slate-300 group-hover:text-indigo-400 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
