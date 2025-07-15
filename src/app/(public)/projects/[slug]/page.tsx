import { notFound } from "next/navigation"
import Link from "next/link"
import { Github, ExternalLink, ArrowLeft, Building2, Code } from "lucide-react"
import { getCompanyById, getLinksById, getProjectBySlug } from "@/assets/skills"

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProjectBySlug((await params).slug)

  if (!project) {
    notFound() // Renderiza a página 404 do Next.js se o projeto não for encontrado
  }

  const projectLinks = project.linksId ? getLinksById(project.linksId) : null
  const projectCompany = project.companyId ? getCompanyById(project.companyId) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white relative overflow-hidden pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Voltar para Projetos
        </Link>

        {project.photoId && (
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-white/10">
            <img
              src={project.photoId || "/placeholder.svg"}
              alt={project.name || "Project Image"}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-blue-400">{project.name}</h1>
        <p className="text-xl text-gray-300 mb-8">{project.shortDescription}</p>

        <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-white">Detalhes do Projeto</h3>
          <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

          {project.skills && project.skills.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-white flex items-center gap-2">
                <Code className="w-5 h-5" /> Habilidades Utilizadas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 text-sm rounded-md text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {projectCompany && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-white flex items-center gap-2">
                <Building2 className="w-5 h-5" /> Empresa:
              </h4>
              <p className="text-gray-300">{projectCompany.name}</p>
              {projectCompany.description && <p className="text-gray-400 text-sm">{projectCompany.description}</p>}
              {projectCompany.responsibleName && (
                <p className="text-gray-400 text-sm">
                  Responsável: {projectCompany.responsibleName} ({projectCompany.responsibleRole})
                </p>
              )}
            </div>
          )}

          {projectLinks && (
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">Links:</h4>
              <div className="flex flex-wrap gap-4">
                {projectLinks.publicUrl && (
                  <a
                    href={projectLinks.publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" /> Ver Projeto Online
                  </a>
                )}
                {projectLinks.github && (
                  <a
                    href={projectLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:underline"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                )}
                {projectLinks.figma && (
                  <a
                    href={projectLinks.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M12 3C7.029 3 3 7.029 3 12c0 4.971 4.029 9 9 9s9-4.029 9-9c0-4.971-4.029-9-9-9zm0 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zm0 1.5c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 1.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5z" />
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5s4.701-10.5 10.5-10.5 10.5 4.701 10.5 10.5-4.701 10.5-10.5 10.5z" />
                      <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z" />
                    </svg>
                    Figma
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
