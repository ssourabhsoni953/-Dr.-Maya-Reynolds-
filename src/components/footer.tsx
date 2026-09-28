import Link from "next/link";
import Image from "next/image";

const headerButtons = [
  {
    Name: "ABOUT",
  },
  {
    Name: "OUR TEAM",
    Teammembers: {
      meb1: "JENNIFER-ANDERSON.LMFT",
      meb2: "CANDACE-BLETSCHER.AMFT",
      meb3: "HEATHER-WILLIAMS-BAUMGART.AMFT",
      meb4: "SAMANTHA-JOHNSON.AMFT",
      meb5: "AUTUMN-BODILY.AMFT",
      meb6: "ANDREA-WATKINS.APCC",
      meb7: "ROSA-GOMEZ.AMFT",
      meb8: "CHAD-FLORES.AMFT",
    },
  },
  {
    Name: "SPECIALTIES",
    Specialties: {
      spec1: "DISSOCIATION",
      spec2: "TRAUMA",
      spec3: "SPECIAL NEEDS PARENTING",
      spec4: "COUPLES",
      spec5: "CHILDREN & TEENS",
      spec6: "ANXIETY & DEPRESSION",
      spec7: "ADOPTION",
    },
  },
  {
    Name: "METHODS",
    Methods: {
      method1: "EMDR",
      method2: "BRAINSPOTTING",
      method3: "SOMATIC THERAPY",
      method4: "PARTS WORK THERAPY",
    },
  },
  {
    Name: "FAQS",
  },
  {
    Name: "CONTACT",
    Oval: true,
  },
];

// In the component:
{
  headerButtons.map((button) => (
    <button key={button.Name}>{button.Name}</button>
  ));
}
const Footer = () => {
  return (
    <div className="flex flex-row j">
      <div className="flex-1">
        <Link href="/Home">
          <Image
            src="/images/logo.png"
            alt="Logo"
            loading="eager"
            width={256.8}
            height={74.99}
          />
        </Link>
      </div>
      <div className="flex flex-1">
        {headerButtons.map((button) => (
          <button key={button.Name}>{button.Name}</button>
        ))}
      </div>
    </div>
  );
};

export default Footer;
