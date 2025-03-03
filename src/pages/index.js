import MainPageTemplate from "@/templates/MainWebSite.template";
import HomeSlider from "@/components/home/HomeSlider";
import AboutGraphics from "@/components/about-us/AboutGraphics";
import AcheiveMentSection from "@/components/why-us/AcheiveMentSection";
import ClassesSection from "@/components/our-classes/ClassesSection";
import AboutEnquiry from "@/components/about-us/AboutEnquiry";
import Testimaonial from "@/components/home/Testimaonial";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <MainPageTemplate metaData={{ title: "Yagpal Tution | Home" }}>
      <HomeSlider />
      <AboutGraphics />
      <WhyChoose />
      <ClassesSection />
      <AcheiveMentSection />
      <Testimaonial />
      <AboutEnquiry />
    </MainPageTemplate>
  );
}
