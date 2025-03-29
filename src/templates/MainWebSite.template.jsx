import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import TopHeader from "@/ui/TopHeader";
import Head from "next/head";
import OnlyMobile from "./OnlyMobile";

const MainPageTemplate = ({ children, metaData = {} }) => {
  let {
    title = "Welcome to Yagpal Cooching Center Gurung Basti Pradhan Nagar",
    desciption = "Welcome to Yagpal Cooching Center Gurung Basti Pradhan Nagar",
  } = metaData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desciption} />
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
