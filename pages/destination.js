import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react"
import { Navbar } from '../components/Navbar';

import data from '../data.json'

const Destination = () => {

    const [img, setImg] = useState(0);

    const handleClick = (index) => {
        setImg(index);
        
    }

    return ( 
        <>
            <Head>
                <title>Destination</title>
                <meta name="description" content="Description for Space Tourism" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main-wrapper h-100 overflow-hidden relative bg-dest tablet:bg-dest-tablet 
            desktop:bg-dest-desktop bg-no-repeat bg-cover">
                <Navbar />
                <section className="my-16 dest-pg-wrapper">
                    <div className="title-img-wrapper">
                        <div className=" page-title">
                            <h1 className="my-16 tracking-[3.7px] text-white text-center text-subhead1 font-barlow 
                            tracking-widest uppercase tablet:text-left tablet:pl-12"><span className="opacity-50 font-black">01</span> Pick Your Destination</h1>
                        </div>
                        <div className="px-[22.5%] tablet:px-[27%]">
                            <Image
                                src={data.destinations[img].images.webp}
                                alt="Moon" 
                                width={445} 
                                height={445} 
                                loading="eager"
                                layout="responsive"
                                priority
                            />
                        </div>
                    </div>
                    <div className="data-wrapper">
                        <div className="tabs">
                            
                            <Tab.Group 
                                onChange={(index) => {
                                    handleClick(index)
                                }}
                            >
                                <Tab.List>
                                    <Tab className="text-white p-8 uppercase">
                                    {({ selected }) => (
                                        <p
                                        className={
                                            selected ? 'border-b-4 pb-2' : 'border-b-0'
                                        }
                                        >
                                        Moon
                                        </p>
                                    )}
                                    </Tab>
                                    <Tab className="text-white p-8">
                                    {({ selected }) => (
                                        <p
                                        className={
                                            selected ? 'border-b-4 pb-2' : 'border-b-0'
                                        }
                                        >
                                        Mars
                                        </p>
                                    )}
                                    </Tab>
                                    <Tab className="text-white p-8">
                                    {({ selected }) => (
                                        <p
                                        className={
                                            selected ? 'border-b-4 pb-2' : 'border-b-0'
                                        }
                                        >
                                        Europa
                                        </p>
                                    )}
                                    </Tab>
                                    <Tab className="text-white p-8">
                                    {({ selected }) => (
                                        <p
                                        className={
                                            selected ? 'border-b-4 pb-2' : 'border-b-0'
                                        }
                                        >
                                        Titan
                                        </p>
                                    )}
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels>
                                    <Tab.Panel className="text-white">Content 1</Tab.Panel>
                                    <Tab.Panel className="text-white">Content 2</Tab.Panel>
                                    <Tab.Panel className="text-white">Content 3</Tab.Panel>
                                    <Tab.Panel className="text-white">Content 4</Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                </section>
            </div>
        </>
     );
}
 
export default Destination;