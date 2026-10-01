"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurOfficeSection() {
  const officeFeatures = [
    {
      icon: (
        <svg className="w-5 h-5 text-[#82C49C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Natural Light & Historic Brick",
      description:
        "Expansive loft grid windows with sheer linen drapery provide gentle coastal sunlight, paired with historic exposed brick and natural hardwood flooring.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#82C49C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Acoustic Privacy & Comfort",
      description:
        "Dedicated sound insulation and a private, discreet entryway create a protected sanctuary where you can speak freely and without interruption.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#82C49C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Nervous System Regulation",
      description:
        "Every element—from uncluttered shelves and olive tree greenery to plush textured seating—is curated to help calm sensory overload.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#82C49C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "In-Person & Hybrid Flexibility",
      description:
        "Attend in-person sessions at our central Santa Monica suite, with seamless option for secure telehealth sessions throughout California.",
    },
  ];

  const galleryImages = [
    {
      src: "/img/office1.jpeg",
      alt: "Dr. Maya Reynolds Santa Monica therapy room with brick columns, tall windows, and comfortable seating",
      title: "The Consultation Room",
      subtitle: "High ceilings, historic brick, and warm morning coastal light.",
    },
    {
      src: "/img/office2.jpeg",
      alt: "Curated clinical library, olive tree, coastal aerial artwork, and conversation space",
      title: "Reflective Library Space",
      subtitle: "Thoughtful, uncluttered interior designed to soothe cognitive strain.",
    },
    {
      src: "/img/office3.jpeg",
      alt: "Sunlit psychotherapy armchair nook with boucle texture, terracotta potted olive plant, and warm sunlight",
      title: "Grounded Therapy Nook",
      subtitle: "Ergonomic seating and organic materials pacing somatic calm.",
    },
  ];

  return (
    <section
      id="office"
      data-testid="our-office-section"
      className="relative bg-[#284B36]/80 backdrop-blur-md w-full py-20 sm:py-28 md:py-32 border-t border-[#82C49C]/30 overflow-hidden"
    >
      <div className="max-w-[1580px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <p
              className="text-[11.5px] lg:text-[12.5px] tracking-[0.24em] text-[#82C49C] uppercase font-semibold mb-3.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Office · A Physical Sanctuary
            </p>
            <h2
              className="font-light text-white text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[4.2rem] leading-[1.08] tracking-tight"
              style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
            >
              A quiet, private space designed for{" "}
              <span
                className="inline-block text-[#DFF7E8] text-[1.15em] font-normal not-italic px-1 transform translate-y-1"
                style={{ fontFamily: "'PrintedMoments', cursive" }}
              >
                healing
              </span>
              .
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-6">
            <p
              className="text-[15.5px] sm:text-[16.5px] text-[#DFF7E8] font-light leading-[1.85] mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I offer in-person therapy from my Santa Monica office at 123th Street 45 W.
              The office is a quiet, private space designed to feel calm and grounding, with
              natural light and a comfortable, uncluttered environment. Clients often share that
              the space itself helps them feel more at ease the moment they arrive.
            </p>
            <p
              className="text-[14.5px] sm:text-[15px] text-[#DFF7E8]/80 font-light leading-[1.85]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Whether you are sitting with coffee across from the tall loft windows or pausing to catch
              your breath before a session begins, the environment is intentionally structured to support
              nervous system down-regulation, safety, and deep emotional reflection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-[#1E3728]/95 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#82C49C]/35 hover:border-[#82C49C] transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] md:aspect-[4/5] overflow-hidden bg-[#1E3728]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#284B36]/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3
                    className="font-normal text-white text-[1.4rem] sm:text-[1.55rem] leading-[1.25] mb-2 tracking-tight group-hover:text-[#DFF7E8] transition-colors"
                    style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
                  >
                    {img.title}
                  </h3>
                  <p
                    className="font-light text-[#DFF7E8]/85 text-[13.5px] sm:text-[14px] leading-[1.75]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {img.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {officeFeatures.map((feat, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 rounded-2xl bg-[#1E3728]/85 border border-[#82C49C]/30 hover:border-[#82C49C] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#284B36] border border-[#82C49C]/40 flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h4
                  className="font-normal text-white text-[1.25rem] sm:text-[1.35rem] leading-[1.3] mb-2.5"
                  style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
                >
                  {feat.title}
                </h4>
                <p
                  className="font-light text-[#DFF7E8]/80 text-[13px] sm:text-[13.5px] leading-[1.75]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 sm:p-10 md:p-12 rounded-3xl bg-[#1E3728]/95 border border-[#82C49C]/40 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span
              className="text-[11px] tracking-[0.22em] font-semibold text-[#82C49C] uppercase block"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Santa Monica Practice Details
            </span>
            <h3
              className="font-light text-white text-[1.8rem] sm:text-[2.2rem] md:text-[2.5rem] leading-[1.18]"
              style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
            >
              Visiting the Practice at 123th Street 45 W
            </h3>
            <p
              className="text-[14px] sm:text-[15px] text-[#DFF7E8]/90 font-light leading-[1.8]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Conveniently located in Santa Monica, California with accessible street and structure
              parking. Sessions are held Monday through Thursday by appointment, offering in-person
              depth work and statewide virtual telehealth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#82C49C] text-[#1E3728] text-[12.5px] uppercase tracking-[0.16em] font-semibold transition-all duration-300 hover:bg-[#DFF7E8] hover:shadow-xl active:scale-95 border border-[#82C49C]/50 text-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Schedule an Office Visit
            </Link>
            <a
              href="tel:3105550192"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-[#284B36] text-[#DFF7E8] text-[12.5px] uppercase tracking-[0.16em] font-medium transition-all duration-300 hover:text-white hover:border-[#82C49C] border border-[#82C49C]/35 text-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              (310) 555-0192
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
