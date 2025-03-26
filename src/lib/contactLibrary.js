import { IoMail } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const contactDetails = [
  {
    icon: <MdPhoneInTalk />,
    title: `Call Us`,
    links: [
      {
        text: `+91 98320 14758`,
        href: `tel:+919832014758`,
      },
      {
        text: `+91 98320 43957`,
        href: `tel:+919832043957`,
      },
    ],
  },
  {
    icon: <IoMail />,
    title: `Email Us`,
    links: [
      {
        text: `yagpalgoyal@gmail.com`,
        href: `mailTo:yagpalgoyal@gmail.com`,
      },
      {
        text: `minnigoyal79@gmail.com`,
        href: `mailTo:minnigoyal79@gmail.com`,
      },
    ],
  },
  {
    icon: <FaLocationDot />,
    title: `Visit Our Location`,
    links: [
      {
        text: `Goyal Tutorial Home, Gayatri Bhawan, Nivedita Road Bylane, Gurung Basti, P.O.Pradhan Nagar, Siliguri, WB, India 734001`,
        href: `https://maps.app.goo.gl/E7db3LMNB889Uiak9`,
      },
    ],
  },
];

export default contactDetails;
