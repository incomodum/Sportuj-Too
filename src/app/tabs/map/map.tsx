"use client"

import { useMemo, useState } from "react"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useWindowDimensions } from "@/lib/hooks"

import Places from "./data"
import Pin from "./pin"
import { FilterIcon, Search, StarHalfIcon, StarIcon, TriangleAlertIcon, XIcon } from "lucide-react"
import "maplibre-gl/dist/maplibre-gl.css"
import MapContainer, { Marker, Popup } from "react-map-gl/maplibre"

export default function Map() {
    const [popupInfo, setPopupInfo] = useState<(typeof Places)[number] | null>(null)
    const { width } = useWindowDimensions()
    const [search, setSearch] = useState("")

    const pins = useMemo(
        () =>
            Places.map((place, index) => (
                <Marker
                    key={`marker-${index}`}
                    longitude={place.longitude}
                    latitude={place.latitude}
                    anchor='bottom'
                    onClick={(e) => {
                        // If we let the click event propagates to the map, it will immediately close the popup
                        // with `closeOnClick: true`
                        e.originalEvent.stopPropagation()
                        setPopupInfo(place)
                    }}>
                    <Pin />
                </Marker>
            )),
        []
    )

    return (
        <div className='relative min-h-full w-full flex-grow'>
            <MapContainer
                initialViewState={{
                    latitude: 48.11702320286221,
                    longitude: 17.110735019557485,
                    zoom: 13
                }}
                minZoom={13}
                maxZoom={20}
                attributionControl={false}
                style={{ width: "100%", height: "100%", zIndex: 1 }}
                mapStyle='https://api.maptiler.com/maps/streets/style.json?key=MXHW1WQksbFLUTsILGLR'
                interactiveLayerIds={["data"]}>
                {pins}

                {popupInfo && (
                    <Popup
                        anchor='top'
                        style={{ opacity: 0 }}
                        closeButton={false}
                        longitude={Number(popupInfo.longitude)}
                        latitude={Number(popupInfo.latitude)}
                        onClose={() => setPopupInfo(null)}></Popup>
                )}
                {popupInfo && width < 768 && (
                    <div className='absolute bottom-0 left-0 w-full p-6 pb-8'>
                        <div className='flex min-h-20 w-full flex-col gap-4 rounded-[34px] bg-white p-5'>
                            <div className='flex flex-row gap-4'>
                                <img
                                    className='flex h-auto w-1/2 flex-grow rounded-[21px] object-cover'
                                    src={popupInfo.image}
                                />
                                <div className='flex w-1/2 flex-col'>
                                    <p className='text-2xl font-medium'>{popupInfo.name}</p>
                                    <p className='text-lg opacity-50'>{popupInfo.address}</p>
                                    <p className='text-lg opacity-70'>Futbal, Basketbal</p>
                                    <p className='text-lg font-bold'>5€-9€</p>
                                    <p className='flex flex-row items-center text-lg text-rose-500'>
                                        <TriangleAlertIcon />
                                        &nbsp; 2
                                    </p>
                                    <div className='flex flex-row text-yellow-400'>
                                        <StarIcon className='fill-yellow-400' />
                                        <StarIcon className='fill-yellow-400' />
                                        <StarIcon className='fill-yellow-400' />
                                        <StarIcon className='fill-yellow-400' />
                                        <div className='relative'>
                                            <StarHalfIcon className='absolute fill-yellow-400' />
                                            <StarIcon className='text-[#AAAAAA]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='w-full rounded-[33px] bg-custom-green px-7 py-3 text-xl text-white hover:bg-custom-green/70'>
                                Detaily
                            </button>
                        </div>
                    </div>
                )}
                {width >= 768 && (
                    <Dialog open={popupInfo !== null} onOpenChange={() => setPopupInfo(null)}>
                        <DialogContent className='flex flex-col rounded-[20px] bg-white'>
                            <div className='flex flex-row gap-4'>
                                <img
                                    className='flex h-auto w-3/5 flex-grow rounded-[21px] object-cover'
                                    src={popupInfo?.image}
                                />
                                <DialogHeader className='w-2/5'>
                                    <DialogTitle className='text-2xl'>{popupInfo?.name}</DialogTitle>
                                    <DialogDescription>
                                        {popupInfo?.address}
                                        <br />
                                        Futbal, Basketbal
                                    </DialogDescription>
                                    <div className='flex-grow' />
                                    <button className='w-full rounded-[33px] border-none bg-custom-green px-7 py-3 text-xl text-white hover:bg-custom-green/70'>
                                        Detaily
                                    </button>
                                </DialogHeader>
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
                <div className='absolute top-4 flex w-full flex-col items-end gap-2 px-2 md:flex-row'>
                    <div className='relative flex w-full flex-grow items-center md:max-w-[350px]'>
                        <Search className='absolute left-3 size-6 text-[#808080]' />
                        <input
                            placeholder='Vyhľadaj'
                            value={search}
                            onInput={(event) => setSearch?.((event.target as HTMLInputElement).value)}
                            className='flex flex-grow rounded-[30px] border bg-white p-3 pl-11 text-lg font-medium shadow-md transition placeholder:text-[#808080] focus:outline-none'
                        />
                        {search.length > 0 && (
                            <button
                                onClick={() => setSearch("")}
                                className='absolute right-3 flex size-[38px] items-center justify-center rounded-full bg-custom-green'>
                                <XIcon className='text-white' />
                            </button>
                        )}
                    </div>
                    <button className='flex size-[50px] items-center justify-center rounded-full bg-white text-custom-green shadow-md'>
                        <FilterIcon />
                    </button>
                </div>
            </MapContainer>
        </div>
    )
}
