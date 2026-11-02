import { CareersPreview } from "@/components/home/careers-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { CertificationsSection } from "@/components/home/certifications-section";
import { Hero } from "@/components/home/hero";
import { LocationSection } from "@/components/home/location-section";
import { NewsPreview } from "@/components/home/news-preview";
import { ProcessSection } from "@/components/home/process-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ServicesSection } from "@/components/home/services-section";

export default function HomePage() {
  return <><Hero /><ServicesSection /><AboutPreview /><ProcessSection /><ProjectsSection /><CertificationsSection /><LocationSection /><NewsPreview /><CareersPreview /></>;
}
