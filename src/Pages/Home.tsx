import React, { Suspense, lazy } from 'react';
import Hero from '../Components/Hero'; 


const About = lazy(() => import('../Components/About'));
const Projects = lazy(() => import('../Components/Projects'));
const Contact = lazy(() => import('../Components/Contact'));
const Footer = lazy(() => import('../Components/Footer'));

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
