import useElementHeight from "@/hooks/useElementHeight";
import contactDetails from "@/lib/contactLibrary";
import MainPageTemplate from "@/templates/MainWebSite.template";
import CardWithLink from "@/ui/CardWithLink";
import EnquiryForm from "@/ui/EnquiryForm";
import SubBanner from "@/ui/SubBanner";
import Image from "next/image";

export default function ContactUs() {
  return (
    <MainPageTemplate metaData={{ title: "Yagpal Tution | Contact Us" }}>
      <SubBanner heading={"Contact Us"} />
      <div className="flex flex-col gap-5 xl:gap-7 xl:p-16 lg:p-8 p-4">
        <div className="flex flex-col gap-4 xlg:gap-6">
          <h1 className=" xl:text-3xl lg:text-2xl text-xl font-bold text-site-primary capitalize">
            Get In&nbsp;
            <span className="text-site-secondary">Touch</span>
          </h1>
          <p className="text-site-text text-base">
            Reach out to Yagpal for any queries or enrollment details! Visit us
            at Pradhan Nagar, Siliguri, or connect with us via email. Our team
            is here to assist you with course information, schedules, and more.
            Let us help you take the first step toward academic success! Stay
            updated through our WhatsApp updates for classwork, boardwork, and
            important announcements. We&apos;re just a message away!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 xlg:gap-6 gap-4">
          {contactDetails.map((contact) => (
            <CardWithLink key={contact.title} {...contact} />
          ))}
        </div>
      </div>
      <div className="bg-[url('/custom-bg/form-bg.png')] bg-no-repeat bg-cover">
        <div className="flex flex-col xl:flex-row gap-5 xl:gap-8  justify-between bg-site-primary/80  xl:p-16 lg:p-8 p-4 ">
          <Image
            src="/extra/contact us.jpg"
            alt="contact"
            width={385}
            height={417}
            className="object-cover flex-1 rounded-lg min-h-[26.06rem]"
          />
          <div className="flex flex-1">
            <EnquiryForm />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4264.262883703385!2d88.4195448!3d26.725028599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44109552b03bd%3A0xf04050e5a9e2d158!2sYAGPAL!5e1!3m2!1sen!2sin!4v1740984659152!5m2!1sen!2sin"
            loading="lazy"
            className="rounded-lg w-full flex-1"
          ></iframe>
        </div>
      </div>
    </MainPageTemplate>
  );
}
