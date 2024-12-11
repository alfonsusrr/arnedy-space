interface SkillCardProps {
    icon: string,
    title: string,
    content: string
}

export default function SkillCard(props: SkillCardProps) {
    const {icon, title, content} = props
    return (
        <div className="lg:flex-grow-0 m-3 border-dark-3 border rounded-2xl p-8 w-[380px] min-h-full lg:h-60 select-none hover:bg-gradient-to-br hover:from-dark-grad-4/40 hover:to-dark-1 hover:transition-all">
            <div className="flex">
                <div className="w-32">
                    <div className="p-4 mr-6 w-16 h-16 bg-gradient-to-r from-dark-grad-4 to-dark-grad-5 rounded-xl">
                        <i className={"text-3xl font-bold bi "+ icon}/>
                    </div>
                </div>
                <div>
                    <div className="mb-2 text-2xl text-dark-txt-1 font-bold">{title}</div>
                    <div className="text-md md:text-sm text-dark-txt-2 font-light">{content}</div>
                </div>
            </div>
        </div>
    )
}