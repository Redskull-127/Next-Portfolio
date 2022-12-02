import '../styles/globals.css'
import '../styles/newstyle.css'
import "aos/dist/aos.css";
import { useRouter } from "next/router"
import { useEffect, useState } from 'react';
import Loading from './Loading';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplate = (url) => (url === router.asPath) && setLoading(false);
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplate);
    router.events.on('routeChangeError', handleComplate);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplate);
      router.events.off('routeChangeError', handleComplate);
    }
  })
  return (
    <>
    {
      loading?<Loading/>:""
    }
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
