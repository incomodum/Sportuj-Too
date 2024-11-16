import Link from "next/link"
import { notFound } from "next/navigation"

import Places from "../data"
import { ArrowLeft, MapPin, StarIcon, TriangleAlert } from "lucide-react"

export default async function PlacePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const place = Places.find((v) => v.id.toString() === id)

    if (!place) return notFound()

    return (
        <div className="relative flex min-h-full w-full flex-grow flex-col items-center gap-3 bg-white py-6 md:bg-[#EDEDED]">
            <Link
                href="/tabs/map"
                className="fixed left-8 top-8 flex md:relative md:left-0 md:top-0 md:w-[90%] md:justify-start">
                <button className="flex size-[55px] items-center justify-center gap-2 rounded-full bg-white shadow-md md:w-[100px] md:rounded-[15px] md:px-4">
                    <ArrowLeft />
                    <p className="hidden font-medium md:block">Späť</p>
                </button>
            </Link>
            <div className="flex w-[90%] flex-col gap-3 md:mt-8 md:flex-row md:gap-6">
                <div className="aspect-[3/2] h-auto w-full overflow-clip rounded-[21px] md:max-w-[1/2]">
                    <img src={place.image} className="size-full" />
                </div>
                <div className="flex w-full flex-col">
                    <h1 className="w-[90%] text-start text-2xl font-medium">{place.name}</h1>
                    <div className="flex w-[90%] flex-row items-center justify-start gap-1 text-xl opacity-30">
                        <MapPin />
                        {place.address}
                    </div>
                    <div className="mt-8 flex w-[90%] flex-row justify-start gap-3">
                        <div className="flex size-[60px] flex-col items-center justify-center rounded-[10px] bg-[#FFE4E6] font-semibold text-[#F43F5E]">
                            <TriangleAlert />2
                        </div>
                        <div className="flex size-[60px] flex-col items-center justify-center rounded-[10px] bg-[#CCFBF1] font-semibold text-[#14B8A6]">
                            <StarIcon />
                            4.5/5
                        </div>
                        <div className="flex size-[60px] flex-col items-center justify-center rounded-[10px] bg-[#E6CCFB] font-semibold text-[#B514B8]">
                            <TriangleAlert />2
                        </div>
                    </div>
                    <p className="mt-4 text-xl font-medium">Popis</p>
                    <p className="opacity-40 md:mb-10">
                        Geyssayova, ponúka vonkajšie futbalové ihrisko s basketbalovými košmi
                    </p>
                    <div className="flex-grow" />
                    <Link
                        href={`/tabs/map/${id}/reserve`}
                        className="safe-bottom fixed bottom-8 w-[90%] md:relative md:bottom-0 md:mb-0">
                        <button className="safe-bottom hover:bg-custom-green/70' w-full rounded-[40px] bg-custom-green px-6 py-3 text-lg font-bold text-white">
                            Rezerovavať
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
