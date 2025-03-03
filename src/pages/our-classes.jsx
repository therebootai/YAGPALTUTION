import ClassTabs from "@/components/our-classes/ClassTabs";
import MainPageTemplate from "@/templates/MainWebSite.template";
import SubBanner from "@/ui/SubBanner";

export default function OurClasses() {
  return (
    <MainPageTemplate metaData={{ title: "Yagpal Tution | Our Classes" }}>
      <SubBanner heading={"Our Classes"} />
      <div className="xl:p-16 lg:p-8 p-4">
        <ClassTabs />
      </div>
    </MainPageTemplate>
  );
}
