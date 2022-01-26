import Head from "next/head";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Navbar } from '../components/Navbar';
import data from '../data.json'

const Destination = () => {
    const [selection, setSelection] = useState(0);

    const handleClick = (index) => {
        setSelection(index);
    }

    return (
        <>
            <Head>
                <title>Destination</title>
                <meta name="description" content="Description for Space Tourism" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main-wrapper h-100 overflow-hidden relative bg-tech tablet:bg-tech-tablet 
            desktop:bg-tech-desktop bg-no-repeat bg-cover">
                <Navbar />
                <section className="my-16 tech-pg-wrapper">
                    <h1 className="uppercase text-white font-barlow text-h4 text-center tracking-widest"><span className="opacity-25">03 </span>Space Launch 101</h1>
                    <div className="tech-container">
                        <div className="tech-img-container relative aspect-[384/155]">
                            <Image
                                    src="/assets/technology/image-launch-vehicle-landscape.jpg"
                                    alt="" 
                                    layout="fill"
                                    objectFit="fill"
                                    priority
                            />
                        </div>
                        <div className="tech-tab-container px-8">
                        <Tab.Group as="div" className="my-8 text-white font-bellefair text-[24px] flex flex-col items-center"
                            onChange={(index) => {
                                handleClick(index)
                            }}   
                        >
                            <Tab.List className="my-8">
                                    <Tab as="span">
                                    {({ selected }) => (
                                        <button
                                        className={
                                            selected ? 'text-black p-2 mr-6 uppercase w-[65px] h-[65px] bg-white rounded-full' : 'text-white p-2 mr-6 uppercase w-[65px] h-[65px] border border-white/30 rounded-full'
                                        }
                                        >1</button>
                                    )}
                                    </Tab>
                                    <Tab as="span">
                                    {({ selected }) => (
                                        <button
                                        className={
                                            selected ? 'text-black p-2 mr-6 uppercase w-[65px] h-[65px] bg-white rounded-full' : 'text-white p-2 mr-6 uppercase w-[65px] h-[65px] border border-white/30 rounded-full'
                                        }
                                        >2</button>
                                    )}
                                    </Tab>
                                    <Tab as="span">
                                    {({ selected }) => (
                                        <button
                                        className={
                                            selected ? 'text-black p-2 mr-6 uppercase w-[65px] h-[65px] bg-white rounded-full' : 'text-white p-2 mr-6 uppercase w-[65px] h-[65px] border border-white/30 rounded-full'
                                        }
                                        >3</button>
                                    )}
                                    </Tab>
                                </Tab.List>
                            <Tab.Panels>
                                
                                <Tab.Panel className="text-white p-4">
                                    <p className="uppercase font-barlow text-[1.2rem] text-violet tracking-widest text-center desktop:text-left">The Terminology ...</p>
                                    <h3 className="uppercase font-bellefair tracking-wider text-center text-[2rem] desktop:text-left">{data.technology[selection].name}</h3>
                                    <p className="font-barlow text-[1.25rem] text-violet text-center leading-[1.75rem]">{data.technology[selection].description}</p>
                                </Tab.Panel>
                                <Tab.Panel className="text-white p-4">
                                    <p className="uppercase font-barlow text-[1.2rem] text-violet tracking-widest text-center desktop:text-left">The Terminology ...</p>
                                    <h3 className="uppercase font-bellefair tracking-wider text-center text-[2rem] desktop:text-left">{data.technology[selection].name}</h3>
                                    <p className="font-barlow text-[1.25rem] text-violet text-center leading-[1.75rem]">{data.technology[selection].description}</p>
                                </Tab.Panel>
                                <Tab.Panel className="text-white p-4">
                                    <p className="uppercase font-barlow text-[1.2rem] text-violet tracking-widest text-center desktop:text-left">The Terminology ...</p>
                                    <h3 className="uppercase font-bellefair tracking-wider text-center text-[2rem] desktop:text-left">{data.technology[selection].name}</h3>
                                    <p className="font-barlow text-[1.25rem] text-violet text-center leading-[1.75rem]">{data.technology[selection].description}</p>
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

export default Destination;