import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-16 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-gray-800 animate-gradient bg-[length:300%_300%]"></div>

      {/* Content */}
      <div className="relative max-w-screen-lg mx-auto text-center z-10">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg transform hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-in-out hover:shadow-2xl opacity-100 hover:opacity-80 group"
            >
              {/* Skill Icon with Fade In on Hover */}
              <div className="text-4xl transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                {skill.icon}
              </div>
              
              {/* Skill Name with Fade In on Hover */}
              <span className="mt-4 text-lg font-medium text-gray-300 transition-all duration-300 ease-in-out group-hover:text-white opacity-100 group-hover:opacity-100">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
