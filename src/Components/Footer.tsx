import React from 'react';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-gray-300 py-16'>
            <div className='max-w-[1240px] mx-auto px-4 grid lg:grid-cols-3 gap-8'>
                {/* Left Section - About and Social Media Links */}
                <div>
                    <h1 className='text-3xl font-bold text-blue-500'>Atul Singh</h1>
                    <p className='py-4 text-sm text-gray-400'>A passionate frontend developer specializing in React.</p>
                    <div className='flex space-x-4'>
                        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-gray-200 transition-colors duration-300'>
                            <FaFacebookSquare size={30} />
                        </a>
                        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-gray-200 transition-colors duration-300'>
                            <FaInstagram size={30} />
                        </a>
                        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-gray-200 transition-colors duration-300'>
                            <FaTwitterSquare size={30} />
                        </a>
                        <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-gray-200 transition-colors duration-300'>
                            <FaGithubSquare size={30} />
                        </a>
                    </div>
                </div>

                {/* Right Section - Navigation Links */}
                <div className='lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div>
                        <h6 className='font-medium text-gray-400'>Skills</h6>
                        <ul className='mt-2 space-y-2 text-sm'>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Tailwind CSS</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Contact</h6>
                        <ul className='mt-2 space-y-2 text-sm'>
                            <li>Email: <a href='mailto:atulsingh7102001@gmail.com' className='hover:text-blue-500 transition-colors duration-300'>atulsingh7102001@gmail.com</a></li>
                            <li>Phone: <a href='Phone:9120599747' className='hover:text-blue-500 transition-colors duration-300'>9120599747</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Links</h6>
                        <ul className='mt-2 space-y-2 text-sm'>
                            <li><a href='#about' className='hover:text-blue-500 transition-colors duration-300'>About Me</a></li>
                            <li><a href='#projects' className='hover:text-blue-500 transition-colors duration-300'>Projects</a></li>
                            <li><a href='#contact' className='hover:text-blue-500 transition-colors duration-300'>Contact</a></li>
                            <li><a href='/resume.pdf' download className='hover:text-blue-500 transition-colors duration-300'>Download Resume</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-center text-gray-500 mt-8'>
                <p>Developed and designed by Atul Singh &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
