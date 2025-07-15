"use client"

import { useState } from "react"
import { Award, ExternalLink, FileText } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface Certification {
  name: string
  description: string
  image: string
  link?: string // Link para o certificado online
  pdf?: string // Link para o arquivo PDF
  professor?: string // Nome do professor/instrutor
}

interface CertificationsSectionProps {
  certifications: Certification[]
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (cert: Certification) => {
    setSelectedCert(cert)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedCert(null)
    setIsModalOpen(false)
  }

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Certificações</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-orange-400/30 transition-all cursor-pointer"
              onClick={() => openModal(cert)}
            >
              <div className="h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                {cert.image ? (
                  <img src={cert.image || "/placeholder.svg"} alt={cert.name} className="object-cover w-full h-full" />
                ) : (
                  <Award className="w-16 h-16 text-white/70" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-white">{cert.name}</h3>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes do Certificado */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-white/10 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">{selectedCert?.name}</DialogTitle>
            <DialogDescription className="text-gray-400">{selectedCert?.description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {selectedCert?.professor && (
              <div className="flex items-center gap-2 text-gray-300">
                <span className="font-semibold">Professor:</span> {selectedCert.professor}
              </div>
            )}
            {selectedCert?.link && (
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:underline"
              >
                <ExternalLink className="w-4 h-4" /> Ver Certificado Online
              </a>
            )}
            {selectedCert?.pdf && (
              <a
                href={selectedCert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:underline"
              >
                <FileText className="w-4 h-4" /> Baixar PDF
              </a>
            )}
          </div>
          <div className="flex justify-end">
            <Button onClick={closeModal} className="bg-blue-500 hover:bg-blue-600 text-white">
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
