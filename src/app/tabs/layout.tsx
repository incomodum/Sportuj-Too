"use client"

import { ReactNode } from "react"

import Navbar from "./navbar"

export default function TabsLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className='flex size-full flex-col bg-[#EDEDED] md:flex-col-reverse'>
            <div className='h-[calc(100vh-75px)] w-full'>{children}</div>
            <Navbar />
        </div>
    )
}
