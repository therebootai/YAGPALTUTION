export default function DescriptionCard({
  heading,
  description,
  showBtn = true,
  btnClick,
  cover,
}) {
  return (
    <div className="flex items-center justify-center bg-[#fafafa] relative rounded-t-[3.75rem] group min-h-80 hover:shadow-site-primary transition-all duration-500">
      <div className="flex flex-col items-center justify-between gap-5 m-4 lg:m-6 flex-1">
        <div
          className="relative bg-no-repeat bg-cover bg-top w-full h-40 lg:h-32 flex items-center justify-center rounded-[3.75rem] rounded-bl-none overflow-hidden"
          style={{ backgroundImage: `url('${cover}')` }}
        >
          <div className="bg-site-secondary/80 group-hover:bg-site-primary/80 size-full flex items-center justify-center transition-colors duration-500">
            <h1 className="text-white xl:text-4xl md:text-2xl text-xl font-bold text-center">
              {heading}
            </h1>
          </div>
        </div>
        <p
          className="text-site-text xl:text-lg text-base text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        {showBtn && (
          <button
            type="button"
            onClick={btnClick}
            className="text-white bg-site-secondary group-hover:bg-site-primary xl:text-xl md:text-lg text-base text-center rounded-full shadow-site-primary font-semibold py-3.5 w-1/2 transition-colors duration-500"
          >
            Enroll Now
          </button>
        )}
      </div>
      <div className="bg-site-secondary group-hover:bg-site-primary w-full h-2 transition-colors duration-500 rounded-t-full absolute bottom-0 left-0" />
    </div>
  );
}
