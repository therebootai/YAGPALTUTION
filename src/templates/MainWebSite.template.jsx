import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import TopHeader from "@/ui/TopHeader";
import Head from "next/head";
import OnlyMobile from "./OnlyMobile";

const MainPageTemplate = ({ children, metaData = {} }) => {
  let { title = "Yagpal Tution" } = metaData;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex w-full h-full flex-col overflow-x-hidden">
        <div className=" z-[1000] w-full">
          <TopHeader />
          <Header />
        </div>

        {/* Main Content */}
        <div className=" lg:mt-[5rem] md:mt-[5rem] mt-[4rem]"> {children}</div>
        <Footer />
      </div>
      <OnlyMobile />
    </>
  );
};

export default MainPageTemplate;
