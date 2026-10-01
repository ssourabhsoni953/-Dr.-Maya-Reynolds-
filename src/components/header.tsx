"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type SubLink = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href: string;
  subLinks?: SubLink[];
};

const navItems: NavItem[] = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Clinical Focus",
    href: "#services",
    subLinks: [
      { name: "Anxiety & Panic", href: "#services-anxiety" },
      { name: "Trauma & EMDR", href: "#services-emdr" },
      { name: "Burnout & Perfectionism", href: "#services-burnout" },
      { name: "Therapeutic Modalities", href: "#expertise" },
    ],
  },
  {
    name: "Approach",
    href: "#expertise",
  },
  {
    name: "Office & Telehealth",
    href: "#office",
  },
  {
    name: "FAQs",
    href: "#faqs",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(74);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (mobileMenuOpen) {
        setVisible(true);
        return;
      }

      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY) {
          setVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const toggleMobileSubmenu = (name: string) => {
    setOpenMobileSubmenu((prev) => (prev === name ? null : name));
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        !visible && !mobileMenuOpen ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled || mobileMenuOpen
          ? "bg-[#284B36]/98 backdrop-blur-md shadow-md border-b border-[#82C49C]/30"
          : "bg-[#284B36]/85 backdrop-blur-sm border-b border-[#82C49C]/20"
      }`}
    >
      <div className="max-w-[1720px] mx-auto px-6 md:px-10 lg:px-14 py-4 md:py-5 flex items-center justify-between">
        <div className="flex flex-col">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="group flex flex-col transition-opacity hover:opacity-90"
          >
            <span
              className="text-[18px] md:text-[21px] lg:text-[23px] tracking-[0.18em] font-normal uppercase text-white transition-colors"
              style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
            >
              Dr. Maya Reynolds, PsyD
            </span>
            <span
              className="text-[9px] sm:text-[10px] md:text-[10.5px] tracking-[0.22em] font-medium uppercase text-[#82C49C] mt-0.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Licensed Clinical Psychologist · Santa Monica, CA
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 text-[12.5px] uppercase tracking-[0.16em] font-medium text-[#DFF7E8]">
          {navItems.map((item) => (
            <div key={item.name} className="relative group py-2">
              {item.subLinks ? (
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors nav-link-underline"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.name}
                  </Link>
                  <svg
                    className="w-3 h-3 text-[#82C49C] group-hover:text-white group-hover:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>

                  <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
                    <ul className="min-w-[250px] bg-[#1E3728] border border-[#82C49C]/40 shadow-2xl rounded-xl py-2 px-1">
                      {item.subLinks.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2.5 text-[11.5px] uppercase tracking-[0.14em] text-[#DFF7E8] hover:text-[#FCFFFD] hover:bg-[#4F7D56]/40 rounded-lg transition-colors"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors nav-link-underline"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#82C49C] text-[#1E3728] text-[12px] uppercase tracking-[0.16em] font-semibold transition-all duration-300 hover:bg-[#DFF7E8] hover:shadow-lg active:scale-95 ml-3 border border-[#82C49C]/40"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Schedule a Consultation
          </Link>
        </nav>

        <div className="flex lg:hidden items-center ml-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="p-2.5 rounded-xl text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none flex items-center justify-center min-w-[44px] min-h-[44px]"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-200 ${
                  mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          style={{
            height: `calc(100dvh - ${headerHeight}px)`,
            maxHeight: `calc(100dvh - ${headerHeight}px)`,
          }}
          className="lg:hidden absolute top-full left-0 right-0 w-full bg-[#1A3323] z-50 overflow-y-auto overscroll-contain px-6 sm:px-8 py-6 flex flex-col justify-between border-t border-[#82C49C]/30 shadow-2xl transition-all duration-300"
        >
          <div className="space-y-3">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-[#82C49C]/20 pb-3">
                {item.subLinks ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="w-full flex items-center justify-between py-2 text-left group focus:outline-none"
                    >
                      <span
                        className="text-[15px] uppercase tracking-[0.16em] font-medium text-white group-hover:text-[#82C49C] transition-colors"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-full border border-[#82C49C]/40 flex items-center justify-center text-[#DFF7E8] transition-transform duration-200 ${
                          openMobileSubmenu === item.name
                            ? "bg-[#82C49C] text-[#1E3728] rotate-180"
                            : "group-hover:border-[#82C49C]"
                        }`}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>

                    {openMobileSubmenu === item.name && (
                      <div className="mt-2 pl-3 pr-1 py-2 bg-[#23422F]/70 rounded-xl space-y-1.5 border border-[#82C49C]/20">
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className="block py-2.5 px-3 text-[12.5px] uppercase tracking-[0.14em] font-medium text-[#82C49C] hover:text-white rounded-lg transition-colors"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          All {item.name} Overview &rarr;
                        </Link>
                        {item.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={handleLinkClick}
                            className="block py-2 px-3 text-[12.5px] uppercase tracking-[0.12em] font-light text-[#DFF7E8] hover:text-white hover:bg-[#4F7D56]/30 rounded-lg transition-colors"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block py-2 text-[15px] uppercase tracking-[0.16em] font-medium text-white hover:text-[#82C49C] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 pb-4 space-y-4">
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="w-full inline-flex items-center justify-center py-4 rounded-full bg-[#82C49C] text-[#1E3728] text-[13px] uppercase tracking-[0.16em] font-semibold transition-all hover:bg-[#DFF7E8] shadow-lg active:scale-98 border border-[#82C49C]/40"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Schedule a Consultation
            </Link>

            <div className="pt-3 border-t border-[#82C49C]/20 text-center space-y-1">
              <p className="text-[12px] text-[#DFF7E8]/80 font-light">
                Santa Monica Office · Statewide CA Telehealth
              </p>
              <p className="text-[12px] font-medium text-white">
                <a href="tel:3105550192" className="hover:text-[#82C49C] transition-colors">
                  (310) 555-0192
                </a>
                <span className="mx-2 text-[#82C49C]">·</span>
                <a
                  href="mailto:appointments@drmayareynolds.com"
                  className="hover:text-[#82C49C] transition-colors"
                >
                  appointments@drmayareynolds.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
