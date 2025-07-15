'use client'

import { useGetOwnerById, useUpdateOwner } from "@/api/hooks/useOwners"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useEffect } from "react"

export default function EditOwnerPage({ params }: { params: { id: string } }) {
  const { data: owner } = useGetOwnerById(params.id)
  const { register, handleSubmit, reset } = useForm()
  const router = useRouter()
  const { mutate: updateOwner } = useUpdateOwner()

  useEffect(() => {
    if (owner) {
      reset(owner)
    }
  }, [owner, reset])

  const onSubmit = (data: any) => {
    updateOwner({ id: params.id, data }, {
      onSuccess: () => {
        router.push("/master-jedi/owners")
      },
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Edit Owner</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-8 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="name">
            Name
          </label>
          <input {...register("name")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="email">
            Email
          </label>
          <input {...register("email")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="phone">
            Phone
          </label>
          <input {...register("phone")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <Button type="submit">Update</Button>
      </form>
    </div>
  )
}
