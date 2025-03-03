export default function SmallCard({ icon, title }) {
  return (
    <div className="flex items-center justify-center relative group min-h-80">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="relative">
          <div className="bg-site-secondary rounded-[1.85rem] text-custom-darkblue xlg:text-4xl text-2xl flex items-center justify-center xlg:p-10 md:p-8 p-5 rounded-bl-none relative z-10">
            {icon}
          </div>
          <div className="absolute top-0 left-0 translate-x-1/4 translate-y-[10%] border-[3px] border-white w-full h-full rounded-[1.85rem] rounded-bl-none" />
        </div>
        <h1 className="text-white xl:text-2xl md:text-xl text-lg font-bold text-center">
          {title}
        </h1>
      </div>
    </div>
  );
}
