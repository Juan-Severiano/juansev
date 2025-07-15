'use client'

import { useCreateCompany } from "@/api/hooks/useCompanies"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

export default function NewCompanyPage() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const { mutate: createCompany } = useCreateCompany()

  const onSubmit = (data: any) => {
    createCompany(data, {
      onSuccess: () => {
        router.push("/master-jedi/companies")
      },
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">New Company</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-8 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="name">
            Name
          </label>
          <input {...register("name")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="description">
            Description
          </label>
          <input {...register("description")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="startDate">
            Start Date
          </label>
          <input {...register("startDate")} type="date" className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="endDate">
            End Date
          </label>
          <input {...register("endDate")} type="date" className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="responsibleName">
            Responsible Name
          </label>
          <input {...register("responsibleName")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="responsibleRole">
            Responsible Role
          </label>
          <input {...register("responsibleRole")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <Button type="submit">Create</Button>
      </form>
    </div>
  )
}
