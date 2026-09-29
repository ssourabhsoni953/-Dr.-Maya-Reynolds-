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
    <section
      data-testid="hero-section"
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="  md:pt-10 lg:pt-12 pb-14 md:pb-20 lg:pb-24">
        {/* ======================================================== */}
        {/* DESKTOP / TABLET LAYOUT (>= 768px / md breakpoint)       */}
        {/* ======================================================== */}
        <div className=" hidden md:grid md:grid-cols-12 lg:grid-cols-24 gap-x-4 lg:gap-x-6 items-start">
          {/* LEFT COLUMN: Family Beach Portrait */}
          {/* Spans cols 1-9 on 24-col grid (approx 37% width) */}
          <div className="md:col-span-5 lg:col-span-9 relative">
            <div className=" relative w-full  lg:h-150 xl:h-162.5 overflow-hidden">
              <Image
                src="/images/hero-Img/family-hero.webp"
                alt="Family walking on the beach in Newbury Park, CA"
                fill
                priority
                className="z-1 object-cover object-center"
              />
              {/* Subtle tint overlay matching live Squarespace site */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "hsla(36, 30.86%, 84.12%, 0.07)" }}
              />
            </div>
          </div>

          {/* CENTER COLUMN: Text Content */}
          {/* Spans cols 11-20/21, vertically aligned with breathing room */}
          <div className="md:col-span-5 lg:col-span-11 xl:col-span-10 md:pl-2 lg:pl-6 xl:pl-8 flex flex-col justify-start">
            {/* 1. Category Eyebrow Tag */}
            <p
              className="text-[13px] lg:text-[14.5px] tracking-[0.14em] text-[#2b2b2b] uppercase font-normal leading-[1.6]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Online &amp; In-Person Counseling In
              <br className="hidden sm:inline" /> Newbury Park &amp; Across CA
            </p>

            {/* 2. Main Editorial H1 Headline */}
            <h1
              className="mt-10 lg:mt-16 xl:mt-20 text-[2.75rem] md:text-[3.1rem] lg:text-[3.5rem] xl:text-[3.9rem] leading-[1.2] text-[#2b2b2b] tracking-[-0.01em]"
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
              className="mt-6 md:mt-8 text-[16px] lg:text-[17.5px] leading-[1.8] text-[#3a3a3a] font-light max-w-130"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Specialized therapy for adults, couples, teens, and children to
              reflect, heal, and grow.
            </p>

            {/* 4. Book An Appointment CTA */}
            <div className="mt-8 md:mt-10 lg:mt-12">
              <Link
                href="/contact"
                className="hero-underline-btn text-[12.5px] lg:text-[13.5px] tracking-[0.14em] uppercase text-[#2b2b2b] font-normal transition-opacity hover:opacity-80"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Book An Appointment
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Ocean Waves Shoreline Image */}
          {/* Offset lower down, aligned with the headline top */}
          <div className="md:col-span-2 lg:col-span-4 xl:col-span-5 relative mt-16 lg:mt-24 flex justify-end">
            <div className="relative w-full h-95 lg:h-112.5 xl:h-122.5 overflow-hidden">
              <Image
                src="/images/hero-Img/ocean-hero.webp"
                alt="Gentle ocean waves rolling onto the sand"
                fill
                priority
                sizes="(min-height: 199px) "
                className=" z-1 object-cover object-center"
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
        {/* MOBILE LAYOUT (< 768px)                                  */}
        {/* ======================================================== */}
        <div className="flex flex-col md:hidden pt-2">
          {/* 1. Eyebrow */}
          <p
            className="text-[12px] tracking-[0.14em] text-[#2b2b2b] uppercase font-normal leading-[1.6]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Online &amp; In-Person Counseling In
            <br />
            Newbury Park &amp; Across CA
          </p>

          {/* 2. Headline */}
          <h1
            className="mt-6 text-[2.4rem] sm:text-[2.75rem] leading-[1.22] text-[#2b2b2b] tracking-[-0.01em]"
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
            className="mt-4 text-[15px] leading-[1.75] text-[#3a3a3a] font-light"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Specialized therapy for adults, couples, teens, and children to
            reflect, heal, and grow.
          </p>

          {/* 4. CTA Button */}
          <div className="mt-6">
            <Link
              href="/contact"
              className="hero-underline-btn text-[12.5px] tracking-[0.14em] uppercase text-[#2b2b2b] font-normal"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Book An Appointment
            </Link>
          </div>

          {/* 5. Mobile Images Collage */}
          <div className="mt-10 relative flex items-start">
            {/* Primary Family Beach photo */}
            <div className="relative w-[72%] aspect-4/5 overflow-hidden shadow-sm">
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
            <div className="relative w-[46%] aspect-3/4 overflow-hidden -ml-10 mt-12 shadow-md">
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
