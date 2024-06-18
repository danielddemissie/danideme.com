// components/TechStack.js
import React from 'react';

const techStack = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'Docker',
    'Git',
];

const TechStack = () => {
    return (
        <div className="max-w-4xl mx-0 py-0">
            <h2 className="text-l font-semibold mb-4 text-left">My Tech Stack</h2>
            <div className="flex flex-wrap justify-start space-y-4">
                <div className="flex flex-wrap space-x-2">
                    {techStack.slice(0, techStack.length / 2).map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-400 text-gray-800 py-1 px-2 rounded-full text-sm transform transition duration-300 hover:scale-110 hover:bg-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap space-x-2">
                    {techStack.slice(techStack.length / 2).map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-400 text-gray-800 py-1 px-3 rounded-full text-sm transform transition duration-300 hover:scale-110 hover:bg-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
