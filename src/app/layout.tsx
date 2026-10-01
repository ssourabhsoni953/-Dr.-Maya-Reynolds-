import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist Santa Monica, CA",
  description:
    "Evidence-based psychological care for high-achieving adults in Santa Monica & statewide California telehealth. Specializing in anxiety, panic, trauma & EMDR, and burnout recovery.",
  keywords: [
    "Santa Monica psychologist",
    "anxiety therapist Santa Monica",
    "EMDR trauma therapy Santa Monica",
    "burnout counseling California",
    "therapy for high-achieving professionals",
    "Dr. Maya Reynolds PsyD",
    "California telehealth therapist",
  ],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist",
    description:
      "Grounded, evidence-based therapy for anxiety, trauma, and burnout in Santa Monica and online across California.",
    url: "https://drmayareynolds.com",
    siteName: "Dr. Maya Reynolds, PsyD",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness", "Physician"],
  "name": "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist",
  "image": "https://drmayareynolds.com/images/reynolds/dr-maya-reynolds.jpg",
  "@id": "https://drmayareynolds.com",
  "url": "https://drmayareynolds.com",
  "telephone": "+13105550192",
  "email": "appointments@drmayareynolds.com",
  "medicalSpecialty": ["Psychology", "ClinicalPsychology"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123th Street 45 W, Suite 300",
    "addressLocality": "Santa Monica",
    "addressRegion": "CA",
    "postalCode": "90401",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.0195,
    "longitude": -118.4912
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
    "opens": "08:30",
    "closes": "18:00"
  },
  "priceRange": "$$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "Santa Monica"
    },
    {
      "@type": "City",
      "name": "West Los Angeles"
    },
    {
      "@type": "City",
      "name": "Venice"
    },
    {
      "@type": "City",
      "name": "Pacific Palisades"
    },
    {
      "@type": "AdministrativeArea",
      "name": "California"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-[#82C49C] selection:text-[#284B36]">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
