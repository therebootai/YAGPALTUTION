import Image from "next/image";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMobile, FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const services = [
    {
      label: ` Class One Tuition`,
      href: `/our-classes`,
    },
    {
      label: `Class Two Tuition`,
      href: `/our-classes`,
    },
    {
      label: `Class Five Tuition`,
      href: `/our-classes`,
    },
    {
      label: `Class Six Tuition`,
      href: `/our-classes`,
    },
    {
      label: `Class Nine Tuition`,
      href: `/our-classes`,
    },
    {
      label: `Class Ten Tuition`,
      href: `/our-classes`,
    },
    {
      label: `Class Eleven Tuition`,
      href: `/our-classes`,
    },
    {
      label: `Class Twelve Tuition`,
      href: `/our-classes`,
    },
  ];

  const quickLinks = [
    {
      label: `Home`,
      href: `/`,
    },
    {
      label: `About Us`,
      href: `/about-us`,
    },
    {
      label: `Our Classes`,
      href: `/our-classes`,
    },
    {
      label: `Why Yagpal`,
      href: `/why-yagpal`,
    },
    {
      label: `Gallery`,
      href: `/gallery`,
    },
    {
      label: `Contact Us`,
      href: `/contact-us`,
    },
  ];
  return (
    <footer className="w-full xl:p-16 lg:p-8 p-4 bg-[#F8F8F8] border-t-4 border-site-primary">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row  gap-4 w-full">
          <div className="flex flex-col gap-4 w-full lg:w-[40%]">
            <div>
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={216}
                height={40}
                priority
                className="md:h-[2rem] lg:h-[2rem] xl:h-[2.5rem] h-[1.5rem] w-fit"
              />
            </div>
            <p className="text-site-text text-base">
              Unlock your potential with Yagpal - 25+ years of excellence in
              education. Join us for a brighter academic future today!
            </p>
            <div className="flex flex-col gap-2 text-base lg:text-sm xl:text-base">
              <h1 className="font-semibold text-site-primary xlg:text-xl text-lg">
                Contact Information
              </h1>
              <Link
                href="https://api.whatsapp.com/send?phone=919832014758"
                className="flex gap-2 text-site-primary"
              >
                <FaWhatsapp size={20} />{" "}
                <span className="text-site-text">+91 98320 14758</span>
              </Link>
              <div className="flex gap-2 text-site-primary flex-wrap">
                <FaMobile size={20} />{" "}
                <Link href="tel:+919832014758" className="text-site-text">
                  98320 14758
                </Link>
                /
                <Link href="tel:+919832043957" className="text-site-text">
                  98320 43957
                </Link>
              </div>
              <div className="flex gap-2 text-site-primary flex-wrap items-center">
                <MdEmail size={20} />{" "}
                <Link
                  className="text-site-text"
                  href="mailto:yagpalgoyal@gmail.com"
                >
                  yagpalgoyal@gmail.com
                </Link>{" "}
                /
                <Link
                  className="text-site-text"
                  href="mailto:minnigoyal79@gmail.com"
                >
                  minnigoyal79@gmail.com
                </Link>
              </div>
              <Link
                href="https://maps.app.goo.gl/nSxRUfrKtXoZdHso8"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex gap-2 w-full xl:w-[80%]"
              >
                <IoLocationSharp
                  size={20}
                  className="text-site-primary shrink-0"
                />{" "}
                <span className="text-site-text">
                  Goyal Tutorial Home, Gayatri Bhawan, Nivedita Road Bylane,
                  Gurung Basti, P.O.Pradhan Nagar, Siliguri, WB, India 734001
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-[20%] text-base lg:text-sm xl:text-base">
            <h1 className="font-bold text-site-primary xlg:text-2xl text-lg">
              Our Classes
            </h1>
            <ul className="flex flex-col gap-2 text-site-text xlg:text-lg text-base">
              {services.map((service) => (
                <li className="hover:text-site-secondary" key={service.label}>
                  <Link href={service.href}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4  w-full  lg:w-[20%]">
            <h1 className="font-bold text-site-primary xlg:text-2xl text-lg">
              Quick Links
            </h1>
            <ul className="flex flex-col gap-2 text-site-text xlg:text-lg text-base">
              {quickLinks.map((quickLink) => (
                <li className="hover:text-site-secondary" key={quickLink.label}>
                  <Link href={quickLink.href}>{quickLink.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex  flex-col gap-4 w-full lg:w-[20%]">
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4264.262883703385!2d88.4195448!3d26.725028599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44109552b03bd%3A0xf04050e5a9e2d158!2sYAGPAL!5e1!3m2!1sen!2sin!4v1740984659152!5m2!1sen!2sin"
                loading="lazy"
                className="rounded-lg w-full sm:h-[10rem] lg:h-[12rem] xlg:h-[13rem]"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8">
          <div className="border border-site-primary flex items-center justify-center gap-2 p-4 md:p-2 lg:p-4 xlg:p-6 rounded">
            <div className="flex items-center justify-center w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full bg-site-primary">
              <BiSolidPhoneCall size={30} className="text-white" />
            </div>
            <div>
              <h1 className="font-bold text-base xlg:text-xl text-site-primary">
                Call With Us
              </h1>
              <p className="text-site-text xl:text-base text-sm">
                <Link href="tel:+919832014758"> +91 98320 14758</Link>
              </p>
            </div>
          </div>
          <div className="bg-site-primary flex gap-2 p-4 md:p-2 lg:p-4 xlg:p-6  items-center justify-center text-white rounded buttonshine">
            <div className="flex items-center justify-center w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full bg-white">
              <FaWhatsapp size={30} className="text-site-primary" />
            </div>
            <div>
              <h1 className="font-bold text-base xlg:text-xl text-white">
                WhatsApp Us
              </h1>
              <p className="xl:text-base text-sm text-white">
                <Link
                  href="https://api.whatsapp.com/send?phone=919832014758"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  +91 98320 14758
                </Link>
              </p>
            </div>
          </div>
          <div className="border border-site-primary flex flex-col gap-2 p-4 md:p-2 lg:p-4 xlg:p-6  items-center justify-center rounded bg-white">
            <h1 className="font-bold text-base xl:text-xl text-site-primary">
              Admission Open
            </h1>
            <p className="text-site-primary xl:text-base text-sm">
              Session 2025-26
            </p>
          </div>
        </div>
      </div>

      <hr className="bg-[#d4d4d4] w-full mt-8" />
      <div className=" pt-6 flex lg:flex-row flex-col justify-between items-center">
        <div className="font-semibold text-site-text text-center">
          <h1>
            © Copyright{" "}
            <span className="text-site-primary text-center">
              {" "}
              Yagpal Tution
            </span>{" "}
            {/* <br /> */}- 2025 All Rights Reserved
          </h1>
        </div>
        <div className="text-site-text">
          <h1>
            Design & Developed By:{" "}
            <span className="font-semibold">
              {" "}
              <Link href={"https://rebootai.in/"} target="_blank">
                Reboot AI Pvt. Ltd.{" "}
              </Link>
            </span>
          </h1>
        </div>
      </div>
    </footer>
  );
}
