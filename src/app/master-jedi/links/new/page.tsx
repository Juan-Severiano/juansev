'use client'

import { useCreateLink } from "@/api/hooks/useLinks"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

export default function NewLinkPage() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const { mutate: createLink } = useCreateLink()

  const onSubmit = (data: any) => {
    createLink(data, {
      onSuccess: () => {
        router.push("/master-jedi/links")
      },
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">New Link</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-8 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="github">
            GitHub
          </label>
          <input {...register("github")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="figma">
            Figma
          </label>
          <input {...register("figma")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="publicUrl">
            Public URL
          </label>
          <input {...register("publicUrl")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <Button type="submit">Create</Button>
      </form>
    </div>
  )
}
