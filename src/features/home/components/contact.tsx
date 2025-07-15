'use client'

import { User } from "@/api/types"
import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

interface ContactCTAProps {
  user?: User
}

export default function ContactCTA({ user }: ContactCTAProps) {
  const githubUsername = user?.username || "Juan-Severiano"
  const githubProfilePic = `https://github.com/${githubUsername}.png`

  return (
    <section id="contact" className="py-20 bg-black/10 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Pill (Inspired by Toalha.Dev) */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-2 pr-4 shadow-lg border border-white/20">
            <img
              src={githubProfilePic || "/placeholder.svg"}
              alt={user?.name || "Juan Severiano"}
              className="w-12 h-12 rounded-full mr-3 border-2 border-purple-500"
            />
            <div className="text-left">
              <span className="block text-lg font-semibold text-white">{user?.name || "Juan Severiano"}</span>
              <span className="block text-sm text-gray-300">@{githubUsername}</span>
            </div>
          </div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Vamos conversar?</h2>
        <p className="text-xl lg:text-2xl text-gray-300 mb-12">
          Estou sempre aberto a novos desafios e oportunidades interessantes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`mailto:${user?.email || 'contato@juanseveriano.dev'}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            <Mail className="w-5 h-5 inline mr-2" />
            Enviar Email
          </Link>
          <Link
            href="https://www.linkedin.com/in/juanseveriano/" // Substitua pelo seu link do LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900/40 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/10 hover:border-purple-400/30 transition-all transform hover:scale-105"
          >
            <Linkedin className="w-5 h-5 inline mr-2" />
            LinkedIn
          </Link>
          <Link
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900/40 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/10 hover:border-purple-400/30 transition-all transform hover:scale-105"
          >
            <Github className="w-5 h-5 inline mr-2" />
            GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}
