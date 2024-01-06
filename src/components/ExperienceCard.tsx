import TagCard from "./TagCard"

interface ExperienceCardProps {
    time: string
    name: string
    role: Array<string>
    desc: string
    tag: Array<string>
    logo: string
}

export default function ExperienceCard (props: ExperienceCardProps) {
    const { time, name, role, desc, tag, logo } = props
    return (
        <div className="flex my-2 pt-3 pb-8 rounded-md hover:bg-dark-txt-1/5 px-3 select-none flex-wrap md:flex-nowrap">
            <div className="flex-grow min-w-min w-56 text-dark-txt-1 font-medium text-lg">{time}</div>
            <div className="sm:max-w-[calc(100%-250px)]">
                <div className="text-xl font-bold">{name}</div>
                <div className="text-dark-txt-3">{
                    role.map((r, i) => {
                        return (
                            <span key={name + "-role-" + i} className="mr-2">
                                {r}
                            </span>
                        )
                    })
                }</div>
                <div className="mt-2 text-dark-txt-1 font-light">{desc}</div>
                <div className="flex flex-wrap mt-2">
                    {tag.map((t, i) => {
                        return (
                            <div key={name + "-tag-" + i}>
                                <TagCard tag={t} border={false}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}