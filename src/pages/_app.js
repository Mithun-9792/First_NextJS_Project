import Script from "next/script";
import Head from "next/head";
import "../styles/globals.css";
import Navbar from "./Components/navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {" "}
        <title>NextJS</title>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
