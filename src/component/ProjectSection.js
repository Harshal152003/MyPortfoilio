import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HireUpVideo from "../Assets/HireUpVideo.mp4";
import GroceryVideo from "../Assets/GroceryVideo.mp4";
import TouristVideo from "../Assets/TouristVideo.mp4";

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const projects = [
    {
      title: "HireUp",
      description:
        "This is a description of the project, explaining what it does and the technologies used.",
      techStack: "React, Tailwind CSS, Node.js",
      video: HireUpVideo,
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Grocery Management",
      description:
        "This is another project description, showcasing different technologies.",
      techStack: "HTML, CSS, JavaScript",
      video: GroceryVideo,
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Tourist",
      description:
        "This is another project description, showcasing different technologies.",
      techStack: "HTML, CSS, JavaScript",
      video: TouristVideo,
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
              data-aos="fade-up"
              className={`flex flex-col sm:flex-row ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } gap-y-8 sm:gap-x-8 items-center mb-16`}
            >
            <div className="flex-1 group relative">
  <video
    src={project.video}
    loop
    autoPlay
    muted
    className="max-w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
  />
  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-0 rounded-lg transition duration-300 group-hover:bg-opacity-40"></div>
</div>

              {/* Description and Tech Stack */}
              <div className="flex-1 text-left">
                <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <p className="text-base text-gray-300 mb-4">
                  <span className="font-semibold">Tech Stack:</span>{" "}
                  {project.techStack}
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
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
                  >
                    View Repository
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
