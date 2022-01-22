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
          <nav className="flex items-center flex-wrap pt-11">
            <div className="w-full absolute desktop:top-7 desktop:after:absolute after:top-1/2 after:border-b-2 after:w-1/3 after:border-white after:z-20 after:opacity-50" >
                <Link href='/'>
                <a className='inline-flex items-center p-4'>
                    <Image src={"/assets/shared/logo.svg"} alt="Space Tourism Logo" height={30} width={30} />
                </a>
                </Link>
                <button 
                    className='float-right z-10 inline-flex p-4 hover:bg-green-600 rounded tablet:hidden text-white ml-auto hover:text-white outline-none'
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
                z-10 w-2/3 h-screen tablet:h-auto frosted absolute desktop:top-6 top-0 right-0 tablet:inline-flex tablet:flex-grow `}
            >
                <div className='font-barlow tracking-[2.7px] mt-20 tablet:mt-0 tablet:inline-flex tablet:flex-row tablet:m-auto tablet:w-auto w-full tablet:items-center flex flex-col tablet:h-auto'>
                    <Link href='/'>
                    <a className='indent-10 tablet:indent-0 desktop:inline-flex desktop:w-auto w-full px-3 py-6 rounded text-white font-bold text-navtext items-center justify-center hover:bg-green-600 hover:text-white '>
                    <b className="tablet:hidden desktop:inline">00</b> Home
                    </a>
                    </Link>
                    <Link href='/destination'>
                    <a className='indent-10 tablet:indent-0 desktop:inline-flex desktop:w-auto w-full px-3 py-6 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                        <b className="tablet:hidden desktop:inline">01</b> Destination
                    </a>
                    </Link>
                    <Link href='/crew'>
                    <a className='indent-10 tablet:indent-0 desktop:inline-flex desktop:w-auto w-full px-3 py-6 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                    <b className="tablet:hidden desktop:inline">02</b> Crew
                    </a>
                    </Link>
                    <Link href='/'>
                    <a className='indent-10 tablet:indent-0 desktop:inline-flex desktop:w-auto w-full px-3 py-6 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                    <b className="tablet:hidden desktop:inline">03</b> Technology
                    </a>
                    </Link>
                </div>
            </div>
          </nav>
      </>
    )
  }