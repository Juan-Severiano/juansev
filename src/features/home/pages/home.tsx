import { Header } from "@/components/header";
import AboutMeSection from "../components/about-me";
import SkillsSection from "../components/skills";
import { mockCertifications, skills, tools } from "@/assets/skills";
import CertificationsSection from "../components/certification";
import ContactCTA from "../components/contact";
import ProjectsSection from "../components/projects";

export function HomePage() {
  

  return (
    <>
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection skills={skills} />
      <SkillsSection skills={tools} />
      <CertificationsSection certifications={mockCertifications} />
      <ContactCTA />
    </>
  );
}
