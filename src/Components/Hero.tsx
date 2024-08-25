import React, { useEffect } from 'react';
import Atul from '../assets/Atul.jpeg';
import Logo from '../assets/Test.png';
import ParticlesBg from 'particles-bg';

const Hero: React.FC = () => {

  useEffect(() => {
    // @ts-ignore
    particlesJS.load('particles-js', 'particles-config.json');
  }, []);

  return (
    <section className="relative bg-cover bg-center h-screen text-white flex flex-col">
   <ParticlesBg
        type="random" // Options: "circle", "square", "polygon", "random"
        bg={true}
      />
      {/* Navbar */}
      <nav className="bg-transparent py-4 absolute w-full z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logo} alt="Portfolio Logo" className="h-10" />
            <div className="text-black text-xl sm:text-2xl font-bold tracking-wider ml-4">Portfolio</div>
          </div>
          <div className="space-x-6 sm:space-x-12">
            <a href="#about" className="text-gray-800 text-sm sm:text-lg hover:text-blue-600 transition-colors duration-200">About</a>
            <a href="#projects" className="text-gray-800 text-sm sm:text-lg hover:text-blue-600 transition-colors duration-200">Projects</a>
            <a href="#contact" className="text-gray-800 text-sm sm:text-lg hover:text-blue-600 transition-colors duration-200">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="absolute inset-0 bg-swipe z-10"></div>
      <div id="particles-js" className="absolute inset-0 z-10"></div>
      <div className="relative z-20 container mx-auto flex flex-col items-center justify-center flex-grow md:flex-row md:px-10">
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mb-6 md:mb-0 rounded-full overflow-hidden">
          <img src={Atul} alt="Atul Singh" className="w-full h-full object-cover" />
        </div>
        <div className="text-center md:text-left md:ml-10">
          <h1 className="text-4xl text-gray-700 md:text-6xl lg:text-8xl font-bold">Hello, I'm Atul Singh</h1>
          <p className="text-xl text-gray-800 md:text-2xl lg:text-3xl mt-4">I'm a Frontend Developer</p>
          <a href="#projects" className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-full text-lg transition-all duration-300">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
