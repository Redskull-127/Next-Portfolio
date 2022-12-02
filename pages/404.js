import Link from "next/link"
import Footer from "./Footer"
import Navbar from "./Navbar"

const ErrorPage = () => {
    return (
        <>

            <div className="flex flex-col w-screen min-h-max bg-blue-900">
                <Navbar />
                <div className="flex flex-col w-full h-max  justify-center items-center">
                    <img className="sm:w-[30rem] sm:h-[30rem] w-[20rem] h-[20rem]" src="ErrorMemoji.png" alt="ErrorMemoji" />
                    <h1 className="font-bold text-white sm:text-4xl text-2xl">404 Error | Page Not Found</h1>
                    <div className="flex mt-16 text-center  flex-col sm:flex-row gap-6">
                        <h1 className="font-bold text-white Hey sm:text-2xl sm:border-r-2 sm:border-b-lime-50 sm:pr-5 text-2xl">Go To <Link href={'/'} className="text-orange-600">Home</Link>?</h1>
                        <h1 className="font-bold text-white Hey sm:text-2xl sm:border-r-2 sm:border-b-lime-50 sm:pr-5 text-2xl">Want to Read <Link href={'/Blogs'} className="text-orange-600">Blogs</Link>?</h1>
                        <h1 className="font-bold text-white Hey sm:text-2xl sm:border-r-2 sm:border-b-lime-50 sm:pr-5 text-2xl">Have You Seen <Link href={'/Profiles'} className="text-orange-600">Profiles</Link>?</h1>
                        <h1 className="font-bold text-white Hey sm:text-2xl text-2xl">Let`s Explore My <Link href={'/Projects'} className="text-orange-600">Projects</Link>?</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ErrorPage