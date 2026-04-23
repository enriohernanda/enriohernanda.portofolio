'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './layout/Container';

const projects = [
  {
    id: 1,
    title: 'ZakatApp',
    image: '/assets/projects/project-zakatapp.svg',
    description: 'A modern zakat management solution helping users calculate and monitor their contributions with precision and ease.',
    tags: ['Next.js 16', 'React19', 'TypeScript', 'Prisma ORM', 'TailwindCSS', 'Shadcn UI', 'Next.js API Routes', 'SQLite', 'NextAuth.js', 'JWT', 'bcrypt', 'React Hook Form', 'Zod', 'Recharts', 'Vercel'],
    link: 'https://zakat-app-phi.vercel.app/',
  },
  {
    id: 2,
    title: 'MOVFLIX',
    image: '/assets/projects/project-movflix.svg',
    description: 'Premium streaming interface inspired by modern platforms. Seamless browsing with real-time movie data integration.',
    tags: ['React', 'Vite', 'TMDB API', 'TailwindCSS', 'Vercel'],
    link: 'https://movflix-two.vercel.app/',
  },
  // {
  //   id: 3,
  //   title: 'Mini Shop E-commerce',
  //   image: '/assets/projects/project-minishop.svg',
  //   description: 'Full-featured shopping experience with cart management, product filtering, and a sleek responsive checkout flow.',
  //   tags: ['Next.js 13', 'TypeScript', 'Framer Motion', 'Local Storage', 'Vercel'],
  //   link: 'https://mini-shop-ecommerce.vercel.app/',
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 bg-[#030712] transition-colors duration-300">
      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.h3 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-sm font-bold tracking-widest uppercase text-indigo-400 mb-4 px-4 py-1 bg-indigo-900/30 rounded-full">
            Portfolio
          </motion.h3>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">
            Featured Projects
          </motion.h2>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 items-center group`}
            >
              {/* Image Container */}
              <div
                className={`flex-1 w-full relative overflow-hidden rounded-3xl group shadow-2xl
                    ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}
                `}
              >
                <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-indigo-600/0 transition-colors duration-500 z-10" />
                <Image src={project.image} alt={project.title} width={800} height={500} className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Content Container */}
              <div
                className={`flex-1 w-full space-y-6 flex flex-col justify-center
                ${index % 2 === 1 ? 'lg:order-1 lg:text-right lg:items-end' : 'lg:order-2 lg:text-left lg:items-start'}
                 `}
              >
                <div className="space-y-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h4>
                  <p className="text-lg text-slate-400 leading-relaxed max-w-xl">{project.description}</p>
                </div>

                {/* Tags */}
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-800 text-indigo-400 border border-slate-700 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold shadow-lg hover:shadow-indigo-500/25 transition-all"
                >
                  <span className="text-sm">View Project</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
