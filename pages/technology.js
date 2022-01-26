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
                <section className="my-16 tech-pg-wrapper max-w-[1024px] desktop:max-w-full">
                    <h1 className="uppercase text-white font-barlow text-h4 text-center tracking-widest"><span className="opacity-25">03 </span>Space Launch 101</h1>
                    <div className="tech-container max-w-[768px] desktop:max-w-full m-auto desktop:flex desktop:flex-row-reverse desktop:justify-center desktop:items-center">
                        <div className="tech-img-container  m-auto relative aspect-[384/155] desktop:hidden">
                            <Image
                                    src={data.technology[selection].images.landscape}
                                    alt="" 
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                            />
                        </div>
                        <div className="desktop:basis-1/2 desktop:max-w-[515px] tech-img-container relative aspect-[515/527] hidden desktop:block">
                            <Image
                                    src={data.technology[selection].images.portrait}
                                    alt="" 
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                            />
                        </div>

                        <div className="desktop:h-100 desktop:basis-1/2 tech-tab-container px-8">
                        <Tab.Group as="div" className="my-8 desktop:h-100 text-white font-bellefair text-[24px] flex flex-col desktop:flex-row items-center"
                            onChange={(index) => {
                                handleClick(index)
                            }}   
                        >
                            <Tab.List className="my-8 desktop:h-100 desktop:flex desktop:flex-col desktop:justify-center">
                                    <Tab as="span" className="my-4">
                                    {({ selected }) => (
                                        <button
                                        className={
                                            selected ? 'text-black p-2 mr-6 uppercase w-[65px] h-[65px] bg-white rounded-full' : 'text-white p-2 mr-6 uppercase w-[65px] h-[65px] border border-white/30 rounded-full'
                                        }
                                        >1</button>
                                    )}
                                    </Tab>
                                    <Tab as="span" className="my-4">
                                    {({ selected }) => (
                                        <button
                                        className={
                                            selected ? 'text-black p-2 mr-6 uppercase w-[65px] h-[65px] bg-white rounded-full' : 'text-white p-2 mr-6 uppercase w-[65px] h-[65px] border border-white/30 rounded-full'
                                        }
                                        >2</button>
                                    )}
                                    </Tab>
                                    <Tab as="span" className="my-4">
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