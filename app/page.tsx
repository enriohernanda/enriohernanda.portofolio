import About from './components/About';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}
