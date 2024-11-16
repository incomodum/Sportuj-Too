import Link from "next/link"
import { notFound } from "next/navigation"

import Places from "../../data"
import { ArrowLeft } from "lucide-react"

export default async function PlacePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const place = Places.find((v) => v.id.toString() === id)

    if (!place) return notFound()

    return (
        <div className="relative flex min-h-full w-full flex-grow flex-col items-center gap-3 py-6">
            <Link
                href={`/tabs/map/${id}`}
                className="fixed left-8 top-8 flex md:relative md:left-0 md:top-0 md:w-[90%] md:justify-start">
                <button className="flex size-[55px] items-center justify-center gap-2 rounded-full bg-white shadow-md md:w-[100px] md:rounded-[15px] md:px-4">
                    <ArrowLeft />
                    <p className="hidden font-medium md:block">Späť</p>
                </button>
            </Link>
        </div>
    )
}
