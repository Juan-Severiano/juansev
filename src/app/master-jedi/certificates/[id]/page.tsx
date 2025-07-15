'use client'

import { useGetCertificateById, useUpdateCertificate } from "@/api/hooks/useCertificates"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useEffect } from "react"

export default function EditCertificatePage({ params }: { params: { id: string } }) {
  const { data: certificate } = useGetCertificateById(params.id)
  const { register, handleSubmit, reset } = useForm()
  const router = useRouter()
  const { mutate: updateCertificate } = useUpdateCertificate()

  useEffect(() => {
    if (certificate) {
      reset(certificate)
    }
  }, [certificate, reset])

  const onSubmit = (data: any) => {
    updateCertificate({ id: params.id, data }, {
      onSuccess: () => {
        router.push("/master-jedi/certificates")
      },
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Edit Certificate</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-8 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="title">
            Title
          </label>
          <input {...register("title")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="description">
            Description
          </label>
          <input {...register("description")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="platform">
            Platform
          </label>
          <input {...register("platform")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="url">
            URL
          </label>
          <input {...register("url")} className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="workload">
            Workload
          </label>
          <input {...register("workload", { valueAsNumber: true })} type="number" className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <Button type="submit">Update</Button>
      </form>
    </div>
  )
}
