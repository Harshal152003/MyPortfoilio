import React, { useState, useEffect } from "react";
import video from "../Assets/BgVideo.mp4";

const HeroSection = () => {
  const text = "Hi, I'm ";
  const name = "Harshal";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed here (in milliseconds)

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section id="Home" className="relative h-screen flex items-center justify-center text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center space-y-8 px-6 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight relative">
          {displayedText}
          <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-3xl font-medium">
          A passionate{" "}
          <span className="font-semibold text-yellow-300">Web Developer</span>{" "}
          crafting modern & user-friendly designs.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-white text-purple-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-100 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-purple-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-800 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 flex justify-center w-full">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center">
          <span className="block w-2 h-2 bg-white rounded-full animate-bounce"></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
