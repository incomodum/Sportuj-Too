"use client"

import Link from "next/link"

import { DialogClose } from "@radix-ui/react-dialog"

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./dialog"
import { LogOut, ShareIcon, Trash2Icon } from "lucide-react"
import qrcode from "qrcode"
import QRCode from "react-qr-code"

export default function ProfilePage() {
    const data =
        "338e34793491f20bf13b90f3fdb7b4c18da6ff8cc434c6c067a74ad5afc48fd21a70eb1c1d0da112d34f1ba97d22f6f61312e8b2"

    const share = async () => {
        if (typeof navigator.share === "undefined" || !navigator?.canShare()) {
            await navigator.permissions.query({ name: "clipboard-write" as PermissionName })
            qrcode.toCanvas(data, (error, canvas) => {
                if (error) return
                canvas.toBlob((data) => {
                    if (!data) return
                    navigator.clipboard.write([new ClipboardItem({ "image/png": data })])
                })
            })
        } else {
            navigator.share()
        }
    }

    return (
        <div className="flex w-full flex-col items-center">
            <div className="flex h-fit w-full flex-row items-center justify-between gap-6 p-6">
                <div className="flex flex-row text-3xl font-medium">
                    <p className="text-[#252525]">Vitaj&nbsp;</p>
                    <p className="text-custom-green">Lucas Ligas!</p>
                </div>
                <Link href="/" className="md:hidden">
                    <button className="rounded-[4px] p-2 text-red-500 transition-all hover:bg-red-500 hover:text-white">
                        <LogOut />
                    </button>
                </Link>
            </div>
            <div className="flex w-[90%] flex-row rounded-[15px] bg-[#E1E1E1] p-1 md:hidden">
                <button className="flex-grow rounded-[15px] bg-white py-1 text-center text-custom-green">
                    Rezervácie
                </button>
                <button disabled className="flex-grow rounded-[15px] py-1 text-center text-black/20">
                    Príspevky
                </button>
            </div>
            <div className="mt-5 flex w-full flex-col gap-4 px-6">
                <p className="hidden w-full text-2xl font-medium text-custom-green md:block">Rezervácie</p>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="flex min-h-[250px] w-full flex-row overflow-clip rounded-[21px] bg-white md:max-w-[500px]">
                            <div className="h-full w-[40%] bg-slate-300">
                                <img src="/gessayova.jpg" className="size-full bg-slate-300 object-cover" />
                            </div>
                            <div className="flex h-full flex-grow flex-col p-4">
                                <p className="text-2xl font-medium">Gessayova</p>
                                <p className="text-[#252525] opacity-20">Basketbal</p>
                                <div className="flex-grow" />
                                <p className="text-xl font-bold text-custom-green">5€</p>
                                <p className="text-xl font-light text-[#252525]">15.11. 2024</p>
                                <p className="text-xl font-bold text-[#252525]">18:30 - 19:00</p>
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="flex w-full flex-col border-none bg-transparent shadow-none">
                        <DialogTitle hidden>QR Code</DialogTitle>
                        <div className="flex aspect-[4/1] w-full flex-row justify-center overflow-clip rounded-[15px] bg-white md:hidden">
                            <video autoPlay muted loop src="/nfc.mp4" className="" controls={false} />
                        </div>
                        <div className="mt-3 aspect-square h-auto w-full rounded-[15px] bg-white p-6">
                            <QRCode className="size-full" value={data} />
                        </div>

                        <div className="flex flex-row gap-3">
                            <button
                                onClick={share}
                                className="flex-grow flex flex-row items-center gap-3 rounded-[15px] bg-custom-green p-4 text-lg font-medium text-white hover:bg-custom-green/70 focus:outline-none">
                                <ShareIcon /> Zdielať
                            </button>
                            <DialogClose asChild>
                                <button className="flex-grow flex flex-row items-center gap-3 rounded-[15px] bg-red-500 p-4 text-lg font-medium text-white hover:bg-red-400">
                                    <Trash2Icon />
									Stornovať
                                </button>
                            </DialogClose>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="mt-8 hidden w-full flex-col gap-4 px-6 md:flex">
                <p className="w-full text-2xl font-medium text-custom-green">Príspevky</p>
                <p className="opacity-50">Zatial nemáte žiadne komunitné príspevky</p>
            </div>
        </div>
    )
}
