"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import Logo from "../logo"
import { LogOut, MapIcon, MessageCircle, User } from "lucide-react"

export default function Navbar() {
    const pathname = usePathname()

    function isActive(path: string) {
        return pathname.startsWith(path)
    }

    return (
        <div className='safe-bottom flex h-[75px] w-full flex-row items-center gap-6 bg-white px-3'>
            <Link href='/tabs/map'>
                <Logo className='hidden w-[140px] text-custom-green md:block' />
            </Link>
            <div className='flex w-full flex-grow flex-row justify-evenly gap-3 md:w-fit md:justify-start'>
                <Link
                    href='/tabs/community'
                    className={cn("p-4 text-[#B2B2B2]", isActive("/tabs/community") && "text-custom-green")}>
                    <MessageCircle size={32} className='md:hidden' />
                    <p className='hidden font-medium md:block'>Komunita</p>
                </Link>
                <Link
                    href='/tabs/map'
                    className={cn("p-4 text-[#B2B2B2]", isActive("/tabs/map") && "text-custom-green")}>
                    <MapIcon className='md:hidden' size={32} />
                    <p className='hidden font-medium md:block'>Mapa</p>
                </Link>
                <Link
                    href='/tabs/profile'
                    className={cn("p-4 text-[#B2B2B2]", isActive("/tabs/profile") && "text-custom-green")}>
                    <User className='md:hidden' size={32} />
                    <p className='hidden font-medium md:block'>Profil</p>
                </Link>
            </div>
            <Link href='/' className='hidden md:block'>
                <button className='rounded-[4px] p-2 text-red-500 transition-all hover:bg-red-500 hover:text-white'>
                    <LogOut />
                </button>
            </Link>
        </div>
    )
}
