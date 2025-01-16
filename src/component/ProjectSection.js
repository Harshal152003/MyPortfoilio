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
      image: HireUpImage,
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Grocery Management",
      description: "This is another project description, showcasing different technologies.",
      techStack: "HTML, CSS, JavaScript",
      image: GoceryManagement,
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Tourist",
      description: "This is another project description, showcasing different technologies.",
      techStack: "HTML, CSS, JavaScript",
      image: Tourist,
      liveLink: "#",
      repoLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-r from-black via-gray-900 to-gray-800 animate-gradient bg-[length:300%_300%] text-white"
    >
      <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-8">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              } gap-y-8 sm:gap-x-8 items-center mb-16`}
            >
              {/* Image */}
              <div className="flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Description and Tech Stack */}
              <div className="flex-1 text-left">
                <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <p className="text-base text-gray-300 mb-4">
                  <span className="font-semibold">Tech Stack:</span> {project.techStack}
                </p>
                <div className="flex flex-wrap gap-4">
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
