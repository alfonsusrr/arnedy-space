import SectionBar from "@/components/SectionBar";
import Image from "next/image";

const educations = [{
    name: "The Chinese University of Hong Kong, Shenzhen",
    time: "July 2021 - May 2025",
    degree: "Bachelor of Engineering, Major in Computer Science, Minor in Finance",
    content: "I completed my Bachelor’s degree in Computer Science. During my studies, I gained a strong foundation in computer science concepts such as algorithms, data structures, and computer organization. I also developed my skills in programming languages such as Java and Python and worked on various projects that allowed me to apply my knowledge in practical settings. My education has equipped me with the skills and knowledge to excel in the field of computer science.",
    logo: "/cuhksz.png"
}, {
    name: "Canisius College High School",
    time: "July 2015 - May 2021",
    degree: "High School Diploma, Natural Science Stream, graduated with Summa Cum Laude",
    content: "During my high school education, I developed a strong interest in subjects such as Math, Social Science and Computer. I also enjoyed participating in multimedia club learning basics of graphic design. My high school education provided me with a well-rounded foundation and helped me discover my passions and interests.",
    logo: "/cc.png"
}]

export default function Education() {
    return (
        <div className="w-full" id="education">
            <div className="max-w-max ml-auto mr-auto">
                <SectionBar heading="Education"/>
            </div>
            <div className="-my-2 flex w-full select-none">
                <div className="relative border-l-2 border-dark-3 py-8 w-[calc(100%-40px)] left-[40px] lg:w-[calc(100%-150px)] lg:left-[150px] xl:w-3/4 2xl:w-1/2 xl:left-1/4 2xl:left-1/2">
                    {educations.map((e, i) => {
                        return (
                            <div key={"edu-" + i} className="flex items-start w-full pr-8 flex-wrap">
                                <div className="w-2 h-16 bg-dark-txt-2 rounded-lg -ml-1 mt-4">
                                </div>
                                <div className="ml-10 w-24 py-4 h-24 bg-white rounded-xl mt-4">
                                    <Image 
                                        src={e.logo}
                                        alt={e.name + "logo"}
                                        width={60}
                                        height={60}
                                        className="ml-auto mr-auto"
                                        />
                                </div>
                                <div className="mx-10 w-[750px]  mt-4">
                                    <div className="mb-3 text-dark-txt-3 text-lg">{e.time}</div>
                                    <div className="text-3xl text-dark-txt-1 font-bold">{e.name}</div>
                                    <div className="text-lg font-light mb-6">{e.degree}</div>
                                    <div className="text-dark-txt-2 mb-12 font-light">{e.content}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}