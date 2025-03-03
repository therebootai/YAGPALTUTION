import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

export default function ReviewCard({ review }) {
  const { name, description } = review;
  return (
    <div className="bg-white border border-[#EDEDED] rounded-[40px] rounded-bl-none px-4 md:px-6 xl:px-10 py-4 xl:py-6 relative flex items-center justify-center h-60">
      <div className="absolute inset-0 top-0 left-0 w-full h-full overflow-hidden flex items-start justify-end pe-6 gap-4">
        <Image
          src="/icons/green-label.svg"
          width={29}
          height={60}
          alt="label"
        />
        <Image
          src="/icons/yellow-label.svg"
          width={29}
          height={60}
          alt="label"
        />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <p
          className="text-site-text text-sm lg:text-base text-center capitalize"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="h-0.5 w-1/2 bg-site-secondary rounded-4xl" />
        <h1 className="text-site-primary text-base lg:text-xl text-center">
          {name}
        </h1>
        <div className="flex gap-2 items-center">
          <div className="flex gap-3 text-sm text-site-secondary">
            {Array.from({ length: 5 }).map((_, index) => (
              <IoStarSharp key={index} />
            ))}
          </div>
          <h4 className="text-site-text text-xs lg:text-sm">Google</h4>
        </div>
      </div>
    </div>
  );
}
