import type { ReactNode } from "react"

import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"

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

export const viewport: Viewport = {
    viewportFit: "cover"
}

export const metadata: Metadata = {
    title: "Športuj Too",
    description: "Rezervuj si športovisko rýchlo a jednoducho!",
    manifest: "/site.webmanifest"
}

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang="en" style={{ height: "100%" }}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col bg-background text-black antialiased`}>
                <ThemeProvider attribute="class">{children}</ThemeProvider>
            </body>
        </html>
    )
}

export default Layout
