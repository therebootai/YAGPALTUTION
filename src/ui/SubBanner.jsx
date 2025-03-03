export default function SubBanner({ heading }) {
  return (
    <section className="bg-[url('/custom-bg/subbanner-bg.png')] bg-no-repeat bg-cover bg-center">
      <div className="h-40 lg:h-[18rem] flex flex-col items-center justify-center bg-site-primary/75">
        <h1 className="text-2xl lg:text-4xl font-medium text-center text-white capitalize">
          {heading}
        </h1>
      </div>
    </section>
  );
}
