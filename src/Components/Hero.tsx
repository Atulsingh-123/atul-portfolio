import React, { useEffect } from 'react';
import Atul from '../assets/Atul.jpeg';

const Hero: React.FC = () => {

  useEffect(() => {
    // @ts-ignore
    particlesJS.load('particles-js', 'particles-config.json');
  }, []);

  return (
    <section className="relative bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/paper-style-dynamic-lines-background_23-2149008629.jpg')" }}>
      <div id="particles-js" className="absolute inset-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75"></div>
      <div className="relative z-10 container mx-auto flex flex-col items-center md:flex-row md:px-10">
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mb-6 md:mb-0 rounded-full overflow-hidden">
          <img src={Atul} alt="Atul Singh" className="w-full h-full object-cover" />
        </div>
        <div className="text-center md:text-left md:ml-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">Hello, I'm Atul Singh</h1>
          <p className="text-xl md:text-2xl lg:text-3xl mt-4">I'm a Frontend Developer</p>
          <a href="#projects" className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-full text-lg transition-all duration-300">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
