'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from './layout/Container';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      logo: '/assets/experience/logo-yarsi.svg',
      role: 'Frontend Developer',
      company: 'Universitas YARSI',
      date: 'Mar 2025 - Aug 2025',
      responsibilities: [
        'Designed the UI/UX in Figma',
        'Developed the entire frontend using Next.js and Tailwind CSS',
        'Built a responsive interface for desktop, tablet, and smartphone',
        'Implemented dark mode and light mode support',
        'Integrated the frontend with backend API services',
        'Managed version control and project collaboration using GitHub',
        'Deployed and hosted the application on Vercel',
      ],
      description: 'Tools: Next.js, Tailwind CSS, TypeScript, HTML, CSS, GitHub, Figma, Vercel',
    },
    {
      id: 2,
      logo: '/assets/experience/logo-celerates.svg',
      role: 'Web Development & UI/UX Design',
      company: 'Studi Independen MSIB Batch 6 - PT Mitra Talenta Grup',
      date: 'Feb 2024 - Jun 2024',
      responsibilities: [
        'Collaborated with a development team to build and test features for a React-based web application',
        'Designed UI/UX prototypes in Figma and implemented them into code',
        'Developed a responsive interface optimized for desktop, tablet, and mobile devices',
        'Managed version control and team collaboration using GitHub',
      ],
      description: 'Tools: React.js, HTML, CSS, JavaScript, Bootstrap, Figma, GitHub',
    },
  ];

  return (
    <section id="experience" className="w-full py-20 bg-[#F9FAFB] dark:bg-[#111827] transition-colors duration-300">
      <Container>
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex justify-center mb-8">
          <h3 className="text-[#4B5563] dark:text-[#D1D5DB] rounded-3xl py-1 px-4 bg-[#E5E7EB] dark:bg-[#374151]">Experience</h3>
        </motion.div>

        {/* Title */}
        <motion.h5 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="text-2xl md:text-3xl mb-6 text-center text-black dark:text-white">
          Here is a quick summary of my most recent experiences:
        </motion.h5>

        {/* Experiences */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-start gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1F2937] shadow-sm"
            >
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image src={exp.logo} alt={exp.role} width={64} height={64} className="object-contain" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h4 className="text-lg font-bold text-[#111827] dark:text-[#F9FAFB]">{exp.role}</h4>
                  <span className="text-sm text-[#374151] dark:text-[#E5E7EB]">{exp.date}</span>
                </div>
                <p className="text-[#374151] dark:text-[#E5E7EB]">{exp.company}</p>
                {exp.responsibilities.length > 0 && (
                  <ul className="mt-3 list-disc list-inside space-y-1 text-[#4B5563] dark:text-[#D1D5DB]">
                    {exp.responsibilities.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                )}
                <p className="mt-2 text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
