"use client";

import Image from "next/image";
import Link from "next/link";

interface ServiceCard {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  linkText: string;
  href: string;
}

const SERVICES: ServiceCard[] = [
  {
    id: "services-anxiety",
    title: "Anxiety & Panic",
    imageSrc: "/images/reynolds/service-anxiety.jpg",
    imageAlt:
      "Solitary figure walking along Santa Monica bluffs overlooking the ocean",
    description:
      "For adults quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense of always bracing for something to go wrong. Combining CBT and body-oriented techniques to understand both emotional and physiological distress.",
    linkText: "Learn More About Anxiety & Panic Support →",
    href: "#contact",
  },
  {
    id: "services-emdr",
    title: "Trauma & EMDR",
    imageSrc: "/images/reynolds/service-emdr.jpg",
    imageAlt:
      "Sandstone rock formations along the California coast showing layered endurance",
    description:
      "Carefully paced work for adults navigating single-incident trauma or complex, long-standing patterns from childhood, relationships, or chronic stress. Emphasizing safety, stabilization, and helping you feel regulated in daily life.",
    linkText: "Learn More About Trauma & EMDR Therapy →",
    href: "#contact",
  },
  {
    id: "services-burnout",
    title: "Burnout & Perfectionism",
    imageSrc: "/images/reynolds/service-burnout.jpg",
    imageAlt:
      "Mindful hands holding a warm handcrafted ceramic mug beside an organized desk",
    description:
      "Supporting entrepreneurs, creatives, and professionals dealing with burnout, perfectionism, and high internal pressure after years of pushing through stress. A space to slow down, reconnect, and develop sustainable ways of living and working.",
    linkText: "Learn More About Burnout Recovery →",
    href: "#contact",
  },
];

interface Modality {
  code: string;
  name: string;
  title: string;
  description: string;
}

