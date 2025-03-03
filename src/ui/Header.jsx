import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import Popup from "./Popup";
import EnquiryForm from "./EnquiryForm";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouter().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const toggleAppointmentModal = () =>
    setIsAppointmentModalOpen(!isAppointmentModalOpen);

  const isActive = (path) => {
    return pathname === path;
  };

  const NavLinksData = [
    {
      text: "home",
      href: "/",
    },
    {
      text: "About Us",
      href: "/about-us",
    },

    { text: "Our Classes", href: "/our-classes" },
    { text: "Why Yagpal", href: "/why-yagpal" },
    {
      text: "Contact Us",
      href: "/contact-us",
    },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`flex justify-between items-center md:px-6 px-4 fixed lg:px-8 h-[4rem] md:h-[5rem] w-full z-[60]  shadow-md ${
          scrolled
            ? "top-0 bg-white"
            : "md:top-[4rem] top-0 bg-linear-90/srgb from-site-secondary/10  from-0% to-site-primary/10 to-100%"
        }`}
      >
        {/* Logo */}

        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={216}
            height={40}
            priority
            className="md:h-[2rem] xl:h-[2.5rem] h-[1.5rem] w-fit"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center  justify-center gap-5">
          {NavLinksData.map((item, index) => (
            <li key={index} className="relative group">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`${
                    isActive(item.href)
                      ? "text-site-secondary"
                      : "text-site-primary"
                  } text-sm xlg:text-base xl:text-lg font-medium capitalize hover:text-site-secondary`}
                >
                  {item.text}
                </Link>
              ) : (
                <div className="relative">
                  <span
                    className={`${
                      isActive(item.href)
                        ? "text-site-secondary"
                        : "text-site-primary"
                    } text-sm xlg:text-base xl:text-lg font-medium capitalize cursor-pointer hover:text-custom-gold`}
                  >
                    {item.text}
                  </span>
                  {item.subMenu && item.subMenu.length > 0 && (
                    <div className="absolute top-full bg-custom-darkblue/80  left-1/2 -translate-x-1/2 duration-500 transition-all origin-top-right opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto overflow-hidden flex rounded">
                      <div className="text-white flex flex-col gap-6 whitespace-nowrap p-2 py-4 xlg:p-4">
                        <ul className="flex flex-row gap-4">
                          {item.subMenu.map((menu, con) => (
                            <div
                              className="text-white flex flex-col gap-6 whitespace-nowrap p-2 py-4 xlg:p-4"
                              key={con}
                            >
                              <ul className="flex flex-col gap-4">
                                {menu.menus.map((link, indx) => (
                                  <li
                                    key={indx}
                                    className="text-base xlg:text-lg"
                                  >
                                    <Link
                                      href={link.href}
                                      className="flex items-center z-10 gap-2 text-custom-offwhite/100 hover:underline hover:text-site-secondary"
                                    >
                                      &gt; {link.text}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center lg:gap-5 text-white text-xl font-medium">
          <button
            onClick={toggleAppointmentModal}
            className=" text-lg font-semibold text-white bg-site-secondary rounded-full flex justify-center items-center px-6 h-[2.5rem]"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          className="inline-flex lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="menu-open"
        >
          <svg width="0" height="0">
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#156e63" />
              <stop offset="100%" stopColor="#156e63" />
            </linearGradient>
          </svg>
          <span
            className={`transform transition-transform duration-500 ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isMenuOpen ? (
              <IoCloseSharp
                style={{
                  fill: "url(#gradient1)",
                }}
              />
            ) : (
              <AiOutlineMenuFold
                style={{
                  fill: "url(#gradient1)",
                }}
              />
            )}
          </span>
        </button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-black/90 absolute top-full w-full left-0 text-white lg:hidden p-6 pb-12 rounded-b-lg h-fit overflow-y-scroll">
            <ul className="flex flex-col gap-4 capitalize">
              {NavLinksData.map((item, index) => (
                <li key={index} className="relative">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-primary lg:text-base text-base md:text-xl xlg:text-lg "
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <div>
                      <div
                        className="flex justify-between items-center cursor-pointer lg:text-base text-base md:text-xl xlg:text-lg"
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                      >
                        <span className="capitalize">{item.text}</span>
                        <span>{openDropdown === index ? "-" : "+"}</span>
                      </div>

                      {openDropdown === index && (
                        <div
                          className={`duration-500 transition-all origin-top ${
                            openDropdown === index
                              ? "h-auto opacity-100"
                              : "h-0 opacity-0"
                          } overflow-hidden flex flex-col rounded`}
                        >
                          {item.subMenu && item.subMenu.length > 0 && (
                            <ul className="flex flex-col gap-4">
                              {item.subMenu.map((menu, subIndex) => (
                                <div
                                  className="text-white flex flex-col gap-6 whitespace-nowrap p-2"
                                  key={subIndex}
                                >
                                  <ul className="flex flex-col gap-4">
                                    {menu.menus.map((link, linkIndex) => (
                                      <li
                                        key={linkIndex}
                                        className="lg:text-base text-base md:text-xl xlg:text-lg"
                                      >
                                        <Link
                                          href={link.href}
                                          className="flex items-center gap-2"
                                        >
                                          <span className="text-primary">
                                            &gt;
                                          </span>
                                          {link.text}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
              <button
                onClick={toggleAppointmentModal}
                className=" text-lg font-semibold text-white bg-site-secondary rounded flex justify-center items-center px-6 h-[2.5rem]"
              >
                Enquire Now
              </button>
            </ul>
          </div>
        )}
        <Popup isOpen={isAppointmentModalOpen} onClose={toggleAppointmentModal}>  
          <EnquiryForm />
        </Popup>
      </div>
    </>
  );
}
