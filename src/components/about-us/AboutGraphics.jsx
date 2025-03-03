import useElementHeight from "@/hooks/useElementHeight";
import Image from "next/image";
import { useEffect, useState } from "react";
import AboutContent from "./AboutContent";

export default function AboutGraphics() {
  const [rightSideHeight, leftSideRef] = useElementHeight();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col md:flex-row gap-4 xl:gap-6">
      <div
        className="lg:w-[40%] md:w-[50%] w-full"
        // style={{ height: isSmallScreen ? "28rem" : `${rightSideHeight}px` }}
      >
        <div className="w-full flex flex-row gap-4 xl:gap-6 h-full">
          <div className="w-[50%] flex flex-col gap-4 xl:gap-6">
            <div className=" h-[75%] w-full ">
              <Image
                src={"/about/about-1.png"}
                alt="about"
                width={1040}
                height={1444}
                className="object-cover h-full rounded-t-[2rem] rounded-bl-[2rem]"
              />
            </div>
            <div className=" w-full flex-1 rounded-b-[2rem] rounded-tl-[2rem] bg-site-secondary text-white flex flex-col justify-center items-center text-base xlg:text-lg font-semibold">
              <h1 className=" xlg:text-5xl text-3xl font-bold">37+</h1>
              <p>Years of Excellence</p>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-4 xl:gap-6 h-full">
            <div className="w-full ">
              <Image
                src={"/about/about-2.png"}
                alt="about"
                width={286}
                height={286}
                className="object-cover size-full rounded-full "
              />
            </div>
            <div className=" h-[75%] w-full ">
              <Image
                src={"/about/about-3.png"}
                alt="about"
                width={1040}
                height={1444}
                className="object-cover h-full w-full  rounded-b-[2rem] rounded-tr-[2rem] "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[60%] md:w-[50%] w-full" ref={leftSideRef}>
        <AboutContent />
      </div>
    </div>
  );
}
