interface SectionProps {
    heading: string
}

export default function SectionBar(props : SectionProps) {
    return (
        <div className="px-8 py-2 m-2 border-dark-txt-2 border rounded-2xl text-xl font-medium text-dark-txt-2 
                        bg-gradient-to-r from-dark-grad-1/50 to-dark-grad-3/40 select-none ">
            {props.heading}
        </div>
    )
}