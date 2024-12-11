import LinkDisplay, { ILink } from "./LinkDisplay"
import TagCard from "./TagCard"

interface PubCardProps {
    title: string,
    author: Array<string>
    tags: Array<string>
    conference: string
    links: Array<ILink>
    time: string
}

export default function PubCard(props : PubCardProps) {
    const { title, author, tags, conference, links, time } = props
    return (
        <div className="p-5 my-3 border border-dark-grad-1 rounded-xl w-full select-none hover:bg-dark-3 hover:bg-opacity-10 transition-all">
            <div className="text-right text-dark-txt-3 font-medium text-lg">{time}</div>
            <div className="text-dark-txt-2 font-bold text-xl select-all">{title}</div>
            <div>
                {author.map((author_, i) => {
                    return (
                        <span key={title + "-author-" + i} className="pr-2 text-dark-txt-3 font-light"> 
                            {author_} · 
                        </span>
                    )
                })}
            </div>
            <div className="pt-2 text-dark-txt-1 font-medium italic">{conference}</div>
            <div className="flex flex-wrap">
                {tags.map((tag, i) => {
                    return (
                        <TagCard tag={tag} border={true} />
                    )
                })}
            </div>
            <div className="flex flex-wrap mt-3">
                {links && links.map((link, i) => {
                    return (
                        <LinkDisplay key={link.title + "-" + i} {...link}></LinkDisplay>
                    )
                })}
            </div>
        </div>
    )
}