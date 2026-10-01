"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section data-testid="hero-section" className="relative w-full overflow-hidden">
      <div className="pt-6 md:pt-10 lg:pt-14 pb-14 md:pb-20 lg:pb-24">
        <div className="hidden sm:grid grid-cols-[minmax(0,1fr)_repeat(24,minmax(0,4rem))_minmax(0,1fr)] grid-rows-18 gap-3 sm:h-[860px] lg:h-[900px] xl:h-[920px] items-start">
          <div className="relative 2xl:col-[1/8] 2xl:row-[2/18] lg:col-[1/8] lg:row-[2/16] sm:col-[1/7] sm:row-[1/14] sm:h-full">
            <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-3xl border border-[#82C49C]/40">
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

          <div className="relative 2xl:col-[9/18] 2xl:row-[2/18] lg:col-[9/18] lg:row-[2/16] sm:col-[8/17] h-full flex flex-col justify-start pt-2 lg:pt-4">
            <p
              className="text-[11px] lg:text-[12px] tracking-[0.22em] text-[#DFF7E8] uppercase font-semibold leading-[1.6]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              DR. MAYA REYNOLDS, PsyD · LICENSED CLINICAL PSYCHOLOGIST
              <br className="hidden sm:inline" />
              <span className="text-[#82C49C] font-normal"> · SANTA MONICA &amp; STATEWIDE CALIFORNIA TELEHEALTH</span>
            </p>

            <h1
              className="mt-8 lg:mt-12 xl:mt-14 text-[2.6rem] md:text-[3rem] lg:text-[3.4rem] xl:text-[3.9rem] leading-[1.12] text-white tracking-[-0.015em] font-light drop-shadow-sm"
              style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
            >
              Feeling &ldquo;functional&rdquo; on the outside, while quietly struggling{" "}
              <span
                className="inline-block text-[#DFF7E8] text-[1.28em] font-normal lowercase not-italic align-baseline leading-[0.7] transform translate-y-1 drop-shadow-md"
                style={{
                  fontFamily: "'PrintedMoments', cursive",
                }}
              >
                within
              </span>
              .
            </h1>

            <p
              className="mt-6 md:mt-8 text-[15px] lg:text-[16px] leading-[1.85] text-[#DFF7E8] font-light max-w-[520px]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Therapy in Santa Monica and statewide California for thoughtful, high-achieving
              adults overwhelmed by anxiety, stress, or the lingering effects of past experiences.
              A space combining practical tools with depth-oriented work to slow down, reconnect,
              and feel regulated in daily life.
            </p>

            <div className="mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#82C49C] text-[#1E3728] text-[12px] lg:text-[13px] tracking-[0.16em] uppercase font-semibold transition-all duration-300 hover:bg-[#DFF7E8] hover:shadow-xl active:scale-95 border border-[#82C49C]/50"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Schedule an Initial Consultation
              </Link>
              <Link
                href="#services"
                className="hero-underline-btn text-[12px] lg:text-[13px] tracking-[0.14em] uppercase text-[#DFF7E8] font-normal pb-1 hover:text-white transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Explore Areas of Focus &rarr;
              </Link>
            </div>
          </div>

          <div className="relative 2xl:col-[19/27] 2xl:row-[6/17] lg:col-[19/27] lg:row-[5/15] sm:col-[18/27] sm:row-[4/14] h-full">
            <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-3xl border border-[#82C49C]/40">
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

        <div className="sm:hidden px-6 pt-2 flex flex-col space-y-6">
          <p
            className="text-[11px] tracking-[0.2em] text-[#DFF7E8] uppercase font-semibold leading-[1.6]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            DR. MAYA REYNOLDS, PsyD
            <span className="block text-[#82C49C] text-[10px] tracking-[0.16em] mt-0.5">
              SANTA MONICA &amp; CALIFORNIA TELEHEALTH
            </span>
          </p>

          <h1
            className="text-[2.35rem] leading-[1.14] text-white tracking-tight font-light"
            style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
          >
            Feeling &ldquo;functional&rdquo; on the outside, while quietly struggling{" "}
            <span
              className="inline-block text-[#DFF7E8] text-[1.25em] font-normal lowercase not-italic align-baseline leading-[0.7]"
              style={{ fontFamily: "'PrintedMoments', cursive" }}
            >
              within
            </span>
            .
          </h1>

          <div className="relative w-full h-[360px] overflow-hidden rounded-2xl my-2 border border-[#82C49C]/40">
            <Image
              src="/images/reynolds/dr-maya-reynolds.jpg"
              alt="Dr. Maya Reynolds, PsyD"
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          <p
            className="text-[14.5px] leading-[1.8] text-[#DFF7E8] font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Therapy in Santa Monica and statewide California for thoughtful, high-achieving
            adults overwhelmed by anxiety, stress, or the lingering effects of past experiences.
            A space combining practical tools with depth-oriented work to slow down, reconnect,
            and feel regulated in daily life.
          </p>

          <div className="flex flex-col gap-4 pt-2">
            <Link
              href="#contact"
              className="w-full inline-flex items-center justify-center py-3.5 rounded-full bg-[#82C49C] text-[#1E3728] text-[12.5px] tracking-[0.16em] uppercase font-semibold border border-[#82C49C]/50 hover:bg-[#DFF7E8] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Schedule an Initial Consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center text-[12px] tracking-[0.14em] uppercase text-[#DFF7E8] py-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore Areas of Focus &rarr;
            </Link>
          </div>

          <div className="relative w-full h-[220px] overflow-hidden rounded-2xl mt-4 border border-[#82C49C]/40">
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
