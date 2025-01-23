import Hero from "@/components/Landing-Section/Hero";
import ExperienceSection from "@/components/Landing-Section/ExperienceSection";
import { OurClientsSection } from "@/components/Landing-Section/OurClientsSection";
import { TestimonialsSection } from "@/components/Landing-Section/TestimonialsSection";
import OurServicesSection from "@/components/Landing-Section/OurServicesSection";
import FAQSection from "@/components/Landing-Section/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <OurClientsSection />
      <TestimonialsSection />
      <OurServicesSection />
      <FAQSection />
    </>
  );
}