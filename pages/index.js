import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";
import Header from "../components/Header.js"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    
        <Head>
            <title>
              Hulu 2.0
            </title> 
            <link rel='icon' href="favicon.ico" /> 
        </Head>

        {/* {Header} */}
        <Header />
    </div>
  )
}
