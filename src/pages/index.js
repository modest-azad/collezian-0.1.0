/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import Hero from "../components/Home";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/styles.module.css";
import Services from "../components/Features";
import Portals from "../components/government_portals";
import Engineering from "./Engineering";
import Association_groups from "../components/Association_groups";

export default function Home() {
  return (
    <>
      <Head>
        <title>Collezian</title>
        <meta name="description" 
        content="
        Study and Chat with G.O.L.U AI and access engineering study materials for free.
        " 
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        {/* fonts  */}
        <link href='https://fonts.googleapis.com/css?family=Poppins'  rel='stylesheet'/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="max-w-[1360px] m-auto">
        <Hero />
        <Services/>
        <Association_groups/>
        <Portals/>
      </main>
    </>
  );
}
