import type { ReactNode } from "react"

import type { Metadata } from "next"
import localFont from "next/font/local"
import Link from "next/link"

import { ThemeProvider } from "next-themes"

import "@/app/globals.css"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900"
})
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900"
})

export const metadata: Metadata = {
    title: "Športuj Too",
    description: "Rezervuj si športovisko rýchlo a jednoducho!"
}

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} h-full bg-background text-foreground antialiased`}>
                <ThemeProvider attribute='class'>{children}</ThemeProvider>
            </body>
        </html>
    )
}

export default Layout
