import SectionBar from "@/components/SectionBar";
import SkillCard from "@/components/SkillCard";

const skills = [{
    icon: "bi-braces-asterisk",
    title: "Programming Languages",
    content: "C++, C, Java, Python, Javascript, HTML, CSS, SQL, MATLAB, Stata, R, Solidity"
}, {
    icon: "bi-triangle",
    title: "Project Management",
    content: "Git & Github, Kanban, Team Management, Presentation and Communication skills, Data-Driven decision making" 
}, {
    icon: "bi-code-square",
    title: "Software Development",
    content: "DevOps, Agile, Code Documentation, Containerization, Cloud Based Development, ML Pipelines"
}, {
    icon: "bi-columns-gap",
    title: "Interests",
    content: "AI, Computer Vision, NLP, Machine Learning, Generative AI, Multi-Modal Learning, Blockchain, Software Engineering, Web Development, Data Analytics, Quantum Computing"
}, {
    icon: "bi-stack",
    title: "Development Frameworks",
    content: "Linux, Docker, React, Django, Flask, NodeJS, NextJS, MongoDB, PostgreSQL, Bootstrap, TailwindCSS, Pandas, Numpy, Matplotlib, Pytorch, Tensorflow"
}, {
    icon: "bi-laptop",
    title: "Software Skills",
    content: "Microsoft Office, Anaconda, Jupyter Notebook, MATLAB, Stata, R, Adobe Illustrator, Adobe Photoshop, Adobe InDesign, Adobe Premiere Pro. Figma"
}]

export default function Skills() {
    return(
        <div className="px-12 lg:px-12 xl:px-36 2xl:px-72 py-10 w-full" id="skills">
            <div className="max-w-max ml-auto mr-auto">
                <SectionBar heading="Competencies"></SectionBar>
            </div>
            <div className="flex justify-center flex-wrap w-full">
                {skills.map((s, i) => {
                    return (
                        <SkillCard  key={"skill-" + i} {...s}/>
                    )
                })}
            </div>
        </div>
    )
}