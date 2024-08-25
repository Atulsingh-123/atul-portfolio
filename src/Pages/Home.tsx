// src/pages/Home.tsx
import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
