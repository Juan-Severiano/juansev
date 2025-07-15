'use client'

import { useCreateUser } from "@/api/hooks/useUsers"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

export default function FirstAdminPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      role: "MANAGER",
      email: "",
      name: "",
      username: "",
      password: "",
    },
  })
  const router = useRouter()
  const { mutate: createUser } = useCreateUser()

  const onSubmit = (data: any) => {
    console.log(data)
    createUser(data, {
      onSuccess: () => {
        router.push("/login")
      },
      onError: (error) => {
        console.error("Failed to create first admin", error)
        alert("Failed to create first admin user. Check the console for details.")
      }
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-white mb-6">Create First Admin User</h1>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="username">
            Username
          </label>
          <input {...register("username")} className="w-full p-2 rounded bg-gray-700 text-white" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="name">
            Name
          </label>
          <input {...register("name")} className="w-full p-2 rounded bg-gray-700 text-white" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="email">
            Email
          </label>
          <input {...register("email")} type="email" className="w-full p-2 rounded bg-gray-700 text-white" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="password">
            Password
          </label>
          <input {...register("password")} type="password" className="w-full p-2 rounded bg-gray-700 text-white" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="role">
            Role
          </label>
          <input {...register("role")} className="w-full p-2 rounded bg-gray-700 text-white" readOnly />
        </div>
        <Button type="submit">Create Admin</Button>
      </form>
    </div>
  )
}
