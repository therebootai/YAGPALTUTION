import MainPageTemplate from "@/templates/MainWebSite.template";
import SubBanner from "@/ui/SubBanner";
import Image from "next/image";

export default function Gallery({ images }) {
  return (
    <MainPageTemplate metaData={{ title: "Yagpal Tution | Gallery" }}>
      <SubBanner heading={"Gallery"} />
      <div className="xl:p-16 lg:p-8 p-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 xl:gap-6">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="gallery"
            width={500}
            height={500}
            className="aspect-square object-cover rounded-[3.75rem]"
          />
        ))}
      </div>
    </MainPageTemplate>
  );
}

export async function getStaticProps() {
  return {
    props: {
      images: [
        "/gallery/gallery1.jpeg",
        "/gallery/gallery2.jpeg",
        "/gallery/gallery3.jpeg",
        "/gallery/gallery4.jpeg",
        "/gallery/gallery5.jpeg",
        "/gallery/gallery6.jpeg",
        "/gallery/gallery8.jpeg",
        "/gallery/gallery9.jpeg",
        "/gallery/gallery10.jpeg",
        "/gallery/gallery11.jpeg",
        "/gallery/gallery12.jpeg",
        "/gallery/gallery13.jpeg",
        "/gallery/gallery14.jpeg",
        "/gallery/gallery15.jpeg",
        "/gallery/gallery16.jpeg",
        "/gallery/gallery17.jpeg",
        "/gallery/gallery18.jpeg",
        "/gallery/gallery19.jpeg",
        "/gallery/gallery20.jpeg",
        "/gallery/gallery21.jpeg",
        "/gallery/gallery22.jpeg",
        "/gallery/gallery23.jpeg",
        "/gallery/gallery24.jpeg",
        "/gallery/gallery25.jpeg",
        "/gallery/gallery26.jpeg",
        "/gallery/gallery27.jpeg",
        "/gallery/gallery28.jpeg",
        "/gallery/gallery29.jpeg",
        "/gallery/gallery30.jpeg",
        "/gallery/gallery31.jpeg",
        "/gallery/gallery32.jpeg",
        "/gallery/gallery33.jpeg",
        "/gallery/gallery34.jpeg",
        "/gallery/gallery35.jpeg",
        "/gallery/gallery36.jpeg",
        "/gallery/gallery37.jpeg",
        "/gallery/gallery38.jpeg",
        "/gallery/gallery39.jpeg",
        "/gallery/gallery40.jpeg",
        "/gallery/gallery41.jpeg",
        "/gallery/gallery42.jpeg",
        "/gallery/gallery43.jpeg",
        "/gallery/gallery45.jpeg",
        "/gallery/gallery46.jpeg",
        "/gallery/gallery47.jpeg",
        "/gallery/gallery48.jpeg",
        "/gallery/gallery49.jpeg",
        "/gallery/gallery50.jpeg",
        "/gallery/gallery51.jpeg",
        "/gallery/gallery52.jpeg",
        "/gallery/gallery53.jpeg",
        "/gallery/gallery54.jpeg",
        "/gallery/gallery55.jpeg",
        "/gallery/gallery56.jpeg",
        "/gallery/gallery58.jpeg",
        "/gallery/gallery59.jpeg",
        "/gallery/gallery60.jpeg",
        "/gallery/gallery63.jpeg",
        "/gallery/gallery65.jpeg",
        "/gallery/gallery66.jpeg",
        "/gallery/gallery67.jpeg",
        "/gallery/gallery68.jpeg",
        "/gallery/gallery69.jpeg",
        "/gallery/gallery70.jpeg",
        "/gallery/gallery71.jpeg",
        "/gallery/gallery72.jpeg",
        "/gallery/gallery73.jpeg",
        "/gallery/gallery74.jpeg",
        "/gallery/gallery75.jpeg",
        "/gallery/gallery77.jpeg",
        "/gallery/gallery78.jpeg",
      ],
    },
  };
}
