import React from 'react';
import { useNavigate } from 'react-router-dom';
import Project1 from '../assets/Project1.jpg';
import Project2 from '../assets/Project2.jpg';
import Project3 from '../assets/Project3.jpg';

interface Project {
    id: string;
    title: string;
    technogy: string;
    description: string;
    detailedDescription: string[];
    image: string;
    link: string;
}

const Projects: React.FC = () => {
    const navigate = useNavigate();

    const projectList: Project[] = [
        {
            id: 'lombaa',
            title: 'Lombaa',
            technogy: 'HTML, CSS, JavaScript, React.js, VS Studio, Material-UI, Bootstrap',
            description: 'Played a key role in the development of ”LOMBAA,” a web application inspired by OLX.',
            detailedDescription: [
                "Played a key role in the development of ”LOMBA,” a web application inspired by OLX, with a focus on user-friendly and responsive design.",
                "Utilized Axios to make HTTP requests to the backend server, allowing users to view and post product listings securely.",
                "Utilized modern frontend technologies, including React.js, Context-API, HTML, CSS, and JavaScript, to create an interactive and dynamic user interface.",
                "Implemented client-side routing with React Router to improve the overall user experience and page navigation."
            ],
            image: Project1,
            link: '/projects/lombaa'
        },
        {
            id: 'cashkama',
            title: 'CashKama',
            technogy: 'HTML, CSS, JavaScript, React.js, VS Studio, Material-UI, Typescript',
            description: 'CashKama is a Cashback & Coupons platform with Cashback offers on top sites.',
            detailedDescription: [
                "CashKama is a Cashback & Coupons platform with Cashback offers on sites like Amazon, Flipkart, Myntra.",
                "Developed a CashKama application using React, integrating the CashKama API to fetch cashback offers.",
                "Implemented routing with react-router-dom for seamless navigation and used Tailwind CSS for styling.",
                "API integrated login, registration, products, add to cart using fetch and Axios libraries."
            ],
            image: Project2,
            link: 'https://www.cashkama.com/'
        },
        {
            id: 'simplisia',
            title: 'Simplisia',
            technogy: 'HTML, Tailwind, JavaScript, React.js, VS Studio, Material-UI, Typescript, Context-API, Git',
            description: 'Implemented a modular architecture with reusable components for efficiency.',
            detailedDescription: [
                "Implemented a modular architecture with reusable components to maintain consistency and improve development efficiency.",
                "Used Context API for effective state management across ERP and CRM modules.",
                "Worked in an Agile environment, actively participating in sprint planning, daily stand-ups, and retrospectives."
            ],
            image: Project3,
            link: 'https://www.voyatekgroup.com/'
        },
    ];

    const handleProjectClick = (project: Project) => {
        navigate(`/projects/${project.id}`, { state: { project } });
    };

    return (
        <section id="projects" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-center">My Projects</h2>
                <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {projectList.map((project) => (
                        <div 
                            key={project.id} 
                            onClick={() => handleProjectClick(project)} 
                            className="cursor-pointer hover:no-underline focus:no-underline"
                        >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <h4 className="text-lg mb-2"><span className="text-lg font-semibold mb-2">Technology Used: </span>{project.technogy}</h4>
                                    {/* <p className="text-gray-700">{project.description}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
