"use client"

import React from 'react'
import { FaLink, FaGithub } from 'react-icons/fa'
import { SiTypescript, SiReact, SiPostgresql, SiTailwindcss, SiNextdotjs, SiDrizzle, SiClerk, SiStripe } from 'react-icons/si'
import Image, { StaticImageData } from 'next/image'
import postgenix from '../../public/postgenix.png'
import writely from '../../public/writely.png'
import portfolio from '../../public/portfolio.png'


interface ProjectCardProps {
  title: string
  description: string
  image: StaticImageData
  liveLink: string
  githubLink: string
  techStack: JSX.Element[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, liveLink, githubLink, techStack }) => {
  return (
    <div className="w-80 bg-white bg-opacity-10 border border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative w-full h-48 bg-gray-200 rounded-t-lg overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 rounded-t-lg">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-gray-700 rounded-b-lg"></div>
        </div>
        <div className="absolute inset-2 overflow-hidden rounded-t-lg">
          <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-teal-300">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="flex items-center mt-2 mb-4">
          {techStack.map((icon, index) => (
            <span key={index} className="text-teal-300 mr-2">
              {icon}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">
            <FaLink className="text-xl" />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ProjectSection() {
  const projects = [
    {
      title: "PostgeniX AI",
      description: "An AI powered social media content generator app",
      image: postgenix,
      liveLink: "https://postgenix-ai.vercel.app/",
      githubLink: "https://github.com/priyansusingh/postgenix-ai",
      techStack: [<SiTypescript key="js" />, <SiNextdotjs key="nextjs" />, <SiTailwindcss key="tailwind" />, <SiPostgresql key="postgres" />, <SiDrizzle key="drizzle"/>, <SiClerk key="clerk"/>, <SiStripe key="stripe"/>],
    },
    {
      title: "Writely",
      description: "A blogging platform for users to create and read blogs.",
      image: writely,
      liveLink: "https://writely-one.vercel.app/",
      githubLink: "https://github.com/priyansusingh/Writely",
      techStack: [<SiTypescript key="js" />, <SiReact key="react" />, <SiTailwindcss key="tailwind" />, <SiPostgresql key="postgres" />],
    },
    {
      title: "Portfolio Website",
      description: "An app designed to showcase my skills and work.",
      image: portfolio,
      liveLink: "https://priyansu-dev.vercel.app/",
      githubLink: "https://github.com/priyansusingh/priyansu-dev-portfolio",
      techStack: [<SiTypescript key="ts" />, <SiNextdotjs key="nextjs" />, <SiReact key="react" />, <SiTailwindcss key="tailwind" />],
    }
  ]

  return (
    <section id="projects" className="py-15 text-white">
      <h2 className="text-4xl text-center mb-10 text-teal-300">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  )
}