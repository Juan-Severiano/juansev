'use client'

import { useGetAllProjects, useDeleteProject } from "@/api/hooks/useProjects"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectsPage() {
  const { data: projects, refetch } = useGetAllProjects()
  const { mutate: deleteProject } = useDeleteProject({
    onSuccess: () => {
      refetch()
    },
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button asChild>
          <Link href="/master-jedi/projects/new">New Project</Link>
        </Button>
      </div>
      <div className="bg-gray-800 rounded-lg p-4">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="p-2">Name</th>
              <th className="p-2">Short Description</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map((project) => (
              <tr key={project.id} className="border-t border-gray-700">
                <td className="p-2">{project.name}</td>
                <td className="p-2">{project.shortDescription}</td>
                <td className="p-2">
                  <Button asChild variant="outline" className="mr-2">
                    <Link href={`/master-jedi/projects/${project.id}`}>Edit</Link>
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      if (project.id) {
                        deleteProject(project.id)
                      }
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
