import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const OnlyMobile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollThreshold = window.innerWidth <= 768 ? 100 : 300;
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
      setIsAnimated(true);
    } else {
      setIsVisible(false);
      setIsAnimated(false);
    }
  };

  return (
    <div
      className={`fixed w-full p-2 z-[80] bottom-0 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`flex md:hidden justify-between bg-white items-center p-4 h-[4rem] rounded-lg border-site-primary border-2 ${
          isAnimated ? "bottomToTop" : ""
        }`}
      >
        <Link
          target="_Blank"
          href="https://api.whatsapp.com/send?phone=919832014758"
          className="flex flex-col items-center gap-2 text-sm text-site-text font-semibold"
        >
          <span className="text-xl">
            <TbBrandWhatsappFilled className="text-site-primary" />
          </span>
          <span>Whasts App</span>
        </Link>
        <Link
          href="https://maps.app.goo.gl/nSxRUfrKtXoZdHso8"
          target="_blank"
          referrerPolicy="no-referrer"
          className="flex flex-col gap-2 items-center w-[4rem] justify-center text-sm text-site-text font-semibold absolute -top-7 left-1/2 -translate-x-1/2"
        >
          <span className="bg-white w-[4rem] h-[4rem] border-[1px] border-site-primary rounded-full justify-center items-center flex">
            <span className="flex w-[3rem] h-[3rem] text-xl bg-white rounded-full justify-center items-center">
              <IoLocationSharp className="text-site-primary" />
            </span>
          </span>
          <span className="text-center">Find us</span>
        </Link>
        <Link
          href="tel:+919832014758"
          target="_Blank"
          className="flex flex-col gap-2 items-center text-sm text-site-text font-semibold"
        >
          <span className="text-xl">
            <FaPhone className="text-site-primary" />
          </span>
          <span>Call Now </span>
        </Link>
      </div>
    </div>
  );
};

export default OnlyMobile;
