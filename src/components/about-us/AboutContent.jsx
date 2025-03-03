import BulletPoint from "@/svgs/BulletPoint";
import DoubleColourHeading from "@/ui/DoubleColourHeading";

export default function AboutContent() {
  const details = [
    {
      heading: "Sufficient time allotted by teachers for classes.",
    },
    {
      heading: "Discipline is strictly maintained.",
    },
    {
      heading: "Classwork and boardwork shared separately on WhatsApp.",
    },
    {
      heading: "Regular periodic tests and assessments conducted.",
    },
    {
      heading: "Marks and results provided on time.",
    },
    {
      heading: "Hostel facility available for boys and girls.",
    },
    {
      heading: "Structured notes provided for all subjects.",
    },
  ];
  return (
    <div className="flex flex-col gap-4 xlg:gap-6 xl:gap-8">
      <div className="flex flex-col gap-2 xlg:gap-3">
        <DoubleColourHeading
          primarytext={"About"}
          secondarytext={"Yaktpal"}
          className={`xl:text-xl text-lg`}
        />
        <h1 className=" xlg:text-3xl lg:text-2xl md:text-xl text-2xl font-bold text-site-primary">
          Learn, Grow, and Succeed -&nbsp;
          <span className=" text-site-secondary">Be Inspired</span> by Our
          Innovative Education System!
        </h1>
        <p className="xl:text-base text-sm text-site-text ">
          <span className="text-[#222]">Yagpal</span> is one of the oldest and
          most trusted tuition centers in Pradhan Nagar, Siliguri, with over 37+
          years of excellence in education. We provide comprehensive tuition for
          students from Class I to XII across all major boards, including CBSE,
          ICSE, ISC, and WBCHSE. Our expert faculty ensures structured learning
          with well-prepared notes, regular assessments, and disciplined
          teaching methods. We offer specialized coaching for NEET and JEE
          &#40;Main &amp; Advanced&#41;, along with crash courses and online
          classes for flexible learning. Students receive individual attention,
          and performance tracking is done through periodic tests. Additionally,
          we provide a hostel facility for both boys and girls, ensuring a safe
          and focused learning environment. At&nbsp;
          <span className="text-[#222]">Yagpal</span>, we are committed to
          academic success and holistic development.
        </p>
      </div>
      <div className="flex flex-col gap-2 xlg:gap-4">
        {details.map((item, index) => (
          <div key={index} className="flex flex-row gap-2 items-center">
            <div className=" ">
              <BulletPoint className={"size-6"} />
            </div>
            <h1 className=" xl:text-2xl lg:text-lg md:text-lg text-xl font-medium text-site-primary">
              {item.heading}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
