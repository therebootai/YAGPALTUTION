import EnquiryForm from "@/ui/EnquiryForm";
import ProgressWithLabel from "@/ui/ProgressWithLabel";

export default function AboutEnquiry() {
  const progressData = [
    { label: "Our Students", value: 89 },
    { label: "Our Teachers", value: 59 },
    { label: "Success Students", value: 80 },
    { label: "Student Batch", value: 69 },
  ];
  return (
    <div className="flex items-center justify-center bg-[url('/custom-bg/form-bg.png')] bg-no-repeat bg-cover bg-center">
      <div className="bg-site-primary/80 flex flex-col lg:flex-row w-full h-full xl:p-16 lg:p-8 p-4 xl:gap-10 lg:gap-8 gap-5">
        <div className="flex flex-1/2">
          <EnquiryForm />
        </div>
        <div className="flex flex-col gap-5 lg:flex-1/2">
          <h1 className="text-white xl:text-3xl md:text-2xl text-xl font-bold">
            Explore Your&nbsp;
            <span className="text-site-secondary">Creativity and Talent</span>
            &nbsp; With Us
          </h1>
          <p className="text-white">
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour randomised
            words which don't look even slightly believable. If you are going to
            use passage you need sure there anything embarrassing first true
            generator on the Internet.
          </p>
          <div className="flex flex-col gap-8 mt-3">
            {progressData.map((item, index) => (
              <ProgressWithLabel
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
