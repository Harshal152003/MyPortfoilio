const HeroSection = () => {
    return (
      <section className="h-screen flex items-center justify-center text-white relative  inset-0 bg-gradient-to-r from-black via-gray-900 to-gray-800 animate-gradient bg-[length:300%_300%] ">
        <div className="text-center space-y-6 z-10">
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent">Harshal</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium">
            A passionate <span className="font-semibold text-yellow-300">Web Developer</span> crafting modern & user-friendly designs.
          </p>
  
          {/* Call to Action Buttons */}
          <div className="space-x-4">
            <a
              href="#projects"
              className="bg-white text-purple-500 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-purple-100 transition duration-300"
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
      </section>
    );
  };
  
  export default HeroSection;
  