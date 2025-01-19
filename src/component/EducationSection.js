import React from 'react';

const EducationSection = () => {
  // Sample education data
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institute: "Savitribai Phule Pune University (SPPU)",
      duration: "2021 - Present",
      description: "Focused on Web development, AI and AI Tool, and BlockChain Technology.",
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institute: "Mahatma Gandhi Junior College",
      duration: "2019 - 2021",
      description: "Specialized in Science with Mathematics and Computer Science.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institute: "Pius Memorial High School",
      duration: "2018 - 2019",
      description: "Achieved strong foundational knowledge in Mathematics and Science.",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-16 bg-gradient-to-r from-black via-gray-900 to-gray-800 animate-gradient bg-[length:300%_300%] text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="group bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg text-left transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-2">{education.degree}</h3>
              <p className="text-lg font-medium text-blue-400 group-hover:text-white transition-all duration-300">
                {/* Institute text will change to white on hover */}
                {education.institute}
              </p>
              <p className="text-sm font-medium text-gray-300 mb-4">{education.duration}</p>
              <p className="text-gray-200">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
