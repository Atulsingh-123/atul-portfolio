import React from 'react';
import Logo from '../assets/Test.png';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="rounded-full bg-white h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center ml-1">
                        <img src={Logo} alt="Portfolio Logo" className="h-6 sm:h-10" />
                    </div>
                    <div className="text-white text-xl sm:text-2xl font-extrabold tracking-wider ml-2">My Portfolio</div>
                </div>
                <div className="space-x-4 sm:space-x-8">
                    <a href="#about" className="text-white text-sm sm:text-lg hover:text-gray-200 transition-colors duration-300">About</a>
                    <a href="#projects" className="text-white text-sm sm:text-lg hover:text-gray-200 transition-colors duration-300">Projects</a>
                    <a href="#contact" className="text-white text-sm sm:text-lg hover:text-gray-200 transition-colors duration-300">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
