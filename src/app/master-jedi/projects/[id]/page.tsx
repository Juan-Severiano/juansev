'use client'

import { useGetProjectById, useUpdateProject } from "@/api/hooks/useProjects"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useEffect } from "react"

export default function EditProjectPage({ params }: { params: { id: string } }) {
  const { data: project } = useGetProjectById(params.id)
  const { register, handleSubmit, reset } = useForm()
  const router = useRouter()
  const { mutate: updateProject } = useUpdateProject()

  useEffect(() => {
    if (project) {
      reset({
        ...project,
        skills: project.skills?.join(', ') || '',
      })
    }
  }, [project, reset])

  const onSubmit = (data: any) => {
    // Convert skills string to array
    data.skills = data.skills.split(',').map((skill: string) => skill.trim());
    updateProject({ id: params.id, data }, {
      onSuccess: () => {
        router.push("/master-jedi/projects")
      },
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Edit Project</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-8 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="name">
            Name
          </label>
          <input {...register("name")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="shortDescription">
            Short Description
          </label>
          <input {...register("shortDescription")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="description">
            Description
          </label>
          <textarea {...register("description")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="skills">
            Skills (comma separated)
          </label>
          <input {...register("skills")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <Button type="submit">Update</Button>
      </form>
    </div>
  )
}
