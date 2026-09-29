"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// 1. TYPESCRIPT TYPE DEFINITIONS
// ==========================================

// Defines the structure for sub-items in dropdown menus (e.g., individual team members or specialties)
type SubLink = {
  name: string; // The text to display on the link
  href: string; // The URL path to navigate to
};

// Defines the structure for a top-level navigation item
type NavItem = {
  name: string; // Name of the main menu link
  href: string; // URL path of the main link
  subLinks?: SubLink[]; // Optional list of child links (if present, renders a dropdown/accordion)
};

// ==========================================
// 2. NAVIGATION DATA CONFIGURATION
// ==========================================
// All navigation links and their dropdown children are defined in this single array.
// Modifying this list automatically updates both Desktop and Mobile menus.
const navItems: NavItem[] = [
  {
    name: "About",
    href: "/therapists-newbury-park",
  },
  {
    name: "Our Team",
    href: "/our-team",
    subLinks: [
      { name: "Jennifer Anderson, LMFT", href: "/jennifer-anderson" },
      { name: "Candace Bletscher, AMFT", href: "/candace-bletscher" },
      {
        name: "Heather Williams-Baumgart, AMFT",
        href: "/heather-williams-baumgart",
      },
      { name: "Samantha Johnson, AMFT", href: "/samantha-johnson" },
      { name: "Autumn Bodily, AMFT", href: "/autumn-bodily" },
      { name: "Rosa Gomez, AMFT", href: "/rosa-gomez" },
      { name: "Chad Flores, AMFT", href: "/chad-flores" },
    ],
  },
  {
    name: "Specialties",
    href: "/specialties",
    subLinks: [
      {
        name: "Dissociation",
        href: "/dissociative-identity-disorder-therapist-newbury-park",
      },
      { name: "Trauma", href: "/trauma-counseling-newbury-park" },
      {
        name: "Special Needs Parenting",
        href: "/counseling-special-needs-parents-newbury-park",
      },
      { name: "Couples", href: "/couples-therapy" },
      { name: "Children & Teens", href: "/children-and-teens" },
      { name: "Anxiety & Depression", href: "/anxiety-depression" },
      { name: "Adoption", href: "/adoption-therapy-ventura-county-ca" },
    ],
  },
  {
    name: "Methods",
    href: "/methods",
    subLinks: [
      { name: "EMDR", href: "/emdr-therapy-newbury-park" },
      { name: "Brainspotting", href: "/brainspotting" },
      { name: "Somatic Therapy", href: "/somatic-therapy" },
      { name: "Parts Work Therapy", href: "/parts-work-therapy" },
    ],
  },
  {
    name: "FAQs",
    href: "/faqs",
  },
];

