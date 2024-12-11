import PostCard from "@/components/PostCard";
import SectionBar from "@/components/SectionBar";

// const posts = [{
//     thumbnail: "https://miro.medium.com/v2/resize:fit:1400/0*rmrxCqjZqF_SxwPL.jpg",
//     title: "Transformers: A Crash Course on The Latest Natural Language Processing Model",
//     link: "https://google.com"
// }, {
//     thumbnail: "https://history-computer.com/wp-content/uploads/2023/01/shutterstock_2093652733-scaled.jpg",
//     title: "Multidimension Visualization Using Principle Component Analysis",
//     link: "https://google.com"
// }]

const posts : any[] = []

const highlights = [{
    time: "2024.09.08",
    text: "I will be serving as a Undergraduate Students Teaching Fellow for CSC1001: Introduction to Programming in CUHK-SZ"
}, {
    time: "2024.05.10",
    text: "Finished my capstone project on Heuristics-Based Induction of LLM for Automated Fault Localization. Selected as top 7 projects and presented in the university's capstone showcase"
}, {
    time: "2024.01.14",
    text: "I will be serving as an Undergraduate Students Teaching Fellow for CSC3002: C/C++ Programming in CUHK-SZ"
}, {
    time: "2024.01.10",
    text: "Hello World! My personal website is officially launched"
}]

export default function Featured() {
    return (
        <div className="flex flex-wrap w-full mt-10">
            <div id="featured_post" className="mb-10 lg:mb-0 w-full px-10 lg:w-3/5 lg:px-0">
                <div className="max-w-max ml-auto mr-auto mb-6">
                    <SectionBar heading="Featured Posts"></SectionBar>
                </div>
                <div className="flex flex-wrap justify-center self-stretch">
                    {posts.length > 0 ? posts.map((post, i) => {
                        return (
                            <PostCard key={"post-" + i} thumbnail={post.thumbnail} link={post.link} title={post.title} />
                        )
                    }) : 
                    <div className="text-dark-txt-3 my-4 italic text-lg text-center">
                        No post yet
                    </div>
                    }
                </div>
            </div>
            <div id="highlights" className="w-full px-10 lg:w-2/5 lg:px-4">
                <div className="max-w-max ml-auto mr-auto mb-6">
                    <SectionBar heading="Highlights"></SectionBar>
                </div>
                <div className="p-3 h-80 w-full border-dark-txt-1 border rounded-2xl overflow-y-scroll">
                    {
                        highlights.map((h, i) => {
                            return (
                                <div key={"h-" + i} className="flex text-md py-1 px-2 rounded-lg hover:bg-dark-grad-2 hover:bg-opacity-20">
                                    <div className="w-1/3 font-bold text-dark-txt-1">{h.time}</div>
                                    <div className="w-2/3 font-light text-dark-txt-2">{h.text}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}