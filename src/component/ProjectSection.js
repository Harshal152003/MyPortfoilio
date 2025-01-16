import React from 'react';
import HireUpImage from "../Assets/HireUp.png";
import GoceryManagement from "../Assets/GoceryManagement.png";
import Tourist from "../Assets/Tourist.png";

const ProjectsSection = () => {
 
  const projects = [
    {
      title: "HireUp",
      description: "This is a description of the project, explaining what it does and the technologies used.",
      techStack: "React, Tailwind CSS, Node.js",
      image: HireUpImage, // Use the imported image here
      liveLink: "#",
      repoLink: "#"
    },
    {
      title: "Grocery Manegement",
      description: "This is another project description, showcasing different technologies.",
      techStack: "HTML, CSS, JavaScript",
      image: GoceryManagement, // Replace with an actual image import or URL
      liveLink: "#",
      repoLink: "#"
    },
    {
      title: "Tourist",
      description: "This is another project description, showcasing different technologies.",
      techStack: "HTML, CSS, JavaScript",
      image:Tourist , // Replace with an actual image import or URL
      liveLink: "#",
      repoLink: "#"
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-black via-gray-900 to-gray-800 animate-gradient bg-[length:300%_300%] text-white">
      <div className=" max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center mb-16`}
            >
              {/* Image */}
              <div className="flex-1 hover">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Description and Tech Stack */}
              <div className="flex-1">
                <h3 className="text-4xl font-semibold mb-4">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <p className=" text-base text-gray-200 mb-4">Tech Stack: {project.techStack}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    View Project
                  </a>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
