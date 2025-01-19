import React, { useEffect } from "react";
import Myimage from "../Assets/Myimages.jpeg";

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const textContent = document.getElementById("about-text");
      if (textContent) {
        const bounding = textContent.getBoundingClientRect();

        // Check if the element is in the viewport (100px before it reaches top)
        if (bounding.top < window.innerHeight - 100 && bounding.bottom > 100) {
          textContent.classList.add("opacity-100", "translate-y-0");
          textContent.classList.remove("opacity-0", "translate-y-10");
        } else {
          textContent.classList.add("opacity-0", "translate-y-10");
          textContent.classList.remove("opacity-100", "translate-y-0");
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check to apply transitions if already in the viewport when the component mounts
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative inset-0 bg-gradient-to-r from-black via-gray-900 to-gray-800 animate-gradient bg-[length:300%_300%] text-white py-24 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={Myimage}
            alt="Harshal Ladukar"
            className="w-80 h-80 rounded-full shadow-2xl object-cover border-4 border-purple-500"
          />
        </div>

        {/* About Content */}
        <div
          id="about-text"
          className="flex-1 text-left opacity-0 transform translate-y-10 transition-all duration-1000"
        >
          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-purple-500">Me</span>
          </h2>
          <h3 className="text-3xl font-semibold mb-4">I'm Harshal Ladukar</h3>
          <h4 className="text-xl text-blue-400 mb-6">Full Stack Developer</h4>
          <p className="text-lg text-gray-300 leading-8 mb-6">
            I am a passionate developer based in Pune, India, and a Computer
            Engineering undergraduate from SPPU. I love building interactive
            applications and websites using the latest web technologies. My
            current focus is on improving my MERN stack development skills and
            creating impactful projects.
          </p>
          <p className="text-gray-300 text-lg leading-8 mb-4">
            Email:{" "}
            <a
              href="mailto:youremail@gmail.com"
              className="text-blue-400 hover:underline"
            >
              harshladukar@gmail.com
            </a>
          </p>
          <p className="text-gray-300 text-lg leading-8 mb-8">
            Place: Pune, India - 410501
          </p>
          <a
            href="https://drive.google.com/file/d/1cuDzsRMFj5aKABLBKjYoDhc8nUNlc9pO/view?usp=drive_link"
            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg shadow-lg text-lg transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ›
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
