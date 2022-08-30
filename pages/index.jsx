import Head from "next/head";
import Input from "../components/form/Input";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Home from "./home";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Home />
    </div>
  );
}
