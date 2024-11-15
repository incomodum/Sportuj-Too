"use client"

import { ReactNode } from "react"

import Navbar from "./navbar"

export default function TabsLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className='flex w-full min-h-full flex-grow flex-col bg-[#EDEDED] md:flex-col-reverse'>
            <div className='h-auto flex-grow w-full flex'>{children}</div>
            <Navbar />
        </div>
    )
}
