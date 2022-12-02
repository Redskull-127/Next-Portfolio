import Navbar from "../Navbar";
import Footer from "../Footer";
import Head from "next/head";

export const getStaticPaths = async () => {
    const res = await fetch("https://theprofiler26.adaptable.app/profile/all_profile");
    const data = await res.json();
    const paths = data.map((curElem) => {
        return {
            params: {
                profile: `${curElem._id.toString()}`
            },
        };
    });
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.profile
    const res = await fetch(`https://theprofiler26.adaptable.app/profile/${id}`);
    const data = await res.json();
    return {
        props: {
            data,
        }
    };
};



const Profile = ({ data }) => {

    return (
        <>
            <Head>
                <title>Yash Soni | Profiles </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="apple-touch-icon" sizes="57x57" href="../favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="../favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="../favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="../favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="../favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="../favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="../favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="../favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="../favicon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="../favicon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="../favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="../favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="../favicon/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <div className="flex  bg-navy-blue flex-col items-center w-screen h-screen gap-8 text-justify">
                <Navbar />

                <div className="flex font-bold flex-col gap-8 items-center lg:w-4/5 lg:h-4/5 w-11/12 h-full main  overflow-y-auto p-8   text-justify bg-cyan-300 shadow-3xl rounded-xl">
                    <img loading="lazy" src={data[0].url} alt="Profile-img" className="w-[10rem]" width={300} height={300} />
                    <h1 className="text-3xl p-2">{data[0].name}</h1>
                    <h1 className="text-lg">{data[0].gender}</h1>
                    <h1 className="text-lg">{data[0].email}</h1>
                    <h1 className="text-lg">{data[0].category}</h1>
                    <h1 className="text-xl first-letter:text-3xl pb-10">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data[0].about}</h1>
                </div>
                <div className="relative w-full  mt-10">
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default Profile