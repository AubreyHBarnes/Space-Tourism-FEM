import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react"
import { Navbar } from '../components/Navbar';

import data from '../data.json';

const Crew = () => {

    const [selection, setSelection] = useState(0);

    const handleClick = (index) => {
        setSelection(index);
        
    }

    return (
        <>
            <Head>
                <title>Meet Your Crew</title>
                <meta name="description" content="Description for Space Tourism" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main-wrapper h-full overflow-hidden relative bg-crew tablet:bg-crew-tablet 
            desktop:bg-crew-desktop bg-no-repeat bg-cover">
                <Navbar />
                <section className="my-16 crew-pg-wrapper px-8 desktop:grid desktop:grid-cols-2">
                    <div className=" page-title">
                        <h1 className="my-16 tracking-[3.7px] text-white text-center text-subhead1 font-barlow 
                        tracking-widest uppercase tablet:text-left tablet:pl-12"><span className="opacity-50 font-black">02</span> Meet Your Crew</h1>
                    </div>
                    <div className="crew-container flex flex-col tablet:flex-col-reverse">
                        <div className="crew-img-container px-[22.5%] tablet:px-[27%] desktop:px-[15%]">
                            <Image
                                    src={data.crew[selection].images.webp}
                                    alt="Moon" 
                                    width={433} 
                                    height={640} 
                                    loading="eager"
                                    layout="responsive"
                                    priority
                            />
                        </div>
                        <div className="slider-container">
                            <Tab.Group 
                            as="div"
                            className="flex flex-col tablet:flex-col-reverse justify-center items-center"
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
                                        <h4 className="uppercase font-bellefair text-[2rem] text-center"><span className="text-white/50 text-[1.5rem] block">{data.crew[selection].role}</span>{data.crew[selection].name}</h4>
                                        <p className="font-barlow text-violet text-center text-[1.25rem]">{data.crew[selection].bio}</p>
                                    </Tab.Panel>
                                    <Tab.Panel className="text-white p-4">
                                        <h4 className="uppercase font-bellefair text-[2rem] text-center"><span className="text-white/50 text-[1.5rem] block">{data.crew[selection].role}</span>{data.crew[selection].name}</h4>
                                        <p className="font-barlow text-violet text-center text-[1.25rem]">{data.crew[selection].bio}</p>
                                    </Tab.Panel>
                                    <Tab.Panel className="text-white p-4">
                                        <h4 className="uppercase font-bellefair text-[2rem] text-center"><span className="text-white/50 text-[1.5rem] block">{data.crew[selection].role}</span>{data.crew[selection].name}</h4>
                                        <p className="font-barlow text-violet text-center text-[1.25rem]">{data.crew[selection].bio}</p>
                                    </Tab.Panel>
                                    <Tab.Panel className="text-white p-4">
                                        <h4 className="uppercase font-bellefair text-[2rem] text-center"><span className="text-white/50 text-[1.5rem] block">{data.crew[selection].role}</span>{data.crew[selection].name}</h4>
                                        <p className="font-barlow text-violet text-center text-[1.25rem]">{data.crew[selection].bio}</p>
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