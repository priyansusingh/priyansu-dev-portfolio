"use client"

import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaDocker, FaGithub, FaCode, FaPlus } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiPostgresql, SiPrisma, SiNextdotjs, SiExpress, SiLinux, SiGit } from 'react-icons/si';

const skills = [
  // Programming Languages
  { name: 'TypeScript', icon: <SiTypescript className="text-2xl text-blue-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-2xl text-yellow-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-2xl text-white" /> },
  { name: 'React.js', icon: <FaReact className="text-2xl text-cyan-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-2xl text-sky-400" /> },
  { name: 'Java', icon: <FaCode className="text-2xl text-blue-600" /> },
  { name: 'C++', icon: <FaCode className="text-2xl text-blue-600" /> },
  
  // Frameworks

  // Backend and Databases
  { name: 'Node.js', icon: <FaNodeJs className="text-2xl text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-2xl text-white" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-2xl text-blue-700" /> },
  { name: 'Prisma', icon: <SiPrisma className="text-2xl text-purple-500" /> },
  { name: 'MongoDB', icon: <FaDatabase className="text-2xl text-green-500" /> },

  // Other Technologies
  { name: 'Linux', icon: <SiLinux className="text-2xl text-yellow-500" /> },
  { name: 'Git', icon: <SiGit className="text-2xl text-orange-500" /> },
  { name: 'Docker', icon: <FaDocker className="text-2xl text-blue-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-2xl text-black" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-2xl text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-2xl text-blue-500" /> },
  { name: '& more', icon: <FaPlus className="text-2xl text-red-500" /> },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 pt-5 pb-10 text-white">
      <h2 className="text-4xl text-center mb-10 text-teal-300">My Skills</h2>
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