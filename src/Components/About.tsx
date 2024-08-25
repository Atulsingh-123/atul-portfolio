import React from "react";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiHtml5 } from "react-icons/si";

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">About Me</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                        I am a highly motivated and detail-oriented React Frontend Developer with a strong foundation in web development technologies and over 2 years of experience. I am eager to contribute my technical skills while continuously expanding my expertise in building responsive and user-friendly web applications.
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                        Proficient in React, HTML, CSS, JavaScript, TypeScript, Node.js, MongoDB, JWT, Next.js, and Tailwind CSS, I have a passion for creating visually appealing and intuitive user interfaces. I am a fast learner with excellent problem-solving abilities and a commitment to staying current with emerging trends in frontend development.
                    </p>
                </div>

                {/* Skills Section */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-semibold text-white mb-8">My Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        <SkillCard icon={<FaReact size={40} />} label="React" />
                        <SkillCard icon={<DiJavascript size={40} />} label="JavaScript" />
                        <SkillCard icon={<RiTailwindCssLine size={40} />} label="Tailwind CSS" />
                        <SkillCard icon={<FaGitAlt size={40} />} label="Git Source Control" />
                        <SkillCard icon={<SiMongodb size={40} />} label="MongoDB" />
                        <SkillCard icon={<SiHtml5 size={40} />} label="HTML & CSS" />
                        <SkillCard icon={<FaNodeJs size={40} />} label="Node.js" />
                        <SkillCard icon={<SiTypescript size={40} />} label="TypeScript" />
                        <SkillCard icon={<RiNextjsFill size={40} />} label="Next.js" />
                        <SkillCard icon={<SiRedux size={40} />} label="Redux" />
                        <SkillCard icon={<SiReactrouter size={40} />} label="React Router" />
                        <SkillCard icon={<SiNetlify size={40} />} label="Netlify" />
                    </div>
                </div>

                {/* Download Resume Section */}
                <div className="flex flex-col md:flex-row justify-center items-center mb-16">
                    <a
                        href="/Atul.pdf"
                        download
                        className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 mb-6 md:mb-0 md:mr-6"
                    >
                        Download My Resume
                    </a>
                </div>

                {/* Contact Information Section */}
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">Contact Me</h3>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        Email: <a href="mailto:atulsingh7102001@gmail.com" className="text-blue-500 hover:underline">atulsingh7102001@gmail.com</a><br />
                        Phone: <a href="tel:9120599747" className="text-blue-500 hover:underline">9120599747</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

interface SkillCardProps {
    icon: React.ReactNode;
    label: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, label }) => (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="text-4xl mb-3 text-yellow-500">{icon}</div>
        <p className="text-lg font-semibold text-gray-300">{label}</p>
    </div>
);

export default About;
