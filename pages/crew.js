import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react"
import { Navbar } from '../components/Navbar';

import data from '../data.json';

const Crew = () => {

    const [selection, setSelection] = useState(0);

    let imageSizes = [
        [514, 700],
        [433, 640],
        [549, 645],
        [575, 602]
    ]

    const handleClick = (index) => {
        setSelection(index);
        
    }

    return (
        <>
            <Head>
                <title>Meet Your Crew</title>
                <meta name="description" content="Description for Space Tourism" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preload" as="image" href="/assets/crew/image-douglas-hurley.png"></link>
                <link rel="preload" as="image" href="/assets/crew/image-mark-shuttleworth.png"></link>
                <link rel="preload" as="image" href="/assets/crew/image-victor-glover.png"></link>
                <link rel="preload" as="image" href="/assets/crew/image-anousheh-ansari.png"></link>
            </Head>
            <div className="main-wrapper h-full desktop:h-screen overflow-hidden relative bg-crew tablet:bg-crew-tablet 
            desktop:bg-crew-desktop bg-no-repeat bg-cover">
                <Navbar />
                <section className="mt-16 crew-pg-wrapper px-8">
                    <div className=" page-title">
                        <h1 className="my-16 tracking-[3.7px] text-white text-center text-subhead1 font-barlow 
                        tracking-widest uppercase tablet:text-left tablet:pl-12"><span className="opacity-50 font-black">02</span> Meet Your Crew</h1>
                    </div>
                    <div className="crew-container grid grid-rows-2 tablet:grid-rows-[200px_minmax(600px,_1fr)_0px] desktop:grid-cols-2 desktop:grid-rows-1">
                        <div className="crew-img-container self-center tablet:self-end tablet:order-2 px-[22.5%] tablet:px-[27%] desktop:px-[15%]">
                            <Image
                                    src={data.crew[selection].images.png}
                                    alt="Moon" 
                                    width={imageSizes[selection][0]} 
                                    height={imageSizes[selection][1]} 
                                    priority

                            />
                        </div>
                        <div className="crew-tab-container tablet:order-1">
                            <Tab.Group 
                            as="div"
                            className="flex flex-col tablet:flex-col-reverse items-center desktop:items-left"
                             onChange={(index) => {
                                        handleClick(index)
                                    }}>
                                <Tab.List className="my-8">
                                    <Tab as="span">
                                    {({ selected }) => (
                                        <button
                                        className={
                                            selected ? 'text-white p-2 mr-6 uppercase w-50px h-50px bg-white rounded-full' : 'text-white p-2 mr-6 uppercase w-50px h-50px bg-white/30 rounded-full'
                                        }
                                        >
                                        </button>
                                    )}
                                    </Tab>
                                    <Tab as="span">
                                    {({ selected }) => (
                                        <button
                                        className={
                                            selected ? 'text-white p-2 mr-6 uppercase w-50px h-50px bg-white rounded-full' : 'text-white p-2 mr-6 uppercase w-50px h-50px bg-white/30 rounded-full'
                                        }
                                        >
                                        </button>
                                    )}
                                    </Tab>
                                    <Tab as="span">
                                    {({ selected }) => (
                                        <button
                                        className={
                                            selected ? 'text-white p-2 mr-6 uppercase w-50px h-50px bg-white rounded-full' : 'text-white p-2 mr-6 uppercase w-50px h-50px bg-white/30 rounded-full'
                                        }
                                        >
                                        </button>
                                    )}
                                    </Tab>
                                    <Tab as="span">
                                    {({ selected }) => (
                                        <button
                                        className={
                                            selected ? 'text-white p-2 mr-6 uppercase w-50px h-50px bg-white rounded-full' : 'text-white p-2 mr-6 uppercase w-50px h-50px bg-white/30 rounded-full'
                                        }
                                        >
                                        </button>
                                    )}
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels>
                                    <Tab.Panel className="text-white p-4">
                                        <h4 className="uppercase font-bellefair text-[2rem] text-center desktop:text-left"><span className="text-white/50 text-[1.5rem] block">{data.crew[selection].role}</span>{data.crew[selection].name}</h4>
                                        <p className="font-barlow text-violet text-center text-[1.25rem] desktop:text-left">{data.crew[selection].bio}</p>
                                    </Tab.Panel>
                                    <Tab.Panel className="text-white p-4">
                                        <h4 className="uppercase font-bellefair text-[2rem] text-center desktop:text-left"><span className="text-white/50 text-[1.5rem] block">{data.crew[selection].role}</span>{data.crew[selection].name}</h4>
                                        <p className="font-barlow text-violet text-center text-[1.25rem] desktop:text-left">{data.crew[selection].bio}</p>
                                    </Tab.Panel>
                                    <Tab.Panel className="text-white p-4">
                                        <h4 className="uppercase font-bellefair text-[2rem] text-center desktop:text-left"><span className="text-white/50 text-[1.5rem] block">{data.crew[selection].role}</span>{data.crew[selection].name}</h4>
                                        <p className="font-barlow text-violet text-center text-[1.25rem] desktop:text-left">{data.crew[selection].bio}</p>
                                    </Tab.Panel>
                                    <Tab.Panel className="text-white p-4">
                                        <h4 className="uppercase font-bellefair text-[2rem] text-center desktop:text-left"><span className="text-white/50 text-[1.5rem] block">{data.crew[selection].role}</span>{data.crew[selection].name}</h4>
                                        <p className="font-barlow text-violet text-center text-[1.25rem] desktop:text-left">{data.crew[selection].bio}</p>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                </section>
                

                

            </div>
        </>
    );
}

export default Crew;