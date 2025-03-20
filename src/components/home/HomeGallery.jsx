import DoubleColourHeading from "@/ui/DoubleColourHeading";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeGallery() {
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
        primarytext={"Gallery"}
        secondarytext={""}
        className={`text-center xl:text-xl md:text-lg text-base`}
      />
      <DoubleColourHeading
        primarytext={"Some Moments"}
        secondarytext={"In Classes"}
        className="text-center font-bold xl:text-3xl lg:text-2xl md:text-xl text-lg"
      />
      <div className="mt-8">
        <Swiper
          loop={true}
          spaceBetween={30}
          slidesPerView={slidesToShow}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {[
            "/gallery/gallery1.jpeg",
            "/gallery/gallery2.jpeg",
            "/gallery/gallery3.jpeg",
            "/gallery/gallery4.jpeg",
            "/gallery/gallery5.jpeg",
            "/gallery/gallery6.jpeg",
            "/gallery/gallery8.jpeg",
            "/gallery/gallery11.jpeg",
            "/gallery/gallery12.jpeg",
            "/gallery/gallery13.jpeg",
          ].map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                key={index}
                src={image}
                alt="gallery"
                width={500}
                height={500}
                className="aspect-square object-cover rounded-4xl select-none"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link
        href="/gallery"
        className="text-center md:text-lg text-base mt-8 bg-site-primary text-white self-center md:py-4 py-2.5 md:px-6 px-4 rounded-full transition-colors duration-500 hover:bg-site-secondary tracking-wider"
      >
        View More
      </Link>
    </div>
  );
}
