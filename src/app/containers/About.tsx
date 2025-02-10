"use client"

import Image from "next/image";
import Link from 'next/link'
import './About.css'
import { Lekton } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const lekton = Lekton({ subsets: ['latin'], weight: "700"})

const handleMouseMove = (e : any) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let dx = (x - rect.width / 2) / (rect.width / 2);
    let dy = (y - rect.height / 2) / (rect.height / 2);

    e.target.style.transform = `perspective(500px) rotateY(${dx * 20}deg) rotateX(${-dy * 20}deg)`;
}

const handleMouseLeave = (e : any) => {
    e.target.style.transform = "";
}

export default function About() {
    return (
        <div className="flex flex-wrap">
            <div className="ml-auto mr-auto xl:max-w-[25%] order-first xl:order-last">
                <div className="rounded-full h-80 w-80 relative 
                                bg-gradient-conic from-dark-1 to-dark-grad-2"
                >
                    <Image
                        className="rounded-full p-4"
                        src='/photo3.jpg'
                        fill={true}
                        alt="profile picture"
                        onMouseMove={e => handleMouseMove(e)}
                        onMouseLeave={e => handleMouseLeave(e)}
                    />
                </div>
            </div>
            <div className="mt-12 xl:mt-0 mx-12 md:ml-auto md:mr-auto xl:mr-0 xl:ml-0 xl:pr-8 2xl:pr-48 relative xl:max-w-[60%] 2xl:max-w-[75%]">
                <div className={"text-dark-comp-1 text-xl " + lekton.className}>
                    Hi, There! I'm
                </div>
                <div className="pt-4 text-6xl font-bold text-dark-txt-2">
                    Alfonsus Rodriques Rendy
                </div>
                <div className="pt-8 xl:pr-12 2xl:pr-36 text-lg font-light text-dark-txt-1">
                    I am a final year student majoring in <span className="font-medium text-dark-txt-2">computer science</span> with a specification in <span className="font-medium text-dark-txt-2">artificial intelligence</span> and minoring in <span className="font-medium text-dark-txt-2">Finance</span> @CUHK-SZ. 
                    I'm a full-stack developer focusing in <span className="font-medium text-dark-txt-2">web development</span>. 
                    Currently, I'm focused on researching <span className="font-medium text-dark-txt-2">artificial intelligence</span> and its application. 
                    My interest lies in the intersection of multi-modal learning, foundation models, and decision-making model.
                </div>
                <Link href="/blog">
                <div className="px-4 py-3 mt-7 border-2 border-dark-comp-1 rounded-full w-44 text-dark-comp-1 text-lg cursor-pointer hover:bg-dark-comp-1 hover:bg-opacity-30">
                    visit my blog 
                    <span className="ml-2 text-md">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
                    </span>
                </div>
                </Link>
            </div>
        </div>
    )
}