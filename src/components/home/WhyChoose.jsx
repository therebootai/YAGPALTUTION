import BulletPoint from "@/svgs/BulletPoint";
import DoubleColourHeading from "@/ui/DoubleColourHeading";
import Image from "next/image";

export default function WhyChoose() {
  const subjects = [
    "Mathematics",
    "Biology",
    "Physics",
    "Chemistry",
    "Economics",
    "Political Science",
    "English",
    "Bengali",
    "Psychology",
    "Philosophy",
    "History",
    "Geography",
    "Social Science",
    "Nepali",
    "Hindi",
    "Commerce",
    "Computer",
  ];
  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col md:flex-row gap-4 xl:gap-6">
      <div className="md:w-[50%] w-full">
        <div className="flex flex-col gap-4 xlg:gap-6 xl:gap-8">
          <div className="flex flex-col gap-2 xlg:gap-3">
            <DoubleColourHeading
              primarytext={"Why Choose"}
              secondarytext={"Yagpal"}
              className={`xl:text-xl text-lg`}
            />
            <h1 className=" xl:text-3xl lg:text-2xl md:text-xl text-2xl font-bold text-site-primary">
              Education Beyond the Classroom -&nbsp;
              <span className=" text-site-secondary">Inspiring</span>&nbsp;
              Confidence, Creativity, and Success!
            </h1>
            <p className="xl:text-base text-sm text-site-text ">
              With over 28 years of excellence,{" "}
              <span className="text-[#222]">Yagpal</span> has established itself
              as a trusted tuition center in Pradhan Nagar, Siliguri. We are
              committed to delivering high-quality education for students from
              Class I to Class XII across all major boards, including CBSE,
              ICSE, ISC, and WBCHSE. Our structured learning approach ensures
              that every student receives adequate teaching hours, comprehensive
              subject notes, and a disciplined environment to enhance their
              academic performance. Regular assessments and periodic tests are
              conducted to track progress, with results shared on time to help
              students improve continuously. <br />
              We believe in keeping both students and parents engaged in the
              learning process. Our digital support system includes live online
              classes, recorded lessons, and WhatsApp updates for classwork and
              board work. Parents are added to WhatsApp groups to stay informed
              about their child&apos;s academic activities, attendance, and test
              performance. This ensures transparency and effective
              communication, making it easier for parents to monitor progress.
              <br />
              For students preparing for competitive exams, we offer expert
              coaching for NEET, CUET &amp; JEE &#40;Mains & Advanced&#41;. Our
              specialized crash courses help students strengthen their concepts
              in a focused manner. Additionally, we provide hostel facilities
              for boys and girls, regular online assessments, and structured
              guidance to ensure a well-rounded learning experience. With a
              disciplined approach and personalized attention, Yagpal continues
              to shape the future of students through excellence in education.
            </p>
          </div>
          <div className="grid xl:grid-cols-3 grid-cols-2 xl:gap-12 md:gap-8 gap-4">
            {subjects.map((item, index) => (
              <div key={index} className="flex flex-row gap-2 items-center">
                <div className="">
                  <BulletPoint className={"size-6"} />
                </div>
                <h1 className=" xl:text-2xl lg:text-lg md:text-lg text-xl font-semibold text-site-primary">
                  {item}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-[50%] w-full grid place-items-stretch grid-cols-2  xl:gap-6 md:gap-4 gap-2">
        <div className="flex bg-[url('/custom-bg/mission-vision-bg.jpg')] bg-no-repeat bg-cover bg-center rounded-tl-[80px] overflow-hidden">
          <div className="flex flex-col xl:py-10 md:py-6 py-4 xl:px-7 md:px-4 px-2  gap-4 items-center justify-center bg-site-primary/90 flex-1">
            <h1 className="xl:text-2xl md:text-xl text-lg font-bold text-center text-site-secondary">
              Our Mission
            </h1>
            <p className="xl:text-lg md:text-base text-sm text-center text-white">
              At Yagpal, our mission is to provide quality education with
              discipline, structured learning, and expert guidance. We aim to
              nurture students' academic excellence, critical thinking, and
              confidence for success in school, competitive exams, and future
              careers.
            </p>
          </div>
        </div>
        <div className="rounded-[80px] rounded-bl-none overflow-hidden flex-1 flex">
          <Image
            src="/extra/whyus1.jpg"
            alt="why-us"
            width={1040}
            height={1444}
            className="min-h-[19.125rem] object-cover w-full"
          />
        </div>
        <div className="rounded-[80px] rounded-tr-none overflow-hidden flex-1 flex">
          <Image
            src="/extra/whyus2.jpg"
            alt="why-us"
            width={1040}
            height={1444}
            className="min-h-[19.125rem] object-cover w-full"
          />
        </div>
        <div className="bg-[url('/custom-bg/mission-vision-bg.jpg')] bg-no-repeat bg-cover bg-center rounded-br-[80px] overflow-hidden flex-1 flex">
          <div className="flex flex-col xl:py-10 md:py-6 py-4 xl:px-7 md:px-4 px-2 gap-4 items-center justify-center bg-site-secondary/90 text-white flex-1">
            <h1 className="xl:text-2xl md:text-xl text-lg font-bold text-center">
              Our Vision
            </h1>
            <p className="xl:text-lg md:text-base text-sm text-center">
              Our vision is to be the most trusted tuition center in Siliguri,
              empowering students with knowledge, skills, and discipline. We
              strive to create a dynamic learning environment that fosters
              excellence, innovation, and lifelong academic growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
