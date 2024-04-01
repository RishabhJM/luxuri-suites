import "@/styles/globals.css";
import {Raleway, Montserrat, Italiana} from 'next/font/google'

const raleway = Raleway({
  subsets:['latin'],
  variable:"--font-raleway"
})

const montserrat = Montserrat({
  subsets:['latin'],
  variable:"--font-montserrat"
})

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${raleway.variable} ${montserrat.variable} ${italiana.variable} font-mont`}><Component {...pageProps} /></main>
  );
}
