import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

export default function TopHeader() {
  return (
    <div className="z-[60] w-full bg-site-primary">
      <div className=" h-[4rem] hidden md:flex justify-between gap-2 md:gap-0 items-center  text-white px-4 md:px-6">
        <div className="flex gap-4 w-full  rounded-br-0 md:rounded-br-[4rem]  text-xs lg:text-sm xlg:text-base">
          <div className="flex md:gap-2 gap-1 items-center text-[10px] lg:text-sm xlg:text-base font-medium">
            <BiSolidPhoneCall size={20} className="text-site-secondary" />
            <Link href="tel:+919832014758">+91 98320 14758</Link>/
            <Link href="tel:+919832043957">+91 98320 43957</Link>
          </div>
        </div>
        <div className="">
          <Link
            href="https://maps.app.goo.gl/nSxRUfrKtXoZdHso8"
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex md:gap-2 gap-1 items-center font-medium md:flex "
          >
            <IoMdMail size={20} className="text-site-secondary shrink-0" />
            <span>
              Goyal Tutorial Home, Gayatri Bhawan, Nivedita Road Bylane, Gurung
              Basti, P.O.Pradhan Nagar, Siliguri, WB, India 734001
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
