import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/therapists-newbury-park" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

const teamLinks = [
  { name: "Jennifer Anderson", href: "/jennifer-anderson" },
  { name: "Heather Williams-Baumgart", href: "/heather-williams-baumgart" },
  { name: "Autumn Bodily", href: "/autumn-bodily" },
  { name: "Candace Bletscher", href: "/candace-bletscher" },
  { name: "Samantha Johnson", href: "/samantha-johnson" },
  { name: "Rosa Gomez", href: "/rosa-gomez" },
  { name: "Chad Flores", href: "/chad-flores" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#ffffff] text-[#2b2b2b]">
      {/* Main Footer Section */}
      <div className="max-w-[1905px] mx-auto px-6 md:px-[4vw] pt-[86px] pb-[86px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-6 items-start">
          {/* Logo & Blurb (cols 1-4) */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col items-start pr-0 md:pr-6">
            <Link
              href="/home"
              className="mb-4 inline-block transition-opacity hover:opacity-85 max-w-[483px]"
            >
              <Image
                src="/images/logo.png"
                alt="Conejo Valley Family Counseling"
                width={483}
                height={193}
                className="w-full max-w-[483px] max-h-[193px] h-auto object-contain object-left"
                priority
              />
            </Link>
            <p className="text-[15px] leading-[2em] font-montserrat font-light text-[#3f3f3f] max-w-110">
              We want to make getting started simple. You’re welcome to come
              into our office in Newbury Park or schedule virtual appointments
              from anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Navigate Column (cols 5-6) */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-[15px] font-montserrat uppercase tracking-[0.14em] font-normal text-[#2b2b2b] mb-6">
              NAVIGATE
            </h4>
            <ul className="text-[14px] font-montserrat font-extralight leading-[2em] text-[#3f3f3f]">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#3f3f3f] no-underline whitespace-nowrap hover:opacity-70 transition-opacity"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Team Column (cols 7-9) */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[15px] font-montserrat uppercase tracking-[0.14em] font-normal text-[#2b2b2b] mb-6">
              OUR TEAM
            </h4>
            <ul className="text-[14px] font-montserrat font-extralight leading-[2em] text-[#3f3f3f]">
              {teamLinks.map((member) => (
                <li key={member.name}>
                  <Link
                    href={member.href}
                    className="text-[#3f3f3f] no-underline whitespace-nowrap hover:opacity-70 transition-opacity"
                  >
                    {member.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (cols 10-12) */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[15px] font-montserrat uppercase tracking-[0.14em] font-normal text-[#2b2b2b] mb-6">
              CONTACT
            </h4>
            <div className="text-[14px] font-montserrat font-extralight leading-[2em] text-[#3f3f3f]">
              <p>
                925 Broadbeck Dr
                <br />
                Suites 200 and 225
                <br />
                Newbury Park, CA 91320
              </p>
              <p className="mt-1">
                <a
                  href="mailto:info@conejovalleycounseling.com"
                  className="text-[#3f3f3f] no-underline whitespace-nowrap hover:opacity-70 transition-opacity"
                >
                  info@conejovalleycounseling.com
                </a>
                <br />
                <a
                  href="tel:8052423120"
                  className="text-[#3f3f3f] no-underline whitespace-nowrap hover:opacity-70 transition-opacity"
                >
                  805.242.3120
                </a>
              </p>
              <p className="mt-4 text-[14px] leading-[2em] text-[#3f3f3f]">
                Serving Thousand Oaks,
                <br />
                Westlake Village, Camarillo,
                <br />
                Moorpark, &amp; Simi Valley
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar (59px height green strip matching live site) */}
      <div className="w-full bg-[#86b2b2] text-white h-10 px-6 md:px-[4vw] flex items-center">
        <div className="w-full max-w-375 mx-auto px-10 flex items-center justify-start text-[13px] font-montserrat font-light tracking-wide text-white">
          <div className="flex flex-wrap items-center gap-1.5 text-white">
            <Link
              href="/terms"
              className="hover:underline transition-opacity no-underline text-white"
            >
              Terms
            </Link>
            <span>|</span>
            <Link
              href="/privacy-policy"
              className="hover:underline transition-opacity no-underline text-white"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/disclaimer"
              className="hover:underline transition-opacity no-underline text-white"
            >
              Disclaimer
            </Link>
            <span>|</span>
            <span>Website by</span>
            <a
              href="https://walkerstrategyco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Walker Strategy Co.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
