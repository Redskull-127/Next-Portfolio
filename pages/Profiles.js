import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
export const getStaticProps = async () => {
  const res = await fetch("https://profiler.adaptable.app/profile/all_profile");
  const data = await res.json();
  return {
    props: {
      data,
    }
  };
};
const Profiles = ({ data }) => {
  const [count, setCount] = useState(11);
  return (
    <>
    <Head>
        <title>Yash Soni | Profiles </title>
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
      <Navbar />

      <div className="flex flex-col w-full h-1/3 pt-3 flex-wrap overflow-hidden  justify-center bg-slate-100 items-center">

        <h1 className="font-bold text-4xl p-2 border-b-8 mb-8 rounded-full shadow-3xl clear-both bg-white hover:text-red-600  border-blue-400 text-slate-700">&nbsp; Profiles &nbsp;
          {/* <span className="block  w-full h-1 bg-blue-400 mt-2 rounded-full"></span> */}
        </h1>
        <div className="flex flex-wrap h-[30rem] p-6 shadow-4xl gap-y-5 w-4/5 lg:w-3/4 rounded-xl mb-20 main justify-between overflow-scroll ">
          {
            data.map((curElem, index) => {
              return (
                <>
                  <div onClick={() => window.open(`/Profiles/${curElem._id}`, "_self")} className="flex flex-wrap min-h-max hover:text-red-500 hover:bg-white hover:shadow-5xl text-white text-xl items-center lg:text-2xl  border-b-2 border-blue-50  shadow-inner rounded-lg font-bold  w-full  lg:w-1/2 gap-3  bg-slate-500 p-2 z-[1] relative">
                    <div className="flex justify-center shadow-xl items-center text-red-500 bg-blue-50 w-10 h-10 p-2 rounded-full">
                      <h1 className=" min-h-max ">{index + 1}.</h1>
                    </div>
                    <Link href={`/Profiles/${curElem._id}`}> <h6 className="justify-center  text-center min-h-max">{curElem.name}</h6></Link>
                  </div>

                </>
              )
            })
          }
          {/* {
            count <= data.length?
            <button className="text-xl lg:text-2xl lg:w-1/2 w-full font-bold bg-blue-200 rounded-lg p-3 hover:bg-red-600 hover:text-white hover:shadow-3xl shadow-4xl text-rose-600" onClick={()=>setCount(count+5)}>Load More Profiles...</button>:""
          } */}


        </div>

      </div>
      <div className="relative bg-slate-900">
      <Footer/>
      </div>
    </>
  )
};
export default Profiles;
