import Navbar from "./Navbar"
import AOS from "aos"
import { useEffect, useState } from "react"
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai"
import { BsGithub, BsTwitter } from "react-icons/bs"
import { SiHackerrank } from "react-icons/si"

import Footer from "./Footer"


const Home = () => {
  const [logoName, setLogoName] = useState("");
  let sizeY;
  const [screenSizeY, setScreenSizeY] = useState(sizeY);
  useEffect(() => {
    AOS.init({
      useClassNames: true,
      easing: "ease-out-cubic",
      once: false, mirror: true,
    });
    setScreenSizeY(sizeY = window.innerHeight);
  },);
  return (
    <>
      <section className=" aos-all  flex flex-col w-screen h-max bg-gradient-to-t from-light-blue to-navy-blue ">
        <Navbar />
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        
        <div className=" aos-all banner flex justify-between ">
          <div data-aos="fade-up" data-aos-duration="1000" className=" aos-all svg p-6 lg:w-1/2 overflow-hidden ">
            <img loading="lazy" src="hey.png" className=" aos-all bg-transparent img" alt="" />
          </div>

          <div className=" aos-all greet  gap-10 flex-col lg:w-1/2 justify-center items-center flex lg:text-4xl font-bold text-3xl text-blue-300 ">

            <div className="flex">
              <h1 className=" aos-all text-orange-600 Hey">Hey,&nbsp; </h1><h1 className=" aos-all NTMY pl-3 text-blue-300"> Nice To Meet You!!</h1>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" className="brief rounded-2xl bg-navy-blue shadow-6xl text-justify w-11/12 p-5  hover:text-blue-900 hover:bg-white flex">
              <h1 className="text-lg lg:text-2xl  ">My self Yash Simejiya . I am currently doing My BCA from SilverOak University.I have much curious about To learn new technology and build something which are fix some problem,so that I trying to shape my career in IT industry.</h1>
            </div>

            <button className="text-2xl flex justify-center items-center gap-2 p-3 bg-navy-blue rounded-2xl hover:text-blue-900 hover:bg-white shadow-6xl" onClick={() => window.open("https://www.linkedin.com/in/yash-simejiya-8288a6225/")}>Curious To Know More?<AiFillLinkedin className="text-4xl" /></button>

            <div className="flex relative  bg-black">
              {/* <Link href="#section-2" scroll={false} > */}
              <div className="cursor-pointer  icon-scroll" onClick={() => window.scrollTo(0, screenSizeY)}> </div>
              {/* </Link> */}
            </div>
          </div>

        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <div id="section-2" className="w-screen relative h-screen mt-12 ">
          <div className="flex flex-col w-full justify-center items-center p-8 ">
            <h1 data-aos-offset="300" data-aos="fade-down" data-aos-duration="1300" className="sm:text-4xl text-3xl  font-bold p-2 mb-8 Hey  text-orange-600">My Domain Of Interest</h1>

            <div data-aos-offset="300" data-aos="fade-up" data-aos-duration="1300" className="flex flex-wrap sm:flex-row flex-col rounded-xl w-max justify-center items-center text-center bg-navy-blue  shadow-6xl mb-10  p-2">
              <div className="sm:text-3xl text-2xl  font-bold p-2 Hey text-white flex-col sm:flex-row sm:gap-4 flex flex-wrap">
                <span className="sm:border-r-2 sm:pr-4" data-aos-offset="300" data-aos="zoom-in" data-aos-duration="1300">Ios Development</span>
                <span className="sm:border-r-2 sm:pr-4" data-aos-offset="300" data-aos="fade-up" data-aos-duration="1300">Machine Learning</span>
                <span className="" data-aos-offset="300" data-aos="fade-up" data-aos-duration="1300">Data Science</span></div>
            </div>

            <img data-aos="fade-down" data-aos-duration="1500" data-aos-offset="300" loading="lazy" src="LoveMemoji.png" className=" mb-8 img rounded-full w-auto h-[10rem]" alt="" />

            <div className="flex-col flex w-full justify-center items-center">
              <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100" className="text-4xl font-bold p-2 mb-10 text-orange-600 Hey">Thing`s I Love </h1>
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100" className="box shadow-6xl flex gap-6 sm:gap-20 rounded-xl flex-wrap bg-navy-blue p-8">
                <img onMouseLeave={() => setLogoName("")} onMouseOver={() => setLogoName("NextJs")} data-aos="fade-down" data-aos-duration="1500" data-aos-offset="100" loading="lazy" src="nextjs.svg" className=" imgw bg-white rounded-full w-auto h-[3rem] cursor-pointer" alt="" />
                <img onMouseLeave={() => setLogoName("")} onMouseOver={() => setLogoName("ReactJs")} data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100" loading="lazy" src="react.svg" className=" img w-auto h-[3rem] cursor-pointer" alt="" />
                <img onMouseLeave={() => setLogoName("")} onMouseOver={() => setLogoName("TailwindCss")} data-aos="fade-down" data-aos-duration="1500" data-aos-offset="100" loading="lazy" src="tailwindcss.svg" className=" img w-auto h-[3rem] cursor-pointer" alt="" />
                <img onMouseLeave={() => setLogoName("")} onMouseOver={() => setLogoName("Flutter")} data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100" loading="lazy" src="flutter.png" className=" img w-auto h-[3rem] cursor-pointer" alt="" />
                <img onMouseLeave={() => setLogoName("")} onMouseOver={() => setLogoName("Swift")} data-aos="fade-down" data-aos-duration="1500" data-aos-offset="100" loading="lazy" src="swift.png" className=" img w-auto h-[3rem] cursor-pointer" alt="" />
                <img onMouseLeave={() => setLogoName("")} onMouseOver={() => setLogoName("MongoDB")} data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100" loading="lazy" src="mongodb.png" className=" img w-auto h-[3rem] cursor-pointer" alt="" />
                <img onMouseLeave={() => setLogoName("")} onMouseOver={() => setLogoName("NodeJs")} data-aos="fade-down" data-aos-duration="1500" data-aos-offset="100" loading="lazy" src="nodejs1.png" className=" imgw w-auto h-[3rem] cursor-pointer" alt="" />
                <img onMouseLeave={() => setLogoName("")} onMouseOver={() => setLogoName("Python")} data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100" loading="lazy" src="python.png" className=" img w-auto h-[3rem] cursor-pointer" alt="" />
              </div>
              <h1 className="text-2xl mt-5 img font-bold text-white">{logoName}</h1>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <div className="section-3 flex flex-col justify-center mt-[30rem] sm:mt-0 items-center w-screen h-screen">
          <img data-aos="fade-down" data-aos-duration="1500" loading="lazy" src="ProjectMemoji.png" className="  img rounded-full w-auto h-[10rem]" alt="" />

          <h1 data-aos-offset="300" data-aos="fade-down" data-aos-duration="1300" className="text-4xl font-bold p-2 mb-8 Hey text-center mt-4 text-white">Projects</h1>


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



            <div data-aos-offset="200" data-aos="fade-up" data-aos-duration="1300" className="flex flex-col  sm:h-[23rem] h-[25rem] bg-navy-blue shadow-6xl rounded-xl p-4">
              <div className="img-con flex justify-center items-center pl-6 pr-6 bg-white p-2 rounded-xl">
                <img loading="lazy" src="livechatlogo.png" className="w-auto text-center bg-white h-[5rem]" alt="" />
              </div>
              <h1 className="font-bold text-2xl text-center p-3 text-orange-500 img">Live Chat</h1>

              <h1 className="w-[16rem] font-bold text-center p-1 text-blue-300"> Live Chat web you can easily chat with realtime.Note you chat with Same room only. <br /> Code is also available on GitHub. </h1>
              <div className="btn m-2 mt-8 flex gap-2">

                <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://github.com/Yashsoni23/livechatapp")}>Code</button>
                <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://livechat24.netlify.app/")} >Visit</button>
              </div>
            </div>

            <div className="flex-col flex gap-6 ">
              <div data-aos-offset="200" data-aos="fade-up" data-aos-duration="1300" className="flex gap-3 justify-center items-center bg-navy-blue shadow-6xl rounded-xl p-4">
                <div className="img-con flex h-max overflow-hidden p-2 justify-center items-center  bg-white rounded-xl">
                  <img loading="lazy" src="react.svg" className="w-auto text-center bg-white h-[4rem]" alt="" />
                </div>
                <div className="flex-col flex">
                  <h1 className="font-bold text-2xl text-center p-1 text-orange-500 img">Save Todo Web</h1>
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
                  <h1 className="font-bold text-2xl text-center p-1 text-orange-500 img">Portfolio Web</h1>
                  <div className="btn m-2 flex gap-2">
                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://github.com/Yashsoni23/My-First-Portfolio-Web/")}>Code</button>
                    <button className="bg-cyan-400 hover:bg-orange-600 hover:text-white p-2 w-1/2 rounded-md font-bold text-xl" onClick={() => window.open("https://yashsoni32.netlify.app/")} >Visit</button>
                  </div>
                </div>
              </div>
              <button data-aos-offset="100" data-aos="fade-up" data-aos-duration="1300" className="hover:bg-cyan-200 shadow-7xl bg-orange-600 hover:text-black text-white p-2 w-full rounded-md font-bold text-xl">All Projects</button>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <div className="flex gap-10 mt-[50rem] sm:mt-0 flex-col justify-center items-center w-screen h-screen">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" className="brief rounded-2xl bg-navy-blue shadow-6xl w-2/3 text-center p-5 text-blue-300  hover:text-blue-900  hover:bg-white flex">
            <h1 className="text-lg lg:text-2xl   font-bold   ">With this The Curiousity can`t calm me down, I always make new sketches and spend a few of my hours when I want to reconnect.Some sketches i have added to this website.</h1>
          </div>
          <img data-aos="fade-down" data-aos-duration="1500" loading="lazy" src="SketchesMemoji.png" className="  img rounded-full w-auto h-[10rem]" alt="" />

          <div className="flex flex-col sm:flex-row gap-20">
            <img data-aos="fade-up" data-aos-duration="1500" data-aos-offset="200" loading="lazy" src="img1.jpg" className="w-auto h-[20rem]  rounded-xl shadow-7xl" alt="Sketch-1" />
            <img data-aos="fade-down" data-aos-duration="1500" data-aos-offset="200" loading="lazy" src="img2.jpg" className="w-auto h-[20rem]  rounded-xl shadow-7xl" alt="Sketch-1" />
            <img data-aos="fade-up" data-aos-duration="1500" data-aos-offset="200" loading="lazy" src="img3.jpg" className="w-auto h-[20rem]  rounded-xl shadow-7xl" alt="Sketch-1" />
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="flex mt-96 sm:mt-0 relative gap-16 flex-col justify-center items-center font-bold text-blue-300 w-screen h-screen">
          <img data-aos="fade-up" data-aos-duration="1500" loading="lazy" src="ThanksMemoji.png" className="  img rounded-full w-auto h-[15rem]" alt="" />

          <div data-aos="fade-up" data-aos-duration="1500" className="flex shadow-8xl bg-navy-blue h-max p-3 rounded-xl text-xl sm:text-3xl">
            <h1>Thanks For Reading Till Here!!</h1>
          </div>
          <h1 data-aos="fade-down" data-aos-duration="1500" className="sm:text-3xl text-2xl text-white Hey">Connect With Me!!!</h1>

          <div data-aos="flip-up" data-aos-duration="1500" className=" shadow-8xl flex font-bold text-3xl sm:text-5xl text-white p-4 gap-10 sm:gap-16 rounded-full pr-8 pl-8 bg-navy-blue">
            <BsGithub onClick={()=>window.open("https://github.com/yashsoni23/")} className="cursor-pointer img hover:text-orange-600" data-aos="fade-up" data-aos-duration="600" />
            <BsTwitter onClick={()=>window.open("https://twitter.com/YashSon19998199/")} className=" cursor-pointer img hover:text-orange-600" data-aos="fade-up" data-aos-duration="1000" />
            <AiFillInstagram onClick={()=>window.open("https://www.instagram.com/itsyashsimejiya/")} className=" cursor-pointer img hover:text-orange-600" data-aos="fade-up" data-aos-duration="1400" />
            <SiHackerrank onClick={()=>window.open("https://www.hackerrank.com/yashsoni48678/")} className=" cursor-pointer img hover:text-orange-600" data-aos="fade-up" data-aos-duration="1800" />
            <AiFillLinkedin onClick={()=>window.open("https://www.linkedin.com/in/yash-simejiya-8288a6225/")} className=" cursor-pointer img hover:text-orange-600" data-aos="fade-up" data-aos-duration="2200" />

          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <div className="relative flex w-full bg-slate-900">
          <Footer />
        </div>
      </section>
    </>
  )
}

export default Home
