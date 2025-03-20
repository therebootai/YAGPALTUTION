import AcheiveMentSection from "@/components/why-us/AcheiveMentSection";
import MainPageTemplate from "@/templates/MainWebSite.template";
import DescriptionCard from "@/ui/DescriptionCard";
import SubBanner from "@/ui/SubBanner";

export default function WhyYagpal() {
  const whyUs = [
    {
      heading: "Our Mission",
      description: `Yagpal's mission is to provide <b>quality education</b> with a structured and disciplined approach, ensuring <b>academic excellence</b> for students from <b>Class I to Class XII</b> across all major boards. We aim to create a <b>supportive learning environment</b> that fosters <b>knowledge, confidence, and success</b> through expert guidance, personalized attention, and modern teaching methods. Our goal is to prepare students for <b>board exams and competitive tests like NEET & JEE</b>, equipping them with the skills needed to excel in their careers while keeping parents actively involved in their academic journey.`,
    },
    {
      heading: "Our Vision",
      description: `Yagpal's vision is to be a leading education center that empowers students with knowledge, discipline, and confidence to achieve academic and career success. We strive to create a holistic learning environment that nurtures intellectual growth through innovative teaching methods, personalized mentoring, and structured guidance. Our goal is to make quality education accessible while preparing students for board exams, NEET, JEE, and other competitive exams. By integrating technology, experienced faculty, and strong parent involvement, we aim to shape future leaders who excel in academics and beyond.`,
    },
    {
      heading: "Objective",
      description: `Yagpal's objective is to provide <b>high-quality education</b> that fosters <b>academic excellence and personal growth</b> for students from <b>Class I to XII</b> across all boards. We aim to create a <b>structured, disciplined, and engaging</b> learning environment where students receive <b>personalized attention, expert guidance, and comprehensive study materials. Our focus is on </b><b>regular assessments, interactive teaching, and digital learning tools</b> to enhance understanding. Additionally, we strive to prepare students for <b>NEET, JEE, and other competitive exams, ensuring they develop the skills and confidence needed for a </b><b>successful future</b>.`,
    },
  ];
  return (
    <MainPageTemplate metaData={{ title: "Yagpal Tution | Why Yagpal" }}>
      <SubBanner heading={"Why Yagpal"} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 xl:p-16 lg:p-8 p-4 place-items-stretch">
        {whyUs.map((item, index) => (
          <DescriptionCard
            key={index}
            heading={item.heading}
            description={item.description}
            showBtn={false}
          />
        ))}
      </div>
      <AcheiveMentSection />
    </MainPageTemplate>
  );
}
