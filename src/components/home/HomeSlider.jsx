import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function HomeSlider() {
  const slides = [
    {
      imageSrc: "/sliders/slider1.jpg",
    },
    {
      imageSrc: "/sliders/slider2.jpg",
    },
    {
      imageSrc: "/sliders/slider3.jpg",
    },
    {
      imageSrc: "/sliders/slider4.jpg",
    },
    {
      imageSrc: "/sliders/slider5.jpg",
    },
  ];
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          speed: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-lg">
              <div className="w-full relative">
                <Image
                  src={slide.imageSrc}
                  alt="banner"
                  width={1440}
                  priority
                  height={580}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
