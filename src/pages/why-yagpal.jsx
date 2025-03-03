import AcheiveMentSection from "@/components/why-us/AcheiveMentSection";
import MainPageTemplate from "@/templates/MainWebSite.template";
import DescriptionCard from "@/ui/DescriptionCard";
import SubBanner from "@/ui/SubBanner";

export default function WhyYagpal() {
  const whyUs = [
    {
      heading: "Our Mission",
      description: `At Yagpal, our mission is to provide quality education that empowers students to achieve academic excellence and personal growth. With over 37+ years of experience, we strive to create a disciplined, supportive, and innovative learning environment. Our dedicated faculty, structured curriculum, and personalized attention ensure that every student reaches their full potential, whether in school exams or competitive tests like NEET and JEE. We aim to instill confidence, critical thinking, and a lifelong love for learning in every student who walks through our doors.`,
    },
    {
      heading: "Our Vision",
      description: `Our vision is to be the most trusted and preferred tuition center in Siliguri, recognized for transforming students into confident, knowledgeable, and successful individuals. We envision a future where every student, regardless of their background, has access to top-notch education and guidance. By combining traditional teaching methods with modern technology, we aim to set new benchmarks in academic excellence and holistic development, preparing students to excel in both academics and life.`,
    },
    {
      heading: "Objective",
      description: `Yagpal's primary objective is to deliver comprehensive and result-oriented education to students from Class I to XII, as well as competitive exam aspirants. We focus on strengthening core concepts, improving problem-solving skills, and fostering a disciplined approach to learning. Through regular assessments, structured notes, and personalized attention, we aim to help students achieve their academic goals. Additionally, we provide hostel facilities and online classes to ensure accessibility and convenience for all learners, making quality education inclusive and effective.`,
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
