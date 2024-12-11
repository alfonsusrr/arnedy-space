import Image from "next/image";
import './Nav.css'
import Link from 'next/link'

export default function Nav() {
    return (
        <div className="sticky py-5 px-8 top-0 left-0 bg-transparent flex justify-items-center bg-gradient-to-r from-dark-1/80 via-dark-2/80 to-dark-1/80 z-10">
            <div>
                <Image
                    src="/logo.png"
                    width={48}
                    height={48}
                    alt={"arendy space logo"}
                />
            </div>
            <div className="flex-grow flex items-center text-lg xl:text-xl font-light">
                <div className="ml-auto px-8">
                    <div className="nav-item">About</div>
                </div>
                <div className="px-8 py-2">
                    <div className="nav-item">Profile</div>
                </div>
                <div className="px-8 py-2">
                    <div className="nav-item">Skills</div>
                </div>
                <div className="px-8 py-2">
                    <div className="nav-item">Experiences</div>
                </div>
                <div className="px-8 py-2">
                    <div className="nav-item">Projects</div>
                </div>
                <div className="px-8 py-2">
                    <div className="nav-item">Publications</div>
                </div>
                <div className="p-3 cursor-pointer border-2 border-dark-comp-1 rounded-lg text-dark-comp-1
                                font-medium hover:bg-dark-comp-1 hover:bg-opacity-30">Resume</div>
            </div>
        </div>
    )
}