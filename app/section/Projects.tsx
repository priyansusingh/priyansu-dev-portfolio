"use client"

import React from 'react';
import { FaLink, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import project1 from '../project1.png'
import project2 from '../project2.png'
import project3 from '../project3.png'


export default function ProjectSection() {
  return (
    <section className="py-20 text-white">
      <h2 className="text-4xl text-center mb-10">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
    
          <div  className="w-80 bg-transparent border border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <Image src={project1} alt='' className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Digital Dairy</h3>
              <p className="mt-2 text-gray-300">A blogging platform for users to create and read blogs.</p>
              <div className="flex justify-between mt-4">
                <a href="https://digital-dairy-one.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">
                  <FaLink className="text-xl" />
                </a>
                <a href="https://github.com/priyansusingh/Digital-Dairy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div  className="w-80 bg-transparent border border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <Image src={project2} alt='' className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Payment Application</h3>
              <p className="mt-2 text-gray-300">An app designed for efficient payment management and processing.</p>
              <div className="flex justify-between mt-4">
                <a href="https://payments-app-iota.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">
                  <FaLink className="text-xl" />
                </a>
                <a href="https://github.com/priyansusingh/payments-application" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div  className="w-80 bg-transparent border border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <Image src={project3} alt='' className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Portfolio Website</h3>
              <p className="mt-2 text-gray-300">An app designed to showcase my skills and work</p>
              <div className="flex justify-between mt-4">
                <a href="https://priyansu-dev.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">
                  <FaLink className="text-xl" />
                </a>
                <a href="https://github.com/priyansusingh/priyansu-dev-portfolio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