const MODALITIES: Modality[] = [
  {
    code: "01",
    name: "CBT",
    title: "Cognitive-Behavioral Therapy (CBT)",
    description:
      "Practical tools to address cycles of overthinking, constant worry, and high internal pressure—helping you gain clarity and actionable coping strategies for daily life.",
  },
  {
    code: "02",
    name: "EMDR",
    title: "Eye Movement Desensitization & Reprocessing (EMDR)",
    description:
      "Carefully paced reprocessing for single-incident trauma and complex, long-standing relational patterns, prioritizing safety and nervous system stabilization.",
  },
  {
    code: "03",
    name: "SOMATIC",
    title: "Body-Oriented Somatic Techniques",
    description:
      "Addressing the physiological side of anxiety and trauma—releasing physical tension, easing autonomic arousal, and helping you feel grounded in your body.",
  },
  {
    code: "04",
    name: "MINDFULNESS",
    title: "Mindfulness-Based Practices",
    description:
      "Cultivating present-moment awareness and self-compassion to help you slow down, build emotional resilience, and develop a stronger relationship with yourself.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative bg-[#284B36]/85 backdrop-blur-md py-16 sm:py-24 md:py-28 lg:py-32 border-[#82C49C]/30 border-b w-full"
    >
      <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1580px]">
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-3xl">
          <p
            className="mb-3.5 font-semibold text-[#82C49C] text-[11.5px] lg:text-[12.5px] uppercase tracking-[0.24em]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Areas of Clinical Focus
          </p>
          <h2
            className="font-light text-[2.4rem] text-white sm:text-[3rem] md:text-[3.6rem] lg:text-[4.2rem] leading-[1.08] tracking-tight"
            style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
          >
            Focused therapy for{" "}
            <span
              className="inline-block px-1 font-normal text-[#DFF7E8] text-[1.12em] not-italic translate-y-1 transform"
              style={{ fontFamily: "'PrintedMoments', cursive" }}
            >
              anxiety
            </span>
            , trauma, and burnout.
          </h2>
          <p
            className="mt-4 sm:mt-5 max-w-2xl font-light text-[#DFF7E8]/90 text-[15px] sm:text-[16px] leading-[1.8]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Integrating Cognitive-Behavioral Therapy (CBT), EMDR,
            mindfulness-based practices, and body-oriented somatic techniques to
            address both the emotional and physiological sides of your distress.
          </p>
        </div>

        <div className="gap-8 lg:gap-10 xl:gap-12 grid grid-cols-1 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="group flex flex-col bg-[#1E3728]/95 hover:shadow-2xl border border-[#82C49C]/35 hover:border-[#82C49C] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300"
            >
              <div className="relative bg-[#1E3728] w-full aspect-4/5 overflow-hidden">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#284B36]/15 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="flex flex-col flex-1 justify-between p-6 sm:p-8">
                <div>
                  <h3
                    className="mb-3.5 font-normal text-[1.65rem] text-white sm:text-[1.85rem] group-hover:text-[#DFF7E8] leading-[1.2] tracking-tight transition-colors"
                    style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mb-6 font-light text-[#DFF7E8]/90 text-[14.5px] leading-[1.8]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-[#82C49C]/30 border-t">
                  <Link
                    href={service.href}
                    className="inline-flex items-center font-medium text-[#82C49C] text-[12px] group-hover:text-white uppercase tracking-[0.16em] transition-all group-hover:translate-x-1 duration-200"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {service.linkText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          id="expertise"
          className="mt-20 sm:mt-28 md:mt-32 pt-16 sm:pt-20 border-[#82C49C]/30 border-t"
        >
          <div className="items-start gap-8 lg:gap-16 grid grid-cols-1 lg:grid-cols-12 mb-14 sm:mb-16">
            <div className="lg:col-span-5">
              <p
                className="mb-3.5 font-semibold text-[#82C49C] text-[11.5px] lg:text-[12.5px] uppercase tracking-[0.24em]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                How We Work · Evidence-Based Modalities
              </p>
              <h2
                className="font-light text-[2.2rem] text-white sm:text-[2.75rem] md:text-[3.25rem] leading-[1.12] tracking-tight"
                style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
              >
                A warm, collaborative, and{" "}
                <span
                  className="inline-block px-1 font-normal text-[#DFF7E8] text-[1.15em] not-italic translate-y-1 transform"
                  style={{ fontFamily: "'PrintedMoments', cursive" }}
                >
                  grounded
                </span>{" "}
                approach.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:pt-6">
              <p
                className="font-light text-[#DFF7E8] text-[15.5px] sm:text-[16.5px] leading-[1.85]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Sessions are structured enough to feel supportive, while still
                leaving space for reflection and depth. I integrate
                evidence-based methods to help clients understand both the
                emotional and physiological sides of what they’re
                experiencing—with an emphasis on safety, stabilization, and
                feeling regulated in daily life.
              </p>
            </div>
          </div>

          <div className="gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-2">
            {MODALITIES.map((modality) => (
              <div
                key={modality.code}
                className="flex flex-col bg-[#1E3728]/90 hover:shadow-2xl backdrop-blur-sm p-7 sm:p-9 border border-[#82C49C]/35 hover:border-[#82C49C] rounded-2xl sm:rounded-3xl transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <span
                    className="font-semibold text-[#82C49C] text-[11px] uppercase tracking-[0.22em]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Modalities / {modality.code}
                  </span>
                  <span className="bg-[#82C49C] rounded-full w-2.5 h-2.5" />
                </div>

                <h3
                  className="mb-3 font-normal text-[1.4rem] text-white sm:text-[1.55rem] leading-tight"
                  style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
                >
                  {modality.title}
                </h3>

                <p
                  className="flex-1 font-light text-[#DFF7E8] text-[14px] sm:text-[14.5px] leading-[1.85]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {modality.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-14 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 font-medium text-[#DFF7E8] text-[12.5px] hover:text-[#82C49C] uppercase tracking-[0.16em] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>Schedule a Consultation to Discuss Your Goals</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
