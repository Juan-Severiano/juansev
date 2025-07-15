"use client"

import { mockProjects } from "@/assets/skills"
import ProjectCard from "./project-card"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
