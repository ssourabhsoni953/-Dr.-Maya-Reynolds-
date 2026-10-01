"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Who do you typically work with in your practice?",
    answer:
      "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many are high-achieving, thoughtful, and self-aware individuals—including entrepreneurs, creatives, and professionals—who feel functional on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or feeling disconnected after years of pushing through stress.",
  },
  {
    question: "What is your approach to trauma work and EMDR?",
    answer:
      "Trauma work is an important part of my practice. I work with adults navigating single-incident trauma as well as complex, long-standing patterns from childhood, relationships, or chronic stress. My approach is paced carefully, emphasizing safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.",
  },
  {
    question: "Do you offer in-person therapy or telehealth?",
    answer:
      "I offer both in-person therapy from my Santa Monica office at 123th Street 45 W and secure telehealth sessions for clients located across California. The Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.",
  },
  {
    question: "What can I expect from our sessions together?",
    answer:
      "Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I combine practical tools with depth-oriented work, integrating CBT, EMDR, mindfulness, and body-oriented somatic techniques so you develop insight, resilience, and a stronger relationship with yourself over time.",
  },
];

export default function SpecialtiesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faqs"
      data-testid="specialties-section"
      className="relative bg-[#284B36]/85 backdrop-blur-md w-full py-20 sm:py-28 md:py-32 border-t border-[#82C49C]/30"
    >
      <div className="max-w-[1580px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p
              className="text-[11.5px] lg:text-[12.5px] tracking-[0.24em] text-[#82C49C] uppercase font-semibold mb-3.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Frequently Asked Questions
            </p>
            <h2
              className="font-light text-white text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
            >
              Clarifying what to expect.
            </h2>
            <p
              className="text-[15px] sm:text-[16px] text-[#DFF7E8]/90 font-light leading-[1.8] mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              If you’re looking for a therapist who combines practical tools with depth-oriented
              work—and who understands the realities of living and working in a fast-paced
              environment—I may be a good fit. Here are answers to common questions about beginning therapy.
            </p>

            <div className="hidden lg:block pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.16em] font-medium text-[#82C49C] hover:text-white transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>Have a question about beginning therapy? Reach out directly</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#1E3728]/85 border border-[#82C49C]/35 hover:border-[#82C49C] transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-normal text-white text-[1.25rem] sm:text-[1.4rem] leading-[1.3] pr-4 group-hover:text-[#DFF7E8] transition-colors"
                      style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full border border-[#82C49C]/40 flex items-center justify-center text-[#DFF7E8] group-hover:border-[#82C49C] transition-all duration-200 ${
                        isOpen ? "bg-[#82C49C] text-[#1E3728] border-[#82C49C] rotate-45" : ""
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pr-6 sm:pr-10">
                      <p
                        className="text-[14.5px] sm:text-[15px] text-[#DFF7E8]/90 font-light leading-[1.85]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
