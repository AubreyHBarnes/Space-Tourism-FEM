import Head from "next/head";
import Image from "next/image";
import { Navbar } from '../components/Navbar';

const Destination = () => {
    return ( 
        <>
            <Head>
                <title></title>
                <meta name="description" content="Description for Space Tourism" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main-wrapper h-screen relative bg-dest tablet:bg-dest-tablet desktop:bg-dest-desktop bg-no-repeat bg-cover">
                <Navbar />
                <section className="my-16 dest-pg-wrapper">
                    <div className="title-img-wrapper">
                        <div className="page-title flex justify-center items-center flex-col">
                            <h1 className="my-16 tracking-[3.7px] text-white text-center text-subhead1 font-barlow tracking-widest uppercase "><span className="opacity-50 font-black">01</span> Pick Your Destination</h1>
                            <Image src={"/assets/destination/image-moon.webp"} alt="Space Tourism Logo" height={170} width={170} />
                        </div>
                    </div>
                    <div className="data-wrapper">
                        
                    </div>
                </section>
            </div>
        </>
     );
}
 
export default Destination;