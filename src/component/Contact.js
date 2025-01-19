import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-16 bg-gradient-to-r from-black via-gray-900 to-gray-800 animate-gradient bg-[length:300%_300%] text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg mb-12 text-gray-300">
          Feel free to reach out via any of the platforms below!
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Call */}
          <a
            href="tel:+91 9689420767"
            className="flex flex-col items-center space-y-2 transform hover:scale-110 hover:shadow-2xl hover:text-blue-500 transition-all duration-300"
          >
            <FaPhoneAlt className="text-4xl" />
          </a>

          {/* Email */}
          <a
            href="mailto:harshladukar@gmail.com"
            className="flex flex-col items-center space-y-2 transform hover:scale-110 hover:shadow-2xl hover:text-blue-500 transition-all duration-300"
          >
            <FaEnvelope className="text-4xl" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/harshal-ladukar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 transform hover:scale-110 hover:shadow-2xl hover:text-blue-500 transition-all duration-300"
          >
            <FaLinkedin className="text-4xl" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 transform hover:scale-110 hover:shadow-2xl hover:text-blue-500 transition-all duration-300"
          >
            <FaGithub className="text-4xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
