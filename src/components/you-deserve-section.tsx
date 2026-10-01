import Image from "next/image";

export default function YouDeserveSection() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12">
      <div className="relative flex justify-center items-center w-full max-w-[1580px] mx-auto min-h-[460px] md:min-h-[540px] lg:min-h-[580px] overflow-hidden rounded-3xl border border-[#82C49C]/40 shadow-2xl">
        <div className="z-0 absolute inset-0">
          <Image
            src="/images/reynolds/quote-ocean-tideline.jpg"
            alt="Calm Pacific ocean morning tide line over wet sand in Santa Monica"
            fill
            className="object-center object-cover"
            priority
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgba(40, 75, 54, 0.85), rgba(79, 125, 86, 0.72), rgba(130, 196, 156, 0.45))",
            }}
          />
        </div>

        <div className="z-10 relative flex flex-col justify-center items-center mx-auto px-6 sm:px-10 max-w-4xl text-center py-16 sm:py-24">
          <span
            className="text-[#DFF7E8]/60 text-5xl sm:text-6xl md:text-7xl font-light leading-none mb-3 select-none"
            style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
          >
            &ldquo;
          </span>

          <blockquote
            className="font-light text-[1.85rem] sm:text-[2.3rem] md:text-[2.7rem] lg:text-[3rem] leading-[1.28] text-white tracking-tight mb-8 drop-shadow-md"
            style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
          >
            Therapy works best when clients feel respected, understood, and actively
            involved in the process. My goal is not just symptom relief, but helping
            clients develop insight, resilience, and a stronger relationship with
            themselves over time.
          </blockquote>

          <cite
            className="not-italic text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-[#DFF7E8] font-medium"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            — Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist
          </cite>
        </div>
      </div>
    </section>
  );
}
