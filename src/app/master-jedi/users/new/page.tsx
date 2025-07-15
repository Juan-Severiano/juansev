'use client'

import { useCreateUser } from "@/api/hooks/useUsers"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

export default function NewUserPage() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const { mutate: createUser } = useCreateUser()

  const onSubmit = (data: any) => {
    createUser(data, {
      onSuccess: () => {
        router.push("/master-jedi/users")
      },
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">New User</h1>
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
          <label className="block text-gray-300 mb-2" htmlFor="password">
            Password
          </label>
          <input {...register("password")} type="password" className="w-full p-2 rounded bg-gray-700 text-white" />
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
        <Button type="submit">Create</Button>
      </form>
    </div>
  )
}
