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
      <div className="bg-site-primary/80 flex flex-col lg:flex-row w-full h-full xl:p-16 lg:p-8 p-4 xl:gap-10 lg:gap-8 gap-5 items-center">
        <div className="flex lg:flex-1/2 justify-center items-center">
          <EnquiryForm />
        </div>
        <div className="flex flex-col gap-5 lg:flex-1/2">
          <h1 className="text-white xl:text-3xl md:text-2xl text-xl font-bold">
            Explore Your&nbsp;
            <span className="text-site-secondary">Creativity and Talent</span>
            &nbsp; With Us
          </h1>
          <div className="flex flex-col gap-3">
            <p className="text-white xl:text-xl md:text-lg text-base">
              Periodic tests are conducted to assess student progress.
            </p>
            <p className="text-white xl:text-xl md:text-lg text-base">
              Live online classes are provided for flexible learning.
            </p>
            <p className="text-white xl:text-xl md:text-lg text-base">
              Cameras must be kept on during online classes.
            </p>
            <p className="text-white xl:text-xl md:text-lg text-base">
              The use of phones and electronic devices is strictly prohibited in
              the classroom and on the premises.
            </p>
          </div>
          {/* <div className="flex flex-col gap-8 mt-3">
            {progressData.map((item, index) => (
              <ProgressWithLabel
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
