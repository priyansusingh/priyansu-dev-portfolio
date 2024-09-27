"use client"

import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaDocker, FaLinux, FaGit, FaGithub, FaCode, FaPlus } from 'react-icons/fa'; // Import FaPlus
import { SiJavascript, SiTypescript, SiTailwindcss, SiPostgresql, SiPrisma } from 'react-icons/si';
import { GrNext } from 'react-icons/gr'; // Next.js icon

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-2xl text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-2xl text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-2xl text-yellow-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-2xl text-blue-600" /> },
  { name: 'React', icon: <FaReact className="text-2xl text-cyan-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-2xl text-green-500" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-2xl text-blue-700" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-2xl text-sky-400" /> },
  { name: 'Next.js', icon: <GrNext className="text-2xl text-black" /> }, // Next.js icon
  { name: 'Java', icon: <FaCode className="text-2xl text-blue-600" /> }, // Placeholder for Java icon
  { name: 'C++', icon: <FaCode className="text-2xl text-blue-600" /> }, // Placeholder for C++ icon
  { name: 'MongoDB', icon: <FaDatabase className="text-2xl text-green-500" /> }, // MongoDB icon
  { name: 'Express.js', icon: <FaNodeJs className="text-2xl text-gray-600" /> }, // Use Node.js for Express.js
  { name: 'Prisma', icon: <SiPrisma className="text-2xl text-purple-500" /> }, // Prisma icon with color
  { name: 'Docker', icon: <FaDocker className="text-2xl text-blue-600" /> }, // Docker icon
  { name: 'Linux', icon: <FaLinux className="text-2xl text-black" /> }, // Linux icon
  { name: 'Git', icon: <FaGit className="text-2xl text-black" /> }, // Git icon
  { name: 'GitHub', icon: <FaGithub className="text-2xl text-black" /> }, // GitHub icon
  { name: '& more', icon: <FaPlus className="text-2xl text-red-500" /> }, // Added & more icon
];

export default function SkillsSection() {
  return (
    <section className="px-4 pt-10 pb-20 text-white"> {/* Increased padding left and right */}
      <h2 className="text-4xl text-center mb-10">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            {skill.icon}
            <span className="mt-2 text-lg text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
