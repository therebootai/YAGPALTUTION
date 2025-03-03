import "@/styles/globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <style global jsx>{`
        body {
          font-family: ${outfit.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
