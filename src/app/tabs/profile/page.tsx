import Link from "next/link"

import { LogOut } from "lucide-react"

export default function ProfilePage() {
    return (
        <div className='flex h-fit w-full flex-row items-center justify-between gap-6 p-6'>
            <div className='flex flex-row text-3xl font-medium'>
                <p className='text-[#252525]'>Vitaj&nbsp;</p>
                <p className='text-custom-green'>Lucas Ligas!</p>
            </div>
            <Link href='/' className='md:hidden'>
                <button className='rounded-[4px] p-2 text-red-500 transition-all hover:bg-red-500 hover:text-white'>
                    <LogOut />
                </button>
            </Link>
        </div>
    )
}
