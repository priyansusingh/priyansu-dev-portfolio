import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <footer className="py-6 flex flex-col items-center">
      {/* Centered semi-transparent border line with 10% padding on each side */}
      <div className="w-[80%] h-[0.5px] bg-white bg-opacity-20 mb-4 mx-auto" />

      <p className="text-gray-300">Made with <span className="text-red-500">&lt;3</span> by Priyansu Singh</p>
      <div className="flex space-x-4 mt-4">
        <a href="https://github.com/priyansusingh" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="https://www.linkedin.com/in/priyansusingh/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="https://x.com/priyansu__singh" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aec.cse.priyansusingh@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-white text-2xl hover:text-gray-400 transition" />
        </a>
      </div>
    </footer>
  );
}

