import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos"

import { useEffect } from "react";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://blogapi.adaptable.app/blogs/all_blogs");
  const data = await res.json();
  return {
    props: {
      data,
    }
  };
};

const Blogs = ({ data }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,mirror:true,offset:50
    });
  },);
  return (
    <>
      <Head>
        <title>Yash Soni | Blogs </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>


      <div className="flex flex-col lg:h-screen h-full">
        <Navbar />

        <div className="flex  pt-5 pb-20 flex-col bg-blue-400 h-full items-center">

          <div data-aos="zoom-in-down" data-aos-duration="1500" className="flex flex-col justify-center gap-5 items-center bg-slate-200 shadow-4xl p-4 w-4/5 h-4/5 lg:h-full rounded-2xl">
            <h1 data-aos="fade-up" data-aos-duration="1500" className="font-bold text-4xl p-2 border-b-8  rounded-full shadow-3xl clear-both bg-white hover:text-red-600  border-blue-400 text-slate-700">&nbsp; Blogs &nbsp;</h1>
            <div onClick={() => window.open(`Blogs/${data[0]._id}`, "_self")} className="flex bg-slate-50 flex-wrap p-6   rounded-full hover:text-red-600 cursor-pointer shadow-3xl hover:bg-slate-50 font-bold text-blue-500 gap-2 justify-center items-center text-lg text-center lg:text-3xl">
              <div className="flex shadow-4xl bg-white text-red-600 w-[40px] h-[40px] justify-center items-center rounded-full">1</div>
              <h1>{data[0].subject}</h1>
            </div>
            <div onClick={() => window.open(`Blogs/${data[1]._id}`, "_self")} className="flex bg-slate-50 flex-wrap p-4   rounded-full hover:text-red-600 cursor-pointer shadow-3xl hover:bg-slate-50 font-bold text-blue-500 gap-2 justify-center items-center text-lg text-center lg:text-3xl">
              <div className="flex shadow-4xl bg-white text-red-600 w-[40px] h-[40px] justify-center items-center rounded-full">2</div>
              <h1>{data[1].subject}</h1>
            </div>
            <div onClick={() => window.open(`Blogs/${data[2]._id}`, "_self")} className="flex bg-slate-50 flex-wrap p-3   rounded-full hover:text-red-600 cursor-pointer shadow-3xl hover:bg-slate-50 font-bold text-blue-500 gap-2 justify-center items-center text-lg text-center lg:text-3xl">
              <div className="flex shadow-4xl bg-white text-red-600 w-[40px] h-[40px] justify-center items-center rounded-full">3</div>
              <h1>{data[2].subject}</h1>
            </div>

          </div>

        </div>

        <div className="relative bg-slate-900">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Blogs