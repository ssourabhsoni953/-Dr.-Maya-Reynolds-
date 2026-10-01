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
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null,
  );
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
      <div className="flex justify-between items-center mx-auto px-6 md:px-10 lg:px-14 py-4 md:py-5 max-w-[1720px]">
        <div className="flex flex-col">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="group flex flex-col hover:opacity-90 transition-opacity"
          >
            <span
              className="font-normal text-[18px] text-white md:text-[21px] lg:text-[23px] uppercase tracking-[0.18em] transition-colors"
              style={{ fontFamily: "'Cormorant Infant', Georgia, serif" }}
            >
              Dr. Maya Reynolds, PsyD
            </span>
            <span
              className="mt-0.5 font-medium text-[#82C49C] text-[9px] sm:text-[10px] md:text-[10.5px] uppercase tracking-[0.22em]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Licensed Clinical Psychologist · Santa Monica, CA
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 font-medium text-[#DFF7E8] text-[12.5px] uppercase tracking-[0.16em]">
          {navItems.map((item) => (
            <div key={item.name} className="group relative py-2">
              {item.subLinks ? (
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <Link
                    href={item.href}
                    className="hover:text-white nav-link-underline transition-colors"
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

                  <div className="hidden group-hover:block top-full left-0 z-50 absolute pt-2">
                    <ul className="bg-[#1E3728] shadow-2xl px-1 py-2 border border-[#82C49C]/40 rounded-xl min-w-62.5">
                      {item.subLinks.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className="block hover:bg-[#4F7D56]/40 px-4 py-2.5 rounded-lg text-[#DFF7E8] text-[11.5px] hover:text-[#FCFFFD] uppercase tracking-[0.14em] transition-colors"
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
                  className="hover:text-white nav-link-underline transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <Link
            href="#contact"
            className="inline-flex justify-center items-center bg-[#82C49C] hover:bg-[#DFF7E8] hover:shadow-lg ml-3 px-6 py-2.5 border border-[#82C49C]/40 rounded-full font-semibold text-[#1E3728] text-[12px] uppercase tracking-[0.16em] active:scale-95 transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Schedule a Consultation
          </Link>
        </nav>

        <div className="lg:hidden flex items-center ml-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            className="flex justify-center items-center hover:bg-white/10 p-2.5 rounded-xl focus:outline-none min-w-11 min-h-11 text-white active:scale-95 transition-all"
          >
            <div className="relative flex flex-col justify-between w-6 h-5">
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
          className="lg:hidden top-full right-0 left-0 z-50 absolute flex flex-col justify-between bg-[#1A3323] shadow-2xl px-6 sm:px-8 py-6 border-[#82C49C]/30 border-t w-full overflow-y-auto overscroll-contain transition-all duration-300"
        >
          <div className="space-y-3">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="pb-3 border-[#82C49C]/20 border-b"
              >
                {item.subLinks ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="group flex justify-between items-center py-2 focus:outline-none w-full text-left"
                    >
                      <span
                        className="font-medium text-[15px] text-white group-hover:text-[#82C49C] uppercase tracking-[0.16em] transition-colors"
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
                      <div className="space-y-1.5 bg-[#23422F]/70 mt-2 py-2 pr-1 pl-3 border border-[#82C49C]/20 rounded-xl">
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className="block px-3 py-2.5 rounded-lg font-medium text-[#82C49C] text-[12.5px] hover:text-white uppercase tracking-[0.14em] transition-colors"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          All {item.name} Overview &rarr;
                        </Link>
                        {item.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={handleLinkClick}
                            className="block hover:bg-[#4F7D56]/30 px-3 py-2 rounded-lg font-light text-[#DFF7E8] text-[12.5px] hover:text-white uppercase tracking-[0.12em] transition-colors"
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
                    className="block py-2 font-medium text-[15px] text-white hover:text-[#82C49C] uppercase tracking-[0.16em] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-6 pb-4">
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="inline-flex justify-center items-center bg-[#82C49C] hover:bg-[#DFF7E8] shadow-lg py-4 border border-[#82C49C]/40 rounded-full w-full font-semibold text-[#1E3728] text-[13px] uppercase tracking-[0.16em] active:scale-98 transition-all"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Schedule a Consultation
            </Link>

            <div className="space-y-1 pt-3 border-[#82C49C]/20 border-t text-center">
              <p className="font-light text-[#DFF7E8]/80 text-[12px]">
                Santa Monica Office · Statewide CA Telehealth
              </p>
              <p className="font-medium text-[12px] text-white">
                <a
                  href="tel:3105550192"
                  className="hover:text-[#82C49C] transition-colors"
                >
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
