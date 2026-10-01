"use client";

import Image from "next/image";

export default function HopeSection() {
  return (
    <section data-testid="hope-section" className="relative bg-[#284B36]/60 backdrop-blur-md w-full border-y border-[#82C49C]/30">
      <div className="py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        <div className="grid grid-cols-[minmax(max(1.25rem,calc(6vw-20px)),1fr)_repeat(8,minmax(0,1fr))_minmax(max(1.25rem,calc(6vw-20px)),1fr)] grid-rows-[repeat(28,minmax(24px,auto))] gap-x-[20px] gap-y-[11px] sm:grid-cols-[minmax(0,1fr)_repeat(24,minmax(0,1fr))_minmax(0,1fr)] 2xl:grid-cols-[1fr_repeat(24,3.5rem)_1fr] sm:grid-rows-17 sm:gap-x-3 md:gap-x-4 lg:gap-x-5 sm:gap-y-3 w-full sm:h-[620px] lg:h-[690px] xl:h-[740px] items-start">
          <div className="relative flex flex-col justify-end col-[2/10] row-[1/6] sm:col-[2/17] lg:col-[3/17] 2xl:col-[3/16] sm:row-[2/6] lg:row-[3/7] 2xl:row-[4/9]">
            <p
              className="text-[11px] lg:text-[12px] tracking-[0.24em] text-[#82C49C] uppercase font-semibold mb-3 sm:mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              A Space to Slow Down
            </p>
            <h2
              className="font-light text-white text-[2.1rem] md:text-[2.5rem] lg:text-[3rem] 2xl:text-[3.9rem] leading-[1.12] sm:leading-[1.0] tracking-tight"
              style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
            >
              Exhausted from constantly bracing for something to go{" "}
              <span
                className="inline-block text-[#DFF7E8] text-[1.2em] font-normal lowercase not-italic align-baseline leading-[0.7]"
                style={{ fontFamily: "'PrintedMoments', cursive" }}
              >
                wrong
              </span>
              .
            </h2>
          </div>

          <div
            className="relative flex flex-col justify-start col-[2/10] row-[6/14] sm:col-[2/9] lg:col-[3/10] 2xl:col-[3/10] sm:row-[7/17] lg:row-[8/17] 2xl:row-[9/17] sm:pr-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <p className="font-semibold text-white text-[13.5px] lg:text-[14.5px] uppercase leading-[1.8] tracking-wider">
              High performance externally, chronic strain within.
            </p>
            <p className="mt-3 font-light text-[#DFF7E8] text-[14.5px] lg:text-[15px] leading-[1.85]">
              Many of the people I work with are high-achieving, thoughtful, and self-aware—but
              internally feel exhausted, stuck in overthinking, or emotionally on edge. You may
              feel “functional” on the outside while quietly struggling with constant worry,
              tension in your body, difficulty sleeping, or feeling disconnected from yourself.
            </p>
          </div>

          <div className="relative w-full h-full min-h-[300px] sm:min-h-0 col-[2/10] row-[14/21] sm:col-[18/27] lg:col-[18/27] 2xl:col-[19/27] sm:row-[1/17] lg:row-[1/17] 2xl:row-[1/17]">
            <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-2xl sm:rounded-3xl border border-[#82C49C]/40">
              <Image
                src="/images/reynolds/hope-window-drapery.jpg"
                alt="Open window sheer drapery billowing in morning coastal breeze"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-center object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "rgba(40, 75, 54, 0.15)" }}
              />
            </div>
          </div>

          <div
            className="relative flex flex-col justify-start col-[2/10] row-[22/29] sm:col-[9/17] lg:col-[10/17] 2xl:col-[10/17] sm:row-[7/17] lg:row-[8/17] 2xl:row-[9/17] sm:pl-2 sm:pr-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <p className="font-light text-[#DFF7E8] text-[14.5px] lg:text-[15px] leading-[1.85]">
              Therapy can become a space to slow down, reconnect, and develop more sustainable
              ways of living and working. Together, we look beyond surface symptoms to understand
              both the emotional and physiological sides of what you are experiencing—pacing our work
              carefully so you feel more grounded, safe, and regulated in your everyday life.
            </p>
            <div className="mt-6 pt-4 border-t border-[#82C49C]/30">
              <p className="text-[12.5px] text-[#82C49C] font-medium tracking-wide">
                Evidence-Based · Paced with Care · Somatically Regulated
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
