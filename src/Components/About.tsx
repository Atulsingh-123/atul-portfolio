import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    I am a highly motivated and detail-oriented React Frontend Developer with a strong foundation in web development technologies and over 2 years of experience. I am eager to contribute my technical skills while continuously expanding my expertise in building responsive and user-friendly web applications.
                </p>
                <p className="mt-4 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Proficient in HTML, CSS, JavaScript, React, TypeScript, and Tailwind CSS, I have a passion for creating visually appealing and intuitive user interfaces. I am a fast learner with excellent problem-solving abilities and a commitment to staying current with emerging trends in frontend development.
                </p>

                 

                {/* Skills Section */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                    <div className="flex flex-col items-center justify-center text-center">
                        <FaHtml5 size={36} className="text-orange-600" title="HTML5" />
                        <p className="text-gray-600 mt-2">HTML5</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <FaCss3Alt size={36} className="text-blue-600" title="CSS3" />
                        <p className="text-gray-600 mt-2">CSS3</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <FaJsSquare size={36} className="text-yellow-500" title="JavaScript" />
                        <p className="text-gray-600 mt-2">JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <FaReact size={36} className="text-blue-500" title="React" />
                        <p className="text-gray-600 mt-2">React</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <SiTypescript size={36} className="text-blue-600" title="TypeScript" />
                        <p className="text-gray-600 mt-2">TypeScript</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <SiTailwindcss size={36} className="text-teal-500" title="Tailwind CSS" />
                        <p className="text-gray-600 mt-2">Tailwind CSS</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <FaGitAlt size={36} className="text-orange-500" title="Git" />
                        <p className="text-gray-600 mt-2">Git</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <FaNodeJs size={36} className="text-green-500" title="Node.js" />
                        <p className="text-gray-600 mt-2">Node.js</p>
                    </div>
                </div>

                  {/* Download Resume Button */}
                  <div className="mt-8">
                    <a 
                        href="/Atul.pdf" 
                        download 
                        className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
                    >
                        Download My Resume
                    </a>
                </div>

                {/* Contact Information */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Me</h3>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Email: atulsingh7102001@gmail.com <br/>
                        Phone: 9120599747
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
