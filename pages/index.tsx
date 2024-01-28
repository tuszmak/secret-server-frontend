import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Secret server</title>
      </Head>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
              Do you have a secret that you don't want to leak? 
              Use this website to store and retrieve your secrets securely! 
              </p>
              <div className="flex justify-evenly">
                <Link href="/save"><button className="btn btn-primary">Create secret</button></Link>
                <Link href="/getSecret"><button className="btn btn-primary">View secret</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
