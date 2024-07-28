import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from './Layout';

interface Project {
    title: string;
    technogy: string;
    description: string;
    detailedDescription: string[];
    image: string;
    link: string; // Add link to the Project interface
}

const ProjectDetail: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { project } = location.state as { project: Project };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <Layout>
        <div className="container mx-auto px-6 md:px-12 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                <div className="flex mb-4 md:mb-0">
                    <button
                        onClick={handleBack}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300"
                    >
                        Back to Home
                    </button>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 flex-grow underline">
                    {project.title}
                </h2>
            </div>


            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full md:w-1/2 object-cover mb-6 md:mb-0 md:mr-6" />
                <div className="md:w-1/2 p-6 bg-gradient-to-r from-blue-50 to-blue-100">
                    <h4 className="text-2xl font-semibold text-gray-700 mb-4">Technology Used:</h4>
                    <p className="mb-6 text-lg text-gray-600">{project.technogy}</p>
                    <h4 className="text-2xl font-semibold text-gray-700 mb-4">Description:</h4>
                    <p className="text-lg text-gray-600">{project.description}</p>
                    <h4 className="text-2xl font-semibold text-gray-700 mb-4">Detailed Description:</h4>
                    <ul className="list-disc list-inside text-lg text-gray-600">
                        {project.detailedDescription.map((line, index) => (
                            <li key={index}>{line}</li>
                        ))}
                    </ul>
                    {/* Add project link section */}
                    <div className="mt-6">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            View Live Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default ProjectDetail;
