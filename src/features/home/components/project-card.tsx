"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import type { Project } from "@/api"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/30 transition-all group cursor-pointer"
    >
      {/* Cover Image */}
      <div className="h-48 w-full relative overflow-hidden">
        <img
          src={project.coverId || "/placeholder.svg?height=400&width=600"}
          alt={project.name || "Project Cover"}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.name}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills?.map((skill, skillIndex) => (
            <span key={skillIndex} className="px-2 py-1 bg-white/10 text-sm rounded-md text-gray-300">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {/* Link to project detail page */}
          <span className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
            Ver Detalhes <ExternalLink className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
