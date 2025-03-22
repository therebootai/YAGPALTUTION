import { Swiper, SwiperSlide } from "swiper/react";
import Teaching from "@/svgs/Teaching";
import SmallCard from "@/ui/SmallCard";
import Badge from "@/svgs/Badge";
import Graduate from "@/svgs/Graduate";
import Study from "@/svgs/Study";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";

export default function AcheiveMentSection() {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) {
        setSlidesToShow(1);
        setAutoplay(true);
      } else if (window.innerWidth <= 460) {
        setSlidesToShow(1);
        setAutoplay(true);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else if (window.innerWidth <= 1380) {
        setSlidesToShow(4);
        setAutoplay(false);
      } else {
        setSlidesToShow(4);
        setAutoplay(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const achievments = [
    {
      icon: <Teaching />,
      label: `ICSE ISC CBSE WBHS (XI, XII) All Subject Tution`,
    },
    {
      icon: <Badge />,
      label: `Regular & Crash Courses Available`,
    },
    {
      icon: <Graduate />,
      label: `Online Classes Are Available for All Courses & Classess`,
    },
    {
      icon: <Study />,
      label: `NEET JEE MAIN & Advance Tution Available`,
    },
  ];
  return (
    <div className="bg-[url('/custom-bg/form-bg.png')] bg-no-repeat bg-cover bg-center">
      <div className="bg-site-primary/80 flex items-center justify-center w-full p-10">
        <Swiper
          slidesPerView={slidesToShow}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            autoplay: autoplay,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
        >
          {achievments.map((achievement, index) => (
            <SwiperSlide key={index}>
              <SmallCard icon={achievement.icon} title={achievement.label} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
