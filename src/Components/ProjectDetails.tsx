import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Slider from './Slider';
import { motion } from 'framer-motion';
import { IoArrowBackCircleOutline } from "react-icons/io5";
interface Project {
    title: string;
    technogy: string;
    description: string;
    detailedDescription: string[];
    images: string[];
    link: string;
}

const ProjectDetail: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { project } = location.state as { project: Project };

    console.log('Project images:', project.images);
    const handleBack = () => {
        navigate('/');
    };
    console.log(project.images);
    return (
        <Layout>
            <motion.div className="flex items-center justify-center h-6 bg-gradient-to-r from-blue-500 to-purple-600">
                Portfolio
            </motion.div>
            <div className="container mx-auto px-4 md:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <motion.div
                        className="flex items-center w-full md:w-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.button
                            onClick={handleBack}
                            className="flex items-center mr-2 text-blue-600"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <IoArrowBackCircleOutline className=" size-16" /> 
                        </motion.button>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                            {project.title}
                        </h2>
                    </motion.div>
                </div>
                <Slider images={project.images} />
                <div className="relative bg-white p-6 rounded-lg shadow-lg mt-6">
                    <motion.div
                        className="mb-6"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Technology Used</h4>
                        <p className="text-lg text-gray-600">{project.technogy}</p>
                    </motion.div>
                    <motion.div
                        className="mb-6"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Description</h4>
                        <p className="text-lg text-gray-600">{project.description}</p>
                    </motion.div>
                    <motion.div
                        className="mb-6"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Detailed Description</h4>
                        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                            {project.detailedDescription.map((line, index) => (
                                <li key={index}>{line}</li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        className="mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline text-lg"
                        >
                            View Live Project
                        </a>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default ProjectDetail;
