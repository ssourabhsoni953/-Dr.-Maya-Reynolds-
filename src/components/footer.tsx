import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1A3323] border-[#82C49C]/30 border-t w-full text-[#DFF7E8]">
      <div className="mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-20 pb-16 max-w-[1720px]">
        <div className="items-start gap-10 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col items-start lg:col-span-4 pr-0 lg:pr-8">
            <Link href="/" className="group inline-block mb-4">
              <span
                className="block font-normal text-[20px] text-white md:text-[23px] group-hover:text-[#DFF7E8] uppercase tracking-[0.16em] transition-colors"
                style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
              >
                Dr. Maya Reynolds, PsyD
              </span>
              <span
                className="block mt-1 font-medium text-[#82C49C] text-[10px] uppercase tracking-[0.24em]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Licensed Clinical Psychologist · Santa Monica, CA
              </span>
            </Link>
            <p
              className="mt-2 max-w-sm font-light text-[#DFF7E8]/80 text-[14px] leading-[1.85]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Warm, collaborative, and grounded psychological care combining
              practical tools with depth-oriented work to help you develop
              insight, resilience, and a stronger relationship with yourself
              over time.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4
              className="mb-4 font-semibold text-[12px] text-white uppercase tracking-[0.2em]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Santa Monica Office
            </h4>
            <div
              className="space-y-2 font-light text-[#DFF7E8]/80 text-[13.5px] leading-[1.85]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>
              <p className="pt-2 text-[#DFF7E8] text-[13px]">
                A quiet, private space designed to feel calm and grounding, with
                natural light and an uncluttered environment.
              </p>
              <p className="font-medium text-[#82C49C] text-[13px]">
                Secure Telehealth Sessions Statewide Across California.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4
              className="mb-4 font-semibold text-[12px] text-white uppercase tracking-[0.2em]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact &amp; Hours
            </h4>
            <div
              className="space-y-3 font-light text-[#DFF7E8]/80 text-[13.5px] leading-[1.85]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                <a
                  href="tel:3105550192"
                  className="font-medium text-white hover:text-white transition-colors"
                >
                  (310) 555-0192
                </a>
                <br />
                <a
                  href="mailto:appointments@drmayareynolds.com"
                  className="hover:text-white break-all transition-colors"
                >
                  appointments@drmayareynolds.com
                </a>
              </p>
              <div>
                <p className="font-semibold text-[11.5px] text-white uppercase tracking-[0.12em]">
                  Clinical Hours
                </p>
                <p className="text-[#DFF7E8]/80 text-[12.5px]">
                  Mon – Thu: 8:30 AM – 6:00 PM
                  <br />
                  <span className="text-[#82C49C] italic">
                    By Appointment Only
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4
              className="mb-4 font-semibold text-[12px] text-white uppercase tracking-[0.2em]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Emergency &amp; Crisis Support
            </h4>
            <div
              className="bg-[#23422F] p-4 border border-[#82C49C]/40 rounded-2xl text-[#DFF7E8] text-[12.5px] leading-[1.75]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p className="mb-1 font-semibold text-white">
                Immediate Crisis Lifeline
              </p>
              <p>
                If you are experiencing an immediate mental health crisis, call
                or text <strong className="font-bold text-white">988</strong>{" "}
                (Suicide &amp; Crisis Lifeline) or proceed to the nearest
                emergency room.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#14291C] px-6 sm:px-10 lg:px-14 py-4 border-[#82C49C]/25 border-t w-full text-[#DFF7E8]">
        <div className="flex md:flex-row flex-col justify-between items-center gap-3 mx-auto max-w-[1720px] font-light text-[#DFF7E8]/70 text-[12px] tracking-wide">
          <p>© 2026 Dr. Maya Reynolds, PsyD. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#DFF7E8]/70 text-[11.5px]">
            <Link
              href="#privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="#hipaa" className="hover:text-white transition-colors">
              Notice of Privacy Practices (HIPAA)
            </Link>
            <span>·</span>
            <Link href="#gfe" className="hover:text-white transition-colors">
              Good Faith Estimate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
