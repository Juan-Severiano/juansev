'use client'

import { skills, tools } from "@/assets/skills"
import AboutMeSection from "../components/about-me"
import CertificationsSection from "../components/certification"
import ContactCTA from "../components/contact"
import ProjectsSection from "../components/projects"
import SkillsSection from "../components/skills"
import { useGetAllCertificates } from '@/api/hooks/useCertificates';
import { useGetAllProjects } from '@/api/hooks/useProjects';

export function HomePage() {
  const { data: projects } = useGetAllProjects()
  const { data: certificates } = useGetAllCertificates()

  return (
    <>
      <AboutMeSection />
      {projects && <ProjectsSection projects={projects} />}
      <SkillsSection skills={skills} />
      <SkillsSection skills={tools} />
      {certificates && <CertificationsSection certifications={certificates} />}
      <ContactCTA />
    </>
  )
}
