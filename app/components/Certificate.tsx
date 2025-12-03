'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './layout/Container';

const certificate = [
  {
    id: 1,
    title: 'Web Programming Training',
    image: '/assets/certificate/sertifikat_ppkd_enrio.svg',
    description:
      'Has participated in the Web Programming Work Skills Training Batch IV (Four) held by Pusat Pelatihan Kerja Daerah Jakarta Pusat from October 1 to November 28, 2025. This training focuses on developing skills in web programming, including front-end and back-end development, to enhance employability in the IT sector.',
    credential: 'Credential ID T2.57.WPR.KT.02.03.2505866',
    date: 'Nov 2025',
  },
  {
    id: 2,
    title: 'TOEIC Certification',
    image: '/assets/certificate/sertifikat_toeic_enrio.svg',
    description:
      'Achieved a TOEIC score of 580, demonstrating proficiency in English for professional and academic purposes. The TOEIC test assesses listening and reading skills, which are essential for effective communication in a global work environment.',
    credential: '',
    date: 'Jun 2025',
  },
  {
    id: 3,
    title: 'Web Development & UI/UX Design',
    image: '/assets/certificate/sertifikat_msib_enrio.svg',
    description:
      'Successfully completed the Independent Study program under the Kampus Merdeka initiative, focusing on Web Development and UI/UX Design. Learned and applied skills in digital creative, data, cybersecurity, and artificial intelligence through hands-on projects.',
    credential: 'Credential ID 9079841',
    date: 'Jun 2024',
  },
  {
    id: 4,
    title: 'Web Development & UI/UX Design',
    image: '/assets/certificate/sertifikat_celerates_enrio.svg',
    description:
      'Successfully completed the Independent Study program under the Kampus Merdeka initiative, focusing on Web Development and UI/UX Design. Learned and applied skills in digital creative, data, cybersecurity, and artificial intelligence through hands-on projects.',
    credential: 'Credential ID 9079841',
    date: 'Jun 2024',
  },
  {
    id: 5,
    title: 'YARSI Informatics Engineering Specialization Track Exhibition',
    image: '/assets/certificate/sertifikat_informatics_engineering_specialization_track_exhibition.svg',
    description:
      'Completed an Android Developer assignment in the Mobile Development study program at YARSI University. Presented the Bersama Zakat project at the Informatics Engineering Specialization Track Exhibition organized by YARSI University on March 21, 2024.',
    credential: 'Credential ID 0021/TI/SRK-PP.20.05/III/2024',
    date: 'Mar 2024',
  },
];

export default function Certificate() {
  return (
    <section id="certificate" className="w-full py-20 bg-[#F9FAFB] dark:bg-[#111827] transition-colors duration-300">
      <Container>
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex justify-center mb-6">
          <h3 className="text-[#4B5563] dark:text-[#D1D5DB] rounded-3xl py-1 px-4 bg-[#E5E7EB] dark:bg-[#374151]">Licenses & Certifications</h3>
        </motion.div>

        {/* Subheading */}
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="text-center text-[#4B5563] dark:text-[#D1D5DB] mb-10 text-lg">
          The following are the Licenses & Certifications that I have obtained:
        </motion.p>

        {/* certificate List */}
        <div className="flex flex-col gap-12">
          {certificate.map((project, index) => (
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
                    bg-white dark:bg-[#374151]
                    ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}
                `}
              >
                <Image src={project.image} alt={project.title} width={600} height={400} className="w-auto h-auto rounded-lg shadow-sm object-cover" />
              </div>

              {/* Bagian Content */}
              <div
                className={`flex-1 w-full md:w-1/2 p-6 flex flex-col justify-center
                bg-[#F9FAFB] dark:bg-[#1F2937]
                ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}
                 `}
              >
                <h4 className="text-xl font-semibold text-black dark:text-white">{project.title}</h4>
                <p className="mt-2 text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">{project.description}</p>
                <p className="mt-2 text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">{project.credential}</p>
                <p className="mt-2 text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">{project.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
