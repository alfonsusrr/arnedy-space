import ProjectCard from "@/components/ProjectCard";
import SectionBar from "@/components/SectionBar";

const projects = [{
    tags: ["Computer Architecture", "MIPS"],
    title: "MIPS Processor Assembler Design and Simulation in C++",
    links: [{
        type: "repo",
        title: "Code",
        url: "https://google.com"
    }, {
        type: "document",
        title: "Report",
        url: "https://google.com"
    }],
    time: "2023",
    thumb: "/cover/cover1.jpg"
}, {
    tags: ["Image Processing", "Numerical Methods"],
    title: "Image Deblurring and Video Feature Extraction",
    links: [{
        type: "repo",
        title: "Code",
        url: "https://drive.google.com/drive/folders/13IjlS09ksMel08Ceq-nQejAfyP_JFggu?usp=sharing"
    }, {
        type: "document",
        title: "Report",
        url: "/report/2023.Deblurring and Video Extraction.pdf"
    }],
    time: "2023",
    thumb: "/cover/cover2.jpg"
}, {
    tags: ["Web3", "DeFi", "Blockchain", "Solidity"],
    title: "ChainRights: Decentralized Game Marketplace",
    links: [{
        type: "repo",
        title: "Code",
        url: "https://github.com/Juanalbertw/ChainRights"
    }, {
        type: "document",
        title: "Whitepaper",
        url: "/report/2023.ChainRights.pdf"
    }],
    time: "2023",
    thumb: "/cover/cover3.jpg"
}, {
    tags: ["Machine Learning", "Neural Network", "SVM", "K-Means", "PCA", "EM Clustering"],
    title: "Supervised and Unsupervised Learning Library in Python",
    links: [{
        type: "repo",
        title: "Code",
        url: "https://google.com"
    }],
    time: "2023",
    thumb: "/cover/cover4.jpg"
}, {
    tags: ["Algorithm Design", "Greedy Heuristics", "TSP"],
    title: "Heuristics-Based Party Together Problem Solver",
    links: [{
        type: "repo",
        title: "Code",
        url: "https://github.com/Nitrous-Developments/daa-project"
    }, {
        type: "document",
        title: "Report",
        url: "/report/2024.PTP_Solver.pdf"
    }],
    time: "2024",
    thumb: "/cover/cover5.jpg"
}, {
    tags: ["Software Engineering", "Testing", "Programming Languages"],
    title: "PIG Language Interpreter Design, Implementation, Testing, and Dataflow Analysis",
    links: [{
        type: "repo",
        title: "Code",
        url: "https://google.com"
    }, {
        type: "document",
        title: "Report",
        url: "/report/2024.PIG.pdf"
    }],
    time: "2024",
    thumb: "/cover/cover6.jpg"
}, {
    tags: ["Automated Tutoring System", "LLM", "Speech Processing"],
    title: "Agentic AI-Driven Multimodal Personalized Tutoring with Dynamic Knowledge Retrieval",
    links: [{
        type: "repo",
        title: "Code",
        url: "https://google.com"
    }, {
        type: "document",
        title: "Report",
        url: "/publications/2024.IntelliTutor.pdf"
    }],
    time: "2024",
    thumb: "/cover/cover7.jpg"
}, {
    tags: ["GPU Programming", "Computer Vision", "Neural Network"],
    title: "Parallel Multi-Layer Perceptron Training for MNIST Image Classification",
    links: [{
        type: "repo",
        title: "Code",
        url: "https://google.com"
    }, {
        type: "document",
        title: "Report",
        url: "https://google.com"
    }],
    time: "2024",
    thumb: "/cover/cover8.jpg"
}, {
    tags: ["Reinforcement Learning", "RL", "Transformer"],
    title: "Transformer for Trajectory Optimization - RL as A Sequence Modelling Problem_Review",
    links: [{
        type: "document",
        title: "Paper",
        url: "/publications/2024.Transformer-RL.pdf"
    }],
    time: "2024",
    thumb: "/cover/cover9.jpg"
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