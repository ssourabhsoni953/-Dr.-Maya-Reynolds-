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
      className="relative bg-[#284B36]/75 backdrop-blur-md w-full overflow-hidden border-t border-[#82C49C]/30"
    >
      <div className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative w-full h-[440px] sm:h-[500px] md:h-[560px] lg:h-[600px] overflow-hidden shadow-2xl rounded-2xl sm:rounded-3xl border border-[#82C49C]/40">
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

            <div className="lg:col-span-7 flex flex-col justify-center">
              <p
                className="text-[11.5px] lg:text-[12.5px] tracking-[0.24em] text-[#82C49C] uppercase font-semibold mb-3.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Meet Your Psychologist
              </p>

              <h2
                className="font-light text-white text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.12] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
              >
                Meet Dr. Maya Reynolds, PsyD.
              </h2>

              <div
                className="space-y-4 text-[14.5px] sm:text-[15.5px] text-[#DFF7E8] font-light leading-[1.85]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <p>
                  I’m a licensed clinical psychologist based in Santa Monica, California,
                  offering therapy for adults who feel overwhelmed by anxiety, stress, or the
                  lingering effects of past experiences. Many of the people I work with are
                  high-achieving, thoughtful, and self-aware—but internally feel exhausted,
                  stuck in overthinking, or emotionally on edge.
                </p>
                <p>
                  My work often focuses on anxiety, panic, trauma, and burnout. My approach is
                  paced carefully, with an emphasis on safety, stabilization, and helping clients
                  feel more regulated in their daily lives—not just during sessions. My goal is
                  not just symptom relief, but helping clients develop insight, resilience, and
                  a stronger relationship with themselves over time.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#82C49C]/30">
                <p
                  className="text-[11px] tracking-[0.2em] uppercase font-semibold text-white mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Credentials &amp; Specializations
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#82C49C] shrink-0" />
                      <span
                        className="text-[13px] text-[#DFF7E8] font-normal"
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
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#82C49C] text-[#1E3728] text-[12px] uppercase tracking-[0.16em] font-semibold transition-all duration-300 hover:bg-[#DFF7E8] active:scale-95 border border-[#82C49C]/50 hover:shadow-xl"
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
