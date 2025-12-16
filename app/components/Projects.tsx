'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './layout/Container';

const projects = [
  {
    id: 1,
    title: 'Mini Shop e-commerce',
    image: '/assets/projects/project-minishop.svg',
    description:
      'Built a responsive mini e-commerce frontend using Next.js, React, and Tailwind CSS. Features include product listing with search & filter, product detail page, cart management with localStorage, and checkout functionality. Demonstrates API integration, state management, and responsive UI design.',
    tags: ['Next.js', 'React.js', 'Typescript', 'Tailwindcss', 'Framer Motion', 'GitHub'],
    link: 'https://github.com/enriohernanda/mini-shop-ecommerce',
  },
  {
    id: 2,
    title: 'NextVision Landing Page',
    image: '/assets/projects/project-nextvision.svg',
    description:
      'NextVision is a web platform built with Next.js and Tailwind CSS. This website features a modern landing page with interactive animations using Framer Motion. It includes sections like Hero, Features, Testimonials, and Contact, all designed to be fully responsive and visually appealing across devices.',
    tags: ['Next.js', 'React.js', 'Typescript', 'Tailwindcss', 'Framer Motion', 'GitHub'],
    link: 'https://github.com/enriohernanda/Landing-Page-NextVision',
  },
  {
    id: 3,
    title: 'MRICondyleNet',
    image: '/assets/projects/project-mricondylenet.svg',
    description:
      'MRICondyleNet is a web-based application for detecting Temporomandibular Joint (TMJ) conditions through MRI images with the help of an AI model. Built using Next.js and Tailwind CSS, the application allows users to upload images, view predictions, and manage data using a modern, interactive interface.',
    tags: ['Next.js', 'React.js', 'Typescript', 'Tailwindcss', 'Framer Motion', 'Figma', 'GitHub'],
    link: 'https://github.com/enriohernanda/Frontend-MRICondyleNet',
  },
  // {
  //   id: 4,
  //   title: 'MopArt',
  //   image: '/assets/projects/project-mopart.svg',
  //   description:
  //     'MopArt is an innovative website designed with the aim of introducing and promoting painting to the public. This website was created in a group with 6 members consisting of 1 hustler, 3 hipsters and 2 hackers. When creating this website, I served as a hacker who handled the entire frontend of the website.',
  //   tags: ['React.js', 'HTML', 'CSS', 'Javascript', 'Bootstrap', 'Figma', 'GitHub'],
  //   link: 'https://github.com/enriohernanda/Project-Massive_Compro-Developers',
  // },
  // {
  //   id: 5,
  //   title: 'Bersama Zakat',
  //   image: '/assets/projects/project-berkat.svg',
  //   description:
  //     'Bersama Zakat is an Android app that teaches you about zakat, how to calculate it, and its benefits. It also helps you pay zakat according to Islamic law. You can learn about various types of zakat, such as zakat on gold, zakat on fitrah, zakat on professions, zakat on agriculture, zakat on livestock, and zakat on fisheries. The app also provides information on zakat law from various perspectives.',
  //   tags: ['Kotlin', 'Figma', 'GitHub'],
  //   link: 'https://github.com/Ardiansputrraa/Bersama-Zakat-App',
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 bg-white dark:bg-black transition-colors duration-300">
      <Container>
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex justify-center mb-6">
          <h3 className="text-[#4B5563] dark:text-[#D1D5DB] rounded-3xl py-1 px-4 bg-[#E5E7EB] dark:bg-[#374151]">Projects</h3>
        </motion.div>

        {/* Subheading */}
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="text-center text-[#4B5563] dark:text-[#D1D5DB] mb-10 text-lg">
          Some of the noteworthy projects I have built:
        </motion.p>

        {/* Projects List */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-stretch rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              {/* Bagian Image */}
              <div
                className={`flex-1 w-full md:w-1/2 flex justify-center items-center px-3 py-5
                    bg-[#F9FAFB] dark:bg-[#374151]
                    ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}
                `}
              >
                <Image src={project.image} alt={project.title} width={600} height={400} className="w-auto h-auto rounded-lg shadow-sm object-cover" />
              </div>

              {/* Bagian Content */}
              <div
                className={`flex-1 w-full md:w-1/2 p-6 flex flex-col justify-center
                bg-[#F9FAFB] dark:bg-[#111827]
                ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}
                 `}
              >
                <h4 className="text-xl font-semibold text-black dark:text-white">{project.title}</h4>
                <p className="mt-2 text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-sm px-3 py-1 rounded-full bg-[#E5E7EB] dark:bg-[#374151] text-[#4B5563] dark:text-[#D1D5DB]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button (Light & Dark) */}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                  {/* Light mode */}
                  <Image src="/assets/button/buttonProject-Light.svg" alt="View Project" width={40} height={40} className="block dark:hidden hover:scale-105 transition-transform" />
                  {/* Dark mode */}
                  <Image src="/assets/button/buttonProject-Dark.svg" alt="View Project" width={40} height={40} className="hidden dark:block hover:scale-105 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
