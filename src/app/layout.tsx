import type { Metadata } from "next";
import { Bodoni_Moda, Italiana, Playfair_Display, Lora, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description:
    "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${bodoni.variable} ${italiana.variable} ${playfair.variable} ${lora.variable} ${cinzel.variable} min-h-full flex flex-col overflow-x-hidden text-[#2b2b2b] bg-[var(--color-white)]`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
