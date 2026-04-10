'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from './layout/Container';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      logo: '/assets/experience/logo-ppkdjp.jpeg',
      role: 'Junior Web Programmer',
      company: 'PPKD Jakarta Pusat',
      date: 'Oct 2025 - Dec 2025',
      responsibilities: [
        'Developed data-driven web applications using React.js and Laravel.',
        'Implemented responsive interfaces following modern UI principles.',
        'Managed development environments with MySQL and Git.',
      ],
    },
    {
      id: 2,
      logo: '/assets/experience/logo-celerates.png',
      role: 'Web Dev & UI/UX Design',
      company: 'Studi Independen MSIB Batch 6',
      date: 'Feb 2024 - Jun 2024',
      responsibilities: [
        'Collaborated on React-based features for production applications.',
        'Designed high-fidelity UI/UX prototypes in Figma.',
        'Optimized responsive layouts for multiple device categories.',
        'Facilitated team collaboration using Git version control.',
      ],
    },
  ];

  return (
    <section id="experience" className="w-full py-24 bg-[#030712] transition-colors duration-300">
      <Container>
         {/* Heading */}
         <div className="flex flex-col items-center mb-16 px-4">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-indigo-400 mb-4 px-4 py-1 bg-indigo-900/30 rounded-full"
          >
            My Path
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center"
          >
            Professional Experience
          </motion.h2>
        </div>

        {/* Experiences */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col md:flex-row md:items-start gap-8 p-8 rounded-3xl hover:border-indigo-500/30 transition-all group"
            >
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-slate-800 rounded-2xl p-2 shadow-inner border border-slate-700">
                <Image src={exp.logo} alt={exp.role} width={60} height={60} className="object-contain" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {exp.role}
                  </h4>
                  <span className="text-sm font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-400">
                    {exp.date}
                  </span>
                </div>
                <p className="text-indigo-400 font-bold tracking-wide uppercase text-xs">
                   {exp.company}
                </p>
                {exp.responsibilities.length > 0 && (
                  <ul className="space-y-3">
                    {exp.responsibilities.map((task, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                        <span className="text-base">{task}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
