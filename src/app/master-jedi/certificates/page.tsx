'use client'

import { useGetAllCertificates, useDeleteCertificate } from "@/api/hooks/useCertificates"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CertificatesPage() {
  const { data: certificates, refetch } = useGetAllCertificates()
  const { mutate: deleteCertificate } = useDeleteCertificate({
    onSuccess: () => {
      refetch()
    },
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Certificates</h1>
        <Button asChild>
          <Link href="/master-jedi/certificates/new">New Certificate</Link>
        </Button>
      </div>
      <div className="bg-gray-800 rounded-lg p-4">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="p-2">Title</th>
              <th className="p-2">Platform</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {certificates?.map((certificate) => (
              <tr key={certificate.id} className="border-t border-gray-700">
                <td className="p-2">{certificate.title}</td>
                <td className="p-2">{certificate.platform}</td>
                <td className="p-2">
                  <Button asChild variant="outline" className="mr-2">
                    <Link href={`/master-jedi/certificates/${certificate.id}`}>Edit</Link>
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      if (certificate.id) {
                        deleteCertificate(certificate.id)
                      }
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
