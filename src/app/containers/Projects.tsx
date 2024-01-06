import ProjectCard from "@/components/ProjectCard";
import SectionBar from "@/components/SectionBar";

const projects = [{
    tags: ["Deep Learning"],
    title: "Transformers: A Crash Course on The Latest Natural Language Processing Model",
    links: [{
        type: "repo",
        title: "Code",
        url: "https://google.com"
    }, {
        type: "link",
        title: "transform.com",
        url: "https://google.com"
    }, {
        type: "video",
        title: "ICE 2023",
        url: "https://google.com"
    }],
    time: "2023",
    thumb: "https://miro.medium.com/v2/resize:fit:1400/0*rmrxCqjZqF_SxwPL.jpg"
}, {
    tags: ["Deep Learning", "NLP", "Soft Eng"],
    title: "Transformers: A Crash Course on The Latest Natural Language Processing",
    links: [{
        type: "repo",
        title: "Code",
        url: "https://google.com"
    }, {
        type: "document",
        title: "PDF",
        url: "https://google.com"
    }],
    time: "2022",
    thumb: "https://miro.medium.com/v2/resize:fit:1400/0*rmrxCqjZqF_SxwPL.jpg"
}]

export default function Projects () {
    return (
        <div>
            <div className="max-w-max ml-auto mr-auto" id="projects">
                <SectionBar heading="Projects"></SectionBar>
            </div>
            <div className="flex flex-row justify-center flex-wrap content-center items-stretch">
                {projects ? projects.map((p, i) => {
                    return (
                        <ProjectCard key={"project-" + i} {...p}/>
                    )
                }) : 
                <div className="text-dark-txt-3 my-4 italic text-lg text-center">
                        No entry yet
                </div>
                }
            </div>
        </div>
    )
}