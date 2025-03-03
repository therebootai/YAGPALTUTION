import { IoMail } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const contactDetails = [
  {
    icon: <MdPhoneInTalk />,
    title: `Call With Us`,
    links: [
      {
        text: `+91 82507 42988`,
        href: `tel:+91 8250742988`,
      },
    ],
  },
  {
    icon: <IoMail />,
    title: `Email With Us`,
    links: [
      {
        text: `claudius.rasaily@gmail.com `,
        href: `mailTo:claudius.rasaily@gmail.com `,
      },
    ],
  },
  {
    icon: <FaLocationDot />,
    title: `Visit Our Location`,
    links: [
      {
        text: `Patel Road, By lane, Pradhan Nagar, Siliguri, WB - 734001 `,
        href: `https://maps.app.goo.gl/E7db3LMNB889Uiak9`,
      },
    ],
  },
];

export default contactDetails;
