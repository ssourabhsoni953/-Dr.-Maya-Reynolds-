"use client";

import Image from "next/image";
import Link from "next/link";

export default function HonoringSection() {
  const credentials = [
    "Licensed Clinical Psychologist (California)",
    "Doctor of Psychology (PsyD) in Clinical Psychology",
    "Evidence-Based CBT, EMDR & Somatic Integration",
    "Specialized in Anxiety, Trauma & Burnout Recovery",
  ];

  return (
    <section
      id="about"
      data-testid="honoring-section"
      className="relative bg-[#284B36]/75 backdrop-blur-md border-[#82C49C]/30 border-t w-full overflow-hidden"
    >
      <div className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1580px]">
          <div className="items-center gap-10 lg:gap-16 grid grid-cols-1 lg:grid-cols-12">
            <div className="relative lg:col-span-5 shadow-2xl border border-[#82C49C]/40 rounded-2xl sm:rounded-3xl w-full h-110 sm:h-125 md:h-140 lg:h-150 overflow-hidden">
              <Image
                src="/images/reynolds/dr-maya-reynolds.jpg"
                alt="Dr. Maya Reynolds, PsyD - Santa Monica Clinical Psychologist"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 42vw"
                className="object-cover object-top"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "rgba(40, 75, 54, 0.15)" }}
              />
            </div>

            <div className="flex flex-col justify-center lg:col-span-7">
              <p
                className="mb-3.5 font-semibold text-[#82C49C] text-[11.5px] lg:text-[12.5px] uppercase tracking-[0.24em]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Meet Your Psychologist
              </p>

              <h2
                className="mb-6 font-light text-[2.4rem] text-white sm:text-[3rem] md:text-[3.5rem] leading-[1.12] tracking-tight"
                style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
              >
                Meet Dr. Maya Reynolds, PsyD.
              </h2>

              <div
                className="space-y-4 font-light text-[#DFF7E8] text-[14.5px] sm:text-[15.5px] leading-[1.85]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <p>
                  I’m a licensed clinical psychologist based in Santa Monica,
                  California, offering therapy for adults who feel overwhelmed
                  by anxiety, stress, or the lingering effects of past
                  experiences. Many of the people I work with are
                  high-achieving, thoughtful, and self-aware—but internally feel
                  exhausted, stuck in overthinking, or emotionally on edge.
                </p>
                <p>
                  My work often focuses on anxiety, panic, trauma, and burnout.
                  My approach is paced carefully, with an emphasis on safety,
                  stabilization, and helping clients feel more regulated in
                  their daily lives—not just during sessions. My goal is not
                  just symptom relief, but helping clients develop insight,
                  resilience, and a stronger relationship with themselves over
                  time.
                </p>
              </div>

              <div className="mt-8 pt-6 border-[#82C49C]/30 border-t">
                <p
                  className="mb-3 font-semibold text-[11px] text-white uppercase tracking-[0.2em]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Credentials &amp; Specializations
                </p>
                <div className="gap-2.5 grid grid-cols-1 sm:grid-cols-2">
                  {credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="bg-[#82C49C] rounded-full w-2 h-2 shrink-0" />
                      <span
                        className="font-normal text-[#DFF7E8] text-[13px]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {cred}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="#contact"
                  className="inline-flex justify-center items-center bg-[#82C49C] hover:bg-[#DFF7E8] hover:shadow-xl px-7 py-3.5 border border-[#82C49C]/50 rounded-full font-semibold text-[#1E3728] text-[12px] uppercase tracking-[0.16em] active:scale-95 transition-all duration-300"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Connect With Dr. Reynolds
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
