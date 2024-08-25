
import { FaLinkedin, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Section - About and Social Media Links */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-500">Atul Singh</h1>
                    <p className="py-4 text-sm md:text-base text-gray-400">
                        A passionate frontend developer specializing in React.
                    </p>
                    <div className="flex space-x-6 mt-4">
                        <a
                            href="https://www.linkedin.com/in/atulsingh47/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition duration-300"
                        >
                            <FaLinkedin size={28} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition duration-300"
                        >
                            <FaInstagram size={28} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition duration-300"
                        >
                            <FaTwitterSquare size={28} />
                        </a>
                        <a
                            href="https://github.com/Atulsingh-123"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition duration-300"
                        >
                            <FaGithubSquare size={28} />
                        </a>
                    </div>
                </div>

                {/* Right Section - Navigation Links */}
                <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h6 className="text-lg font-semibold text-gray-400 mb-4">Skills</h6>
                        <ul className="space-y-2 text-sm">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Tailwind CSS</li>
                            <li>Git</li>
                            <li>NodeJs</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-lg font-semibold text-gray-400 mb-4">Contact</h6>
                        <ul className="space-y-2 text-sm">
                            <li>
                                Email: <a href="mailto:atulsingh7102001@gmail.com" className="hover:text-blue-500 transition-colors duration-300">atulsingh7102001@gmail.com</a>
                            </li>
                            <li>
                                Phone: <a href="tel:9120599747" className="hover:text-blue-500 transition-colors duration-300">9120599747</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-lg font-semibold text-gray-400 mb-4">Links</h6>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#about" className="hover:text-blue-500 transition-colors duration-300">About Me</a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-blue-500 transition-colors duration-300">Projects</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contact</a>
                            </li>
                            <li>
                                <a href="/resume.pdf" download className="hover:text-blue-500 transition-colors duration-300">Download Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-6">
                <p>
                    Developed and designed by Atul Singh &copy; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
