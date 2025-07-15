'use client'

import { useGetAllOwners, useDeleteOwner } from "@/api/hooks/useOwners"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OwnersPage() {
  const { data: owners, refetch } = useGetAllOwners()
  const { mutate: deleteOwner } = useDeleteOwner({
    onSuccess: () => {
      refetch()
    },
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Owners</h1>
        <Button asChild>
          <Link href="/master-jedi/owners/new">New Owner</Link>
        </Button>
      </div>
      <div className="bg-gray-800 rounded-lg p-4">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {owners?.map((owner) => (
              <tr key={owner.id} className="border-t border-gray-700">
                <td className="p-2">{owner.name}</td>
                <td className="p-2">{owner.email}</td>
                <td className="p-2">{owner.phone}</td>
                <td className="p-2">
                  <Button asChild variant="outline" className="mr-2">
                    <Link href={`/master-jedi/owners/${owner.id}`}>Edit</Link>
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      if (owner.id) {
                        deleteOwner(owner.id)
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
