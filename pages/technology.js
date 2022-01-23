import Head from "next/head";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Navbar } from '../components/Navbar';
import data from '../data.json'

const Destination = () => {

    const handleClick = (index) => {
        console.log(index);
    }

    return (
        <>
            <Head>
                <title>Destination</title>
                <meta name="description" content="Description for Space Tourism" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main-wrapper h-screen overflow-hidden relative bg-tech tablet:bg-tech-tablet 
            desktop:bg-tech-desktop bg-no-repeat bg-cover">
                <Navbar />
                <section className="my-16 tech-pg-wrapper">
                    <h1 className="uppercase text-white font-barlow text-h4 text-center tracking-widest"><span className="opacity-25">03 </span>Space Launch 101</h1>
                    <div className="tech-container">
                        <div className="tech-img-container">
                            <Image
                                    src="/assets/technology/image-launch-vehicle-landscape.jpg"
                                    alt="" 
                                    width="768"
                                    height="310"
                                    loading="eager"
                                    layout="responsive"
                                    priority
                            />
                        </div>
                        <div className="tech-tab-container">
                        <Tab.Group as="div" className="text-white font-bellefair text-[24px] flex flex-col items-center"
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
                                <Tab.Panel>Content 1</Tab.Panel>
                                <Tab.Panel>Content 2</Tab.Panel>
                                <Tab.Panel>Content 3</Tab.Panel>
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