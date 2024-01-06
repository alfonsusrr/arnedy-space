import LinkDisplay, { ILink } from "./LinkDisplay"
import TagCard from "./TagCard"


interface ProjectCardProps {
    tags: Array<string>,
    thumb: string,
    title: string, 
    links: Array<ILink>,
    time: string,
}

export default function ProjectCard(props: ProjectCardProps) {
    const {tags, title, links, time, thumb} = props
    return (
        <div className={"relative flex-grow md:flex-grow-0 mt-5 mx-5 md:ml-0 md:mr-3 w-[400px] border-dark-grad-1 border rounded-xl  select-none cursor-pointer hover:bg-dark-3 hover:bg-opacity-10 transition-all"}>
            <div className="bg-top h-[200px] bg-cover bg-no-repeat rounded-t-xl bg-center" style={{backgroundImage: `url(${thumb})`}}/>
            <div className="p-4">
                <div className="flex flex-wrap">
                    {tags.map((t, i) => {
                        return (
                            <div key={title + "-tag-" + i}>
                                <TagCard tag={t} border={true}></TagCard>
                            </div>
                        )
                    })}
                </div>
                <div className="my-3 text-dark-txt-2 text-lg font-medium">{title}</div>
                <div className="flex flex-wrap mb-10">
                    {links.map((link, i) => {
                        return (
                            <LinkDisplay key={link.title + "-" + i} {...link}></LinkDisplay>
                        )
                    })}
                </div>
                <div className="view-more-btn">
                    <div>LEARN MORE</div>
                    <i className="bi bi-arrow-up-right"></i>
                </div>
            </div>
        </div>
    )
}