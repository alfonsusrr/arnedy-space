import ExperienceCard from "@/components/ExperienceCard";
import SectionBar from "@/components/SectionBar";
import Link from "next/link";

const experiences = [{
    time: "June 2024 - Present",
    name: "Arxero Technologies",
    role: ["Co-Founder", "Software and AI Engineer"],
    desc: "Developing one-stop AI-powered solutions for enterprise including LLM-powered customer service and CRM.",
    tag: ["React", "NodeJS", "LLM", "Data-Driven Solutions"],
    logo: "/arxero.jpg"
}, {
    time: "Aug 2022 - Nov 2023",
    name: "HomeTwo",
    role: ["Technical Founder", "Full-stack Developer"],
    desc: "Developed web application both for user and administration dashboard using Next.JS and deployed it to production within a month. Lead a team of 4 in developing MVP product and managed the development process",
    tag: ["React", "NextJS", "NodeJS", "DevOps", "Leadership"],
    logo: "/hometwo.jpg"
}, {
    time: "Sep 2022",
    name: "All-In Eduspace",
    role: ["Bootcamp Mentor"],
    desc: "Taught 30+ high school students the fundamentals of data science, including data exploration, data cleaning, and machine learning in Python. Designed the syllabus, code template, and worksheet for students, which increase student participation",
    tag: ["Machine Learning", "Python", "Teaching"],
    logo: "/allineduspace.jpg"
}, {
    time: "Dec 2018 - July 2019",
    name: "Indokultur Digital",
    role: ["Graphic Designer"],
    desc: "Created ideas for product branding and planned digital campaigns for 3 companies.Increased social media  engagement by through digital marketing campaigns",
    tag: ["Adobe Photoshop", "Adobe Illustrator", "Graphic Design"],
    logo: "/allineduspace.jpg"
}]

export default function Experiences() {
    return (
        <div className="relative" id="experiences">
            <div className="max-w-max ml-auto mr-auto">
                <SectionBar heading="Experiences"/>
            </div>
            <div className="mt-6 flex flex-wrap mx-0 lg:mx-12 xl:mx-32">
                <div className="w-0 xl:w-1/3 2xl:w-1/2 hidden xl:block">
                    <div className="mr-auto ml-auto max-w-[50%]">
                        <div className="text-dark-txt-2 text-4xl font-bold mt-[75px] 2xl:mt-[150px]">
                            This timeline summarizes my 
                            <span className="px-2 bg-gradient-to-r from-dark-grad-2 to-dark-grad-3 bg-no-repeat"
                                  style={{
                                    backgroundSize: "90% 10px",
                                    backgroundPosition: "bottom left",
                                  }}>
                                professional
                            </span> journey
                        </div>

                        <Link href="/resume.pdf" className="arrow-btn text-dark-comp-1/80 mt-10 text-xl font-extralight cursor-pointer hover:text-dark-comp-1">
                            view my resume <i className="bi bi-arrow-up-right text-sm"/>
                        </Link>
                    </div>
                </div>
                <div className="px-12 md:px-24 lg:px-4 xl:w-2/3 2xl:w-1/2 xl:overflow-y-scroll xl:max-h-[450px]">
                    {experiences.map((exp, i) => {
                        return (
                            <div key={`exp-${i}`}><ExperienceCard {...exp}/></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}