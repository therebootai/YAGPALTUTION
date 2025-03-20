import allTestimonials from "@/lib/testimonialLibrary";
import DoubleColourHeading from "@/ui/DoubleColourHeading";
import ReviewCard from "@/ui/ReviewCard";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimaonial() {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 460) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(3);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth <= 1380) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(4);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" flex flex-col gap-4 xl:gap-6 xl:p-16 lg:p-8 p-4">
      <DoubleColourHeading
        primarytext={"Testimonial"}
        secondarytext={""}
        className={`text-center xl:text-xl md:text-lg text-base`}
      />
      <DoubleColourHeading
        primarytext={"What Our"}
        secondarytext={"Students Say's"}
        className="text-center font-bold xl:text-3xl lg:text-2xl md:text-xl text-lg"
      />
      <div>
        <Swiper
          loop={true}
          spaceBetween={30}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "!bg-[#FBA31C] !opacity-100",
          }}
        >
          {allTestimonials.map((review, index) => (
            <SwiperSlide key={index} className="h-fit">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
