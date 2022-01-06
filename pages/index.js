import Head from "next/head";
import { Navbar } from '../components/Navbar';

  export default function Home() {
    return (
      <>
        <Head>
          <title></title>
          <meta name="description" content="Description for Space Tourism" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className="main-wrapper relative bg-home tablet:bg-home-tablet desktop:bg-home-desktop bg-no-repeat bg-cover">
        <Navbar />
        <main className="relative h-screen">
          <section className="container flex flex-col desktop:flex-row justify-center items-center desktop:absolute desktop:top-1/4 desktop:left-1/2 desktop:-translate-x-1/2 mx-auto mt-8 tablet:mt-12 p-4">
            <div className="home-copy">
              <h5 className="font-barlow text-violet text-center tracking-widest uppercase text-h5">So, you want to travel to</h5>
              <h1 className="font-bellefair text-white text-center tracking-wider uppercase text-[110px]">Space</h1>
              <p className="font-barlow text-violet text-center text-bodytext my-8 px-12 tablet:px-24 leading-relaxed">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge 
                of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
              </p>
            </div>
            <div className="explore-btn my-10">
              <button className="uppercase font-bellefair text-[1.5rem] tracking-widest bg-white m-auto w-[175px] h-[175px] rounded-full">Explore</button>
            </div>
          </section>
        </main>
        </div>
      </>
    );
  }
