import DoubleColourHeading from "@/ui/DoubleColourHeading";
import ClassTabs from "./ClassTabs";

export default function ClassesSection() {
  return (
    <div className=" flex flex-col gap-4 xl:gap-6 xl:p-16 lg:p-8 p-4">
      <DoubleColourHeading
        primarytext={"Our Classes"}
        secondarytext={""}
        className={`text-center xl:text-xl md:text-lg text-base`}
      />
      <DoubleColourHeading
        primarytext={"Let's Check Our"}
        secondarytext={"Classes"}
        className="text-center font-bold xl:text-3xl lg:text-2xl md:text-xl text-lg"
      />
      <ClassTabs />
    </div>
  );
}
