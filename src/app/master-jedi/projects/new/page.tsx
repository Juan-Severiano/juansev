'use client'

import { useCreateProject } from "@/api/hooks/useProjects"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

export default function NewProjectPage() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const { mutate: createProject } = useCreateProject()

  const onSubmit = (data: any) => {
    // Convert skills string to array
    data.skills = data.skills.split(',').map((skill: string) => skill.trim());
    // Mock linksId, coverId, photoId for now, replace with actual file upload logic later
    data.linksId = "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"; 
    data.coverId = "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11";
    data.photoId = "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11";

    createProject(data, {
      onSuccess: () => {
        router.push("/master-jedi/projects")
      },
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">New Project</h1>
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
        <Button type="submit">Create</Button>
      </form>
    </div>
  )
}
