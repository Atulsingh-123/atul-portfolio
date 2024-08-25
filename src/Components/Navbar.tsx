import React from 'react';
import Logo from '../assets/Test.png';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Brand Name */}
                <div className="flex items-center">
                    <div className="rounded-full bg-white h-10 w-10 flex items-center justify-center ml-1">
                        <img src={Logo} alt="Portfolio Logo" className="h-8 w-8 object-contain" />
                    </div>
                    <div className="text-white text-2xl sm:text-3xl font-extrabold tracking-wider ml-3">
                        Portfolio
                    </div>
                </div>
                
                {/* Navigation Links */}
                <div className="space-x-6 sm:space-x-10">
                    <a href="#about" className="text-white text-sm sm:text-lg font-medium hover:text-yellow-300 transition-colors duration-300">
                        About
                    </a>
                    <a href="#projects" className="text-white text-sm sm:text-lg font-medium hover:text-yellow-300 transition-colors duration-300">
                        Projects
                    </a>
                    <a href="#contact" className="text-white text-sm sm:text-lg font-medium hover:text-yellow-300 transition-colors duration-300">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
