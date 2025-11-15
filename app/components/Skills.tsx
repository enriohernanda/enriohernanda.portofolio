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
  { name: 'MySQL', icon: '/assets/icon/icon-mySql.svg' },
  { name: 'Node.js', icon: '/assets/icon/icon-nodejs.svg' },
  { name: 'Git', icon: '/assets/icon/icon-git.svg' },
  { name: 'Figma', icon: '/assets/icon/icon-figma.svg' },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 bg-white dark:bg-black transition-colors duration-300">
      <Container>
        {/* Heading */}
        <div className="flex justify-center mb-6">
          <h3 className="text-[#4B5563] dark:text-[#D1D5DB] rounded-3xl py-1 px-4 bg-[#E5E7EB] dark:bg-[#374151]">Skills</h3>
        </div>

        {/* Subheading */}
        <p className="text-center text-[#4B5563] dark:text-[#D1D5DB] mb-10 text-lg">The skills, tools and technologies I am really good at:</p>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-8 items-center justify-items-center"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <Image src={skill.icon} alt={skill.name} width={45} height={45} className="object-contain hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm lg:text-base text-[#4B5563] dark:text-[#D1D5DB]">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
