import React, { useState } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import CertificateModal from '../components/common/CertificateModal';

const Home = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      {/* Pasamos la función setSelectedCert para que abra el modal desde Experiencia */}
      <Experience onSelectCert={setSelectedCert} />
      <Testimonials />
      <Contact />

      {/* El modal vive aquí para poder abrirse sobre cualquier sección */}
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </main>
  );
};

export default Home;