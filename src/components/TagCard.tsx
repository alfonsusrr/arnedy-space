interface TagCardProps {
    tag: string
    border: boolean
}

export default function TagCard(props : TagCardProps) {
    const { tag, border } = props
    const borderType = border ? " border border-dark-comp-1" : ""
    return (
        <div className={"text-dark-comp-1 bg-dark-comp-1/20 rounded-full px-4 py-2 mr-1 mt-2 max-w-max" + borderType}>
            {tag}
        </div>
    )
}