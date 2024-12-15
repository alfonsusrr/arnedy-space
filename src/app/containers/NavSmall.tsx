"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavSmall () {
    const [expand, setExpand] = useState(false)
    const toggleList = (e : any) => {
        setExpand((val) => {
            return !val
        })
    }
    return (
        <div className="sticky h-16 py-5 px-8 top-0 left-0 bg-transparent flex justify-items-center bg-gradient-to-r from-dark-1/90 via-dark-2/90 to-dark-1/90 z-10">
            <div>
                <Image
                    src="/logo.png"
                    width={28}
                    height={28}
                    alt={"arendy space logo"}
                />
            </div>
            <div className="ml-auto cursor-pointer text-2xl hover:text-dark-txt-2" onClick={(e) => toggleList(e)}>
                <i className={`bi ${!expand ? "bi-list" : "bi-arrows-angle-contract"} transition-all`}></i>
            </div>
            <div className={`absolute top-16 left-0 text-center w-full text-md font-light bg-gradient-to-r from-dark-1/90 via-dark-2/90 to-dark-1/90 ${!expand ? "opacity-0" : "opacity-100"} transition-all`}>
                <div className={`${expand ? "block" : "hidden"}`}>
                    <div className="ml-auto px-8 py-2">
                        <Link className="cursor-pointer hover:text-dark-txt-2" href="#about">About</Link>
                    </div>
                    <div className="px-8 py-2">
                        <Link className="cursor-pointer hover:text-dark-txt-2" href="#skills">Skills</Link>
                    </div>
                    <div className="px-8 py-2">
                        <Link className="cursor-pointer hover:text-dark-txt-2" href="#education">Education</Link>
                    </div>
                    <div className="px-8 py-2">
                        <Link className="cursor-pointer hover:text-dark-txt-2" href="#experiences">Experiences</Link>
                    </div>
                    <div className="px-8 py-2">
                        <Link className="cursor-pointer hover:text-dark-txt-2" href="#projects">Projects</Link>
                    </div>
                    <div className="px-8 py-2">
                        <Link className="cursor-pointer hover:text-dark-txt-2" href="#publications">Publications</Link>
                    </div>
                    <div className="px-8 py-2 my-4">
                    <Link className="p-3 max-w-max ml-auto mr-auto cursor-pointer border-2 border-dark-comp-1 rounded-lg text-dark-comp-1
                                    font-medium hover:bg-dark-comp-1 hover:bg-opacity-30" href="/resume" target="_blank">Resume</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}