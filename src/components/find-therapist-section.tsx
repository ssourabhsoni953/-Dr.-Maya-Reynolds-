"use client";

import Image from "next/image";

export default function FindTherapistSection() {
  return (
    <section
      id="contact"
      data-testid="find-therapist-section"
      className="relative bg-[#284B36]/80 backdrop-blur-md border-[#82C49C]/30 border-t w-full overflow-hidden"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .fe-booking-grid {
              --grid-gutter: calc(6vw - 11px);
              --cell-max-width: calc((1500px - (11px * 7)) / 8);
              display: grid;
              position: relative;
              width: 100%;
              grid-template-rows: auto auto auto;
              grid-template-columns:
                minmax(var(--grid-gutter), 1fr)
                repeat(8, minmax(0, var(--cell-max-width)))
                minmax(var(--grid-gutter), 1fr);
              row-gap: 16px;
              column-gap: 16px;
              overflow-x: clip;
            }

            @media (min-width: 900px) {
              .fe-booking-grid {
                --grid-gutter: calc(4vw - 11px);
                --cell-max-width: calc((1500px - (11px * 23)) / 24);
                --row-height-scaling-factor: 0.0215;
                --container-width: min(1500px, calc(100vw - 8vw));
                grid-template-rows: repeat(18, minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
                grid-template-columns:
                  minmax(var(--grid-gutter), 1fr)
                  repeat(24, minmax(0, var(--cell-max-width)))
                  minmax(var(--grid-gutter), 1fr);
              }
            }

          
            .fe-book-img-left {
              grid-column: 2 / 6;
              grid-row: 1;
              z-index: 5;
            }
            @media (min-width: 900px) {
              .fe-book-img-left {
                grid-area: 3 / 1 / 17 / 5;
              }
            }

        
            .fe-book-content {
              grid-column: 2 / 10;
              grid-row: 2;
              z-index: 3;
            }
            @media (min-width: 900px) {
              .fe-book-content {
                grid-area: 2 / 6 / 18 / 17;
              }
            }

            
            .fe-book-img-right {
              grid-column: 6 / 10;
              grid-row: 1;
              z-index: 5;
            }
            @media (min-width: 900px) {
              .fe-book-img-right {
                grid-area: 1 / 18 / 18 / 27;
              }
            }
          `,
        }}
      />

      <div className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="items-center fe-booking-grid">
          <div className="fe-book-img-left relative shadow-2xl border border-[#82C49C]/40 rounded-2xl sm:rounded-3xl w-full h-55 sm:h-75 md:h-95 lg:h-full min-h-75 lg:min-h-125 overflow-hidden">
            <Image
              src="/images/reynolds/booking-stoneware.jpg"
              alt="Handcrafted minimalist ceramic stoneware on warm oak shelf"
              fill
              priority
              sizes="(max-width: 900px) 50vw, 20vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundColor: "rgba(40, 75, 54, 0.15)" }}
            />
          </div>

          <div className="flex flex-col justify-center px-2 sm:px-4 lg:px-8 py-6 fe-book-content">
            <p
              className="mb-3.5 font-semibold text-[#82C49C] text-[11.5px] lg:text-[12.5px] uppercase tracking-[0.24em]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Begin Your Care
            </p>

            <h2
              className="mb-5 font-light text-[2.4rem] text-white sm:text-[3rem] md:text-[3.6rem] leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
            >
              A space to slow down, reconnect, and develop{" "}
              <span
                className="inline-block px-1 font-normal text-[#DFF7E8] text-[1.18em] not-italic translate-y-1 transform"
                style={{ fontFamily: "'PrintedMoments', cursive" }}
              >
                sustainable
              </span>{" "}
              ways of living.
            </h2>

            <p
              className="mb-8 max-w-xl font-light text-[#DFF7E8]/90 text-[15px] sm:text-[16px] leading-[1.85]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              If you’re looking for a therapist who combines practical tools
              with depth-oriented work—and who understands the realities of
              living and working in a fast-paced environment—I invite you to
              reach out.
            </p>

            <div className="flex sm:flex-row flex-col items-start sm:items-center gap-5 mb-8">
              <a
                href="mailto:appointments@drmayareynolds.com"
                className="inline-flex justify-center items-center bg-[#82C49C] hover:bg-[#DFF7E8] hover:shadow-xl px-8 py-3.5 border border-[#82C49C]/50 rounded-full font-semibold text-[#1E3728] text-[12.5px] uppercase tracking-[0.16em] active:scale-95 transition-all duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Schedule an Initial Consultation
              </a>
            </div>

            <div className="pt-6 border-[#82C49C]/30 border-t">
              <p
                className="font-medium text-[12.5px] text-white sm:text-[13px] tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Direct Office Contact:{" "}
                <a
                  href="tel:3105550192"
                  className="text-[#DFF7E8] hover:text-white transition-colors"
                >
                  (310) 555-0192
                </a>
                <span className="mx-2 text-[#82C49C]">·</span>
                <a
                  href="mailto:appointments@drmayareynolds.com"
                  className="text-[#DFF7E8] hover:text-white transition-colors"
                >
                  appointments@drmayareynolds.com
                </a>
              </p>
              <p
                className="mt-1.5 text-[#DFF7E8]/70 text-[11.5px]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                123th Street 45 W, Santa Monica, CA 90401 · Secure Telehealth
                Across California
              </p>
            </div>
          </div>

          <div className="fe-book-img-right relative shadow-2xl border border-[#82C49C]/40 rounded-2xl sm:rounded-3xl w-full h-55 sm:h-75 md:h-95 lg:h-full min-h-75 lg:min-h-125 overflow-hidden">
            <Image
              src="/images/reynolds/booking-ocean-terrace.jpg"
              alt="Santa Monica coastal ocean terrace at morning light"
              fill
              priority
              sizes="(max-width: 900px) 50vw, 35vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundColor: "rgba(40, 75, 54, 0.12)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
