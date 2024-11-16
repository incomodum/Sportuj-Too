import { Viewport } from "next"
import Link from "next/link"

import Incomodum from "./incomodum"
import Logo from "./logo"

export const viewport: Viewport = {
    themeColor: "#39B24B"
}

export default function LandingPage() {
    return (
        <>
            <main className="relative isolate flex h-[90vh] flex-col items-center justify-center gap-3 bg-custom-green text-white">
                <img
                    draggable={false}
                    src="/landing.webp"
                    alt="landing page"
                    className="absolute -z-10 size-full select-none object-cover"
                />
                <Logo className="w-[80%] max-w-[500px] text-white" />
                <p className="text-center text-2xl font-medium opacity-50 md:text-3xl">
                    Rezervuj si športovisko rýchlo a jednoducho!
                </p>
                <Link href="/auth/login">
                    <button className="mt-8 rounded-[40px] bg-white px-6 py-4 text-xl font-bold text-custom-green transition-all hover:scale-105">
                        Pokračovať do aplikácie
                    </button>
                </Link>
            </main>
            <section className="flex h-[90vh] w-full flex-col items-center justify-center gap-4 bg-white">
                <h2 className="px-2 text-center text-3xl font-bold text-custom-green">Lorem ipsum dolor sit amet</h2>
                <div>TODO</div>
            </section>
            <footer className="flex min-h-[100px] w-full flex-row items-center bg-custom-green p-4 px-8 text-white">
                <Logo className="w-[120px]" />
                &nbsp; by &nbsp;
                <Link href="https://incomodum.com" target="_blank">
                    <Incomodum className="w-[120px] text-white" />
                </Link>
            </footer>
        </>
    )
}
