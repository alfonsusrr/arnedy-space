import ProjectCard from "@/components/ProjectCard";
import PubCard from "@/components/PubCard";
import SectionBar from "@/components/SectionBar";

// const pubTemplate = [{
//     title: "Heuristics-Based Induction of LLM for Automated Fault Localization",
//     author: ["Alfonsus Rendy", "Xu Junjielong", "He Pinjia"],
//     conference: "",
//     tags: ["Large Language Models", "Automated Fault Localization", "Software Engineering"],
//     links: [{
//         type: "repo",
//         title: "Code",
//         url: "https://github.com/alfonsusrr/Heuristics-Based-LLM-FL"
//     }, {
//         type: "link",
//         title: "transform.com",
//         url: "https://google.com"
//     }, {
//         type: "video",
//         title: "ICE 2023",
//         url: "https://google.com"
//     }],
//     time: "July 2023"
// }]

const publications = [{
    title: "Heuristics-Based Induction of LLM for Automated Fault Localization",
    author: ["Alfonsus Rendy", "Xu Junjielong", "He Pinjia"],
    conference: "",
    tags: ["Large Language Models", "Automated Fault Localization", "Software Engineering"],
    links: [{
        type: "repo",
        title: "Code",
        url: "https://github.com/alfonsusrr/Heuristics-Based-LLM-FL"
    }, {
        type: "document",
        title: "PDF",
        url: "/publications/2024.InductFL.pdf"
    }], 
    time: "May 2024"
}, {
    title: "LoRA Augmented Generation (LAG): Memory-efficient LoRA-Boosted Mixture of Experts LLM",
    author: ["Alfonsus Rendy", "Nicholas Oh", "Zoe Emmanuel Halim", "Aaron"],
    conference: "",
    tags: ["Large Language Models", "Mixture-of-Experts", "Retrieval-Augmented Generation", "LoRa Fine-Tuning"],
    links: [{
        type: "document",
        title: "PDF",
        url: "/publications/2024.LAG.pdf"
    }],
    time: "August 2024"
}, {
    title: "Kanna: Reviving Fictional Characters in LLM through LoRa-Based Personality Integration and Personalized Knowledge Retrieval Augmented Generation",
    author: ["Alfonsus Rendy", "Nicholas Sidharta"],
    conference: "",
    tags: ["Large Language Models", "Role-Playing Agent", "Character LLM", "Retrieval-Augmented Generation", "LoRa Fine-Tuning"],
    links: [{
        type: "document",
        title: "PDF",
        url: "/publications/2024.KANNA.pdf"
    }],
    time: "December 2024"
}]

export default function Publications () {
    return (
        <div className="mt-12" id="publications">
            <div className="max-w-max ml-auto mr-auto">
                <SectionBar heading="Publications"></SectionBar>
            </div>
            <div className="mt-6 flex flex-wrap mx-0 lg:mx-12 xl:mx-32">
                <div className="w-0 xl:w-1/3 2xl:w-1/2 hidden xl:block">
                    <div className="2xl:mr-auto 2xl:ml-auto max-w-[50%]">
                        <div className="text-dark-txt-2 text-4xl font-bold mt-[75px] 2xl:mt-[150px]">
                            I will be publishing
                            <span className="px-1 bg-gradient-to-r from-dark-grad-2 to-dark-grad-3 bg-no-repeat"
                                  style={{
                                    backgroundSize: "90% 10px",
                                    backgroundPosition: "bottom left",
                                  }}>
                                paper
                            </span> soon...
                        </div>
                    </div>
                </div>
                <div className="px-12 md:px-24 lg:px-4 w-full xl:w-2/3 2xl:w-1/2 xl:overflow-y-scroll xl:max-h-[450px]">
                    {publications ? publications.map((pub, i) => {
                        return (
                            <PubCard key={`pub-${i}`} {...pub}/>
                        )
                    }) : 
                    <div className="text-dark-txt-3 my-4 italic text-lg text-center">
                        No entry yet
                    </div>}
                </div>
            </div>
        </div>
    )
}