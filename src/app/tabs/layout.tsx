import { ReactNode } from "react"

import { Viewport } from "next"

import Navbar from "./navbar"

export const viewport: Viewport = {
    themeColor: "#ffffff"
}

export default function TabsLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="flex min-h-full w-full flex-grow flex-col bg-white md:flex-col-reverse">
            <div className="flex h-auto w-full flex-grow bg-[#EDEDED]">{children}</div>
            <Navbar />
        </div>
    )
}
