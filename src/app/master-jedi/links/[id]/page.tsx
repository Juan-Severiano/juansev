'use client'

import { useGetLinkById, useUpdateLink } from "@/api/hooks/useLinks"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useEffect } from "react"

export default function EditLinkPage({ params }: { params: { id: string } }) {
  const { data: link } = useGetLinkById(params.id)
  const { register, handleSubmit, reset } = useForm()
  const router = useRouter()
  const { mutate: updateLink } = useUpdateLink()

  useEffect(() => {
    if (link) {
      reset(link)
    }
  }, [link, reset])

  const onSubmit = (data: any) => {
    updateLink({ id: params.id, data }, {
      onSuccess: () => {
        router.push("/master-jedi/links")
      },
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Edit Link</h1>
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
        <Button type="submit">Update</Button>
      </form>
    </div>
  )
}
