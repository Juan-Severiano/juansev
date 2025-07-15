"use client"

import AboutMeSection from "../components/about-me";
import SkillsSection from "../components/skills";
import {
  mockProjects,
  skills,
  tools,
} from "@/assets/skills";
import CertificationsSection from "../components/certification";
import ContactCTA from "../components/contact";
import ProjectsSection from "../components/projects";
import { useGetCertificates, useGetUsersUsernameUsername } from "@/api";

export function HomePage() {
  const { data: projects } = { data: mockProjects };
  const { data: certificatesData } = useGetCertificates();
  const { data: userData } = useGetUsersUsernameUsername("Juan-Severiano");

  const certificates = certificatesData?.data?.data || [];

  return (
    <>
      <AboutMeSection />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <SkillsSection skills={tools} />
      <CertificationsSection certifications={certificates} />
      <ContactCTA />
    </>
  );
}
