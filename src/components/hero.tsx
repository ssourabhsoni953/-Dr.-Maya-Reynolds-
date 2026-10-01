"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative w-full overflow-hidden"
    >
      <div className="pt-6 md:pt-10 lg:pt-14 pb-14 md:pb-20 lg:pb-24">
        <div className="hidden items-start gap-3 sm:grid grid-cols-[minmax(0,1fr)_repeat(24,minmax(0,4rem))_minmax(0,1fr)] grid-rows-18 sm:h-215 lg:h-225 xl:h-230">
          <div className="relative sm:h-full 2xl:col-[1/8] 2xl:row-[2/18] lg:col-[1/8] lg:row-[2/16] sm:col-[1/7] sm:row-[1/14]">
            <div className="relative shadow-2xl border border-[#82C49C]/40 rounded-3xl w-full h-full overflow-hidden">
              <Image
                src="/images/reynolds/dr-maya-reynolds.jpg"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                fill
                priority
                sizes="(max-width: 1024px) 30vw, 25vw"
                className="object-cover object-top"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "rgba(40, 75, 54, 0.15)" }}
              />
            </div>
          </div>

          <div className="relative flex flex-col justify-start pt-2 lg:pt-4 h-full 2xl:col-[9/18] 2xl:row-[2/18] lg:col-[9/18] lg:row-[2/16] sm:col-[8/17]">
            <p
              className="font-semibold text-[#DFF7E8] text-[11px] lg:text-[12px] uppercase leading-[1.6] tracking-[0.22em]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              DR. MAYA REYNOLDS, PsyD · LICENSED CLINICAL PSYCHOLOGIST
              <br className="hidden sm:inline" />
              <span className="font-normal text-[#82C49C]">
                {" "}
                · SANTA MONICA &amp; STATEWIDE CALIFORNIA TELEHEALTH
              </span>
            </p>

            <h1
              className="drop-shadow-sm mt-8 lg:mt-12 xl:mt-14 font-light text-[2.6rem] text-white md:text-[3rem] lg:text-[3.4rem] xl:text-[3.9rem] leading-[1.12] tracking-[-0.015em]"
              style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
            >
              Feeling &ldquo;functional&rdquo; on the outside, while quietly
              struggling{" "}
              <span
                className="inline-block drop-shadow-md font-normal text-[#DFF7E8] text-[1.28em] not-italic lowercase align-baseline leading-[0.7] translate-y-1 transform"
                style={{
                  fontFamily: "'PrintedMoments', cursive",
                }}
              >
                within
              </span>
              .
            </h1>

            <p
              className="mt-6 md:mt-8 max-w-130 font-light text-[#DFF7E8] text-[15px] lg:text-[16px] leading-[1.85]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Therapy in Santa Monica and statewide California for thoughtful,
              high-achieving adults overwhelmed by anxiety, stress, or the
              lingering effects of past experiences. A space combining practical
              tools with depth-oriented work to slow down, reconnect, and feel
              regulated in daily life.
            </p>

            <div className="flex sm:flex-row flex-col items-start sm:items-center gap-5 sm:gap-7 mt-8 md:mt-10 lg:mt-12">
              <Link
                href="#contact"
                className="inline-flex justify-center items-center bg-[#82C49C] hover:bg-[#DFF7E8] hover:shadow-xl px-7 py-3.5 border border-[#82C49C]/50 rounded-full font-semibold text-[#1E3728] text-[12px] lg:text-[13px] uppercase tracking-[0.16em] active:scale-95 transition-all duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Schedule an Initial Consultation
              </Link>
              <Link
                href="#services"
                className="pb-1 font-normal text-[#DFF7E8] text-[12px] lg:text-[13px] hover:text-white hero-underline-btn uppercase tracking-[0.14em] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Explore Areas of Focus &rarr;
              </Link>
            </div>
          </div>

          <div className="relative h-full 2xl:col-[19/27] 2xl:row-[6/17] lg:col-[19/27] lg:row-[5/15] sm:col-[18/27] sm:row-[4/14]">
            <div className="relative shadow-2xl border border-[#82C49C]/40 rounded-3xl w-full h-full overflow-hidden">
              <Image
                src="/images/reynolds/hero-ocean-mist.jpg"
                alt="Calming Santa Monica Pacific ocean morning mist at dawn"
                fill
                priority
                sizes="(max-width: 1024px) 35vw, 30vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "rgba(40, 75, 54, 0.12)" }}
              />
            </div>
          </div>
        </div>

        <div className="sm:hidden flex flex-col space-y-6 px-6 pt-2">
          <p
            className="font-semibold text-[#DFF7E8] text-[11px] uppercase leading-[1.6] tracking-[0.2em]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            DR. MAYA REYNOLDS, PsyD
            <span className="block mt-0.5 text-[#82C49C] text-[10px] tracking-[0.16em]">
              SANTA MONICA &amp; CALIFORNIA TELEHEALTH
            </span>
          </p>

          <h1
            className="font-light text-[2.35rem] text-white leading-[1.14] tracking-tight"
            style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
          >
            Feeling &ldquo;functional&rdquo; on the outside, while quietly
            struggling{" "}
            <span
              className="inline-block font-normal text-[#DFF7E8] text-[1.25em] not-italic lowercase align-baseline leading-[0.7]"
              style={{ fontFamily: "'PrintedMoments', cursive" }}
            >
              within
            </span>
            .
          </h1>

          <div className="relative my-2 border border-[#82C49C]/40 rounded-2xl w-full h-90 overflow-hidden">
            <Image
              src="/images/reynolds/dr-maya-reynolds.jpg"
              alt="Dr. Maya Reynolds, PsyD"
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          <p
            className="font-light text-[#DFF7E8] text-[14.5px] leading-[1.8]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Therapy in Santa Monica and statewide California for thoughtful,
            high-achieving adults overwhelmed by anxiety, stress, or the
            lingering effects of past experiences. A space combining practical
            tools with depth-oriented work to slow down, reconnect, and feel
            regulated in daily life.
          </p>

          <div className="flex flex-col gap-4 pt-2">
            <Link
              href="#contact"
              className="inline-flex justify-center items-center bg-[#82C49C] hover:bg-[#DFF7E8] py-3.5 border border-[#82C49C]/50 rounded-full w-full font-semibold text-[#1E3728] text-[12.5px] uppercase tracking-[0.16em] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Schedule an Initial Consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex justify-center items-center py-2 text-[#DFF7E8] text-[12px] uppercase tracking-[0.14em]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore Areas of Focus &rarr;
            </Link>
          </div>

          <div className="relative mt-4 border border-[#82C49C]/40 rounded-2xl w-full h-55 overflow-hidden">
            <Image
              src="/images/reynolds/hero-ocean-mist.jpg"
              alt="Calming Santa Monica Pacific ocean morning mist"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
