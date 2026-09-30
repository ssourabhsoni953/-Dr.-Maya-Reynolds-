"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Hero Component - Conejo Valley Family Counseling
 *
 * Implements a pixel-accurate clone of the homepage hero section:
 * - Left vertical portrait of family on beach (family-hero.webp)
 * - Center editorial layout:
 *   1. Category / Eyebrow: "ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA"
 *   2. Serif Editorial H1: "Rebuild your foundation on solid ground and finally begin to thrive."
 *      with "thrive." styled in custom script font 'PrintedMoments' in sage teal (#86b2b2)
 *   3. Subtitle description with light, airy typography
 *   4. "BOOK AN APPOINTMENT" CTA with animated underline hover effect
 * - Right offset vertical image of ocean waves (ocean-hero.webp)
 * - Fully responsive: stacks content cleanly on mobile with images below CTA
 */
export default function Hero() {
  return (
    <section data-testid="hero-section" className="relative w-full">
      <div className="pt-6 md:pt-10 lg:pt-12 pb-14 md:pb-20 lg:pb-24 bg-white overflow-hidden">
        {/* ======================================================== */}
        {/* DESKTOP / TABLET LAYOUT (>= sm breakpoint)               */}
        {/* ======================================================== */}
        <div className="hidden sm:grid grid-cols-[1fr_repeat(24,4rem)_1fr] grid-rows-18 gap-3 sm:h-220.75 items-start">
          {/* LEFT COLUMN: Family Beach Portrait */}
          <div className="relative 2xl:col-[1/6] 2xl:row-[2/18]  lg:col-[1/7] lg:row-[2/14] sm:h-full sm:col-[1/5] sm:row-[1/9]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/hero-Img/family-hero.webp"
                alt="Family walking on the beach in Newbury Park, CA"
                fill
                priority
                className="object-cover object-center"
              />
              {/* Subtle tint overlay matching live Squarespace site */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "hsla(36, 30.86%, 84.12%, 0.07)" }}
              />
            </div>
          </div>

          {/* CENTER COLUMN: Text Content */}
          <div className="relative 2xl:col-[8/18] 2xl:row-[2/18]   lg:col-[8/16] lg:row-[2/10] sm:col-[6/11] h-full flex flex-col justify-start ">
            {/* 1. Category Eyebrow Tag */}
            <p
              className="text-[13px] lg:text-[14.5px] tracking-[0.14em] text-[#2b2b2b] uppercase font-medium leading-[1.6] "
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Online &amp; In-Person Counseling In
              <br className="hidden sm:inline" /> Newbury Park &amp; Across CA
            </p>

            {/* 2. Main Editorial H1 Headline */}
            <h1
              className="mt-10 lg:mt-16 xl:mt-20 text-[2.75rem] md:text-[3.1rem] lg:text-[3.5rem] xl:text-[3.9rem] leading-[1.2] text-[#2b2b2b] tracking-[-0.01em] font-extralight "
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Rebuild your foundation on solid ground and finally begin to{" "}
              <span
                className="inline-block text-[#86b2b2] text-[1.22em] font-normal lowercase not-italic align-baseline leading-[0.7]"
                style={{
                  fontFamily: "var(--font-script)",
                }}
              >
                thrive
              </span>
              .
            </h1>

            {/* 3. Subtitle / Paragraph */}
            <p
              className="mt-6 md:mt-8 text-[16px] lg:text-[16.5px] leading-[1.8] text-[#3a3a3a] font-light max-w-130"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Specialized therapy for adults, couples, teens, and children to
              reflect, heal, and grow.
            </p>

            {/* 4. Book An Appointment CTA */}
            <div className="mt-8 md:mt-10 lg:mt-12">
              <Link
                href="/contact"
                className="hero-underline-btn text-[12.5px] lg:text-[13.5px] tracking-[0.14em] uppercase text-[#2b2b2b] font-normal transition-opacity hover:opacity-80 border-b pb-2"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Book An Appointment
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Ocean Waves Shoreline Image */}
          <div className="relative 2xl:col-[19/27] 2xl:row-[7/17] lg:col-[16/27] lg:row-[6/14] h-full sm:col-[11/27] sm:row-[4/9]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/hero-Img/ocean-hero.webp"
                alt="Gentle ocean waves rolling onto the sand"
                fill
                priority
                className="object-cover"
              />
              {/* Subtle tint overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "hsla(36, 30.86%, 84.12%, 0.14)" }}
              />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE LAYOUT (< sm breakpoint)                          */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 gap-y-6 sm:hidden pt-2 ">
          {/* 1. Eyebrow */}
          <p
            className="text-[12px] tracking-[0.14em] text-[#2b2b2b] uppercase font-medium leading-[1.6]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Online &amp; In-Person Counseling In
            <br />
            Newbury Park &amp; Across CA
          </p>

          {/* 2. Headline */}
          <h1
            className="text-[2.35rem] leading-[1.22] text-[#2b2b2b] tracking-[-0.01em] font-light"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Rebuild your foundation on solid ground and finally begin to{" "}
            <span
              className="inline-block text-[#86b2b2] text-[1.25em] font-normal lowercase not-italic align-baseline leading-[0.7]"
              style={{
                fontFamily: "var(--font-script)",
              }}
            >
              thrive
            </span>
            .
          </h1>

          {/* 3. Subtitle */}
          <p
            className="text-[15px] leading-[1.75] text-[#3a3a3a] font-light"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Specialized therapy for adults, couples, teens, and children to
            reflect, heal, and grow.
          </p>

          {/* 4. CTA Button */}
          <div>
            <Link
              href="/contact"
              className="hero-underline-btn text-[12.5px] tracking-[0.14em] uppercase text-[#2b2b2b] font-normal border-b pb-2"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Book An Appointment
            </Link>
          </div>

          {/* 5. Mobile Images Collage using Grid */}
          <div className="grid grid-cols-12 grid-rows-10 gap-x-1 h-150  mt-4">
            {/* Primary Family Beach photo */}
            <div className="col-[1/7] row-[1/8]  relative  overflow-hidden shadow-sm">
              <Image
                src="/images/hero-Img/family-hero.webp"
                alt="Family walking on the beach"
                fill
                sizes="75vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "hsla(36, 30.86%, 84.12%, 0.07)" }}
              />
            </div>

            {/* Overlapping secondary ocean waves photo */}
            <div className="  col-[9/13] row-[4/8] -mt-10 z-1 relative  overflow-hidden shadow-md">
              <Image
                src="/images/hero-Img/ocean-hero.webp"
                alt="Ocean waves shoreline"
                fill
                sizes="50vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "hsla(36, 30.86%, 84.12%, 0.14)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