// ==========================================
// 3. HEADER COMPONENT
// ==========================================
const Header = () => {
  // --- Component State ---
  // Controls whether the mobile navigation slide-over / drawer is open or closed
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Tracks which mobile submenu accordion (e.g. "Our Team") is currently expanded (or null if all closed)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null,
  );

  // Helper function: Toggles accordion open/closed for a given menu item on mobile
  const toggleMobileSubmenu = (name: string) => {
    setOpenMobileSubmenu((prev) => (prev === name ? null : name));
  };

  return (
    // Main header wrapper with warm cream background matching the authentic site palette
    <header className="relative w-full bg-[hsl(45,31%,95%)] text-[#2b2b2b] z-50">
      <div className="max-w-[1905px] mx-auto px-6 md:px-[5vw] py-4 md:py-[1.4vw] flex items-center justify-between">
        {/* ==================================================== */}
        {/* BRAND LOGO                                           */}
        {/* ==================================================== */}
        <div className="shrink-0 flex items-center">
          <Link
            href="/"
            className="inline-block transition-opacity hover:opacity-90"
          >
            <Image
              src="/images/logo.png"
              alt="Conejo Valley Family Counseling"
              width={256}
              height={75}
              priority
              className="h-13.75 md:h-18.75 w-auto object-contain"
            />
          </Link>
        </div>

        {/* ==================================================== */}
        {/* DESKTOP NAVIGATION BAR (visible on screens >= lg: 1024px) */}
        {/* ==================================================== */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 font-montserrat text-[13.5px] uppercase tracking-widest [-webkit-text-stroke:0.12px_currentColor]">
          {navItems.map((item) => (
            <div key={item.name} className="relative group py-2">
              {/* Check if this item has dropdown sublinks */}
              {item.subLinks ? (
                <div className="cursor-pointer flex items-center gap-1 group-hover:text-black">
                  {/* Main Link with animated underline effect on hover */}
                  <Link href={item.href}>{item.name}</Link>

                  {/* Dropdown Menu (reveals on hover via 'group-hover:block') */}
                  <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-50">
                    <ul className="min-w-max text-right bg-[hsl(45,31%,95%)] p-0">
                      {item.subLinks.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className=" inline-block py-[0.75em] px-[1em] text-[13px] uppercase tracking-[0.08em] text-[#2b2b2b] hover:border-b text-right scale-x-[0.98] origin-right"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> 
              ) : (
                /* Simple navigation link without dropdown */
                <Link href={item.href}>{item.name}</Link>
              )}
            </div>
          ))}

          {/* Call to Action: Oval "Contact" Button */}
          <Link
            href="/contact"
            className="h-12 w-28 border border-[#2b2b2b] rounded-[50%] inline-flex items-center justify-center text-[13px] uppercase tracking-[0.12em] font-normal transition-colors duration-300 hover:bg-black hover:text-[hsl(45,31%,95%)] active:scale-95 ml-4"
          >
            <span className="scale-x-[0.98] inline-block">Contact</span>
          </Link>
        </nav>

        {/* ==================================================== */}
        {/* MOBILE HAMBURGER BUTTON (visible on screens < lg)    */}
        {/* ==================================================== */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#2b2b2b] hover:opacity-75 focus:outline-none"
          >
            {/* Animated 3-line hamburger that rotates into an 'X' when open */}
            <div className="w-6 h-5 flex flex-col justify-between">
              {/* Top line: rotates 45 deg down */}
              <span
                className={`block h-0.5 w-full bg-[#2b2b2b] transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              {/* Middle line: fades out */}
              <span
                className={`block h-0.5 w-full bg-[#2b2b2b] transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              {/* Bottom line: rotates -45 deg up */}
              <span
                className={`block h-0.5 w-full bg-[#2b2b2b] transition-transform duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ==================================================== */}
      {/* MOBILE DRAWER / OVERLAY MENU                         */}
      {/* ==================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-21.25 bottom-0 bg-[hsl(45,31%,95%)] z-40 overflow-y-auto px-8 py-6 flex flex-col justify-between border-t border-[#2b2b2b]/10">
          {/* Main List of Navigation Links */}
          <div className="space-y-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="border-b border-[#2b2b2b]/10 pb-3"
              >
                {item.subLinks ? (
                  // Expandable accordion item for links with submenus
                  <div>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[15px] font-montserrat uppercase tracking-widest"
                      >
                        {item.name}
                      </Link>
                      {/* Plus / Minus toggle button */}
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className="p-2 text-[#2b2b2b] text-base"
                      >
                        {openMobileSubmenu === item.name ? "−" : "+"}
                      </button>
                    </div>

                    {/* Collapsible accordion submenu content */}
                    {openMobileSubmenu === item.name && (
                      <div className="pl-4 pt-2 pb-1 space-y-2">
                        {item.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[13px] text-[#2b2b2b]/80 uppercase tracking-[0.08em] py-1"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular link without submenus
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[15px] font-montserrat uppercase tracking-widest"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Action inside Mobile Drawer */}
          <div className="pt-6 pb-8">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-3 border border-[#2b2b2b] rounded-full text-[14px] uppercase tracking-[0.12em] hover:bg-[#2b2b2b] hover:text-[var(--color-white)] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
