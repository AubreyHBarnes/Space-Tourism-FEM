import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }
    return (
      <>
          <nav className="flex items-center flex-wrap p-3">
            <div className="w-full flex justify-between" >
                <Link href='/'>
                <a className='inline-flex items-center p-2 mr-4 '>
                    <Image src={"/assets/shared/logo.svg"} alt="Space Tourism Logo" height={30} width={30} />
                </a>
                </Link>
                <button 
                    className='z-10 inline-flex p-3 hover:bg-green-600 rounded desktop:hidden text-white ml-auto hover:text-white outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
            </div>
            <div className={`${
                active ? '' : 'hidden'}
                w-2/3 h-screen frosted absolute top-0 right-0 desktop:inline-flex desktop:flex-grow desktop:w-auto`}
            >
                <div className='font-barlow tracking-[2.7px] mt-20 desktop:inline-flex desktop:flex-row desktop:ml-auto desktop:w-auto w-full desktop:items-center flex flex-col desktop:h-auto'>
                    <Link href='/'>
                    <a className='desktop:inline-flex desktop:w-auto w-full px-3 py-8 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                        <span className="font-bold">00</span> Home
                    </a>
                    </Link>
                    <Link href='/'>
                    <a className='desktop:inline-flex desktop:w-auto w-full px-3 py-8 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                        01 Destination
                    </a>
                    </Link>
                    <Link href='/'>
                    <a className='desktop:inline-flex desktop:w-auto w-full px-3 py-8 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                        02 Crew
                    </a>
                    </Link>
                    <Link href='/'>
                    <a className='desktop:inline-flex desktop:w-auto w-full px-3 py-8 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                        03 Technology
                    </a>
                    </Link>
                </div>
            </div>
          </nav>
      </>
    )
  }