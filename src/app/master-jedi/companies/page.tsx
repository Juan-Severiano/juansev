'use client'

import { useGetAllCompanies, useDeleteCompany } from "@/api/hooks/useCompanies"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CompaniesPage() {
  const { data: companies, refetch } = useGetAllCompanies()
  const { mutate: deleteCompany } = useDeleteCompany({
    onSuccess: () => {
      refetch()
    },
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Companies</h1>
        <Button asChild>
          <Link href="/master-jedi/companies/new">New Company</Link>
        </Button>
      </div>
      <div className="bg-gray-800 rounded-lg p-4">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="p-2">Name</th>
              <th className="p-2">Responsible</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies?.map((company) => (
              <tr key={company.id} className="border-t border-gray-700">
                <td className="p-2">{company.name}</td>
                <td className="p-2">{company.responsibleName}</td>
                <td className="p-2">
                  <Button asChild variant="outline" className="mr-2">
                    <Link href={`/master-jedi/companies/${company.id}`}>Edit</Link>
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      if (company.id) {
                        deleteCompany(company.id)
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
