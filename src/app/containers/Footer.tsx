import Link from "next/link";

export default function Footer() {
    return (
        <div className="content-center sticky -bottom-1 left-0 w-full bg-gradient-to-r from-dark-1/90 to-dark-2 mt-20 h-20 sm:h-14 border-t border-dark-txt-3 flex flex-wrap py-2 text-xl md:text-2xl text-dark-txt-3 px-2 md:px-6 lg:px-20">
            <div className="ml-auto mr-auto md:ml-0 md:mr-0 flex">
                <Link className="px-3 cursor-pointer hover:text-dark-txt-2" href="https://github.com/alfonsusrr"><i className="bi bi-github"></i></Link>
                <Link className="px-3 cursor-pointer hover:text-dark-txt-2" href="mailto:alfonsus737@gmail.com"><i className="bi bi-envelope-fill"></i></Link>
                <Link className="px-3 cursor-pointer hover:text-dark-txt-2" href="https://twitter.com/alfonsusrr"><i className="bi bi-twitter"></i></Link>
                <Link className="px-3 cursor-pointer hover:text-dark-txt-2" href="https://linkedin.com/in/alfonsusrr"><i className="bi bi-linkedin"></i></Link>
            </div>
            <div className="pt-2  text-sm ml-auto mr-auto md:mr-0">© All rights not reserved · Alfonsus Rendy 2024</div>
        </div>
    )
}