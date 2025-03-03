import AboutEnquiry from "@/components/about-us/AboutEnquiry";
import AboutGraphics from "@/components/about-us/AboutGraphics";
import MainPageTemplate from "@/templates/MainWebSite.template";
import SubBanner from "@/ui/SubBanner";

export default function AboutUs() {
  return (
    <MainPageTemplate metaData={{ title: "Yagpal Tution | About Us" }}>
      <SubBanner heading={"About Us"} />
      <AboutGraphics />
      <AboutEnquiry />
    </MainPageTemplate>
  );
}
