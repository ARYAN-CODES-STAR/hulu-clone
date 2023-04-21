import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";
import Header from "../components/Header.js"
import Nav from "../components/Nav.js"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <Head>
            <title>
              Hulu 2.0
            </title> 
            <link rel='icon' href='/favicon.ico' />
        </Head>

        {/* <h1>Let's build Hulu 2.0</h1> */}

        {/* {Header} */}

        <Header />
        {/* {Nav} */}
        <Nav />
        {/* {Results} */}

    </div>
  )
}


//1.10 minutes