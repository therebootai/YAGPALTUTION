import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import TopHeader from "@/ui/TopHeader";
import Head from "next/head";
import { useEffect } from "react";

const MainPageTemplate = ({ children, metaData }) => {
  useEffect(() => {
    if (window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

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
    </>
  );
};

export default MainPageTemplate;
