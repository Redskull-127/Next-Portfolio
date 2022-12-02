import Footer from "./Footer"
import Navbar from "./Navbar"
import AOS from "aos"
import { useEffect } from "react";
import Head from "next/head";

const Projects = () => {

    useEffect(() => {
        AOS.init({
            useClassNames: true,
            easing: "ease-out-cubic",
            once: false, mirror: true,
        });
    },);

    return (
        <>
        <Head>
        <title>Yash Soni | Projects </title>
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
            <div className="flex flex-col  items-center justify-center gap-4  w-screen h-max pb-14 bg-blue-900">
                <Navbar />

                <div className="sm:flex-row flex-col justify-center items-center flex">
                    <div className="flex-col sm:flex-row flex-wrap sm:h-[40rem] justify-center items-center p-4 flex gap-6 ">
                        <div data-aos-offset="100" data-aos="fade-up" data-aos-duration="1300" className="flex gap-3 justify-center items-center bg-navy-blue shadow-6xl rounded-xl p-4">
                            <div className="img-con flex h-max overflow-hidden p-2 justify-center items-center  bg-white rounded-xl">
                                <img loading="lazy" src="nextjs.svg" className="w-auto text-center bg-white h-[4rem]" alt="" />
                            </div>
                            <div className="flex-col flex">
                                <h1 className="font-bold text-2xl text-center p-1 text-orange-500 img">Next-SSG</h1>
                                <div className="btn m-2 flex gap-2">
                                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://github.com/Yashsoni23/Next/")}>Code</button>
                                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://nextssg.netlify.app/")} >Visit</button>
                                </div>
                            </div>
                        </div>

                        <div data-aos-offset="100" data-aos="fade-up" data-aos-duration="1300" className="flex gap-3 justify-center items-center bg-navy-blue shadow-6xl rounded-xl p-4">
                            <div className="img-con flex h-max overflow-hidden p-2 justify-center items-center  bg-white rounded-xl">
                                <img loading="lazy" src="react.svg" className="w-auto text-center bg-white h-[4rem]" alt="" />
                            </div>
                            <div className="flex-col flex">
                                <h1 className="font-bold text-2xl text-center p-1 text-orange-500 img">Portfolio</h1>
                                <div className="btn m-2 flex gap-2">
                                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://github.com/Yashsoni23/My-First-Portfolio-Web/")}>Code</button>
                                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://yashsoni32.netlify.app/")} >Visit</button>
                                </div>
                            </div>
                        </div>

                        <div data-aos-offset="200" data-aos="fade-up" data-aos-duration="1300" className="flex gap-3 justify-center items-center bg-navy-blue shadow-6xl rounded-xl p-4">
                            <div className="img-con flex h-max overflow-hidden p-2 justify-center items-center  bg-white rounded-xl">
                                <img loading="lazy" src="react.svg" className="w-auto text-center bg-white h-[4rem]" alt="" />
                            </div>
                            <div className="flex-col flex">
                                <h1 className="font-bold text-2xl text-center p-1 text-orange-500 img">Save Todo</h1>
                                <div className="btn m-2 flex gap-2">
                                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://github.com/Yashsoni23/Todo-list-web-through-Basic-Reactjs")}>Code</button>
                                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://savetodowithyash.netlify.app/")} >Visit</button>
                                </div>
                            </div>
                        </div>
                        <div data-aos-offset="100" data-aos="fade-up" data-aos-duration="1300" className="flex gap-3 justify-center items-center bg-navy-blue shadow-6xl rounded-xl p-4">
                            <div className="img-con flex h-max overflow-hidden p-2 justify-center items-center  bg-white rounded-xl">
                                <img loading="lazy" src="react.svg" className="w-auto text-center bg-white h-[4rem]" alt="" />
                            </div>
                            <div className="flex-col flex">
                                <h1 className="font-bold text-2xl text-center p-1 text-orange-500 img">Yash-BRP</h1>
                                <div className="btn m-2 flex gap-2">
                                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://github.com/Yashsoni23/Todo-list-web-through-Basic-Reactjs")}>Code</button>
                                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://yash-brp.netlify.app/")} >Visit</button>
                                </div>
                            </div>
                        </div>

                        <div data-aos-offset="100" data-aos="fade-up" data-aos-duration="1300" className="flex gap-3 justify-center items-center bg-navy-blue shadow-6xl rounded-xl p-4">
                            <div className="img-con flex h-max overflow-hidden p-2 justify-center items-center  bg-white rounded-xl">
                                <img loading="lazy" src="hcj.jpg" className="w-[4.5rem] text-center bg-white h-[4rem]" alt="" />
                            </div>
                            <div className="flex-col flex">
                                <h1 className="font-bold text-2xl text-center p-1 text-orange-500 img">Portfolio HC</h1>
                                <div className="btn m-2 flex gap-2">
                                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://github.com/Yashsoni23/Portfolio-old-HCJ")}>Code</button>
                                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://yashsoni23.netlify.app/")} >Visit</button>
                                </div>
                            </div>
                        </div>


                        <div data-aos-offset="200" data-aos="fade-up" data-aos-duration="1300" className="flex sm:flex-row flex-col gap-6 p-3 sm:gap-20 justify-center items-center">
                            <div className="flex flex-col h-[23rem] bg-navy-blue shadow-6xl rounded-xl p-4">
                                <div className="img-con flex justify-center items-center pl-6 pr-6 bg-white p-2 rounded-xl">
                                    <img loading="lazy" src="Profiler.png" className="w-auto text-center bg-white h-[5rem]" alt="" />
                                </div>
                                <h1 className="font-bold text-2xl text-center p-3 text-orange-500 img">The Profiler</h1>
                                <h1 className="w-[16rem] font-bold text-center p-1 text-blue-300">The profiler is for create your best version.with complate CRUD operation to manuplate profiles and user mutations system with password security.</h1>
                                <div className="btn m-2 flex gap-2">
                                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://github.com/Yashsoni23/The-Profiler-BE")}>Code</button>
                                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://theprofiler.netlify.app/")} >Visit</button>
                                </div>
                            </div>
                        </div>

                        <div data-aos-offset="200" data-aos="fade-up" data-aos-duration="1300" className="flex flex-col  sm:h-[23rem] h-[25rem] bg-navy-blue shadow-6xl rounded-xl p-4">
                            <div className="img-con flex justify-center items-center pl-6 pr-6 bg-white p-2 rounded-xl">
                                <img loading="lazy" src="livechatlogo.png" className="w-auto text-center bg-white h-[5rem]" alt="" />
                            </div>
                            <h1 className="font-bold text-2xl text-center p-3 text-orange-500 img">Live Chat</h1>

                            <h1 className="w-[16rem] font-bold text-center p-1 text-blue-300"> Live Chat web you can easily chat with realtime.Note you chat with Same room only. <br /> Code is also available on GitHub. </h1>
                            <div className="btn mt-8 flex gap-2">

                                <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://github.com/Yashsoni23/livechatapp")}>Code</button>
                                <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://livechat24.netlify.app/")} >Visit</button>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
            <div className="relative flex w-full bg-slate-900">
                <Footer />
            </div>
        </>
    )
}

export default Projects