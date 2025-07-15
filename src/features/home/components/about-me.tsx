"use client"

import { useState, useEffect } from "react"

export default function AboutMeSection() {
  const fullCode = `
@Model
class Me {
  let name = "Juan"
  let role = "Dev"
}`
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    if (isTypingComplete) return

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullCode.length) {
        setDisplayedCode((prev) => prev + fullCode.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
        setIsTypingComplete(true)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [fullCode, isTypingComplete])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700 p-4 shadow-lg w-full max-w-md">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <pre className="text-green-400 font-mono text-sm lg:text-base overflow-auto">
              <code>{displayedCode}</code>
              {!isTypingComplete && <span className="animate-blink">|</span>}
            </pre>
          </div>
        </div>

        <div className="order-1 lg:order-2 text-center lg:text-left">
          <p className="text-xl lg:text-2xl text-gray-300 mb-6">Hi, My Name is</p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="block text-blue-400">Francisco Juan</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-6">I'm a Front-end/Mobile Developer</p>
          <div className="text-gray-300 space-y-4 text-lg">
            <p>
              Sou um desenvolvedor apaixonado por criar experiências digitais excepcionais. Com mais de 5 anos de
              experiência, especializo-me em React, React Native e desenvolvimento mobile, sempre focado em entregar
              soluções que combinam performance, usabilidade e design elegante.
            </p>
            <p>
              Atualmente trabalho como desenvolvedor full-stack, liderando projetos desde a concepção até o deploy,
              sempre buscando as melhores práticas e tecnologias mais modernas do mercado. Minha paixão é transformar
              ideias complexas em aplicações intuitivas e funcionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
