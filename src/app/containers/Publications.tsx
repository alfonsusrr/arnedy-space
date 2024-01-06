import ProjectCard from "@/components/ProjectCard";
import PubCard from "@/components/PubCard";
import SectionBar from "@/components/SectionBar";

const publications = [{
    title: "Transformers: A Crash Course on The Latest Natural Language Processing Model",
    author: ["Alfonsus Rendy", "Nicholas A", "James R.", "Timothy R."],
    conference: "",
    tags: ["Deep Learning", "Large Language Model"],
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
    time: "July 2023"
}, {
    title: "Transformers: A Crash Course on The Latest Natural Language Processing Model",
    author: ["Alfonsus Rendy", "Nicholas A", "James R.", "Timothy R."],
    conference: "ICSE'24: IEEE/ACM International Conference on Software Engineering",
    tags: ["Deep Learning", "Large Language Model"],
    links: [],
    time: "June 2023"
}, {
    title: "Transformers: A Crash Course on The Latest Natural Language Processing Model",
    author: ["Alfonsus Rendy", "Nicholas A", "James R.", "Timothy R."],
    conference: "ICSE'24: IEEE/ACM International Conference on Software Engineering",
    tags: ["Deep Learning", "Large Language Model"],
    links: [],
    time: "June 2023"
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