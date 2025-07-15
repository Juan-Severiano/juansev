'use client'

import { useGetAllLinks, useDeleteLink } from "@/api/hooks/useLinks"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LinksPage() {
  const { data: links, refetch } = useGetAllLinks()
  const { mutate: deleteLink } = useDeleteLink({
    onSuccess: () => {
      refetch()
    },
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Links</h1>
        <Button asChild>
          <Link href="/master-jedi/links/new">New Link</Link>
        </Button>
      </div>
      <div className="bg-gray-800 rounded-lg p-4">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="p-2">GitHub</th>
              <th className="p-2">Figma</th>
              <th className="p-2">Public URL</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {links?.map((link) => (
              <tr key={link.id} className="border-t border-gray-700">
                <td className="p-2">{link.github}</td>
                <td className="p-2">{link.figma}</td>
                <td className="p-2">{link.publicUrl}</td>
                <td className="p-2">
                  <Button asChild variant="outline" className="mr-2">
                    <Link href={`/master-jedi/links/${link.id}`}>Edit</Link>
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      if (link.id) {
                        deleteLink(link.id)
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
