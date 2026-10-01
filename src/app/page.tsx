import Hero from "@/components/hero";
import HopeSection from "@/components/hope-section";
import ServicesSection from "@/components/services-section";
import YouDeserveSection from "@/components/you-deserve-section";
import HonoringSection from "@/components/honoring-section";
import OurOfficeSection from "@/components/our-office-section";
import SpecialtiesSection from "@/components/specialties-section";
import FindTherapistSection from "@/components/find-therapist-section";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center bg-transparent w-full">
      <Hero />
      <HopeSection />
      <ServicesSection />
      <YouDeserveSection />
      <HonoringSection />
      <OurOfficeSection />
      <SpecialtiesSection />
      <FindTherapistSection />
    </div>
  );
}
