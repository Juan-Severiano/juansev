'use client'

import { useGetUserById, useUpdateUser } from "@/api/hooks/useUsers"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useEffect } from "react"

export default function EditUserPage({ params }: { params: { id: string } }) {
  const { data: user } = useGetUserById(params.id)
  const { register, handleSubmit, reset } = useForm()
  const router = useRouter()
  const { mutate: updateUser } = useUpdateUser()

  useEffect(() => {
    if (user) {
      reset(user)
    }
  }, [user, reset])

  const onSubmit = (data: any) => {
    updateUser({ id: params.id, data }, {
      onSuccess: () => {
        router.push("/master-jedi/users")
      }
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Edit User</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-8 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="username">
            Username
          </label>
          <input {...register("username")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
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
          <label className="block text-gray-300 mb-2" htmlFor="role">
            Role
          </label>
          <select {...register("role")} className="w-full p-2 rounded bg-gray-700 text-white">
            <option value="owner">Owner</option>
            <option value="commun">Commun</option>
          </select>
        </div>
        <Button type="submit">Update</Button>
      </form>
    </div>
  )
}
