"use client"

interface Skill {
  name: string
  image: string
  description: string
}

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 bg-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all"
            >
              <div className="flex items-center mb-4">
                <img src={skill.image || "/placeholder.svg"} alt={skill.name} className="w-12 h-12 mr-4" />
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
