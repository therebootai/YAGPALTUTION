import Link from "next/link";

export default function CardWithLink({ icon, title, links }) {
  return (
    <div className="flex items-center justify-center bg-[#fafafa] relative rounded-t-[3.75rem] group min-h-80">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="relative">
          <div className="bg-site-secondary rounded-[1.85rem] text-site-primary xlg:text-4xl text-2xl flex items-center justify-center xl:p-10 md:p-8 p-5 rounded-bl-none relative z-10">
            {icon}
          </div>
          <div className="absolute top-0 left-0 translate-x-1/4 translate-y-[10%] border-[3px] border-site-primary w-full h-full rounded-[1.85rem] rounded-bl-none" />
        </div>
        <h1 className="text-site-primary xl:text-2xl md:text-xl text-lg font-bold text-center">
          {title}
        </h1>
        <div className="flex flex-wrap gap-1">
          {links.map(({ href, text }, index) => (
            <Link
              href={href}
              className="text-site-text xl:text-xl md:text-lg text-base text-center"
              target="_blank"
              referrerPolicy="no-referrer"
              key={index}
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-custom-yellow group-hover:bg-custom-darkblue w-full h-2 transition-colors duration-500 rounded-t-full absolute bottom-0 left-0" />
    </div>
  );
}
