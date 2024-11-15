import Link from "next/link"

import Logo from "./logo"
import Incomodum from "./incomodum"

export default function LandingPage() {
    return (
        <>
            <div className='relative isolate flex h-[90vh] flex-col items-center justify-center gap-3 bg-custom-green text-white'>
                <img
                    draggable={false}
                    src='/landing.webp'
                    alt='landing page'
                    className='absolute -z-10 size-full select-none object-cover'
                />
                <Logo className='w-[80%] max-w-[500px] text-white' />
                <p className='text-center text-2xl font-medium opacity-50 md:text-3xl'>
                    Rezervuj si športovisko rýchlo a jednoducho!
                </p>
                <Link href='/auth/register'>
                    <button className='mt-8 rounded-[40px] bg-white px-6 py-4 text-xl font-bold text-custom-green transition-all hover:scale-105'>
                        Pokračovať do aplikácie
                    </button>
                </Link>
            </div>
            <div className='flex h-[90vh] w-full flex-col items-center gap-4 justify-center bg-white'>
                <h2 className='text-center text-3xl font-bold text-custom-green'>
                    Lorem ipsum dolor sit amet
                </h2>
                <div>
					TODO
				</div>
            </div>
            <footer className='flex min-h-[100px] w-full flex-row items-center bg-custom-green p-4 px-8 text-white'>
                <Logo className='w-[150px]' />
                &nbsp; by &nbsp;
				<Link href="https://incomodum.com" target="_blank"><Incomodum className="w-[150px] text-white" /></Link>
            </footer>
        </>
    )
}
