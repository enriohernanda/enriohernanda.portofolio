'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './layout/Container';

const certificates = [
  {
    id: 1,
    title: 'Junior Web Programmer',
    image: '/assets/certificate/sertifikat_bnsp_enrio.svg',
    description:
      'Certified as a Junior Web Programmer by the Badan Nasional Sertifikasi Profesi (BNSP). This certification validates skills in web programming, including front-end and back-end development, and database management.',
    credential: 'ICT 2121 14028 2025',
    date: 'Dec 2025',
  },
  {
    id: 2,
    title: 'Web Programming Training',
    image: '/assets/certificate/sertifikat_ppkd_enrio.svg',
    description:
      'Intensive Web Programming training focusing on modern development stacks to enhance employability in the IT sector.',
    credential: 'ID T2.57.WPR.KT.02.03.2505866',
    date: 'Nov 2025',
  },
  {
    id: 3,
    title: 'TOEIC Listening & Reading',
    image: '/assets/certificate/sertifikat_toeic_enrio.svg',
    description:
      'Achieved a TOEIC score of 580, demonstrating proficiency in English for professional and academic environments.',
    credential: '',
    date: 'Jun 2025',
  },
  {
    id: 4,
    title: 'MSIB Web Development',
    image: '/assets/certificate/sertifikat_msib_enrio.svg',
    description:
      'Kampus Merdeka initiative focusing on Web Development and UI/UX Design with hands-on project experience.',
    credential: '9079841',
    date: 'Jun 2024',
  },
  {
    id: 5,
    title: 'Informatics Specialization Exhibition',
    image: '/assets/certificate/sertifikat_informatics_engineering_specialization_track_exhibition.svg',
    description:
      'Presented the Bersama Zakat project at the Informatics Engineering Specialization Track Exhibition organized by YARSI University.',
    credential: '0021/TI/SRK-PP.20.05/III/2024',
    date: 'Mar 2024',
  },
];

export default function Certificate() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + certificates.length) % certificates.length);
  };

  return (
    <section id="certificate" className="w-full py-24 relative overflow-hidden bg-white dark:bg-[#030712] transition-colors duration-300">
      <Container>
         {/* Heading */}
         <div className="flex flex-col items-center mb-16 px-4">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-4 px-4 py-1 bg-indigo-50 dark:bg-indigo-900/30 rounded-full"
          >
            Achievements
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 text-center"
          >
            Licenses & Certifications
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto h-[700px] md:h-[500px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0 flex flex-col md:flex-row items-center gap-8 glass-card p-6 md:p-10 rounded-[2.5rem]"
            >
              {/* Image Side */}
              <div className="flex-1 w-full h-full relative group overflow-hidden rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
                  <Image 
                    src={certificates[currentIndex].image} 
                    alt={certificates[currentIndex].title} 
                    fill
                    className="object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-indigo-600/0 transition-colors" />
              </div>

              {/* Text Side */}
              <div className="flex-1 space-y-6 flex flex-col justify-center">
                <div className="space-y-2">
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                    {certificates[currentIndex].date}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                    {certificates[currentIndex].title}
                  </h4>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {certificates[currentIndex].description}
                </p>

                {certificates[currentIndex].credential && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Credential ID</p>
                    <p className="text-sm font-mono text-slate-700 dark:text-slate-300">
                      {certificates[currentIndex].credential}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-8">
            <button 
              onClick={() => paginate(-1)}
              className="p-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {certificates.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-300 dark:bg-slate-700'}`}
                />
              ))}
            </div>

            <button 
              onClick={() => paginate(1)}
              className="p-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
