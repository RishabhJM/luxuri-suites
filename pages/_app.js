import "@/styles/globals.css";
import {Raleway, Montserrat} from 'next/font/google'

const raleway = Raleway({
  subsets:['latin'],
  variable:"--font-raleway"
})

const montserrat = Montserrat({
  subsets:['latin'],
  variable:"--font-montserrat"
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${raleway.variable} ${montserrat.variable} font-mont`}><Component {...pageProps} /></main>
  );
}
